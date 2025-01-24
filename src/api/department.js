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
