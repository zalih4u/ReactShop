import {api,catcher} from 'Api'
import server from 'server'
export async function login(payload) {
    let mApi = await api()
    let path =  server.routes.auth
    return mApi.post(path,payload)
    .then((res)=> res.data)
    .catch(catcher)
  }