
import AsyncStorage from '@react-native-community/async-storage';
import request from './request'

const HOST = 'https://apidev.kanvas.dev/v1'

function authenticate(user){
  return request(`${HOST}/auth`, {data: user}, 'POST')
}

function getAllUsers(){
  return request(`${HOST}/users`, {}, 'GET')
}
function register(user){
  return request(`${HOST}/users`, {data: user}, 'POST')
}


export default {
  authenticate,
  getAllUsers,
  register
}