import React from "react";
import { render, screen } from "@testing-library/react";
import { DataGridExample } from "./DataGridExample";

describe("DataGridExample", () => {
  it("renders the Full name column in the DataGrid", () => {
    render(<DataGridExample />);
    const IDColumnHeaderElement = screen.getByText(/ID/i);
    expect(IDColumnHeaderElement).toBeInTheDocument();
  });
});
