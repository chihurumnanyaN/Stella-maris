import React from "react";

const Loader = () => {
  return (
    <div className=" size-[15px] relative">
      <div
        className="absolute inset-0 rounded-full bg-(--primary) 
              animate-[l8-1_1s_infinite_linear] shadow-[-25px_0_0_0_#000]"
      ></div>
      <div
        className="absolute inset-0 rounded-full bg-(--primary)
              animate-[l8-2_1s_infinite_linear] origin-center"
      ></div>
    </div>
  );
};

export default Loader;
