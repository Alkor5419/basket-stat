import React from "react";
import styled from "styled-components";

const NavWrap = styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  align-items: center;
`;
const RouteItems = styled.div``;
const ToggleThemeWrap = styled.div``;
export const Navbar: React.FC = ({ leftItems, toggleTheme }) => {
  return (
    <NavWrap>
      <RouteItems>{leftItems}</RouteItems>
      <ToggleThemeWrap>{toggleTheme}</ToggleThemeWrap>
    </NavWrap>
  );
};
