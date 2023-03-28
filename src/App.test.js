import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormComp from "./components/FormComp";
import LinkComp from "./components/LinkComp";
import TitleComp from "./components/TitleComp";

// test case for title component checks for the text
test("Should render Title component with text 'Welcome' or 'Welcome CEDCOSS'", () => {
  render(<TitleComp />);
  const titleElement = screen.getByTestId("title");
  expect(titleElement).toHaveTextContent("Welcome" || "Welcome CEDCOSS");
});

// test case for link component on unhover the mouse the class must be "normal"
test("Should render link component with normal class", () => {
  render(<LinkComp />);
  const normalElement = screen.getByTestId("link");
  expect(normalElement).toHaveClass("normal");
});

// test case for link component on hover the mouse the class must be "hovered" and on unhovered class will be normal
test("adds a hovered class on mouse hover", () => {
  render(<LinkComp />);
  const linkElement = screen.getByTestId("link");
  userEvent.hover(screen.getByRole("link"));
  linkElement.classList.add("hovered");
  linkElement.classList.remove("normal");
  expect(linkElement).toHaveClass("hovered");
  userEvent.unhover(screen.getByRole("link"));
  linkElement.classList.remove("hovered");
  linkElement.classList.add("normal");
  expect(linkElement).toHaveClass("normal");
});

// test case for form Component checks for the elements inside the form element

test("Should render form component which contains form with following elements input, select, checkbox and a button", () => {
  render(<FormComp />);
  const formElement = screen.getByTestId("form__element");
  const form__textInput = screen.getByPlaceholderText("name");
  const form__selectInput = screen.getByLabelText("Select any Field");
  const form__checkInput = screen.getByLabelText(
    "please check the field to continue"
  );
  const form__btn = screen.getByLabelText("button");
  expect(formElement).toContainElement(
    form__selectInput,
    form__checkInput,
    form__textInput,
    form__btn
  );
});
