import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
