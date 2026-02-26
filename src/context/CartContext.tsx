import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product } from '../data/products';
export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}
interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: string, quantity?: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: {children: ReactNode;}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from local storage');
      }
    }
  }, []);
  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  const addItem = (product: Product, size: string, quantity = 1) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        return [
        ...prevItems,
        {
          product,
          size,
          quantity
        }];

      }
    });
    setIsCartOpen(true);
  };
  const removeItem = (productId: string, size: string) => {
    setItems((prevItems) =>
    prevItems.filter(
      (item) => !(item.product.id === productId && item.size === size)
    )
    );
  };
  const updateQuantity = (
  productId: string,
  size: string,
  quantity: number) =>
  {
    if (quantity < 1) return;
    setItems((prevItems) =>
    prevItems.map((item) =>
    item.product.id === productId && item.size === size ?
    {
      ...item,
      quantity
    } :
    item
    )
    );
  };
  const clearCart = () => {
    setItems([]);
  };
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        totalItems,
        isCartOpen,
        setIsCartOpen
      }}>

      {children}
    </CartContext.Provider>);

}
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}