import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PageTransition } from '../components/PageTransition';
import { CheckCircleIcon } from 'lucide-react';
export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>(
    'shipping'
  );
  const [isLoading, setIsLoading] = useState(false);
  const shippingCost = 15;
  const total = subtotal + shippingCost;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (step === 'shipping') {
        setStep('payment');
      } else {
        setStep('success');
        clearCart();
      }
    }, 1500);
  };
  if (items.length === 0 && step !== 'success') {
    return (
      <PageTransition>
        <div className="pt-32 pb-20 container-custom text-center">
          <h1 className="text-3xl font-serif mb-6">Your bag is empty</h1>
          <Link to="/products" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </PageTransition>);

  }
  if (step === 'success') {
    return (
      <PageTransition>
        <div className="pt-32 pb-20 container-custom text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-fade-in-up">
            <CheckCircleIcon className="w-10 h-10 text-green-600" />
          </div>
          <h1
            className="text-4xl font-serif mb-4 animate-fade-in-up"
            style={{
              animationDelay: '0.1s'
            }}>

            Thank You!
          </h1>
          <p
            className="text-gray-600 mb-8 animate-fade-in-up"
            style={{
              animationDelay: '0.2s'
            }}>

            Your order #LUM-{Math.floor(Math.random() * 10000)} has been placed
            successfully. <br />
            We've sent a confirmation email with details.
          </p>
          <Link
            to="/"
            className="btn-primary inline-block animate-fade-in-up"
            style={{
              animationDelay: '0.3s'
            }}>

            Return Home
          </Link>
        </div>
      </PageTransition>);

  }
  return (
    <PageTransition>
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form Section */}
            <div className="flex-1">
              <div className="bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                  <div
                    className={`flex items-center gap-2 ${step === 'shipping' ? 'text-matte-black font-medium' : 'text-gray-400'}`}>

                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs">
                      1
                    </span>
                    <span>Shipping</span>
                  </div>
                  <div className="w-8 h-px bg-gray-300"></div>
                  <div
                    className={`flex items-center gap-2 ${step === 'payment' ? 'text-matte-black font-medium' : 'text-gray-400'}`}>

                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs">
                      2
                    </span>
                    <span>Payment</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 'shipping' ?
                  <div className="space-y-6 animate-fade-in">
                      <h2 className="text-xl font-serif">
                        Contact Information
                      </h2>
                      <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />


                      <h2 className="text-xl font-serif mt-8">
                        Shipping Address
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                        type="text"
                        required
                        placeholder="First Name"
                        className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                        <input
                        type="text"
                        required
                        placeholder="Last Name"
                        className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                      </div>
                      <input
                      type="text"
                      required
                      placeholder="Address"
                      className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                      <input
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                      className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                      <div className="grid grid-cols-2 gap-4">
                        <input
                        type="text"
                        required
                        placeholder="City"
                        className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                        <input
                        type="text"
                        required
                        placeholder="Postal Code"
                        className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                      </div>
                      <input
                      type="text"
                      required
                      placeholder="Country"
                      className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                      <input
                      type="tel"
                      required
                      placeholder="Phone"
                      className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                    </div> :

                  <div className="space-y-6 animate-fade-in">
                      <h2 className="text-xl font-serif">Payment Details</h2>
                      <div className="p-4 border border-gray-200 bg-gray-50 rounded text-sm text-gray-500 mb-4">
                        This is a demo checkout. No actual payment will be
                        processed.
                      </div>
                      <input
                      type="text"
                      required
                      placeholder="Card Number"
                      className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                      <div className="grid grid-cols-2 gap-4">
                        <input
                        type="text"
                        required
                        placeholder="Expiration (MM/YY)"
                        className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                        <input
                        type="text"
                        required
                        placeholder="CVC"
                        className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                      </div>
                      <input
                      type="text"
                      required
                      placeholder="Name on Card"
                      className="w-full p-3 border border-gray-300 focus:border-gold outline-none" />

                    </div>
                  }

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-8 btn-primary flex items-center justify-center">

                    {isLoading ?
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> :
                    step === 'shipping' ?
                    'Continue to Payment' :

                    `Pay $${total}`
                    }
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-96">
              <div className="bg-white p-8 shadow-sm sticky top-24">
                <h2 className="text-xl font-serif mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                  {items.map((item) =>
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4">

                      <div className="w-16 h-20 bg-gray-100 flex-shrink-0">
                        <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover" />

                      </div>
                      <div className="flex-1">
                        <h4 className="font-serif text-sm">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          Size: {item.size} | Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-medium mt-1">
                          ${item.product.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span>${shippingCost}</span>
                  </div>
                  <div className="flex justify-between text-lg font-medium text-matte-black pt-2 border-t border-gray-200 mt-2">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>);

}