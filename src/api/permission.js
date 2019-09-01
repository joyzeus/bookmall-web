import request from '@/utils/request'

export function getMenuTree (parentId) {
  return request({
    url: '/sys/menu/menuTree/' + parentId,
    method: 'get'
  })
}
