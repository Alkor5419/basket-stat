import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { CalendarPage } from "./features/calendar/pages/calendar";
import { LiveMatches } from "./features/live/pages";
import { Teams } from "./features/teams/pages/teams/teams";
import { PageTemplate } from "./shared/templates";

type Props = {
  changeTheme: () => void;
};
export const Routes: React.FC<Props> = ({
  changeTheme,
}) => {
  return (
    <BrowserRouter>
      <Switch>
        <PageTemplate changeTheme={changeTheme}>
          <Route path="/" exact>
            <LiveMatches />
          </Route>
          <Route path="/calendar">
            <CalendarPage />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
        </PageTemplate>
      </Switch>
    </BrowserRouter>
  );
};
