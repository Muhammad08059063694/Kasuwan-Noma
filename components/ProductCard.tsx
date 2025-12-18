import React from 'react';
import { Product, Translation } from '../types';
import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  t: Translation;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, t, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-stone-200 flex flex-col h-full">
      <div className="h-48 overflow-hidden bg-gray-200">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-agri-600 bg-agri-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <span className="text-xs text-stone-500 flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            {product.location}
          </span>
        </div>
        
        <Link to={`/market`} className="text-lg font-bold text-stone-800 hover:text-agri-700 mb-1 line-clamp-1">
          {product.name}
        </Link>
        
        <p className="text-xl font-bold text-agri-700 mb-2">
          {t.price_naira} {product.price.toLocaleString()}
        </p>
        
        <p className="text-sm text-stone-500 line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        
        <div className="flex flex-col gap-2 mt-auto">
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-agri-600 hover:bg-agri-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center transition"
          >
            {t.btn_add_cart}
          </button>
          <a 
            href={`https://wa.me/${product.sellerPhone}?text=Hello, I am interested in your ${product.name} on Kasuwar Noma.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-agri-600 text-agri-700 hover:bg-agri-50 font-semibold py-2 px-4 rounded-lg flex items-center justify-center transition"
          >
            <Phone className="h-4 w-4 mr-2" />
            {t.btn_contact_seller}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;