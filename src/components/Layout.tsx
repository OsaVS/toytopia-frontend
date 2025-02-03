import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import DiscountBar from "./DiscountBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <DiscountBar />
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
