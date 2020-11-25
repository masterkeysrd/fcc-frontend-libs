import React, { useEffect } from "react";

const DrumPad = ({ padId = "", label = "", keyCode, audio, onplay }) => {
  let audioElement = null;

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keyup', handleKeyPress);
  });

  const play = () => {
    if (!audioElement)
      return;

    audioElement.play();
    onplay({audio: padId});
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === keyCode) {
      play();
    }
  };

  return (
    <button type="button" className="btn btn-dark w-100 h-100 drum-pad" id={padId} onClick={play} >
      {label}
      <audio className="clip" id={label}
        src={`/samples/${audio}`}
        ref={(el) => (audioElement = el)}
      ></audio>
    </button>
  );
};

export default DrumPad;
