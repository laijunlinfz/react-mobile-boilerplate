/**
 * test page
 */

import React from "react";
import { Button, Toast } from "antd-mobile";
import { identity, identity2, loggingIdentity } from "@/utils/index";
import "./index.less";

const Test = () => {
  // 测试 啦啦啦
  const res = identity<string>("abc");
  const res2 = identity2<string>("abc");
  const res3 = loggingIdentity<number>([1, 2]);
  console.log("test res : ", res, res2, res3);

  const toast = () => {
    Toast.info('ttttt');
  };
  return (
    <div className="test-container">
      this is test page
      <Button type="primary" onClick={toast} >primary</Button>
    </div>
  );
};

export default Test;
