import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
export function Hero() {
  // Countdown Timer Logic
  const targetRef = useRef(Date.now() + 48 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  useEffect(() => {
    const tick = () => {
      const remaining = targetRef.current - Date.now();
      if (remaining <= 0) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        setIsExpired(true);
        return;
      }
      const totalSeconds = Math.floor(remaining / 1000);
      setTimeLeft({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor(totalSeconds % 3600 / 60),
        seconds: totalSeconds % 60
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <section className="relative min-h-[75vh] sm:min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
          alt="Luxury Fashion Hero"
          className="w-full h-full object-cover object-top" />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Grid */}
      <div className="relative container-custom w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Hero Text */}
          <div className="max-w-2xl text-white animate-fade-in-up text-center lg:text-left mx-auto lg:mx-0 pb-24 lg:pb-0">
            <span className="inline-block text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-white/90">
              New Collection 2024
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
              Elegance in <br />
              <span className="italic">Every Detail</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-md font-light mx-auto lg:mx-0">
              Discover our latest collection of luxury dresses, designed for the
              modern woman who appreciates timeless style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="bg-white text-matte-black px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gold hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">

                Shop Collection <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="hidden sm:inline-block border border-white text-white px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-white hover:text-matte-black transition-colors duration-300 text-center">

                Our Story
              </Link>
            </div>
          </div>

          {/* Right Column: Frosted Glass Offer Card (Desktop) */}
          <div
            className="hidden lg:block w-full max-w-md mx-auto lg:ml-auto lg:mr-0 animate-fade-in-up"
            style={{
              animationDelay: '0.3s'
            }}>

            <div className="bg-white/15 backdrop-blur-xl rounded-3xl border border-white/25 shadow-2xl p-8 lg:p-10 text-center">
              {/* Label */}
              <p className="text-white/70 uppercase tracking-[0.25em] text-[10px] sm:text-xs font-medium mb-6">
                Start the Season Fresh
              </p>

              {/* Big Discount */}
              <div className="flex items-baseline justify-center gap-3 mb-4">
                <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none">
                  30%
                </span>
                <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white/80 leading-none">
                  OFF
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-white/65 text-sm font-light leading-relaxed max-w-xs mx-auto mb-3">
                Timeless pieces crafted for modern elegance
              </p>

              {/* Promo Code */}
              <p className="text-white/50 text-xs tracking-widest uppercase mb-8">
                Use code{' '}
                <span className="text-white/80 font-medium bg-white/10 px-2.5 py-1 rounded-md ml-1">
                  SEASON30
                </span>
              </p>

              {/* Thin divider */}
              <div className="w-12 h-px bg-white/20 mx-auto mb-8" />

              {/* Countdown Timer */}
              <div className="mb-8">
                <p className="text-white/50 uppercase tracking-[0.2em] text-[10px] mb-4">
                  {isExpired ? 'Offer has ended' : 'Offer ends in'}
                </p>
                <div className="flex items-center justify-center gap-3">
                  {/* Hours */}
                  <div className="bg-white/10 rounded-xl px-4 py-2.5 min-w-[60px]">
                    <span
                      className="block text-2xl md:text-3xl font-light text-white tracking-wider"
                      style={{
                        fontVariantNumeric: 'tabular-nums'
                      }}>

                      {pad(timeLeft.hours)}
                    </span>
                    <span className="block text-[9px] uppercase tracking-widest text-white/40 mt-1">
                      Hours
                    </span>
                  </div>

                  <span className="text-xl text-white/30 font-extralight -mt-3">
                    :
                  </span>

                  {/* Minutes */}
                  <div className="bg-white/10 rounded-xl px-4 py-2.5 min-w-[60px]">
                    <span
                      className="block text-2xl md:text-3xl font-light text-white tracking-wider"
                      style={{
                        fontVariantNumeric: 'tabular-nums'
                      }}>

                      {pad(timeLeft.minutes)}
                    </span>
                    <span className="block text-[9px] uppercase tracking-widest text-white/40 mt-1">
                      Mins
                    </span>
                  </div>

                  <span className="text-xl text-white/30 font-extralight -mt-3">
                    :
                  </span>

                  {/* Seconds */}
                  <div className="bg-white/10 rounded-xl px-4 py-2.5 min-w-[60px]">
                    <span
                      className="block text-2xl md:text-3xl font-light text-white tracking-wider"
                      style={{
                        fontVariantNumeric: 'tabular-nums'
                      }}>

                      {pad(timeLeft.seconds)}
                    </span>
                    <span className="block text-[9px] uppercase tracking-widest text-white/40 mt-1">
                      Secs
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              {isExpired ?
              <span className="inline-block px-8 py-3 bg-white/10 text-white/40 rounded-full uppercase tracking-widest text-xs font-medium cursor-not-allowed">
                  Offer Ended
                </span> :

              <Link
                to="/products"
                className="inline-block px-10 py-3.5 bg-white text-matte-black rounded-full uppercase tracking-widest text-xs font-medium hover:bg-gold hover:text-white transition-all duration-500 hover:shadow-lg hover:shadow-gold/20">

                  Shop Now
                </Link>
              }
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Offer Strip (Absolute Bottom) */}
      <div className="lg:hidden absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-white/15 backdrop-blur-xl rounded-2xl border border-white/25 px-4 py-3 flex flex-row items-center justify-between">
          {/* Left: Discount */}
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-2xl font-bold text-white leading-none">
              30%
            </span>
            <span className="font-serif text-lg font-light text-white/80 leading-none">
              OFF
            </span>
          </div>

          {/* Center: Countdown */}
          <div className="text-sm font-light text-white tabular-nums">
            {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:
            {pad(timeLeft.seconds)}
          </div>

          {/* Right: CTA */}
          <Link
            to="/products"
            className="text-[10px] px-4 py-2 bg-white text-matte-black rounded-full uppercase tracking-widest font-medium">

            Shop Now
          </Link>
        </div>
      </div>
    </section>);

}