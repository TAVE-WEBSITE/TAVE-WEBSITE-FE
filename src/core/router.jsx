import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Study from "../pages/study";
import Home from "../pages/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </BrowserRouter>
  );
}
