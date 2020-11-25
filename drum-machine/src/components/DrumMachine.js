import React, { useState } from "react";
import Display from "./Display";
import DrumPad from "./DrumPad";

const Config = [
  {
    id: "R8-808-1",
    key: "Q",
    keyCode: 81,
    audio: "bank1/R8-808-1.aif.mp3",
  },
  {
    id: "R8-Cl-Hi-Hat",
    key: "W",
    keyCode: 87,
    audio: "bank1/R8-Cl-Hi-Hat.aif.mp3",
  },
  {
    id: "R8-FX-1.aif",
    key: "E",
    keyCode: 69,
    audio: "bank1/R8-FX-1.aif.mp3",
  },
  {
    id: "R8-Kick-1",
    key: "A",
    keyCode: 65,
    audio: "bank1/R8-Kick-1.aif.mp3",
  },
  {
    id: "R8-Perc-1",
    key: "S",
    keyCode: 83,
    audio: "bank1/R8-Perc-1.aif.mp3",
  },
  {
    id: "R8-Perc-4",
    key: "D",
    keyCode: 68,
    audio: "bank1/R8-Perc-4.aif.mp3",
  },
  {
    id: "R8-Ride",
    key: "Z",
    keyCode: 90,
    audio: "bank1/R8-Ride.aif.mp3",
  },
  {
    id: "R8-Snare-1",
    key: "X",
    keyCode: 88,
    audio: "bank1/R8-Snare-1.aif.mp3",
  },
  {
    id: "R8-Snare-5",
    key: "C",
    keyCode: 67,
    audio: "bank1/R8-Snare-5.aif.mp3",
  },
];

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState("");

  const handleOnPlay = (event) => {
    setDisplayText(event.audio.replace("-", " "));
  };

  return (
    <div className="row" id="drum-machine">
      <div className="col-md-8">
        <div className="row">
          {Config.map((entry) => (
            <div className="col-md-4 mt-4" style={{ height: "100px" }}>
              <DrumPad
                key={entry.key}
                padId={entry.id}
                label={entry.key}
                audio={entry.audio}
                keyCode={entry.keyCode}
                onplay={handleOnPlay}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-4 mt-4">
        <Display text={displayText} />
      </div>
    </div>
  );
};

export default DrumMachine;
