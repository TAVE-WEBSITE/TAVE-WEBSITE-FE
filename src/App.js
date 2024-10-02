import logo from "./logo.svg";
import "./index.css";
import "./App.css";
import "./styles/global.css";
import { Header } from "./components/header";

function App() {
  return (
    // 임시 테스트용 코드
    <div className="App">
      <Header></Header>
    </div>
  );
}

/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/
export default App;
