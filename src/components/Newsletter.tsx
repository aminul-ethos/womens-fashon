import React from 'react';
export function Newsletter() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-ivory border-t border-gray-200">
      <div className="container-custom max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">
          Join the World of Lumière
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto">
          Subscribe to receive updates on new arrivals, special offers, and
          exclusive events.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white border border-gray-300 px-4 py-3 sm:px-6 sm:py-4 outline-none focus:border-gold transition-colors" />

          <button className="btn-primary whitespace-nowrap">Subscribe</button>
        </form>
      </div>
    </section>);

}