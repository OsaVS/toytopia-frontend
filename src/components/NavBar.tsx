import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  const toggleShowBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="xs:hidden md:flex h-12 items-center justify-between md:px-20">
        <p>Toytopia</p>
        <div>
          <ul className="flex items-center gap-5">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <SearchOutlinedIcon sx={{ fontSize: 20 }} />
          <AccountCircleOutlinedIcon sx={{ fontSize: 20 }} />
          <LocalMallOutlinedIcon sx={{ fontSize: 20 }} />
        </div>
      </div>

      <div className="xs:flex md:hidden items-center h-12 bg-red-400 justify-between px-5">
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
          <div className="h-10 flex items-center justify-center hover:bg-gray-500 rounded-lg mb-2">
            <p>Home</p>
          </div>
          <div className="h-10 flex items-center justify-center hover:bg-gray-500 rounded-lg mb-2">
            <p>Shop</p>
          </div>
          <div className="h-10 flex items-center justify-center hover:bg-gray-500 rounded-lg mb-2">
            <p>Product</p>
          </div>
          <div className="h-10 flex items-center justify-center hover:bg-gray-500 rounded-lg mb-2">
            <p>Contact Us</p>
          </div>
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
