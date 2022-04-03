import request from '../../utils/http';
import { LoginModel } from './model/loginModel'

export function login(data: LoginModel){
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}