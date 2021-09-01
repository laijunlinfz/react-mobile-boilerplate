/**
 * test page
 */

import React, { useCallback, useState } from "react";
import { Button } from "antd-mobile";
import "./index.less";

const HookTest = () => {
  const [name, setName] = useState<string>('');

  const handleClicked = useCallback(() => {
    setName((name: string): string => name + 'a');
    setName((name: string): string => name + 'b');
    setName((name: string): string => name + 'c');
  }, []);

  return (
    <div className="hook-test-container">
      this is hook test page {name}
      <Button type="submit" onClick={handleClicked} >primary</Button>
    </div>
  );
};

export default HookTest;
