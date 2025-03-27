import React from "react";
import { render } from "@testing-library/react";
import Card from "../components/Card";

describe("Card component", () => {
  const defaultProps = {
    title: "Test Card",
    lastUpdated: "2023-10-01",
    icon: <div data-testid="icon">Icon</div>,
    graphs: ["Graph1", "Graph2"],
    columns: "3",
  };

  it("renders the title and last updated date", () => {
    const { getByText } = render(<Card {...defaultProps} />);
    expect(getByText("Test Card")).toBeInTheDocument();
    expect(getByText("Last Updated: 2023-10-01")).toBeInTheDocument();
  });

  it("renders the correct number of graphs based on columns prop", () => {
    const { getAllByRole } = render(<Card {...defaultProps} />);
    const graphElements = getAllByRole("figure");
    expect(graphElements.length).toBe(defaultProps.graphs.length);
  });

  it("renders the icon correctly", () => {
    const { getByTestId } = render(<Card {...defaultProps} />);
    expect(getByTestId("icon")).toBeInTheDocument();
  });
});
