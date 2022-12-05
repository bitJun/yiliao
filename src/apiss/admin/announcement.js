import request from '@/utils/request'

// 查询手术室公告列表
export function listAnnouncement(query) {
  return request({
    url: '/admin/announcement/list',
    method: 'get',
    params: query
  })
}

// 查询手术室公告详细
export function getAnnouncement(id) {
  return request({
    url: '/admin/announcement/' + id,
    method: 'get'
  })
}

// 新增手术室公告
export function addAnnouncement(data) {
  return request({
    url: '/admin/announcement',
    method: 'post',
    data: data
  })
}

// 修改手术室公告
export function updateAnnouncement(data) {
  return request({
    url: '/admin/announcement',
    method: 'put',
    data: data
  })
}

// 删除手术室公告
export function delAnnouncement(id) {
  return request({
    url: '/admin/announcement/' + id,
    method: 'delete'
  })
}
