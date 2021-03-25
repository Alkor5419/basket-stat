import React from "react";
import styled from "styled-components";

const NavWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7a0875;
  padding: 0 1.5em;
`;

export const Navbar: React.FC = ({ children }) => {
  return <NavWrap>{children}</NavWrap>;
};
