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
