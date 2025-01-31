import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../features/auth/authSlice";
import Navbar from "../components/NavBar";
import DiscountBar from "../components/DiscountBar";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div>
      <DiscountBar />
      <Navbar />
      <button className="xs:hidden md:block" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
