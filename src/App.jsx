import "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Combo from "./components/combo/Combo";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/combo" element={<Combo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
