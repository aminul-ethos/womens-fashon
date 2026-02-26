import React, { useEffect, useState, useRef } from 'react';
import { SearchIcon, XIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}
export function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(products);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const filtered = products.filter(
        (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);
  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
    onClose();
    setQuery('');
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md animate-fade-in">
      <div className="container-custom pt-8">
        <div className="flex justify-end mb-8">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors">

            <XIcon className="w-6 h-6 text-matte-black" />
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-b-2 border-matte-black mb-12">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full py-4 text-3xl font-serif bg-transparent outline-none placeholder:text-gray-300 text-matte-black" />

            <SearchIcon className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-matte-black" />
          </div>

          {query &&
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 overflow-y-auto max-h-[60vh] pb-20">
              {results.length > 0 ?
            results.map((product) =>
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="flex gap-4 cursor-pointer group">

                    <div className="w-20 h-24 bg-gray-100 overflow-hidden">
                      <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                    </div>
                    <div>
                      <h4 className="font-serif text-lg group-hover:text-gold transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {product.category}
                      </p>
                      <p className="font-medium mt-1">${product.price}</p>
                    </div>
                  </div>
            ) :

            <div className="col-span-full text-center text-gray-500 py-10">
                  No results found for "{query}"
                </div>
            }
            </div>
          }
        </div>
      </div>
    </div>);

}