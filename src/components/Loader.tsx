import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className="animate-spin rounded-full h-32  z-50 w-32 border-t-2 border-b-2"
        style={{ borderTopColor: "#1A3FB3", borderBottomColor: "#2f4fb5" }}
      ></div>
    </div>
  );
};

export default Loader;
