import React, { useState } from 'react';
import { Translation, Category, Product } from '../types';
import { NIGERIAN_STATES } from '../constants';
import { Upload } from 'lucide-react';

interface SellProps {
  t: Translation;
  onAddProduct: (p: Product) => void;
}

const Sell: React.FC<SellProps> = ({ t, onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: Category.NOMA,
    location: NIGERIAN_STATES[0],
    description: '',
    sellerName: '',
    sellerPhone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      price: Number(formData.price),
      category: formData.category,
      location: formData.location,
      description: formData.description,
      imageUrl: 'https://picsum.photos/400/300?random=' + Date.now(),
      sellerName: formData.sellerName,
      sellerPhone: formData.sellerPhone
    };
    onAddProduct(newProduct);
    alert('Product Posted Successfully! / An sa kaya lafiya!');
    setFormData({
      name: '',
      price: '',
      category: Category.NOMA,
      location: NIGERIAN_STATES[0],
      description: '',
      sellerName: '',
      sellerPhone: '',
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-agri-700 px-8 py-6">
          <h2 className="text-2xl font-bold text-white">{t.sell_page_title}</h2>
          <p className="text-agri-200 mt-1">Fill the details below to reach thousands of buyers.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.form_name}</label>
              <input 
                required
                type="text" 
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-agri-500 focus:border-agri-500 border p-2"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.form_price}</label>
              <input 
                required
                type="number" 
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-agri-500 focus:border-agri-500 border p-2"
                value={formData.price}
                onChange={e => setFormData({...formData, price: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category / Rukuni</label>
              <select 
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-agri-500 focus:border-agri-500 border p-2"
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value as Category})}
              >
                <option value={Category.NOMA}>{t.cat_noma}</option>
                <option value={Category.KIWO}>{t.cat_kiwo}</option>
                <option value={Category.AIKI}>{t.cat_aiki}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.form_location}</label>
              <select 
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-agri-500 focus:border-agri-500 border p-2"
                value={formData.location}
                onChange={e => setFormData({...formData, location: e.target.value})}
              >
                {NIGERIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.form_desc}</label>
            <textarea 
              required
              rows={4} 
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-agri-500 focus:border-agri-500 border p-2"
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>

           {/* Seller Details */}
           <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="font-semibold text-gray-900">Seller Contact Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full border-gray-300 rounded-md shadow-sm border p-2"
                      value={formData.sellerName}
                      onChange={e => setFormData({...formData, sellerName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number (e.g. 23480...)</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full border-gray-300 rounded-md shadow-sm border p-2"
                      value={formData.sellerPhone}
                      onChange={e => setFormData({...formData, sellerPhone: e.target.value})}
                    />
                  </div>
              </div>
           </div>

           {/* Image Mockup */}
           <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:border-agri-500 cursor-pointer transition">
              <Upload className="h-10 w-10 mb-2" />
              <span className="text-sm">Click to upload image (Simulated)</span>
           </div>

          <button 
            type="submit" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-agri-600 hover:bg-agri-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agri-500 transition"
          >
            {t.form_submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;