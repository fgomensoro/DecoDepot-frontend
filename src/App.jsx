import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Admin from "./pages/admin/Admin";
import Checkout from "./pages/checkout/Checkout";
import ProductsTable from "./components/tables/ProductsTable";
import OrdersTable from "./components/tables/OrdersTable";
import PacksTable from "./components/tables/PacksTable";
import ReviewsTable from "./components/tables/ReviewsTable";
import UsersTable from "./components/tables/UsersTable";

function App() {
  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<ProductsTable />} />
        <Route path="/admin/orders" element={<OrdersTable />} />
        <Route path="/admin/packs" element={<PacksTable />} />
        <Route path="/admin/reviews" element={<ReviewsTable />} />
        <Route path="/admin/users" element={<UsersTable />} />
      </Routes>
    </div>
  );
}

export default App;
