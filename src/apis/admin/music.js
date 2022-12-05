import request from '@/utils/request'

// 查询音乐文件列表
export function listMusic(query) {
  return request({
    url: '/admin/music/list',
    method: 'get',
    params: query
  })
}

// 查询音乐文件详细
export function getMusic(id) {
  return request({
    url: '/admin/music/' + id,
    method: 'get'
  })
}

// 新增音乐文件
export function addMusic(data) {
  return request({
    url: '/admin/music',
    method: 'post',
    data: data
  })
}

// 修改音乐文件
export function updateMusic(data) {
  return request({
    url: '/admin/music',
    method: 'put',
    data: data
  })
}

// 删除音乐文件
export function delMusic(id) {
  return request({
    url: '/admin/music/' + id,
    method: 'delete'
  })
}
