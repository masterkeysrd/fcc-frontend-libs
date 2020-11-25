import React from "react";

const DisplayStyles = {
    fontFamily: ['Courier New', 'Courier', 'monospace']
};

const DisplayTextStyles = {
    fontSize: '22px'
};

const Display = ({ text = "", formula = "" }) => {
  return (
    <div className="text-right bg-dark text-white p-1 pr-2" style={DisplayStyles}>
      <div id="formula">
        <span>{formula || 0}</span>
        <br></br>
      </div>
      <div id="display" style={DisplayTextStyles}>
        <span>{text || "0"}</span>
      </div>
    </div>
  );
};


export default Display;