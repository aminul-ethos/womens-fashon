import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const categories = [
{
  id: 'casual',
  name: 'Casual Elegance',
  image:
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
  link: '/products?category=Casual'
},
{
  id: 'party',
  name: 'Evening & Party',
  image:
  'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=800&q=80',
  link: '/products?category=Party'
},
{
  id: 'luxury',
  name: 'Luxury Collection',
  image:
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
  link: '/products?category=Luxury'
}];

export function Categories() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-ivory" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">
            Shop by Category
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-8 md:mx-0 md:px-0 md:pb-0 md:overflow-visible scrollbar-hide">
          {categories.map((category, index) =>
          <Link
            key={category.id}
            to={category.link}
            className={`group relative overflow-hidden aspect-[3/4] md:aspect-[4/5] block w-[65vw] flex-shrink-0 snap-center md:w-auto md:flex-shrink md:snap-align-none ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              animationDelay: `${index * 0.2}s`
            }}>

              <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-block text-white text-xs uppercase tracking-widest border-b border-white pb-1 group-hover:text-gold group-hover:border-gold transition-colors">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}