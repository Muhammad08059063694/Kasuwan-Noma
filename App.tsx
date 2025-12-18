import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Sell from './pages/Sell';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import { TRANSLATIONS, MOCK_PRODUCTS } from './constants';
import { Language, Product, CartItem } from './types';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('EN');
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);

  const t = TRANSLATIONS[language];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const addProduct = (product: Product) => {
    setProducts(prev => [product, ...prev]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900">
        <Navbar 
          lang={language} 
          setLang={setLanguage} 
          t={t} 
          cartCount={cart.reduce((a, b) => a + b.quantity, 0)} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route 
              path="/market" 
              element={
                <Marketplace 
                  products={products} 
                  t={t} 
                  onAddToCart={addToCart} 
                />
              } 
            />
            <Route path="/sell" element={<Sell t={t} onAddProduct={addProduct} />} />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cart={cart} 
                  removeFromCart={removeFromCart} 
                  t={t} 
                />
              } 
            />
            <Route path="/auth" element={<Auth t={t} />} />
          </Routes>
        </main>

        <footer className="bg-agri-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">KASUWAR NOMA & KIWO</h3>
                <p className="text-agri-200 text-sm">
                  The number one digital marketplace for Nigerian farmers and traders. 
                  Bridge the gap between farm and table.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-agri-200 text-sm">
                  <li><a href="#" className="hover:text-white">About Us</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                 <h3 className="text-lg font-bold mb-4">Contact</h3>
                 <div className="flex space-x-4 mb-4">
                    <Facebook className="h-5 w-5 hover:text-amber-400 cursor-pointer" />
                    <Twitter className="h-5 w-5 hover:text-amber-400 cursor-pointer" />
                    <Instagram className="h-5 w-5 hover:text-amber-400 cursor-pointer" />
                    <Mail className="h-5 w-5 hover:text-amber-400 cursor-pointer" />
                 </div>
                 <p className="text-xs text-agri-400">Abuja, Nigeria</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-agri-800 text-center text-sm text-agri-400">
              {t.footer_text}
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;