import axios from 'axios';

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/
const api = axios.create({
  baseURL: 'http://localhost:3333/',
});
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
    headers.Accept = "application/json";
  }

  return { ...config, headers };
});
export default api;
