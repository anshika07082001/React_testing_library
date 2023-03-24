import React, { useEffect, useState } from "react";

const TitleComp = () => {
  let [title, setTitle] = useState("Welcome");
  // function sets the state after every 5 seconds
  useEffect(() => {
    if (title == "Welcome") {
      setTimeout(() => setTitle("Welcome CEDCOSS"), 5000);
    } else {
      setTimeout(() => setTitle("Welcome"), 5000);
    }
  }, [title]);
  return (
    <div>
      <p data-testid="title">{title}</p>
    </div>
  );
};

export default TitleComp;
