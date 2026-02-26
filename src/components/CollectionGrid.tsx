import React from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
interface CollectionGridProps {
  title: string;
  products: Product[];
}
export function CollectionGrid({ title, products }: CollectionGridProps) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="flex justify-between items-end mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif">
            {title}
          </h2>
          <a
            href="/products"
            className="text-xs sm:text-sm uppercase tracking-widest border-b border-matte-black pb-1 hover:text-gold hover:border-gold transition-colors">

            View All
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-4 sm:gap-x-6 sm:gap-y-8 lg:gap-x-8 lg:gap-y-12">
          {products.map((product, index) =>
          <div
            key={product.id}
            className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
            style={{
              animationDelay: `${index * 0.1}s`
            }}>

              <ProductCard product={product} />
            </div>
          )}
        </div>
      </div>
    </section>);

}