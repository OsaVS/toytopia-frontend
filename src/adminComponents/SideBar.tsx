import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import DashboardIcon from "../assets/CommonIcons/DashboardIcon";

const SideBar = ({ isOpen, toggleSidebar }: any) => {
  const location = useLocation(); // Get the current route

  return (
    <div
      className={`fixed inset-y-0 left-0 w-[260px] bg-white h-screen transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform md:relative md:translate-x-0 drop-shadow-lg z-10`}
    >
      <button
        className="absolute top-4 -right-4 bg-blue-600 text-white p-2 rounded md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <div className="flex items-center justify-start gap-2 border-b-2 h-[70px] pl-3">
        <img src={logo} alt="logo" className="w-20 h-12" />
        <p className="font-semibold text-xl">ToyTopia</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/admin/dashboard">
              <div
                className={`p-3 mt-5 flex items-center gap-3 ${
                  location.pathname === "/admin/dashboard"
                    ? "bg-[#caccce]"
                    : "bg-[#E0E6ED] hover:bg-[#caccce]"
                }`}
              >
                <DashboardIcon />
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin/manage/products">
              <div
                className={`p-3 mt-5 flex items-center gap-3 ${
                  location.pathname === "/admin/manage/products"
                    ? "bg-[#caccce]"
                    : "bg-[#E0E6ED] hover:bg-[#caccce]"
                }`}
              >
                <DashboardIcon />
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
