import request from '@/utils/request'

// 查询医院视频相关设置列表
export function listHpsetting(query) {
  return request({
    url: '/admin/hpsetting/list',
    method: 'get',
    params: query
  })
}

// 查询医院视频相关设置详细
export function getHpsetting(id) {
  return request({
    url: '/admin/hpsetting/' + id,
    method: 'get'
  })
}

// 新增医院视频相关设置
export function addHpsetting(data) {
  return request({
    url: '/admin/hpsetting',
    method: 'post',
    data: data
  })
}

// 修改医院视频相关设置
export function updateHpsetting(data) {
  return request({
    url: '/admin/hpsetting',
    method: 'put',
    data: data
  })
}

// 删除医院视频相关设置
export function delHpsetting(id) {
  return request({
    url: '/admin/hpsetting/' + id,
    method: 'delete'
  })
}
