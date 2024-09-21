import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Package from "./components/Package";

function App() {
  return (
    <div className="">
      <div className="h-[9.5px] top-space"></div>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package/:pack/:activeTab" element={<Package />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      <div className="h-[9.5px] top-space"></div>
    </div>
  );
}

export default App;
