import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/UserSignUp";
import SignIn from "./pages/auth/UserSignIn";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
