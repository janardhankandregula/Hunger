import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("get contact us page when componet is loaded", () => {
  render(<Contact />);
  const contactUs = screen.getByRole("heading");
  expect(contactUs).toBeInTheDocument();
});

test("should get button", () => {
  render(<Contact />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});
test("should get by text", () => {
  render(<Contact />);
  const submitText = screen.getByText("Submit");
  expect(submitText).toBeInTheDocument();
});

test("should get its input boxes", () => {
  render(<Contact />);
  const submitText = screen.getAllByRole("textbox");
  expect(submitText).toHaveLength(2);
});

test("should get thanks for submitting message", () => {
  render(<Contact />);
  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/message/i), {
    target: { value: "Hello!" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  const thanksMessage = screen.getByText("Thank you for your message!");
  expect(thanksMessage).toBeInTheDocument();
});
