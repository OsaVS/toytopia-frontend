import { useState } from "react";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const DiscountBar = () => {
  const [showBar, setShowBar] = useState<boolean>(true);

  const toggleShowBar = () => {
    setShowBar(false);
  };

  return (
    <>
      {showBar ? (
        <div className="h-10 w-full bg-grn relative flex items-center justify-center">
          <div className="flex items-center justify-center">
            <DiscountOutlinedIcon sx={{ fontSize: 16 }} />
            <p className="pl-2 text-sm">30% off storewide — Limited time!</p>
            <div className="xs:hidden md:flex items-center border-b-2 border-black hover:cursor-pointer">
              <p className="pl-2 text-sm">Shop Now</p>
              <ArrowForwardOutlinedIcon sx={{ fontSize: 16 }} />
            </div>
          </div>
          <div className="absolute right-10 hover:cursor-pointer">
            <CloseOutlinedIcon sx={{ fontSize: 18 }} onClick={toggleShowBar} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DiscountBar;
