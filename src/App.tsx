import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/UserSignUp";
import SignIn from "./pages/auth/UserSignIn";
import Home from "./pages/Home";
import PrivateRoute from "./helpers/PrivateRoute";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";

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
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
