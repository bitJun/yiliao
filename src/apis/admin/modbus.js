import request from '@/utils/request'

// 查询通讯方式管理记录列表
export function listModbus(query) {
  return request({
    url: '/admin/modbus/list',
    method: 'get',
    params: query
  })
}

// 查询通讯方式管理记录详细
export function getModbus(id) {
  return request({
    url: '/admin/modbus/' + id,
    method: 'get'
  })
}

// 新增通讯方式管理记录
export function addModbus(data) {
  return request({
    url: '/admin/modbus',
    method: 'post',
    data: data
  })
}

// 修改通讯方式管理记录
export function updateModbus(data) {
  return request({
    url: '/admin/modbus',
    method: 'put',
    data: data
  })
}

// 删除通讯方式管理记录
export function delModbus(id) {
  return request({
    url: '/admin/modbus/' + id,
    method: 'delete'
  })
}
