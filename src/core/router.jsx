import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home";
import Apply from "../pages/apply";

import Study from "../pages/study";
import Project from "../pages/project";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/project" element={<Project />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
}
