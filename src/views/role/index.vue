<template>
  <div class="container">
    <div class="app-container">
      <!-- 角色管理 -->
      <div class="role-operate">
        <el-button size="mini" type="primary">添加角色</el-button>
      </div>
      <el-table :data="list">
        <!-- 放置列 -->
        <el-table-column prop="name" align="center" width="200px" label="角色" />
        <el-table-column prop="state" align="center" width="200px" label="启用">
          <!-- 自定义列结构 -->
          <!-- 放一个作用域插槽 -->
          <template v-slot="{ row }">
            <span>  {{ row.state === 1 ? "已启用" : row.state === 0 ? "未启用" : "无" }} </span>
          </template>
        </el-table-column>
        <el-table-column prop="description" align="center" label="描述" />
        <el-table-column align="center" label="操作">
          <template>
            <el-button size="mini" type="text">分配权限</el-button>
            <el-button size="mini" type="text">编辑</el-button>
            <el-button size="mini" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 放置分页组件 -->
      <el-row type="flex" align="middle" style="height: 60px;" justify="end">
        <el-pagination
          :page-size="pageParams.pagesize"
          :current-page="pageParams.page"
          :total="pageParams.total"
          layout="prev, pager, next"
          @current-change="changePage"
        />
      </el-row>
    </div>
  </div>
</template>
<script>
import { getRoleList } from '@/api/role'
export default {
  name: 'Role',
  data() {
    return {
      list: [],
      pageParams: {
        page: 1, // 页数
        pagesize: 5, // 每页几条
        total: 0
      }
    }
  },
  created() {
    this.getRoleList()
  },
  methods: {
    async getRoleList() {
      const { rows, total } = await getRoleList(this.pageParams)
      this.list = rows
      this.pageParams.total = total
    },
    // 切换分页，请求新的数据
    changePage(newPage) {
      this.pageParams.page = newPage
      this.getRoleList()
    }
  }
}
</script>

<style scoped>
.role-operate{
padding: 10px;
}
</style>
