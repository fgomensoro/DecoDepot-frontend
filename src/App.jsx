import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Detail from "./pages/Detail/Detail";
import Products from "./pages/products/Products";
import Admin from "./pages/admin/Admin";
import Checkout from "./pages/checkout/Checkout";
import ProductsTable from "./components/admin/products/ProductsTable";
import OrdersTable from "./components/admin/orders/OrdersTable";
import PacksTable from "./components/admin/packs/PacksTable";
import ReviewsTable from "./components/admin/reviews/ReviewsTable";
import UsersTable from "./components/admin/users/UsersTable";
import CreateProduct from "./components/admin/products/CreateProduct";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/store" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<ProductsTable />} />
        <Route path="/admin/products/create" element={<CreateProduct />} />
        <Route path="/admin/orders" element={<OrdersTable />} />
        <Route path="/admin/packs" element={<PacksTable />} />
        <Route path="/admin/reviews" element={<ReviewsTable />} />
        <Route path="/admin/users" element={<UsersTable />} />
      </Routes>
    </div>
  );
}

export default App;
