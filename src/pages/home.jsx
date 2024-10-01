import File from "../components/file";
import '../styles/global.css';
const Home = () => {
  return (
    <div>
      {/* 스터디 props를 호출 */}
      <File 
        type="study" 
        title="스터디 이름 캬캬 아기하마" 
        teamNum={14} 
        teamName="아기하마" 
      />
      {/* project props를 호출 */}
      <File 
        type="project" 
        title="플젝 이름 캬캬 아기하마" 
        teamNum={14} 
        teamName="아기하마" 
      />
    </div>
  );
};

export default Home;
