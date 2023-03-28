import React from "react";

const FormComp = () => {
  return (
    <form data-testid="form__element">
      <input placeholder="name" />
      <select aria-label="Select any Field">
        <option hidden>Select</option>
        <option>1</option>
        <option>2</option>
      </select>
      <input
        type="checkbox"
        aria-label="please check the field to continue"
        data-testid="form__checkInput"
      />
      <button aria-label="button">Submit</button>
    </form>
  );
};

export default FormComp;
