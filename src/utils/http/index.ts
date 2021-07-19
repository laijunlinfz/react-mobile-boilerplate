import axios, { Method } from 'axios';
import { Options } from '@/types/http';

const BASE_URL = '/api';

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 3000  
});

service.interceptors.request.use(
  config => {
    console.log('axios request config : ', config);
    return config;
  },
  error => {
    console.error('axios request error : ', error);
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    console.log('#### axios request response : ', response);
    const { status, data, statusText } = response;
    // 成功则返回数据，错误则统一处理
    if (status === 200) {
      return data;
    }
    console.log('##### statusText ', statusText);
    // Toast.info(statusText);
  },
  error => {
    console.error('#### axios response error : ', error);
    // 统一处理错误
    Promise.reject(error);
  }
);

const request = (options: Partial<Options>): Promise<any> => {
  const defaultUserOpt = {
    loading: true, // 是否展示 loading
    handleMsg: true, // 处理错误消息
    handleLogout: true, // 处理未登录
  };
  const { userOpt = {}, method = 'POST' } = options || {};
  const curUserOpt = Object.assign(defaultUserOpt, userOpt);
  const curOpts = Object.assign({ method: method as Method, userOpt: curUserOpt }, options);
  return service(curOpts);
};

export default request;
