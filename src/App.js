// import logo from "./logo.svg";
import "./index.css";
import "./App.css";
import "./styles/global.css";

import Header from "./components/header";
import File from "./components/file";

function App() {
  return (
    // 임시 테스트용 코드
    <div className="App">
      <Header></Header>
      {/* study File */}
      <File
        type="study"
        title="스터디 이름 캬캬 아기하마"
        teamNum={14}
        teamName="아기하마"
      />
      {/* project File */}
      <File
        type="project"
        title="플젝 이름 캬캬 아기하마"
        teamNum={14}
        teamName="아기하마"
      />
    </div>
  );
}

export default App;
