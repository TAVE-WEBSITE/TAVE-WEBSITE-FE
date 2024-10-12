import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home";

import Study from "../pages/study";
import Project from "../pages/project";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
              <Route path="/study" element={<Study />} />
              <Route path="/project" element={<Project />} />

      </Routes>
    </BrowserRouter>
  );
}
