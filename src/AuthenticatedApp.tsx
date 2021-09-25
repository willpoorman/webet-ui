import React from "react";
import "./App.css";
import { AuthenticatedRoutes } from "./Router";
import SideMenu from "./components/SideMenu";
import { useStyles } from "./useStyle";

function AuthenticatedApp() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <main className={classes.content}>
        <AuthenticatedRoutes />
      </main>
    </>
  );
}

export default AuthenticatedApp;
