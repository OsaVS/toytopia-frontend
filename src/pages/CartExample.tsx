import Loader from "../components/Loader";
import { TP_BASE } from "../constants";
import {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} from "../features/cart/cartApi";
import DeleteIcon from "@mui/icons-material/Delete";

const CartExample = () => {
  const { data: cart, error, isLoading, refetch } = useGetCartQuery(undefined);
  const [addToCart] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();

  const handleAddToCart = async (productId: string, quantity: number) => {
    await addToCart({ productId, quantity });
    refetch();
  };

  const handleRemoveFromCart = async (productId: string) => {
    await removeFromCart({ productId });
    refetch();
  };

  const calculateTotal = () => {
    return cart?.items?.reduce((total: number, item: any) => {
      const itemPrice = item.product?.price || 0; 
      return total + itemPrice * item.quantity;
    }, 0);
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading cart</p>;

  const totalAmount = calculateTotal(); 

  return (
    <div className="mb-40">
      <h1>Shopping Cart</h1>
      {cart?.items?.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart?.items?.map((item: any) => (
            <li key={item.productId}>
              <img
                src={`${TP_BASE}${item.product?.mainImage}`}
                alt={item.product?.name}
                width={200}
              />
              <p>
                {item.product?.name} - {item.quantity}x - {item.product?.price}
              </p>
              <button
                className="py-1 px-3 bg-black text-white mr-5"
                onClick={() => handleAddToCart(item.productId, 1)}
              >
                +
              </button>
              <button
                className="py-1 px-3 bg-black text-white mr-5"
                onClick={() =>
                  item.quantity > 1
                    ? handleAddToCart(item.productId, -1)
                    : handleRemoveFromCart(item.productId)
                }
              >
                -
              </button>
              <button onClick={() => handleRemoveFromCart(item.productId)}>
                <DeleteIcon style={{ color: "red" }} />
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart?.items?.length > 0 && (
        <div>
          <h2>Total: ${totalAmount.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default CartExample;
