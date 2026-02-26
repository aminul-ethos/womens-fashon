import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, ShoppingBagIcon } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
interface ProductCardProps {
  product: Product;
}
export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { requireAuth } = useAuth();
  const isLiked = isInWishlist(product.id);
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    requireAuth(() => {
      if (isLiked) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product);
      }
    });
  };
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    requireAuth(() => {
      // Default to first available size for quick add
      if (product.sizes.length > 0) {
        addItem(product, product.sizes[0]);
      }
    });
  };
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div
        className="relative overflow-hidden bg-gray-100 aspect-[2/3] sm:aspect-[3/4] mb-2 sm:mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>

        {/* Image Swap */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'}`} />

        {product.images[1] &&
        <img
          src={product.images[1]}
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

        }

        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-2">
          {product.isNew &&
          <span className="bg-white/90 backdrop-blur-sm text-matte-black text-[10px] uppercase tracking-widest px-1.5 py-0.5 sm:px-2 sm:py-1 font-medium">
              New
            </span>
          }
          {product.isBestseller &&
          <span className="bg-matte-black/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-1.5 py-0.5 sm:px-2 sm:py-1 font-medium">
              Bestseller
            </span>
          }
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors z-10"
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}>

          <HeartIcon
            className={`w-4 h-4 transition-colors ${isLiked ? 'fill-matte-black text-matte-black' : 'text-matte-black'}`} />

        </button>

        {/* Quick Add Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-2 sm:p-4 translate-y-full transition-transform duration-300 ease-out ${isHovered ? 'translate-y-0' : ''}`}>

          <button
            onClick={handleQuickAdd}
            className="w-full bg-white/95 backdrop-blur-sm text-matte-black py-3 uppercase text-xs tracking-widest font-medium hover:bg-matte-black hover:text-white transition-colors flex items-center justify-center gap-2">

            <ShoppingBagIcon className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-[11px] sm:text-sm font-medium text-matte-black font-serif tracking-wide group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <p className="hidden sm:block text-xs text-gray-500 mt-1">
            {product.category}
          </p>
        </div>
        <div className="text-right">
          <div className="flex flex-col items-end">
            {product.originalPrice &&
            <span className="text-xs text-gray-400 line-through mb-0.5">
                ${product.originalPrice}
              </span>
            }
            <span className="text-[11px] sm:text-sm font-medium text-matte-black">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>);

}