import { useEffect, useRef, useState } from "react";

const TimerStyles = {
  textAlign: "center",
  fontSize: "32px",
};
const TimeLefStyles = {
  fontSize: "52px",
};
const IconsStyles = {
    color: '#D19813'
  };

const Timer = ({ sessionValue = 25, breakValue = 5, onReset }) => {
  const audioEl = useRef(null);
  const [isRunning, setIsRunning] = useState();
  const [isSession, setIsSession] = useState(true);
  const [timeLef, setTimeLeft] = useState({ minutes: 0, seconds: 0 });

  const calculateTimeLef = () => {
    const newTime = { ...timeLef };

    if (newTime.minutes === 0 && newTime.seconds === 0) {
      if (isSession) {
        newTime.minutes = breakValue;
      } else {
        newTime.minutes = sessionValue;
      }

      setIsSession(!isSession);
      return newTime;
    }

    if (newTime.seconds === 0) {
      newTime.minutes -= 1;
      newTime.seconds = 60;
    }

    newTime.seconds -= 1;

    if (newTime.minutes === 0 && newTime.seconds === 0) audioEl.current.play();
    return newTime;
  };

  useEffect(() => {
    setTimeLeft({ minutes: sessionValue, seconds: 0 });
  }, [sessionValue]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (!isRunning) clearTimeout(timer);
        setTimeLeft(calculateTimeLef());
      }, 1000);
    }

    return () => clearInterval(timer);
  });

  const startTimeHandle = () => {
    setIsRunning(true);
  };

  const stopTimeHandler = () => {
    setIsRunning(false);
  };

  const resetClickHandler = () => {
    setIsRunning(false);
    setIsSession(true);
    audioEl.current.pause();
    audioEl.current.currentTime = 0;
    setTimeLeft({ minutes: sessionValue, seconds: 0 });
    onReset();
  };

  const getTimeFormatted = () => {
    return (
      timeLef.minutes.toString().padStart(2, "0") +
      ":" +
      timeLef.seconds.toString().padStart(2, "0")
    );
  };

  return (
    <div style={TimerStyles}>
      <div>
        <span id="timer-label">{isSession ? "Session" : "Break"}</span>
      </div>
      <div>
        <span id="time-left" style={TimeLefStyles}>
          {getTimeFormatted()}
        </span>
      </div>
      <button
        className="btn"
        id="start_stop"
        style={IconsStyles}
        onClick={!isRunning ? startTimeHandle : stopTimeHandler}
      >
        {!isRunning ? (
          <i class="fas fa-play fa-lg"></i>
        ) : (
          <i class="fas fa-pause fa-lg"></i>
        )}
      </button>
      <button className="btn" id="reset" style={IconsStyles} onClick={resetClickHandler}>
        <i class="fas fa-sync-alt fa-lg"></i>
      </button>
      <audio id="beep" ref={audioEl} src="BeepSound.wav"></audio>
    </div>
  );
};

export default Timer;
