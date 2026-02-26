import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export function About() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-beige/30" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-center">
          <div
            className={`order-2 md:order-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

            <div className="aspect-[16/9] sm:aspect-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80"
                alt="Fashion Model"
                className="w-full h-full object-cover shadow-xl" />

            </div>
          </div>
          <div
            className={`order-1 md:order-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              animationDelay: '0.2s'
            }}>

            <span className="text-gold uppercase tracking-widest text-xs sm:text-sm font-medium mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
              Timeless Design for <br />
              <span className="italic text-gray-600">Modern Living</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              At Lumière, we believe that true luxury lies in simplicity and
              craftsmanship. Each piece in our collection is thoughtfully
              designed to transcend trends, offering a timeless aesthetic that
              celebrates the modern woman.
            </p>
            <p className="hidden sm:block text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
              We source the finest fabrics from around the world and work with
              skilled artisans to create garments that not only look beautiful
              but feel exceptional to wear.
            </p>
            <button className="btn-secondary mb-0">Read Our Story</button>
          </div>
        </div>
      </div>
    </section>);

}