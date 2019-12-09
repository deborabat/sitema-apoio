import api from '../axios'

export const auth = ({ email, password }) => api.request({
  method: "POST",
  url: "v1/sessions",
  data: { email, password }
})

export const createRoom = ({ title, department, block }) => api.request({
  method: "POST",
  url: "v1/room",
  data: { title, department, block }
})

export const createUser = ({ name, email, password, type }) => api.request({
  method: "POST",
  url: "v1/users",
  data: { username: name, email, password, type_user: type }
})

export const indexUser = () => api.request({
  method: "GET",
  url: "v1/users"
})
