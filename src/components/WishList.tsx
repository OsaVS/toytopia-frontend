import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  useGetWishlistQuery,
  useRemoveFromWishlistMutation,
} from "../features/wishList/wishlistApi";
import { TP_BASE } from "../constants";
import Loader from "./Loader";
import { useCart } from "../context/CartContext";

const WishList = () => {
  const { data: wishlist, isLoading, refetch } = useGetWishlistQuery(undefined);
  const { cart, isLoading: cartLoading, addToCart, removeFromCart } = useCart();
  const [removeFromWishlist] = useRemoveFromWishlistMutation();

  const handleWishlistClick = async (productId: string) => {
    await removeFromWishlist(productId);
    refetch();
  };

  const isInCart = (productId: string) =>
    cart?.some((item: any) => item.productId === productId);

  const handleAddToCart = (productId: string) => {
    if (!isInCart(productId)) {
      addToCart(productId, 1);
    } else {
      removeFromCart(productId);
    }
  };

  if (isLoading || cartLoading) {
    return <Loader />;
  }

  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#6C7275", fontWeight: "bold" }}>
                Product
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#6C7275",
                  fontWeight: "bold",
                }}
              >
                Product Name
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "#6C7275", fontWeight: "bold" }}
              >
                Price
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "#6C7275", fontWeight: "bold" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishlist?.items.length ? (
              wishlist.items.map((item: any) => (
                <TableRow
                  key={item.productId}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    height: 60,
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "#141718" }}
                  >
                    <img
                      src={`${TP_BASE}${item.product?.mainImage}`}
                      alt={item.product?.name}
                      width={100}
                    />
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#141718",
                      maxWidth: 150,
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                    }}
                  >
                    {item.product.name} <br />
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#141718" }}>
                    Rs.{item.product.price}.00
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#141718",
                      maxWidth: 100,
                    }}
                  >
                    <div className="grid items-center gap-4">
                      <button
                        className={`bg-grn text-sm text-center p-2 rounded-lg hover:bg-black ${
                          isInCart(item.product._id)
                            ? "bg-white text-black border-2 hover:text-white"
                            : "text-white"
                        }`}
                        onClick={() => handleAddToCart(item.product._id)}
                      >
                        {isInCart(item.product._id)
                          ? "Remove from Cart"
                          : "Add to Cart"}
                      </button>
                      <button
                        className="bg-red-600 text-sm text-center p-2 rounded-lg hover:bg-black text-white"
                        onClick={() => handleWishlistClick(item.product._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  colSpan={4}
                  align="center"
                  sx={{ py: 3, fontSize: "1.2rem", color: "#6C7275" }}
                >
                  Your wishlist is empty 😔
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default WishList;
