import React from "react";
import { Switch } from "antd";

type Props = {
  changeTheme: () => void;
};

export const Toggle: React.FC<Props> = ({
  changeTheme,
}) => {
  return (
    <>
      <Switch
        defaultChecked
        size="small"
        onClick={changeTheme}
      />
    </>
  );
};
