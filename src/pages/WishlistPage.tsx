import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/ProductCard';
import { PageTransition } from '../components/PageTransition';
import { HeartIcon } from 'lucide-react';
export function WishlistPage() {
  const { wishlistItems } = useWishlist();
  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-[60vh] bg-ivory">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif mb-4">Your Wishlist</h1>
            <p className="text-gray-600">
              {wishlistItems.length}{' '}
              {wishlistItems.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>

          {wishlistItems.length > 0 ?
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {wishlistItems.map((product) =>
            <ProductCard key={product.id} product={product} />
            )}
            </div> :

          <div className="text-center py-16 bg-white rounded-sm shadow-sm max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h2 className="text-2xl font-serif mb-4">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 mb-8">
                Save your favorite items to track their availability and shop
                them later.
              </p>
              <Link to="/products" className="btn-primary inline-block">
                Start Shopping
              </Link>
            </div>
          }
        </div>
      </div>
    </PageTransition>);

}