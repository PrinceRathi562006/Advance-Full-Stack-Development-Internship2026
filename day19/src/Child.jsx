import React from "react";

const Child = React.memo(({ hello }) => {
  console.log("Child Render");

  return (
    <button onClick={hello}>
      Say Hello
    </button>
  );
});

export default Child;