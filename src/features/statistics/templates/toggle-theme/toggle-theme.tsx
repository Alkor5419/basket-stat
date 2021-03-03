import React from "react";
import styled from "styled-components";

const ToggleThemeWrap = styled.div``;
export const ToggleTheme: React.FC = ({ children }) => {
  return <ToggleThemeWrap>{children}</ToggleThemeWrap>;
};
