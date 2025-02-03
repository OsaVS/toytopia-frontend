import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-black mt-5 text-white pt-10 px-24 xs:hidden md:block">
        <div className="flex items-center justify-between">
          <div>
            <p>
              <span className="font-semibold text-xl">Toytopia</span> |{" "}
              <span className="text-sm">Toy Store</span>
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={`cursor-pointer hover:border-b-2 border-black`}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#E8ECEF] w-full h-[0.2px] mt-8"></div>
        <p className="text-center mt-10 pb-5 text-sm">
          Copyright © 2025 Toytopia. All rights reserved
        </p>
      </div>

      <div className="w-full h-full bg-black mt-5 text-white pt-10 px-24 xs:block md:hidden mx-auto text-center">
        <div className="grid grid-cols-1 items-center justify-center">
          <p className="font-semibold text-xl">Toytopia</p>
          <div className="bg-[#E8ECEF] w-[18%] h-[0.2px] my-2 mx-auto"></div>
          <p className="text-sm">Toy Store</p>
          <ul className="mt-10">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={`cursor-pointer hover:border-b-2 mb-3 border-black`}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className="bg-[#E8ECEF] w-full h-[0.2px] mt-8"></div>
          <p className="text-center mt-10 pb-5 text-sm">
            Copyright © 2025 Toytopia. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
