import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home';
import Apply from '../pages/apply';
import Study from '../pages/study';
import Project from '../pages/project';
import Activity from "../pages/activity";

function AppRouter() {
  const location = useLocation();

  // 스터디, 프로젝트 페이지에서는 헤더의 배경이 블랙이 되도록
  const isBlackHeader = location.pathname === '/project' || location.pathname === '/study';
  return (
    <>
      <Header isBlack={isBlackHeader} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/study" element={<Study />} />
        <Route path="/project" element={<Project />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
