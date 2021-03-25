import React from "react";
import { Switch } from "antd";

export const Toggle = () => {
  return (
    <>
      <Switch
        defaultChecked
        size="small"
        onClick={() => console.log("gooo")}
      />
    </>
  );
};
