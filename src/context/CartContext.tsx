import { createContext, useContext, useEffect, useState } from "react";
import {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} from "../features/cart/cartApi";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  isLoading: boolean;
  addToCart: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: cartData, isLoading, refetch } = useGetCartQuery(undefined);
  const [addToCartMutation] = useAddToCartMutation();
  const [removeFromCartMutation] = useRemoveFromCartMutation();

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (cartData) {
      setCart(cartData.items);
    }
  }, [cartData]);

  const addToCart = async (productId: string, quantity: number) => {
    await addToCartMutation({ productId, quantity });
    refetch();
  };

  const removeFromCart = async (productId: string) => {
    await removeFromCartMutation({ productId });
    refetch();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart.length,
        isLoading,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
