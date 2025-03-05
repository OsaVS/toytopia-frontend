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
import CartExample from "./pages/CartExample";

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
              <Route path="product" element={<ProductPage />} />
              <Route path="cart/*" element={<Cart />}>
                <Route index element={<ShoppingCart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="ordercomplete/:orderId" element={<OrderComplete />} />
              </Route>
              <Route path="product/:productCode" element={<ProductPage />} />
              <Route path="addproduct" element={<ProductUpload />} />
              <Route path="profile" element={<Profile />} />
              <Route path="examplecart" element={<CartExample/>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
