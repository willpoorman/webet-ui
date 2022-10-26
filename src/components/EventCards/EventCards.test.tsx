import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { EventCards } from "./EventCards";
import { MemoryRouter } from "react-router-dom";
import { mockEvents } from "../../mockData/mockEvents";

describe("EventCards", () => {
  it("renders the Event Heading in the EventCards", () => {
    const mockAxios = new MockAdapter(axios, { delayResponse: 500 });
    mockAxios.onGet("/api/events/").reply(200, mockEvents);

    render(
      <MemoryRouter>
        <EventCards />
      </MemoryRouter>
    );
    const EventHeadingElement = screen.getByText(/Events/i);
    expect(EventHeadingElement).toBeInTheDocument();
  });
});
