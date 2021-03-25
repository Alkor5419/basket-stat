import React from "react";
import { Toggle, Links } from "../../atoms";
import { Navbar, RouteLinks, ToggleTheme } from "../index";

export const PageTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Navbar>
        <RouteLinks>
          <Links path="/">Live</Links>
          <Links path="/teams">Teams</Links>
        </RouteLinks>
        <ToggleTheme>
          <Toggle />
        </ToggleTheme>
      </Navbar>
      {/* Шаблон body */}
      {children}
    </>
  );
};
