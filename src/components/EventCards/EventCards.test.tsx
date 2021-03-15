import React from "react";
import { render, screen } from "@testing-library/react";
import { EventCards } from "./EventCards";
import { MemoryRouter } from "react-router-dom";

describe("EventCards", () => {
  it("renders the Event Heading in the EventCards", () => {
    render(
      <MemoryRouter>
        <EventCards />
      </MemoryRouter>
    );
    const EventHeadingElement = screen.getByText(/Events/i);
    expect(EventHeadingElement).toBeInTheDocument();
  });
});
