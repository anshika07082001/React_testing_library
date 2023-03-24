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
test("Should render link component with normal class on mouseUnHover", () => {
  render(<LinkComp />);
  const normalElement = screen.getByTestId("link");
  userEvent.unhover(screen.getByRole("link"));
  expect(normalElement.classList.add("normal")).toBe();
});

// test case for link component on hover the mouse the class must be "hovered"
test("adds a hovered class on mouse hover", () => {
  render(<LinkComp />);
  const linkElement = screen.getByTestId("link");
  userEvent.hover(screen.getByRole("link"));
  expect(linkElement.classList.add("hovered")).toBe();
});

// test case for form Component checks for the elements inside the form element
test("Should render form component which contains form with following elements input, select, checkbox and a button", () => {
  render(<FormComp />);
  const formElement = screen.getByTestId("form__element");
  const form__textInput = screen.getByPlaceholderText("name");
  const form__selectInput = screen.getByTestId("form__select");
  const form__checkInput = screen.getByTestId("form__checkInput");
  const form__btn = screen.getByLabelText("button");
  expect(formElement).toContainElement(form__selectInput, form__checkInput);
  expect(formElement).toBeInTheDocument(form__textInput);
  expect(formElement).toBeInTheDocument(form__btn);
});
