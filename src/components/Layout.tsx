import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import DiscountBar from "./DiscountBar";

const Layout = () => {
  return (
    <>
      <DiscountBar />
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
