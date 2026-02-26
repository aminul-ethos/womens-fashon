import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-matte-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-6">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-white">
                LUMIÈRE
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Redefining modern luxury with timeless elegance and sustainable
              craftsmanship.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white hover:text-gold transition-colors">

                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gold transition-colors">

                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gold transition-colors">

                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest mb-6 text-gold">
              Shop
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/products?sort=new"
                  className="text-gray-400 hover:text-white text-sm transition-colors">

                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-white text-sm transition-colors">

                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Casual"
                  className="text-gray-400 hover:text-white text-sm transition-colors">

                  Casual
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Party"
                  className="text-gray-400 hover:text-white text-sm transition-colors">

                  Occasion
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Luxury"
                  className="text-gray-400 hover:text-white text-sm transition-colors">

                  Luxury
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest mb-6 text-gold">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors">

                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors">

                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors">

                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors">

                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors">

                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest mb-6 text-gold">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-gray-700 text-white px-4 py-3 text-sm focus:border-gold outline-none transition-colors" />

              <button className="bg-white text-matte-black px-4 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gold hover:text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Lumière Fashion. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-xs">Terms of Service</span>
            <span className="text-gray-500 text-xs">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>);

}