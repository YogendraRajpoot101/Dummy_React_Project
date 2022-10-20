import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: "45px" }}>Yogendra Rajpoot</p>
        <p style={{ fontSize: "20px", marginTop: "-2%" }}>Software Developer</p>
        <p style={{ fontSize: "20px", marginTop: "-1%" }}>
          Logic Is Everywhere.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
