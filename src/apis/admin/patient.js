import request from '@/utils/request'

// 查询病人信息列表
export function listPatient(query) {
  return request({
    url: '/admin/patient/list',
    method: 'get',
    params: query
  })
}

// 查询病人信息详细
export function getPatient(id) {
  return request({
    url: '/admin/patient/' + id,
    method: 'get'
  })
}

// 新增病人信息
export function addPatient(data) {
  return request({
    url: '/admin/patient',
    method: 'post',
    data: data
  })
}

// 修改病人信息
export function updatePatient(data) {
  return request({
    url: '/admin/patient',
    method: 'put',
    data: data
  })
}

// 删除病人信息
export function delPatient(id) {
  return request({
    url: '/admin/patient/' + id,
    method: 'delete'
  })
}
