import React from "react";
import FormComp from "./FormComp";
import LinkComp from "./LinkComp";
import TitleComp from "./TitleComp";

const Main = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h4>Title component</h4>
      {/* rendering of title component */}
      <TitleComp />
      <hr />
      <h4>Link component</h4>
      {/* rendering of link component */}
      <LinkComp />
      <hr />
      <h4>Form component</h4>
      {/* rendering of form component */}
      <FormComp />
    </div>
  );
};

export default Main;
