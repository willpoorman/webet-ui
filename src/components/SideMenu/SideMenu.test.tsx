import React from "react";
import { render, screen } from "@testing-library/react";
import { SideMenu } from "./SideMenu";
import { MemoryRouter } from 'react-router-dom';

describe("SideMenu", () => {
  it("renders the Home Button in the SideMenu", () => {
    render(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>
    );
    const HomeButtonElement = screen.getByText(/Home/i);
    expect(HomeButtonElement).toBeInTheDocument();
  });
});
