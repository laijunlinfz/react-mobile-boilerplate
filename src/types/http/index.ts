
interface UserOpt {
  loading: boolean, // 是否展示 loading
  handleMsg: boolean, // 处理错误消息
  handleLogout: boolean, // 处理未登录
}

interface Params {
  [key:string]: any
}

export interface Options {
  url: string;
  data: Params;
  // method: 'GET' | 'POST' | 'get' | 'post';
  method: string;
  userOpt: Partial<UserOpt>;
}