import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import styles from "./App.module.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
