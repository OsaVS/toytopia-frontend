import { TP_BASE } from "../constants";
import { useGetCartQuery } from "../features/cart/cartApi";
import Loader from "./Loader";

const OrderSummary = () => {
  const subTotal = sessionStorage.getItem("subTotal");
  const total = sessionStorage.getItem("total");
  const shippingCost = sessionStorage.getItem("shippingCost");
  const { data: cart, isLoading } = useGetCartQuery(undefined);

  if (isLoading) return <Loader />;
  
  return (
    <div className="border-2 border-gray-400 p-4 rounded-lg ">
      <span className="lg:text-xl font-bold">Order Summary</span>
      <div className="flex flex-col pt-4">
        {cart?.items?.map((item: any) => (
          <div
            key={item.productId}
            className="flex flex-row border-b border-gray-300 pt-4 pb-4 w-full"
          >
            <div className="flex flex-row justify-between items-center gap-4 w-full">
              <div className="flex flex-row">
                <img
                  src={`${TP_BASE}${item.product?.mainImage}`}
                  alt={cart.title}
                  className="w-20 h-20"
                />

                <div className="flex flex-col gap-2">
                  <div>{item.product?.name}</div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm">Quantity:</span>
                      <span>{item?.quantity}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>Rs.{item.product?.price * item?.quantity}.00</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col pt-4">
        <div className="flex flex-row justify-between pt-4 border-b border-gray-300">
          <div>Shipping</div>
          {shippingCost === "0" ? (
            <div>Free</div>
          ) : Number(shippingCost) < 0 ? (
            <div className="text-green-500">
              -Rs.{Math.abs(Number(shippingCost)).toFixed(2)}
            </div>
          ) : (
            <div className="text-red-600">+Rs.{shippingCost}.00</div>
          )}
        </div>
        <div className="flex flex-row justify-between pt-4 border-b border-gray-300">
          <div>Subtotal</div>
          <div>Rs.{subTotal}.00</div>
        </div>
        <div className="flex flex-row justify-between pt-4 font-bold">
          <div>Total</div>
          <div>Rs.{total}.00</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
