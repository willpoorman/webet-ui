import React from "react";
import "./App.css";
import { Routes } from "./Router";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import SideMenu from "./components/SideMenu";
import { useStyles } from "./useStyle";

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <CssBaseline />
      <div className={classes.root}>
        <SideMenu />
        <main className={classes.content}>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
