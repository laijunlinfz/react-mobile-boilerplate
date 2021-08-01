/**
 * 404 page
 */

import historyUtils from '@/utils/history';
import Img404 from '@/images/404/404.svg';
import './index.less';

 const Index = () => {
   return <div className="page-404-container">
     <img onClick={() => historyUtils.goBack()} alt='404' src={Img404} />
   </div>;
 };
 
 export default Index;
 