import React from 'react';
import { Link } from 'react-router-dom';
import { Translation, Category } from '../types';
import { Sprout, Beef, Wrench } from 'lucide-react';

interface HomeProps {
  t: Translation;
}

const Home: React.FC<HomeProps> = ({ t }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-agri-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Agriculture background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {t.hero_title}
          </h1>
          <p className="text-lg md:text-xl text-agri-100 mb-8 max-w-3xl mx-auto">
            {t.hero_subtitle}
          </p>
          <Link 
            to="/market"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1"
          >
            {t.hero_cta}
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-agri-800 mb-12">
            Browse Categories / Bincika Rukuni
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kayan Noma */}
            <Link to="/market" className="group p-8 border border-stone-200 rounded-2xl hover:shadow-xl hover:border-agri-300 transition text-center bg-stone-50">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition">
                <Sprout className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{t.cat_noma}</h3>
              <p className="text-stone-500 text-sm">Maize, Yam, Rice, Beans, Millet, Sorghum</p>
            </Link>

            {/* Kayan Kiwo */}
            <Link to="/market" className="group p-8 border border-stone-200 rounded-2xl hover:shadow-xl hover:border-agri-300 transition text-center bg-stone-50">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 group-hover:text-white transition">
                <Beef className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{t.cat_kiwo}</h3>
              <p className="text-stone-500 text-sm">Cattle, Goats, Sheep, Poultry, Fish</p>
            </Link>

            {/* Kayan Aiki */}
            <Link to="/market" className="group p-8 border border-stone-200 rounded-2xl hover:shadow-xl hover:border-agri-300 transition text-center bg-stone-50">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{t.cat_aiki}</h3>
              <p className="text-stone-500 text-sm">Tractors, Pumps, Fertilizers, Pesticides</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-agri-800 mb-4">Why KASUWAR NOMA & KIWO?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="p-4 bg-white rounded shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Verified Sellers</h4>
                    <p className="text-sm text-gray-600">We verify identities to reduce fraud.</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Direct Contact</h4>
                    <p className="text-sm text-gray-600">Chat directly with farmers via WhatsApp.</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Local Pricing</h4>
                    <p className="text-sm text-gray-600">Fair market prices in Naira.</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Dual Language</h4>
                    <p className="text-sm text-gray-600">Built for Hausa and English speakers.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;