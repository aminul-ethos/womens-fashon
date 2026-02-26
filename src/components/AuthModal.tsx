import React, { useState } from 'react';
import {
  XIcon,
  MailIcon,
  LockIcon,
  UserIcon,
  FacebookIcon,
  ChromeIcon } from
'lucide-react';
import { useAuth } from '../context/AuthContext';
export function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, login, signup } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [isLoading, setIsLoading] = useState(false);
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  if (!isAuthModalOpen) return null;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (activeTab === 'login') {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Frosted Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsAuthModalOpen(false)} />


      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-matte-black transition-colors z-10">

          <XIcon className="w-5 h-5" />
        </button>

        {/* Header / Tabs */}
        <div className="pt-8 px-8 pb-6 text-center">
          <h2 className="font-serif text-2xl font-medium text-matte-black mb-6">
            Welcome to Lumière
          </h2>
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 pb-3 text-sm font-medium uppercase tracking-widest transition-colors relative ${activeTab === 'login' ? 'text-matte-black' : 'text-gray-400 hover:text-gray-600'}`}
              onClick={() => setActiveTab('login')}>

              Log In
              {activeTab === 'login' &&
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
              }
            </button>
            <button
              className={`flex-1 pb-3 text-sm font-medium uppercase tracking-widest transition-colors relative ${activeTab === 'signup' ? 'text-matte-black' : 'text-gray-400 hover:text-gray-600'}`}
              onClick={() => setActiveTab('signup')}>

              Sign Up
              {activeTab === 'signup' &&
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
              }
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {activeTab === 'signup' &&
            <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:border-gold outline-none transition-colors"
                required />

              </div>
            }

            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:border-gold outline-none transition-colors"
                required />

            </div>

            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:border-gold outline-none transition-colors"
                required />

            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3.5 mt-2 flex items-center justify-center">

              {isLoading ?
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> :
              activeTab === 'login' ?
              'Log In' :

              'Create Account'
              }
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4" />

                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853" />

                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05" />

                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335" />

              </svg>
              <span className="text-sm font-medium text-gray-600">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors">
              <FacebookIcon
                className="w-5 h-5 text-[#1877F2]"
                fill="currentColor" />

              <span className="text-sm font-medium text-gray-600">
                Facebook
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>);

}