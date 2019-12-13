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

export const indexRoom = () => api.request({
  method: "GET",
  url: "v1/room"
})

export const createRoomSchedule = ({ room_id, date }) => api.request({
  method: "POST",
  url: "v1/room/schedule",
  data: { room_id, date }
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

export const createReport = ({ name, type_report, text }) => api.request({
  method: "POST",
  url: "v1/report",
  data: { name, type_report, text }
})

export const indexReport = () => api.request({
  method: "GET",
  url: "v1/report"
})
