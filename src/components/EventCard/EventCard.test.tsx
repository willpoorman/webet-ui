import React from "react";
import { render, screen } from "@testing-library/react";
import { EventCard } from "./EventCard";
import { MemoryRouter } from "react-router-dom";

describe("EventCard", () => {
  it("renders the Event name and description", () => {
    render(
      <MemoryRouter>
        <EventCard eventName="Fake Name" eventDescription="Fake Description" />
      </MemoryRouter>
    );

    const EventNameElement = screen.getByText(/Fake Name/);
    const EventDescriptionElement = screen.getByText(/Fake Description/);
    expect(EventNameElement).toBeInTheDocument();
    expect(EventDescriptionElement).toBeInTheDocument();
  });
});
