import React, { useState } from 'react';
import { Translation } from '../types';

interface AuthProps {
  t: Translation;
}

const Auth: React.FC<AuthProps> = ({ t }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-stone-200">
        <div className="flex">
          <button 
            className={`w-1/2 py-4 font-bold text-center transition ${isLogin ? 'bg-agri-600 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setIsLogin(true)}
          >
            {t.login_btn}
          </button>
          <button 
             className={`w-1/2 py-4 font-bold text-center transition ${!isLogin ? 'bg-agri-600 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setIsLogin(false)}
          >
            Register / Yi Rijista
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-center text-agri-800 mb-6">
            {isLogin ? t.login_title : 'Create Farmer Account'}
          </h2>
          
          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-agri-500 focus:ring-agri-500" />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number / Email</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-agri-500 focus:ring-agri-500" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-agri-500 focus:ring-agri-500" />
            </div>

            <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-agri-600 hover:bg-agri-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agri-500 mt-4">
              {isLogin ? t.login_btn : 'Register'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 font-medium text-agri-600 hover:text-agri-500"
              >
                {isLogin ? 'Register now' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;