import DoneIcon from "@mui/icons-material/Done";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from "../features/order/orderApi";

const OrderComplete = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { data, isLoading } = useGetOrderByIdQuery(orderId);

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20 mb-10 mr-8 ml-8 md:mx-20">
        <div className="flex justify-center items-center text-4xl font-semibold pb-9">
          Complete!
        </div>
        <div className="flex flex-row w-full sd:justify-between xl:grid xl:grid-cols-3 gap-4 ">
          <div className="hidden md:flex items-center text-left gap-4 md:gap-2 xl:gap-4 pb-6 pr-8 mm:pr-20 md:pr-8 lg:pr-20 xl:pr-14 text-black border-green-500 border-b-2 text-sm">
            <div className="flex w-10 h-10 rounded-full bg-green-500 justify-center items-center text-white">
              <DoneIcon />{" "}
            </div>{" "}
            <span className="xl:text-xl text-green-500">Shopping cart</span>
          </div>
          <div className="hidden md:flex items-center text-left gap-4 md:gap-2 xl:gap-4 pb-6 pr-8 mm:pr-20 md:pr-8 lg:pr-20 xl:pr-14 text-black border-green-500 border-b-2 text-sm">
            <div className="flex w-10 h-10 rounded-full bg-green-500 justify-center items-center text-white">
              <DoneIcon />{" "}
            </div>
            <span className="xl:text-xl text-green-500">Checkout details</span>
          </div>
          <div className="flex items-center text-left gap-4 md:gap-2 xl:gap-4 pb-6 pr-8 mm:pr-20 md:pr-8 lg:pr-20 xl:pr-14 text-black border-black border-b-2 text-sm">
            <div className="flex w-10 h-10 rounded-full bg-black justify-center items-center text-white">
              3
            </div>
            <span className="xl:text-xl">Order complete</span>
          </div>
        </div>

        <div className="flex flex-col text-left pl-4 pr-4 sd:pt-0 sd:justify-center sd:items-center mt-10 w-[95%] sd:w-[60%] shadow-lg sd:shadow-2xl">
          <span className="text-gray-400 text-sm pt-4 pb-2">Thank you!</span>
          <span className="font-semibold text-xl">Your order has been</span>
          <span className="font-semibold text-xl">successfully placed</span>

          <div className=" sd:p-4 rounded-lg mt-4 w-full sd:w-[70%] text-sm">
            <div className="flex flex-col pb-2 pt-2 border-b-2 border-gray-300 sd:pb-0 sd:flex-row sd:justify-between sd:border-0">
              <span className="text-gray-500">Order number:</span>
              <span className="pt-1 sd:p-0">{data?.orderNumber}</span>
            </div>
            <div className="flex flex-col pb-2 pt-2 border-b-2 border-gray-300 sd:pb-0 sd:flex-row sd:justify-between sd:border-0">
              <span className="text-gray-500">Order date:</span>
              <span className="pt-1 sd:p-0">
                {new Date(data?.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex flex-col pb-2 pt-2 border-b-2 border-gray-300 sd:pb-0 sd:flex-row sd:justify-between sd:border-0">
              <span className="text-gray-500">Total:</span>
              <span className="pt-1 sd:p-0">Rs. {data?.subTotal}.00</span>
            </div>
            <div className="flex flex-col pb-2 pt-2 border-b-2 border-gray-300 sd:pb-0 sd:flex-row sd:justify-between sd:border-0">
              <span className="text-gray-500">Payment method:</span>
              <span className="pt-1 sd:p-0">
                {data?.paymentMethod === "creditcard"
                  ? "Credit Card"
                  : "Cash on Delivery"}
              </span>
            </div>
          </div>

          <button
            className="bg-black text-white text-sm pr-5 pl-5 pt-3 pb-3 rounded-full mt-8 sd:mt-4 mb-10"
            onClick={() => navigate("/profile?section=Orders")}
          >
            Purchase history
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
