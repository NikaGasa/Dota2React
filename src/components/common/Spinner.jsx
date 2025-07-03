import React from "react";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      Loading...
    </div>
  );
};

export default Spinner;
