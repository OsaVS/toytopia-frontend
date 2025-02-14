import { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";
import { navItems } from "../constants";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { cartCount } = useCart();

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  const toggleShowBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="xs:hidden md:flex h-16 items-center justify-between md:px-20">
        <img src={logo} alt="" className="w-24 h-16 xs:hidden md:block" />
        <div>
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={`cursor-pointer hover:border-b-2 border-black ${
                  location.pathname === item.path ? "border-b-2" : "text-black"
                }`}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <SearchOutlinedIcon sx={{ fontSize: 20 }} />
          <div className="relative">
            <AccountCircleOutlinedIcon
              sx={{ fontSize: 20 }}
              className="cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-10">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <Link to="/cart">
              <LocalMallOutlinedIcon sx={{ fontSize: 20, cursor: "pointer" }} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-grn text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="xs:flex md:hidden items-center h-12 bg-grn justify-between px-5">
        <div className="flex items-center gap-2">
          <MenuOutlinedIcon sx={{ fontSize: 16 }} onClick={toggleShowBar} />
          <p>Toytopia</p>
        </div>
        <div className="flex items-center gap-2">
          <LocalMallOutlinedIcon sx={{ fontSize: 20 }} />
          <div className="h-4 w-4 rounded-full bg-black"></div>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 w-[80%] h-svh pt-12 -z-10 transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pl-5 pr-20 mt-5">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="h-10 flex items-center justify-center hover:bg-gray-500 rounded-lg mb-2"
            >
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
          <div className="h-10 flex items-center justify-center bg-red-700 hover:bg-red-800 rounded-lg mb-2">
            <button
              className="xs:block md:hidden text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
