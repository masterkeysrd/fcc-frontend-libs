import React from "react";

const buttonsConfig = [
  {
    id: "clear",
    key: "AC",
    size: 2,
    color: "danger",
  },
  {
    id: "del",
    key: "DEL",
    size: 1,
    color: "secondary",
  },
  {
    id: "divide",
    key: "/",
    size: 1,
    color: "info",
  },
  {
    id: "seven",
    key: "7",
    size: 1,
    color: "dark",
  },
  {
    id: "eight",
    key: "8",
    size: 1,
    color: "dark",
  },
  {
    id: "nine",
    key: "9",
    size: 1,
    color: "dark",
  },
  {
    id: "multiply",
    key: "*",
    size: 1,
    color: "info",
  },
  {
    id: "four",
    key: "4",
    size: 1,
    color: "dark",
  },
  {
    id: "five",
    key: "5",
    size: 1,
    color: "dark",
  },
  {
    id: "six",
    key: "6",
    size: 1,
    color: "dark",
  },
  {
    id: "subtract",
    key: "-",
    size: 1,
    color: "info",
  },
  {
    id: "one",
    key: "1",
    size: 1,
    color: "dark",
  },
  {
    id: "two",
    key: "2",
    size: 1,
    color: "dark",
  },
  {
    id: "three",
    key: "3",
    size: 1,
    color: "dark",
  },
  {
    id: "add",
    key: "+",
    size: 1,
    color: "info",
  },
  {
    id: "zero",
    key: "0",
    size: 1,
    color: "dark",
  },
  {
    id: "decimal",
    key: ".",
    size: 1,
    color: "dark",
  },
  {
    id: "equals",
    key: "=",
    size: 2,
    color: "success",
  },
];

const KeyBoard = ({onKey}) => {
  return (
    <div className="row">
      {buttonsConfig.map((button) => (
        <div key={button.id} className={`col-md-${button.size * 3} p-1`}>
          <button
            className={`btn btn-${button.color} w-100 h-100`}
            id={button.id}
            onClick={() => onKey(button.key)}
          >
            {button.key}
          </button>
        </div>
      ))}
    </div>
  );
};

export default KeyBoard;
