import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const HOST = 'https://apidev.kanvas.dev/v1';

async function getUserToken() {
  return await AsyncStorage.getItem('token');
}

export default async function request(url, config = {}, method = 'GET') {
  const token = (await getUserToken()) || '';
  const { headers = {} } = config;
  
  return axios({
    method,
    baseURL: HOST,
    url,
    ...config,
    headers: {
      ...(token ? { Authorization: token } : {}),
      ...headers
    }
  })
    .then(result => {
      if (!result) throw new Error('NO_RESPONSE');
      return result.data;
    })
    .catch(e => {
      if (!e.response) throw new Error('NO_RESPONSE_FROM_SERVER');
      
      const { message } = e.response.data.errors;
      console.log(message)
      const { status } = e.response;
      if (status === 500) throw new Error('INTERNAL_SERVER_ERROR');
      throw new Error(message);
    });
}
