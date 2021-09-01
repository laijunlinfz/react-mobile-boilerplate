/**
 * login page
 */

import { useEffect } from "react";
import { Button } from "antd-mobile";
import { useHistory } from "react-router";
import historyUtils from '@/utils/history';

const Login = () => {
  useEffect(() => {
    console.log('login useEffect');
  }, []);

  const history = useHistory();

  const toHome = () => {
    historyUtils.push('/resume');
  };
  return <div>
    this is login page
    <Button color="primary" onClick={toHome} >HOME</Button>
  </div>;
};

export default Login;
