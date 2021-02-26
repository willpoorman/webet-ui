import { Button } from "@material-ui/core";
import logo from "../logo.svg";

export function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </header>
  );
}
