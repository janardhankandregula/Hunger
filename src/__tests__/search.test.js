import BodyComponent from "../components/Bodycomponent";
import { render, screen, fireEvent } from "@testing-library/react";
import Mockdata from "../mocks/reslListMock.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utilis/appStore";
import { BrowserRouter } from "react-router-dom";
import ResCard, { RescardWithFastDelivery } from "../components/Rescard";
import ResContainer from "../components/Rescontainer";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mockdata);
    },
  });
});

it("should render the body component with search button", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <BodyComponent />
        </BrowserRouter>
      </Provider>
    )
  );

  const btn = screen.getByRole("button", { name: "Search" });
  expect(btn).toBeInTheDocument();
});

it("should render the body component with input box", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <BodyComponent />
        </BrowserRouter>
      </Provider>
    )
  );

  const inputSearch = screen.getByTestId("searchIp");
  expect(inputSearch).toBeInTheDocument();
});

it("should render the resdata with given data", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <BodyComponent />
          <ResContainer />
          <ResCard />
        </BrowserRouter>
      </Provider>
    )
  );
  const btn = screen.getByRole("button", { name: "Search" });
  // expect(btn).toBeInTheDocument();

  const inputSearch = screen.getByTestId("searchIp");
  fireEvent.change(inputSearch, { target: { value: "burger" } });

  fireEvent.click(btn);

  const cards = screen.getAllByTestId("resCardId");

  expect(cards.length).toBe(1);
});

it("should render the top rated restaurants", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <BodyComponent />
          <ResContainer />
          <ResCard />
        </BrowserRouter>
      </Provider>
    )
  );

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  expect(topRatedBtn).toBeInTheDocument();
  const cards = screen.getAllByTestId("resCardId");

  expect(cards.length).toBe(1);
});
