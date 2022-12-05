import request from '@/utils/request'

// 查询手术室设置记录列表
export function listOpsetting(query) {
  return request({
    url: '/admin/opsetting/list',
    method: 'get',
    params: query
  })
}

// 查询手术室设置记录详细
export function getOpsetting(id) {
  return request({
    url: '/admin/opsetting/' + id,
    method: 'get'
  })
}

// 新增手术室设置记录
export function addOpsetting(data) {
  return request({
    url: '/admin/opsetting',
    method: 'post',
    data: data
  })
}

// 修改手术室设置记录
export function updateOpsetting(data) {
  return request({
    url: '/admin/opsetting',
    method: 'put',
    data: data
  })
}

// 删除手术室设置记录
export function delOpsetting(id) {
  return request({
    url: '/admin/opsetting/' + id,
    method: 'delete'
  })
}
