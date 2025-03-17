import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
// import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  return (
    <div className="flex min-h-screen relative">
      <SideBar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 xs:h-screen xl:max-h-[calc(100vh-70px)] overflow-y-auto">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
