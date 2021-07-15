/**
 * login page
 */

 import { useEffect } from "react";

 const Login = () => {
   useEffect(() => {
     console.log('login useEffect');
   }, []);
 
   return <div>this is login page</div>;
 };
 
 export default Login;
 