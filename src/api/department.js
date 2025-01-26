import request from '@/utils/request'

/**
 *
 * 获取数据
 */
export function getDepartment() {
  return request({
    url: '/company/department'
  })
}

/**
 * 部门负责人
 */
export function getManageList() {
  return request({
    url: '/sys/user/simple'
  })
}

/**
 * 新增组织
 * ***/
export function addDepartment(data) {
  return request({
    method: 'post',
    url: '/company/department',
    data
  })
}

export function getDepartmentDetail(id) {
  return request({
    url: `/company/department/${id}`,
    mothod: 'put'
  })
}

/**
 * 改
 *
 */
export function updateDepartment(data) {
  return request({
    method: 'put',
    url: `/company/department/${data.id}`,
    data
  })
}

/**
 *
 * 删除
 */
export function delDepartment(id) {
  return request({
    method: 'delete',
    url: `/company/department/${id}`
  })
}
