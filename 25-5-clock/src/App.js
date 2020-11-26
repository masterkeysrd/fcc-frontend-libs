import Clock from "./components/Clock";

const AppStyles = {
  display: 'flex',
  height: '100vh',
  width: '100vw',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#183153'
};

function App() {
  return (
    <div className="App" style={AppStyles}>
      <Clock />
    </div>
  );
}

export default App;
