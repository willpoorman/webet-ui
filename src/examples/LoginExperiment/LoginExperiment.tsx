import * as React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory,
  RouteProps,
} from "react-router-dom";
import { FunctionComponent } from "react";

// https://ui.dev/react-router-v5-protected-routes-authentication/

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: Function) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: Function) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  },
};

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

interface RedirectFromLoginLocation {
  from: string;
}

function Login() {
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const { state } = useLocation<RedirectFromLoginLocation>();

  const login = () =>
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

interface PrivateRouteProps {
  path: RouteProps["path"];
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return fakeAuth.isAuthenticated === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

function AuthButton() {
  const history = useHistory();

  return fakeAuth.isAuthenticated === true ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <AuthButton />

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Route path="/public">
          <Public />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/protected">
          <Protected />
        </PrivateRoute>
      </div>
    </BrowserRouter>
  );
}
