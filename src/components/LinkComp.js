import React, { useState } from "react";

const LinkComp = () => {
  let [style, setStyle] = useState("normal");
  // function sets the hovered class on mouse over
  const hoverFunc = () => {
    setStyle("hovered");
  };
  // function sets the normal class on mouse out
  const normalFunc = () => {
    setStyle("normal");
  };

  return (
    <div>
      <a
        href=" "
        className={style}
        data-testid="link"
        onMouseOver={hoverFunc}
        onMouseOut={normalFunc}
      >
        Changes Class on Hover
      </a>
    </div>
  );
};

export default LinkComp;
