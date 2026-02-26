import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBagIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
  HeartIcon,
  UserIcon,
  LogOutIcon,
  PackageIcon,
  SettingsIcon } from
'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { SearchBar } from './SearchBar';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistItems } = useWishlist();
  const { user, isAuthenticated, logout, setIsAuthModalOpen } = useAuth();
  const location = useLocation();
  const profileRef = useRef<HTMLDivElement>(null);
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [location]);
  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
      profileRef.current &&
      !profileRef.current.contains(event.target as Node))
      {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const handleProfileClick = () => {
    if (isAuthenticated) {
      setIsProfileOpen(!isProfileOpen);
    } else {
      setIsAuthModalOpen(true);
    }
  };
  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Shop',
    path: '/products'
  },
  {
    name: 'Collection',
    path: '/products?category=Luxury'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'}`}>

        <div className="container-custom grid grid-cols-3 items-center">
          {/* Left: Logo & Mobile Menu */}
          <div className="flex items-center justify-start">
            <button
              className="lg:hidden p-2 -ml-2 mr-2 sm:mr-4"
              onClick={() => setIsMobileMenuOpen(true)}>

              <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6 text-matte-black" />
            </button>
            <Link to="/" className="block">
              <h1 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-matte-black">
                LUMIÈRE
              </h1>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className="text-sm uppercase tracking-widest font-medium text-matte-black hover:text-gold transition-colors relative group">

                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            )}
          </nav>

          {/* Right: Icons */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 sm:p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Search">

              <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 text-matte-black" />
            </button>

            <Link
              to="/wishlist"
              className="p-1.5 sm:p-2 hover:bg-black/5 rounded-full transition-colors relative hidden sm:block"
              aria-label="Wishlist">

              <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-matte-black" />
              {wishlistItems.length > 0 &&
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full" />
              }
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1.5 sm:p-2 hover:bg-black/5 rounded-full transition-colors relative"
              aria-label="Cart">

              <ShoppingBagIcon className="w-4 h-4 sm:w-5 sm:h-5 text-matte-black" />
              {totalItems > 0 &&
              <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-matte-black text-white text-[10px] flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              }
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={handleProfileClick}
                className="p-1.5 sm:p-2 hover:bg-black/5 rounded-full transition-colors flex items-center gap-2"
                aria-label="Profile">

                <UserIcon
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${isAuthenticated ? 'text-matte-black' : 'text-matte-black'}`} />

              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && isAuthenticated &&
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                  <div className="px-4 py-2 border-b border-gray-100 mb-2">
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="text-sm font-medium truncate">{user?.name}</p>
                  </div>

                  <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold transition-colors">

                    <SettingsIcon className="w-4 h-4" /> Profile
                  </Link>
                  <Link
                  to="/orders"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold transition-colors">

                    <PackageIcon className="w-4 h-4" /> Orders
                  </Link>

                  <div className="border-t border-gray-100 my-2" />

                  <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors text-left">

                    <LogOutIcon className="w-4 h-4" /> Logout
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)} />


      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-ivory z-50 transform transition-transform duration-300 ease-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="font-serif text-xl font-bold">MENU</h2>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 flex flex-col gap-6">
          {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            className="text-lg font-serif text-matte-black"
            onClick={() => setIsMobileMenuOpen(false)}>

              {link.name}
            </Link>
          )}
          <div className="h-px bg-gray-200 my-2" />
          <Link
            to="/wishlist"
            className="text-lg font-serif text-matte-black flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}>

            <HeartIcon className="w-5 h-5" /> Wishlist
          </Link>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleProfileClick();
            }}
            className="text-lg font-serif text-matte-black flex items-center gap-3 text-left">

            <UserIcon className="w-5 h-5" />{' '}
            {isAuthenticated ? 'My Account' : 'Log In / Sign Up'}
          </button>
        </div>
      </div>

      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>);

}