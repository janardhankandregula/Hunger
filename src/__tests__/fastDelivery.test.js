import { render, screen } from "@testing-library/react";
import { RescardWithFastDelivery } from "../components/Rescard";
import ResCard from "../components/Rescard";
import { TestComponent } from "../components/Rescard";
import "@testing-library/jest-dom";
import Mock_Data from "../mocks/resCardMock.json";

const EnhancedComponent = RescardWithFastDelivery(TestComponent);

it("should render the label and wrapped the component", () => {
  render(<EnhancedComponent resdata={Mock_Data} />);

  const label = screen.getByText("Fastest Delivery");
  expect(label).toBeInTheDocument();
  const restaurantName = screen.getByText("Subway");
  expect(restaurantName).toBeInTheDocument();
});
