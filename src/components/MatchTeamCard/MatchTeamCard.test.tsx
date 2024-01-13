import { render, screen } from "@testing-library/react";
import { MatchTeamCard } from "./MatchTeamCard";
import { MemoryRouter } from "react-router-dom";

describe("MatchCard", () => {
  it("renders the Event name and description", () => {
    render(
      <MemoryRouter>
        <MatchTeamCard name="Fake Name" description="Fake Description" id={1} eventId={1} />
      </MemoryRouter>
    );

    const MatchNameElement = screen.getByText(/Fake Name/);
    const MatchDescriptionElement = screen.getByText(/Fake Description/);
    expect(MatchNameElement).toBeInTheDocument();
    expect(MatchDescriptionElement).toBeInTheDocument();
  });
});
