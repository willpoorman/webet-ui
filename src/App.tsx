import React from "react";
import "./App.css";
import { Routes } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SideMenu from "./components/SideMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

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
