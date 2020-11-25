import React from "react";

const Display = ({ text = "" }) => {
  return (
    <div id="display" className="bg-primary d-flex justify-content-center w-100 h-100">
      <div  className="bg-dark text-white w-75 mt-5 pt-1 pb-1 pl-2" style={{height: "35px", fontFamily: "consolas", fontWeight: "bold"}}>
      <span>{text}</span>
      </div>
    </div>
  );
};

export default Display;
