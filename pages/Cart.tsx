import React from 'react';
import { CartItem, Translation } from '../types';
import { Trash2, MessageCircle } from 'lucide-react';

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: string) => void;
  t: Translation;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, t }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    // Generate a WhatsApp message with the order details
    const orderList = cart.map(item => `- ${item.name} (x${item.quantity}): ₦${(item.price * item.quantity).toLocaleString()}`).join('%0A');
    const totalMsg = `Total: ₦${total.toLocaleString()}`;
    const message = `Hello, I would like to place an order on Kasuwar Noma:%0A%0A${orderList}%0A%0A${totalMsg}`;
    
    // Updated central line/admin number as requested
    window.open(`https://wa.me/2348059063694?text=${message}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-agri-800 mb-8">{t.nav_cart}</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-stone-200">
          <p className="text-xl text-gray-500">{t.cart_empty}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden">
          <div className="p-6 space-y-6">
            {cart.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 pb-4 last:border-0">
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="font-bold text-agri-600">₦{item.price.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0 space-x-6">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold">
                    Qty: {item.quantity}
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-stone-50 p-6 border-t border-stone-200">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-gray-700">{t.cart_total}</span>
              <span className="text-2xl font-bold text-agri-800">₦{total.toLocaleString()}</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition shadow-md"
            >
              <MessageCircle className="h-6 w-6" />
              <span>{t.cart_checkout}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;