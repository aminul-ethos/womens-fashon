import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product } from '../data/products';
interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}
const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);
export function WishlistProvider({ children }: {children: ReactNode;}) {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Failed to parse wishlist from local storage');
      }
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);
  const addToWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };
  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
  };
  const isInWishlist = (productId: string) => {
    return wishlistItems.some((item) => item.id === productId);
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
      }}>

      {children}
    </WishlistContext.Provider>);

}
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}