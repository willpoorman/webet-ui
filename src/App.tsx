import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SideMenu from "./components/SideMenu";
import { Routes } from "./Router";
import { Root, classes } from "./styles";

function App() {
  return (
    <Root>
      <BrowserRouter>
        <div className={classes.root}>
          <SideMenu />
          <main className={classes.content}>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    </Root>
  );
}

export default App;
