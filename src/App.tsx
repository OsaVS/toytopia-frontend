import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;