import React from "react";
import "./App.css";
import { Routes } from "./Router";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./useStyle";
import AuthenticatedApp from "./AuthenticatedApp";
import AuthExample from "./examples/LoginExperiment/LoginExperiment1";

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <CssBaseline />
      <div className={classes.root}>
        <Routes />
        {/* <AuthenticatedApp /> */}
        {/* <AuthExample /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
