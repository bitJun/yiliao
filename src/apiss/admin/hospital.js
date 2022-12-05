import request from '@/utils/request'

// 查询医院网络配置列表
export function listHospital(query) {
  return request({
    url: '/admin/hospital/list',
    method: 'get',
    params: query
  })
}

// 查询医院网络配置详细
export function getHospital(id) {
  return request({
    url: '/admin/hospital/' + id,
    method: 'get'
  })
}

// 新增医院网络配置
export function addHospital(data) {
  return request({
    url: '/admin/hospital',
    method: 'post',
    data: data
  })
}

// 修改医院网络配置
export function updateHospital(data) {
  return request({
    url: '/admin/hospital',
    method: 'put',
    data: data
  })
}

// 删除医院网络配置
export function delHospital(id) {
  return request({
    url: '/admin/hospital/' + id,
    method: 'delete'
  })
}
