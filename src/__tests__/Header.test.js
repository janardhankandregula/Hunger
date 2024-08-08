import { render, screen, within, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TailwindHeader from "../components/TailwindHeader";
import { Provider } from "react-redux";
import appStore from "../utilis/appStore";
import { BrowserRouter as Router } from "react-router-dom";

it("should load Home Button", () => {
  render(
    <Provider store={appStore}>
      <Router>
        <TailwindHeader />
      </Router>
    </Provider>
  );

  const links = screen.getAllByRole("link");
  const homeBtn = links.find((link) => link.getAttribute("href") === "/");
  expect(homeBtn).toBeInTheDocument();
});

it("should load About Button", () => {
  render(
    <Provider store={appStore}>
      <Router>
        <TailwindHeader />
      </Router>
    </Provider>
  );

  const links = screen.getAllByRole("link");
  const aboutBtn = links.find((link) => link.getAttribute("href") === "/About");
  expect(aboutBtn).toBeInTheDocument();
});

it("should load About Contact", () => {
  render(
    <Provider store={appStore}>
      <Router>
        <TailwindHeader />
      </Router>
    </Provider>
  );

  const links = screen.getAllByRole("link");
  const ContactBtn = links.find(
    (link) => link.getAttribute("href") === "/Contact"
  );
  expect(ContactBtn).toBeInTheDocument();
});

it("should load About Contact", () => {
  render(
    <Provider store={appStore}>
      <Router>
        <TailwindHeader />
      </Router>
    </Provider>
  );
  const links = screen.getAllByRole("link");
  const cartPage = links.find(
    (link) => link.getAttribute("href") === "/CartPage"
  );

  expect(cartPage).toBeInTheDocument();

  const cartLengthBadge = within(cartPage).getByText("0");
  expect(cartLengthBadge).toBeInTheDocument();

  expect(cartPage).toContainElement(cartLengthBadge);
});

it("should display log-in when not logged in", () => {
  render(
    <Provider store={appStore}>
      <Router>
        <TailwindHeader />
      </Router>
    </Provider>
  );

  const btn = screen.getByTestId("login-button");
  expect(btn).toHaveTextContent("log-in");
  fireEvent.click(btn);
  expect(btn).toHaveTextContent("log-out");
});
