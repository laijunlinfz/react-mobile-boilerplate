import { Dispatch } from 'redux';
import request from '@/utils/http';
import { GET_HOME_DATA } from '@/store/actionTypes';
import { AppThunk } from '../reducer';

// 获取首页信息
export const getHomeData = (): AppThunk => async (
  dispatch: Dispatch
): Promise<void> => {
  const url = '/tag/list';
  const data = {};
  const method = 'post';
  const params = { url, method, data };
  const result = await request(params);
  const { code } = result || {};
  if (code === 0) {
    const payload = { planNo: '123' };
    dispatch({ type: GET_HOME_DATA, payload });
  }
};
