import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
<<<<<<< HEAD
import Combo from "./components/combo/Combo";
import Detail from "./pages/Detail/Detail";
=======
import Products from "./pages/products/Products";
import Admin from "./pages/admin/Admin";
import Checkout from "./pages/checkout/Checkout";
>>>>>>> fca407cda789ae8ff4bd606d417f84e23cc8084f

function App() {
  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/detail" element={<Detail />} />
=======
        <Route path="/store" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<Checkout />} />
>>>>>>> fca407cda789ae8ff4bd606d417f84e23cc8084f
      </Routes>
    </div>
  );
}

export default App;
