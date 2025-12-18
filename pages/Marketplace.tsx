import React, { useState, useMemo } from 'react';
import { Product, Translation, Category } from '../types';
import ProductCard from '../components/ProductCard';
import { NIGERIAN_STATES } from '../constants';
import { Search, Filter } from 'lucide-react';

interface MarketplaceProps {
  products: Product[];
  t: Translation;
  onAddToCart: (p: Product) => void;
}

const Marketplace: React.FC<MarketplaceProps> = ({ products, t, onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesLocation = selectedLocation === 'All' || product.location === selectedLocation;
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [products, searchTerm, selectedCategory, selectedLocation]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Filters Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Search */}
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t.search_placeholder}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-agri-500 focus:border-agri-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="md:w-1/4">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-agri-500 focus:border-agri-500 sm:text-sm rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">{t.filter_all}</option>
              <option value={Category.NOMA}>{t.cat_noma}</option>
              <option value={Category.KIWO}>{t.cat_kiwo}</option>
              <option value={Category.AIKI}>{t.cat_aiki}</option>
            </select>
          </div>

          {/* Location Filter */}
          <div className="md:w-1/4">
             <select
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-agri-500 focus:border-agri-500 sm:text-sm rounded-md"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="All">All Locations</option>
              {NIGERIAN_STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              t={t} 
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <Filter className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;