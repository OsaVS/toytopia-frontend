import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DashboardIcon from "../assets/CommonIcons/DashboardIcon";
import ProductIcon from "../assets/CommonIcons/ProductIcon";
import OrderIcon from "../assets/CommonIcons/OrderIcon";
import UserIcon from "../assets/CommonIcons/UserIcon";

const SideBar = ({ isOpen, toggleSidebar }: any) => {
  const location = useLocation();

  return (
    <div
      className={`fixed inset-y-0 left-0 w-[260px] bg-white h-screen transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform md:relative md:translate-x-0 drop-shadow-lg z-10`}
    >
      <div
        className="absolute h-10 w-10 top-4 -right-5 bg-grn drop-shadow-lg p-2 rounded-full md:hidden"
        onClick={toggleSidebar}
      >
        <ArrowBackIosIcon
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
          sx={{ paddingBottom: "2px", paddingLeft: "6px", color: "#ffffff" }}
        />
      </div>
      <div className="flex items-center justify-start gap-2 border-b-2 h-[70px] pl-3">
        <img src={logo} alt="logo" className="w-20 h-12" />
        <p className="font-semibold text-xl">ToyTopia</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/admin/dashboard">
              <div
                className={`p-3 mt-5 flex items-center gap-3 bg-[#E0E6ED] ${
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
            <div className={`p-3 mt-5 flex items-center gap-3 bg-[#E0E6ED]`}>
              <ProductIcon />
              <p>Manage Products</p>
            </div>
            <Link to="/admin/product/list">
              <div className="py-2 pl-8">
                <p>
                  <span className="text-[#D1D5DB] text-lg font-bold">-</span>{" "}
                  Product List
                </p>
              </div>
            </Link>
            <Link to="/admin/product/add">
              <div className="py-2 pl-8">
                <p>
                  <span className="text-[#D1D5DB] text-lg font-bold">-</span>{" "}
                  Add New Product
                </p>
              </div>
            </Link>
            <Link to="/admin/product/update">
              <div className="py-2 pl-8">
                <p>
                  <span className="text-[#D1D5DB] text-lg font-bold">-</span>{" "}
                  Update Product
                </p>
              </div>
            </Link>
          </li>
          <li>
            <div className={`p-3 mt-5 flex items-center gap-3 bg-[#E0E6ED]`}>
              <OrderIcon />
              <p>Manage Orders</p>
            </div>
            <Link to="/admin/order/list">
              <div className="py-2 pl-8">
                <p>
                  <span className="text-[#D1D5DB] text-lg font-bold">-</span>{" "}
                  Order List
                </p>
              </div>
            </Link>
            <Link to="/admin/order/update">
              <div className="py-2 pl-8">
                <p>
                  <span className="text-[#D1D5DB] text-lg font-bold">-</span>{" "}
                  Update Order
                </p>
              </div>
            </Link>
          </li>
          <li>
            <div className={`p-3 mt-5 flex items-center bg-[#E0E6ED] gap-3`}>
              <UserIcon />
              <p>Manage Users</p>
            </div>
            <Link to="/admin/user/list">
              <div className="py-2 pl-8">
                <p>
                  <span className="text-[#D1D5DB] text-lg font-bold">-</span>{" "}
                  User List
                </p>
              </div>
            </Link>
            <Link to="/admin/user/restrict">
              <div className="py-2 pl-8">
                <p>
                  <span className="text-[#D1D5DB] text-lg font-bold">-</span>{" "}
                  Restrict Users
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
