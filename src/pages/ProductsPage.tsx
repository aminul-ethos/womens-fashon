import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterIcon, ChevronDownIcon } from 'lucide-react';
import { products, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { PageTransition } from '../components/PageTransition';
export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const categoryParam = searchParams.get('category');
  const sortParam = searchParams.get('sort');
  useEffect(() => {
    let result = [...products];
    // Filter by category
    if (categoryParam) {
      result = result.filter((p) => p.category === categoryParam);
    }
    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      // Mock newest sort by putting new items first
      result.sort((a, b) => a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1);
    }
    setFilteredProducts(result);
  }, [categoryParam, sortBy]);
  useEffect(() => {
    if (sortParam) {
      if (sortParam === 'new') setSortBy('newest');
    }
  }, [sortParam]);
  const handleCategoryChange = (category: string | null) => {
    if (category) {
      setSearchParams({
        category
      });
    } else {
      setSearchParams({});
    }
    setIsFilterOpen(false);
  };
  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-ivory">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              {categoryParam ? `${categoryParam} Collection` : 'All Products'}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of premium dresses, designed for
              every occasion.
            </p>
          </div>

          {/* Filters & Sort Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-200 sticky top-20 bg-ivory z-30 py-4">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <span className="text-sm text-gray-500">
                {filteredProducts.length} Products
              </span>

              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors">

                  <FilterIcon className="w-4 h-4" /> Filter
                </button>

                {isFilterOpen &&
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl z-40 p-4 animate-fade-in">
                    <h4 className="font-serif mb-3 text-sm">Category</h4>
                    <div className="space-y-2">
                      <button
                      onClick={() => handleCategoryChange(null)}
                      className={`block text-sm w-full text-left ${!categoryParam ? 'text-gold font-medium' : 'text-gray-600 hover:text-black'}`}>

                        All
                      </button>
                      <button
                      onClick={() => handleCategoryChange('Casual')}
                      className={`block text-sm w-full text-left ${categoryParam === 'Casual' ? 'text-gold font-medium' : 'text-gray-600 hover:text-black'}`}>

                        Casual
                      </button>
                      <button
                      onClick={() => handleCategoryChange('Party')}
                      className={`block text-sm w-full text-left ${categoryParam === 'Party' ? 'text-gold font-medium' : 'text-gray-600 hover:text-black'}`}>

                        Party
                      </button>
                      <button
                      onClick={() => handleCategoryChange('Luxury')}
                      className={`block text-sm w-full text-left ${categoryParam === 'Luxury' ? 'text-gold font-medium' : 'text-gray-600 hover:text-black'}`}>

                        Luxury
                      </button>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <div className="relative group">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm font-medium uppercase tracking-widest pr-8 cursor-pointer outline-none">

                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDownIcon className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ?
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {filteredProducts.map((product) =>
            <ProductCard key={product.id} product={product} />
            )}
            </div> :

          <div className="text-center py-20">
              <h3 className="text-2xl font-serif mb-4">No products found</h3>
              <button
              onClick={() => handleCategoryChange(null)}
              className="btn-secondary">

                Clear Filters
              </button>
            </div>
          }
        </div>
      </div>
    </PageTransition>);

}