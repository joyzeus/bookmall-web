import request from '@/utils/request'

export function getTopSystem () {
  return request({
    url: '/user/permission/topSystem',
    method: 'get'
  })
}

export function getInfo () {
  return request({
    url: '/admin/info',
    method: 'get'
  })
}
