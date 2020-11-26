const ClockControlStyles = {
  fontSize: '32px',
  textAlign: 'center'
};

const IconsStyles = {
  color: '#D19813'
};

const ClockControl = ({
  name = "",
  label = "",
  value = 0,
  onIncrement,
  onDecrement,
}) => {
  const handleIncrementClick = () => {
    if (value === 60) return;
    onIncrement();
  };

  const handleDecrementClick = () => {
    if (value === 1) return;
    onDecrement();
  };

  return (
    <div style={ClockControlStyles}>
      <div>
        <span id={`${name}-label`}>{label}</span>
      </div>
      <button
        className="btn"
        id={`${name}-decrement`}
        onClick={handleDecrementClick}
      >
        <i class="fas fa-chevron-left" style={IconsStyles}></i>
      </button>
      <span id={`${name}-length`}>{value}</span>
      <button
        className="btn"
        id={`${name}-increment`}
        style={IconsStyles}
        onClick={handleIncrementClick}
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ClockControl;
