import { TP_BASE } from "../constants";
import ClearIcon from "@mui/icons-material/Clear";
import CartSummary from "../components/CartSummary";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";

const ShoppingCart = () => {
  const { cart, isLoading, addToCart, removeFromCart } = useCart();

  const handleAddToCart = async (productId: string, quantity: number) => {
    await addToCart(productId, quantity);
  };

  const handleRemoveFromCart = async (productId: string) => {
    await removeFromCart(productId);
  };

  const calculateTotal = () => {
    return cart?.reduce((total: number, item: any) => {
      const itemPrice = item.product?.price || 0;
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const totalAmount = calculateTotal();

  if (isLoading) return <Loader />;

  return (
    <div className="px-10 sd:px-16 md:px-20">
      <div className="flex flex-col mt-14 mb-10 px-0 lg:px-5">
        <div className="flex justify-center items-center text-4xl font-semibold pb-9">
          Cart
        </div>
        <div className="flex flex-row w-full justify-between xl:grid xl:grid-cols-3 gap-4">
          <div className="flex items-center text-left gap-4 md:gap-2 xl:gap-4 pb-6 pr-8 mm:pr-20 md:pr-8 lg:pr-14 text-black border-black border-b-2 text-sm">
            <div className="flex w-10 h-10 rounded-full bg-black justify-center items-center text-white">
              1
            </div>{" "}
            <span className="xl:text-xl">Shopping cart</span>
          </div>
          <div className="flex items-center text-left text-gray-300 gap-4 md:gap-2 xl:gap-4 pb-6 md:pr-8 lg:pr-14 text-sm">
            <div className="flex w-10 h-10 rounded-full bg-gray-300 justify-center items-center text-white">
              2
            </div>
            <span className="hidden md:block xl:text-xl">Checkout details</span>
          </div>
          <div className="hidden md:flex items-center text-left text-gray-300 gap-4 md:gap-2 xl:gap-4 pb-6 md:pr-8 pr-14 text-sm">
            <div className="flex w-10 h-10 rounded-full bg-gray-300 justify-center items-center text-white">
              3
            </div>
            <span className="xl:text-xl">Order complete</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-[60%] 2xl:w-[60%] md:mt-4 md:mr-2 xl:m-4">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left pb-4 font-semibold lg:pr-10">
                  Product
                </th>
                <th className="hidden xl:table-cell text-left pb-4 font-semibold">
                  Quantity
                </th>
                <th className="hidden sd:table-cell text-center pb-4 md:px-4 font-semibold">
                  Price
                </th>
                <th className="hidden sd:table-cell text-right md:pl-4 whitespace-nowrap pb-4 font-semibold">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.length === 0 ? (
                <td colSpan={4} className="text-center pt-5">
                  Your cart is empty
                </td>
              ) : (
                cart?.map((item: any) => (
                  <tr key={item.productId} className="border-b border-gray-400">
                    <td className="text-left py-4 2xl:w-[45%]">
                      <div className="flex xs:flex-col md:flex-row items-center gap-4">
                        <img
                          src={`${TP_BASE}${item.product?.mainImage}`}
                          width={100}
                          height={100}
                        ></img>
                        <div className="flex flex-col">
                          <div className="md:text-sm xl:text-base">
                            {item.product?.name}
                          </div>
                          <div className="xl:hidden flex items-center justify-between w-[110px] md:w-[70px] rounded-lg p-2 space-x-2 border-2 border-gray-400 mt-4">
                            <button
                              className="text-gray-500"
                              onClick={() =>
                                item.quantity > 1
                                  ? handleAddToCart(item.productId, -1)
                                  : handleRemoveFromCart(item.productId)
                              }
                            >
                              -
                            </button>
                            <span className="text-black md:text-xs">
                              {item.quantity}
                            </span>
                            <button
                              className="text-gray-500"
                              onClick={() => handleAddToCart(item.productId, 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="hidden xl:flex items-center justify-center py-4">
                      <div className="flex items-center justify-between xl:w-[90%] rounded-lg p-2 space-x-2 border-2 border-gray-400 mt-4">
                        <button
                          className="text-gray-500"
                          onClick={() =>
                            item.quantity > 1
                              ? handleAddToCart(item.productId, -1)
                              : handleRemoveFromCart(item.productId)
                          }
                        >
                          -
                        </button>
                        <span className="text-black">{item.quantity}</span>
                        <button
                          className="text-gray-500"
                          onClick={() => handleAddToCart(item.productId, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="text-right sd:text-center py-4">
                      <div className="flex flex-col md:text-sm xl:text-base">
                        <div>Rs.{item.product?.price}.00</div>
                        <div className="sd:hidden">
                          <ClearIcon
                            sx={{
                              color: "red",
                              "&:hover": { cursor: "pointer" },
                            }}
                            onClick={() => handleRemoveFromCart(item.productId)}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="hidden sd:table-cell text-right py-4 md:text-sm xl:text-base">
                      Rs.{item.product?.price * item.quantity}.00
                    </td>
                    <td className="hidden sd:table-cell text-right py-4">
                      <ClearIcon
                        sx={{ color: "red", "&:hover": { cursor: "pointer" } }}
                        onClick={() => handleRemoveFromCart(item.productId)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col w-full lg:w-[40%] 2xl:w-[40%] pt-14 pb-14 lg:pt-0 lg:m-0">
          <CartSummary subTotal={totalAmount} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
