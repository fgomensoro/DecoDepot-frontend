import "./App.module.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Detail from "./pages/detail/Detail";
import Products from "./pages/products/Products";
import Admin from "./pages/admin/Admin";
import Checkout from "./pages/checkout/Checkout";
import CartPage from "./pages/cart/CartPage";
import Pay from "./pages/pay/Pay";
import ProductsTable from "./components/admin/products/ProductsTable";
import OrdersTable from "./components/admin/orders/OrdersTable";
import PacksTable from "./components/admin/packs/PacksTable";
import ReviewsTable from "./components/admin/reviews/ReviewsTable";
import UsersTable from "./components/admin/users/UsersTable";
import CreateProduct from "./components/admin/products/CreateProduct";
import EditProduct from "./components/admin/products/EditProduct";
import Profile from "./pages/profile/Profile";
import AboutUs from "./pages/aboutus/AboutUs";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductsCategory from "./pages/productsCategory/ProductsCategory";
import AdminOnly from "./components/adminOnly/AdminOnly";
import EditProfile from "./pages/editUser/EditProfile";

function App() {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  let showNav = true;
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/checkout" ||
    location.pathname === "/pay"
  ) {
    showNav = false;
  }

  let showFooter = true;
  if (location.pathname === "/login" || location.pathname === "/signup") {
    showFooter = false;
  }

  return (
    <div className={styles.body}>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/store/:category" element={<ProductsCategory />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/store" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/users/:user/:id" element={<EditProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pay" element={<Pay />} />
        <Route element={<AdminOnly isAdmin={user.isAdmin} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/products" element={<ProductsTable />} />
          <Route path="/admin/products/create" element={<CreateProduct />} />
          <Route path="/admin/products/:id/edit" element={<EditProduct />} />
          <Route path="/admin/orders" element={<OrdersTable />} />
          <Route path="/admin/packs" element={<PacksTable />} />
          <Route path="/admin/reviews" element={<ReviewsTable />} />
          <Route path="/admin/users" element={<UsersTable />} />
        </Route>
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
