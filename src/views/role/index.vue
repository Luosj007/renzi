<template>
  <div class="container">
    <div class="app-container">
      <!-- 角色管理 -->
      <div class="role-operate">
        <el-button size="mini" type="primary">添加角色</el-button>
      </div>
      <el-table :data="list">
        <!-- 放置列 -->
        <el-table-column prop="name" width="200px" align="center" label="角色" />
        <el-table-column prop="state" width="200px" align="center" label="启用" />
        <el-table-column prop="description" align="center" label="描述" />
        <el-table-column align="center" label="操作" />
      </el-table>
      <!-- 放置分页组件 -->
      <el-row type="flex" align="middle" style="height: 60px;" justify="end">
        <el-pagination
          layout="prev, pager, next"
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
      list: []
    }
  },
  created() {
    this.getRoleList()
  },
  methods: {
    async getRoleList() {
      const { rows } = await getRoleList()
      this.list = rows
    }
  }
}
</script>

<style scoped>
.role-operate{
padding: 10px;
}
</style>
