import request from '@/utils/request'

// 查询视频回放列表
export function listVideo(query) {
  return request({
    url: '/admin/video/list',
    method: 'get',
    params: query
  })
}

// 查询视频回放详细
export function getVideo(id) {
  return request({
    url: '/admin/video/' + id,
    method: 'get'
  })
}

// 新增视频回放
export function addVideo(data) {
  return request({
    url: '/admin/video',
    method: 'post',
    data: data
  })
}

// 修改视频回放
export function updateVideo(data) {
  return request({
    url: '/admin/video',
    method: 'put',
    data: data
  })
}

// 删除视频回放
export function delVideo(id) {
  return request({
    url: '/admin/video/' + id,
    method: 'delete'
  })
}
