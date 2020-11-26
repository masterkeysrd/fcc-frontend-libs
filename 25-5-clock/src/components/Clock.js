import { useState } from "react";
import ClockControl from "./ClockControl";
import Timer from "./Timer";

const ClockStyles = {
  width: "500px",
  padding: '25px',
  color: '#fff',
};

const Clock = () => {
  const [breakValue, setBreakValue] = useState(5);
  const [sessionValue, setSessionValue] = useState(25);

  const handleBreakIncrement = () => {
    setBreakValue(breakValue + 1);
  };

  const handleBreakDecrement = () => {
    setBreakValue(breakValue - 1);
  };

  const handleSessionIncrement = () => {
    setSessionValue(sessionValue + 1);
  };

  const handleSessionDecrement = () => {
    setSessionValue(sessionValue - 1);
  };

  const handleReset = () => {
    setSessionValue(25);
    setBreakValue(5);
  };

  return (
    <div style={ClockStyles}>
      <div className="row">
        <div className="col-md-6">
          <ClockControl
            name="break"
            label="Break"
            value={breakValue}
            onIncrement={handleBreakIncrement}
            onDecrement={handleBreakDecrement}
          />
        </div>
        <div className="col-md-6">
          <ClockControl
            name="session"
            label="Session"
            value={sessionValue}
            onIncrement={handleSessionIncrement}
            onDecrement={handleSessionDecrement}
          />
        </div>
        <div className="col-md-12">
          <Timer
            sessionValue={sessionValue}
            breakValue={breakValue}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default Clock;
