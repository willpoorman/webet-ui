import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { EventList } from "./pages/EventsList";
import { Home } from "./pages/Home";
import { DataGridExample } from "./examples/DataGridExample/DataGridExample";
import { EventDetails } from "./pages/EventDetails";
import { Login } from "./pages/Login";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export const AuthenticatedRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/events">
        <EventList />
      </Route>
      <Route exact path="/event/:id">
        <EventDetails />
      </Route>
      <Route exact path="/examples">
        <Redirect to="/examples/data-grid" />
      </Route>
      <Route exact path="/examples/data-grid">
        <DataGridExample />
      </Route>
    </Switch>
  );
};
