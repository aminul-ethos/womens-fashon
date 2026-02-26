import React from 'react';
import {
  XIcon,
  MinusIcon,
  PlusIcon,
  Trash2Icon,
  ArrowRightIcon } from
'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    subtotal
  } = useCart();
  if (!isCartOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)} />


      {/* Drawer */}
      <div className="relative w-full max-w-md bg-ivory h-full shadow-2xl flex flex-col animate-slide-in-right">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-white">
          <h2 className="text-xl font-serif font-medium text-matte-black">
            Shopping Bag ({items.length})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors">

            <XIcon className="w-5 h-5 text-matte-black" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ?
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center">
                <ShoppingBagIcon className="w-8 h-8 text-matte-black/50" />
              </div>
              <p className="text-gray-500">Your bag is empty</p>
              <button
              onClick={() => setIsCartOpen(false)}
              className="text-matte-black border-b border-matte-black pb-0.5 hover:text-gold hover:border-gold transition-colors">

                Continue Shopping
              </button>
            </div> :

          items.map((item) =>
          <div
            key={`${item.product.id}-${item.size}`}
            className="flex gap-4">

                <div className="w-20 h-28 bg-gray-100 flex-shrink-0">
                  <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-full h-full object-cover" />

                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-matte-black">
                        {item.product.name}
                      </h3>
                      <p className="font-medium text-matte-black">
                        ${item.product.price * item.quantity}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Size: {item.size}
                    </p>
                    <p className="text-sm text-gray-500">
                      Color: {item.product.colors[0]}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-gray-300">
                      <button
                    onClick={() =>
                    updateQuantity(
                      item.product.id,
                      item.size,
                      item.quantity - 1
                    )
                    }
                    className="p-1.5 hover:bg-gray-100 transition-colors"
                    disabled={item.quantity <= 1}>

                        <MinusIcon className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                    onClick={() =>
                    updateQuantity(
                      item.product.id,
                      item.size,
                      item.quantity + 1
                    )
                    }
                    className="p-1.5 hover:bg-gray-100 transition-colors">

                        <PlusIcon className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                  onClick={() => removeItem(item.product.id, item.size)}
                  className="text-gray-400 hover:text-red-500 transition-colors">

                      <Trash2Icon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
          )
          }
        </div>

        {items.length > 0 &&
        <div className="p-6 border-t border-gray-200 bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-xl font-serif font-medium text-matte-black">
                ${subtotal}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-6 text-center">
              Shipping and taxes calculated at checkout.
            </p>
            <Link
            to="/checkout"
            onClick={() => setIsCartOpen(false)}
            className="w-full btn-primary flex items-center justify-center gap-2">

              Checkout <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        }
      </div>
    </div>);

}
function ShoppingBagIcon({ className }: {className?: string;}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>

      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>);

}