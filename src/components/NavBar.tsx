import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const NavBar = () => {
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
          <SearchOutlinedIcon/>
          <AccountCircleOutlinedIcon/>
          <LocalMallOutlinedIcon/>
        </div>
      </div>
    </>
  );
};

export default NavBar;
