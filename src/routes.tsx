import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { LiveMatches } from "./features/live/pages";
import { Teams } from "./features/teams/pages/teams/teams";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <LiveMatches />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
