/**
 * home page
 */

import { useEffect } from "react";
import { useSelector } from 'react-redux';
import * as homeActions from '@/store/action/home';
import { RootState } from '@/store/reducer';
import useActions from '@/hooks/useActions';
import { HomeState } from '@/types/home';

const Home = () => {
  const homeState: HomeState = useSelector((state: RootState) => state.homeReducer);
  console.log('##### homeState ', homeState);
  const { planNo } = homeState || {};
  const { getHomeData } = useActions(homeActions);
  useEffect(() => {
    getHomeData();
  }, [getHomeData]);

  return <div>this is home page {planNo}</div>;
};

export default Home;
