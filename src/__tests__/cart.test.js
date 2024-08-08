import { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Menu from "../components/Menu";
import appStore from "../utilis/appStore";
import "@testing-library/jest-dom";
// import Mock_data from "../mocks/menuMock.json";
import Mock_data from "../mocks/menuMock.json";
import Accordion from "../components/Accordion";
import AccordionItem from "../components/AccordionItem";
import { CartPageProvider } from "../utilis/CartPageContext";
import TailwindHeader from "../components/TailwindHeader";
import CartPage from "../components/CartPage";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_data);
    },
  });
});

it("should be increase the cart number inside Header component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <CartPageProvider>
            <Menu />
            <TailwindHeader />
            <CartPage />

            {/* <Accordion /> */}
            {/* <AccordionItem /> */}
          </CartPageProvider>
        </BrowserRouter>
      </Provider>
    )
  );

  const text = screen.getByTestId("para", {
    name: "Plse add something to eat",
  });
  expect(text).toBeInTheDocument();
  const cartLengthElement = screen.getByTestId("cartlen");
  expect(cartLengthElement).toBeInTheDocument();

  const btn = screen.getAllByRole("button");
  expect(btn.length).toBe(17);
  fireEvent.click(btn[1]);

  const addbtn = screen.getAllByTestId("itemId");

  expect(addbtn.length).toBe(38);

  fireEvent.click(addbtn[0]);

  expect(cartLengthElement).toHaveTextContent("1");
  const cartid = screen.getAllByTestId("cartId");
  expect(cartid.length).toBe(1);

  const btncount = screen.getByTestId("removebtn");
  expect(btncount).toBeInTheDocument();
  fireEvent.click(btncount);

  // const test2 = screen.getByTestId("testId");
  // expect(test2.length).toBe(1);
  // fireEvent.click(btncount);

  //  expect(test2.length).toBe(0);

  // const clrbtn = screen.getByRole("button", { name: "Clear Cart" });
  // expect(clrbtn).toBeInTheDocument();
});
