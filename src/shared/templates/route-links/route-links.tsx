import React from "react";
import styled from "styled-components";

const RouteLink = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const RouteLinks: React.FC = ({ children }) => {
  return <RouteLink>{children}</RouteLink>;
};
