import React from "react";
import { Toggle, Links } from "../../atoms";
import { Navbar, RouteLinks, ToggleTheme } from "../index";
import styled from "styled-components";

const BodyWrap = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

type Props = {
  changeTheme: () => void;
};

export const PageTemplate: React.FC<Props> = ({
  children,
  changeTheme,
}) => {
  return (
    <>
      <Navbar>
        <RouteLinks>
          <Links path="/">Live</Links>
          <Links path="/teams">Teams</Links>
        </RouteLinks>
        <ToggleTheme>
          <Toggle changeTheme={changeTheme} />
        </ToggleTheme>
      </Navbar>
      <BodyWrap>{children}</BodyWrap>
    </>
  );
};
