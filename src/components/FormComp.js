import React from "react";

const FormComp = () => {
  return (
    <form data-testid="form__element">
      <input placeholder="name" />
      <select data-testid="form__select">
        <option hidden>Select</option>
        <option>1</option>
        <option>2</option>
      </select>
      <input type="checkbox" data-testid="form__checkInput" />
      <button aria-label="button">Submit</button>
    </form>
  );
};

export default FormComp;
