import { useState } from "react";
import NotificationIcon from "../assets/CommonIcons/NotificationIcon";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLogOut } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(adminLogOut());
    navigate("/admin/signin");
  };

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case "/admin":
      case "/admin/dashboard":
        return "Dashboard";
      case "/admin/product/list":
        return "Product List";
      case "/admin/product/add":
        return "Add New Product";
      case "/admin/product/update":
        return "Update Product";
      case "/admin/order/list":
        return "Order List";
      case "/admin/order/update":
        return "Update Order";
      case "/admin/user/list":
        return "User List";
      case "/admin/user/restrict":
        return "Restrict Users";
      default:
        return "Admin Panel";
    }
  };

  return (
    <div className="bg-white h-[68px] flex justify-between items-center px-5 drop-shadow-md">
      <h1 className="xs:text-base xs:ml-2 md:ml-0 md:text-xl font-medium flex-1 text-left">
        {getPageTitle(location.pathname)}
      </h1>
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 bg-[#E0E6ED] rounded-full flex items-center justify-center cursor-pointer">
          <NotificationIcon />
        </div>
        <div
          className="w-10 h-10 bg-[#E0E6ED] rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="relative">
            <AccountCircleOutlinedIcon sx={{ fontSize: 25 }} />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-10">
                <Link
                  to="/admin/profile"
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
        </div>
      </div>
    </div>
  );
};

export default Header;
