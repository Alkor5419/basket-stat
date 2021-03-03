import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {
  LiveMatches,
  Teams,
} from "./features/statistics/pages";

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
