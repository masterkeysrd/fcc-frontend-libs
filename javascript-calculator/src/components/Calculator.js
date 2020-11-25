import React, { useState } from "react";
import Display from "./Display";
import KeyBoard from "./KeyBoard";

const Calculator = () => {
  const [formulaText, setFormulaText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleKey = (key) => {
    console.log(key);
    
    if (key === "AC") {
      setDisplayText("");
      setFormulaText("");
      return;
    }

    if (key === "DEL") {
      if (displayText) {
        const newText = displayText.substr(0, displayText.length - 1);
        setDisplayText(newText);
        return;
      }

      if (formulaText) {
        const newText = formulaText.substr(0, formulaText.length - 1);
        setFormulaText(newText);
        return;
      }

      return;
    }

    if (formulaText.includes("=") && key === "=") return;

    if (key === "=") {
      console.log(formulaText + displayText);
      // eslint-disable-next-line no-eval
      let result = eval(formulaText + displayText);
      setFormulaText(formulaText + displayText + key);
      setDisplayText(result);
      return;
    }

    if (/^[-\+\*\/]$/.test(key)) {
      const displayIsLess = !displayText || displayText === "-";
      if (/=$/.test(formulaText)) {
        setFormulaText(displayText + key);
        setDisplayText("");
        return;
      }

      if (key === "-" && displayIsLess && /[\*\/]$/.test(formulaText)) {
        setDisplayText(key);
        return;
      }
      if (displayIsLess && /[-\+\*\/]$/.test(formulaText)) {
        const newText = formulaText.substr(0, formulaText.length - 1) + key;
        setDisplayText("");
        setFormulaText(newText);
        return;
      }

      setFormulaText(formulaText + displayText + key);
      setDisplayText("");
      return;
    }

    if (key === "0" && (!displayText || displayText === "0")) return;
    if (key === "." && /\./g.test(displayText)) return;

    const newText = displayText + key;
    setDisplayText(newText);
  };

  return (
    <div style={{width: "400px"}}>
      <div className="row">
      <div className="col-md-12 p-1">
        <Display text={displayText} formula={formulaText} />
      </div>
      <div className="col-md-12">
      <KeyBoard onKey={handleKey} />
      </div>
      </div>
    </div>
  );
};

export default Calculator;
