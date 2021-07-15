/**
 * home page
 */

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log('home useEffect');
  }, []);

  return <div>this is home page</div>;
};

export default Home;
