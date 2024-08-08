import { render, screen } from "@testing-library/react";
import Rescard from "../components/Rescard";
import Mock_Data from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("ResCard Component", () => {
  // Helper function to render the component with mock data
  const renderResCard = () => {
    render(
      <BrowserRouter>
        <Rescard resdata={Mock_Data} />
      </BrowserRouter>
    );
  };
  it("should render the restaurant cost for two", () => {
    renderResCard();
    // screen.debug(); // Inspect the rendered HTML
    const costForTwo = screen.getByText(
      (content, element) =>
        element.tagName.toLowerCase() === "h4" &&
        content.includes("₹350 for two")
    );
    expect(costForTwo).toBeInTheDocument();
  });
});
