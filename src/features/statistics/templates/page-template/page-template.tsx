import React from "react";
import { Links } from "../../atoms";
import {
  Navbar,
  RouteLinks,
  ToggleTheme,
} from "../../templates";

export const PageTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Navbar>
        <RouteLinks>
          <Links path="/">Live</Links>
          <Links path="/teams">Teams</Links>
        </RouteLinks>
        <ToggleTheme>
          <h2>hello</h2>
        </ToggleTheme>
      </Navbar>
      {/* Шаблон body */}
      {children}
    </>
  );
};
