import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { MatchCards } from "./MatchCards";
import { MemoryRouter } from "react-router-dom";
import { mockMatches } from "../../mockData/mockMatches";

describe("EventCards", () => {
  it("renders the Event Heading in the EventCards", () => {
    const mockAxios = new MockAdapter(axios, { delayResponse: 500 });
    mockAxios.onGet("/api/matches").reply(200, mockMatches);

    render(
      <MemoryRouter>
        <MatchCards eventId={1} />
      </MemoryRouter>
    );
    const MatchHeadingElement = screen.getByText(/Matches/i);
    expect(MatchHeadingElement).toBeInTheDocument();
  });
});
