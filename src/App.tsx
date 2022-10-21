import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SideMenu from "./components/SideMenu";
import { Routes } from "./Router";
import { useStyles } from "./useStyle";
import { ThemeProvider, createMuiTheme } from "@mui/material/styles";

const theme = createMuiTheme();

function Layout() {
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
