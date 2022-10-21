import { render } from "@testing-library/react";
import App from "./App";

test("renders without exception", () => {
  expect(() => render(<App />)).not.toThrow();
});
