import "./App.module.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Detail from "./pages/detail/Detail";
import Products from "./pages/products/Products";
import Admin from "./pages/admin/Admin";
import Checkout from "./pages/checkout/Checkout";
import CartPage from "./pages/cart/CartPage";
import Pay from "./pages/pay/Pay";
import MyAccount from "./pages/myAccount/MyAccount";
import MyAccountDetails from "./pages/myAccount/MyAccountDetails";
import MyAccountOrderHistory from "./pages/myAccount/MyAccountOrderHistory";
import MyAccountSubscriptions from "./pages/myAccount/MyAccountSubscriptions";
import ProductsTable from "./components/admin/products/ProductsTable";
import MyAccountEdit from "./pages/myAccount/MyAccountEdit";
import OrdersTable from "./components/admin/orders/OrdersTable";
import PacksTable from "./components/admin/packs/PacksTable";
import ReviewsTable from "./components/admin/reviews/ReviewsTable";
import UsersTable from "./components/admin/users/UsersTable";
import CreateProduct from "./components/admin/products/CreateProduct";
import EditProduct from "./components/admin/products/EditProduct";
import AboutThisProject from "./pages/aboutThisProject/AboutThisProject";
import ProductsCategory from "./pages/productsCategory/ProductsCategory";
import AdminOnly from "./components/adminOnly/AdminOnly";
import OrderDetail from "./components/admin/orders/OrderDetail";
import OnlyUser from "./components/onlyUser/OnlyUser";
import AboutUsOffcanvas from "./components/aboutUsOffcanvas/AboutUsOffcanvas";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  let showNav = true;
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/checkout" ||
    location.pathname === "/buy"
  ) {
    showNav = false;
  }

  let showFooter = true;
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/admin")
  ) {
    showFooter = false;
  }
  let showCanvas = true;
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/admin") ||
    location.pathname === "/checkout" ||
    location.pathname === "/buy"
  ) {
    showCanvas = false;
  }

  return (
    <div className={styles.body}>
      <ScrollToTop />
      {showNav && <Navbar />}
      {showCanvas && <AboutUsOffcanvas />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:slug" element={<Detail />} />
        <Route path="/store/:category" element={<ProductsCategory />} />
        <Route path="/products/:slug" element={<Detail />} />
        <Route path="/store" element={<Products />} />
        <Route path="/about_this_project" element={<AboutThisProject />} />
        <Route path="/cart" element={<CartPage />} />
        <Route element={<OnlyUser user={user} />}>
          <Route path="/buy" element={<Pay />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/myaccount_edit" element={<MyAccountEdit />} />
          <Route path="/myaccount_subscriptions" element={<MyAccountSubscriptions />} />
          <Route path="/myaccount_orderHistory" element={<MyAccountOrderHistory />} />
          <Route path="/myaccount_details" element={<MyAccountDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route element={<AdminOnly isAdmin={user && user.isAdmin} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/products" element={<ProductsTable />} />
          <Route path="/admin/products/create" element={<CreateProduct />} />
          <Route path="/admin/products/:slug/edit" element={<EditProduct />} />
          <Route path="/admin/orders" element={<OrdersTable />} />
          <Route path="/admin/orders/:id" element={<OrderDetail />} />
          <Route path="/admin/packs" element={<PacksTable />} />
          <Route path="/admin/reviews" element={<ReviewsTable />} />
          <Route path="/admin/users" element={<UsersTable />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

function PageNotFound() {
  return (
    <div className={styles.error404}>
      <h2 className={styles.error}>404 Page not found</h2>
    </div>
  );
}

export default App;
