import React from "react";
import Category from "../category";// Import the Category component

const Smartphones = () => {
  return (
    <>
      <h1>This is phone</h1>
      {/* Display the Category component with the "smartphones" category */}
      <Category category="smartphones" />
    </>
  );
};

export default Smartphones;
