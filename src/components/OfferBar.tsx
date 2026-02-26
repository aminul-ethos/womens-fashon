import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { XIcon } from 'lucide-react';
export function OfferBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`relative w-full border-t border-gold/25 bg-ivory/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-30 ${isVisible && !isClosed ? 'opacity-100 translate-y-0 py-3.5' : 'opacity-0 -translate-y-full py-0 h-0 overflow-hidden'}`}>

      <div className="container-custom flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
        {/* Main text */}
        <span className="text-xs md:text-sm font-light tracking-wide text-matte-black">
          Enjoy up to 40% off selected dresses
        </span>

        <span className="hidden sm:inline mx-4 text-gold/40 text-xs">—</span>

        {/* Secondary text */}
        <span className="text-xs md:text-sm font-light tracking-wide text-gray-mid">
          Limited time offer
        </span>

        <span className="hidden sm:inline mx-4 text-gold/40 text-xs">—</span>

        {/* CTA */}
        <Link
          to="/products"
          className="text-xs md:text-sm uppercase tracking-widest font-medium text-matte-black border-b border-transparent hover:border-gold hover:text-gold transition-all duration-300">

          Shop Now
        </Link>

        {/* Close button */}
        <button
          onClick={() => setIsClosed(true)}
          className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-gray-mid hover:text-matte-black transition-colors"
          aria-label="Dismiss offer">

          <XIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>);

}