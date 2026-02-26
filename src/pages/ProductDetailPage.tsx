import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HeartIcon, MinusIcon, PlusIcon, Share2Icon } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { PageTransition } from '../components/PageTransition';
import { CollectionGrid } from '../components/CollectionGrid';
export function ProductDetailPage() {
  const { id } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem, setIsCartOpen } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  useEffect(() => {
    if (!product) {
      navigate('/products');
    } else {
      // Reset state when product changes
      setSelectedSize('');
      setQuantity(1);
      setActiveImage(0);
    }
  }, [product, navigate]);
  if (!product) return null;
  const isLiked = isInWishlist(product.id);
  const relatedProducts = products.
  filter((p) => p.category === product.category && p.id !== product.id).
  slice(0, 4);
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addItem(product, selectedSize, quantity);
    setIsCartOpen(true);
  };
  const handleWishlistToggle = () => {
    if (isLiked) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  return (
    <PageTransition>
      <div className="pt-28 pb-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover animate-fade-in" />

              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) =>
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-[3/4] bg-gray-100 overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-matte-black' : 'border-transparent hover:border-gray-300'}`}>

                    <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover" />

                  </button>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-widest">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif mb-4 text-matte-black">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl font-medium">${product.price}</span>
                {product.originalPrice &&
                <span className="text-lg text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                }
              </div>

              <div className="prose prose-sm text-gray-600 mb-8">
                <p>{product.description}</p>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium uppercase tracking-widest">
                    Size
                  </span>
                  <button className="text-xs text-gray-500 underline hover:text-black">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) =>
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border transition-all ${selectedSize === size ? 'bg-matte-black text-white border-matte-black' : 'bg-white text-matte-black border-gray-300 hover:border-matte-black'}`}>

                      {size}
                    </button>
                  )}
                </div>
                {!selectedSize &&
                <p className="text-red-500 text-xs mt-2 animate-fade-in">
                    * Please select a size
                  </p>
                }
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 mb-8">
                <div className="flex items-center border border-gray-300 w-32">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-12 flex items-center justify-center hover:bg-gray-100">

                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-12 flex items-center justify-center hover:bg-gray-100">

                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`flex-1 py-3 px-6 uppercase tracking-widest text-sm font-medium transition-all ${selectedSize ? 'bg-matte-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>

                  Add to Cart
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-matte-black transition-colors">

                  <HeartIcon
                    className={`w-5 h-5 ${isLiked ? 'fill-matte-black text-matte-black' : 'text-matte-black'}`} />

                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>In stock, ready to ship</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Share2Icon className="w-4 h-4" />
                  <button className="hover:text-black hover:underline">
                    Share this product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 &&
      <div className="bg-ivory border-t border-gray-200">
          <CollectionGrid
          title="You May Also Like"
          products={relatedProducts} />

        </div>
      }
    </PageTransition>);

}