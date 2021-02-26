import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
