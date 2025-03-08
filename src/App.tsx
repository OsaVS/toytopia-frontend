import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/UserSignUp";
import SignIn from "./pages/auth/UserSignIn";
import Home from "./pages/Home";
import PrivateRoute from "./helpers/PrivateRoute";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";
import ProductUpload from "./pages/ProductUpload";
import Cart from "./pages/Cart";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import OrderComplete from "./pages/OrderComplete";
import Profile from "./pages/Profile";
import AdminSignIn from "./pages/auth/AdminSignIn";
import AdminPrivateRoute from "./helpers/AdminPrivateRoute";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./adminComponents/Layout";
import ProductList from "./pages/admin/ProductList";
import NewProduct from "./pages/admin/NewProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import OrderList from "./pages/admin/OrderList";
import UpdateOrder from "./pages/admin/UpdateOrder";
import UserList from "./pages/admin/UserList";
import RestrictUser from "./pages/admin/RestrictUser";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="cart/*" element={<Cart />}>
                <Route index element={<ShoppingCart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route
                  path="ordercomplete/:orderId"
                  element={<OrderComplete />}
                />
              </Route>
              <Route path="product/:productCode" element={<ProductPage />} />
              <Route path="addproduct" element={<ProductUpload />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="/admin/signin" element={<AdminSignIn />} />
          <Route element={<AdminPrivateRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/product/list" element={<ProductList />} />
              <Route path="/admin/product/add" element={<NewProduct />} />
              <Route path="/admin/product/update" element={<UpdateProduct />} />
              <Route path="/admin/order/list" element={<OrderList />} />
              <Route path="/admin/order/update" element={<UpdateOrder />} />
              <Route path="/admin/user/list" element={<UserList />} />
              <Route path="/admin/user/restrict" element={<RestrictUser />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
