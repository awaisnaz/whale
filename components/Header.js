'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [language, setLanguage] = useState('English');

  return (
    <header className="bg-[#1a1d29] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" />
                </svg>
              </div>
              <span className="text-white text-xl font-bold">Whale.</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="grid grid-cols-3 gap-1 p-1 bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            
            <Link href="/buy-crypto" className="text-gray-300 hover:text-white transition-colors">
              Buy Crypto
            </Link>
            
            <Link href="/market" className="text-gray-300 hover:text-white transition-colors">
              Market
            </Link>
            
            <div className="relative">
              <Link href="/nft" className="text-gray-300 hover:text-white transition-colors flex items-center">
                NFT
                <span className="ml-1 px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full font-medium">
                  New
                </span>
              </Link>
            </div>
            
            <Link href="/promotion" className="text-gray-300 hover:text-white transition-colors">
              Promotion
            </Link>
            
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
          </nav>

          {/* Auth & Language */}
          <div className="flex items-center space-x-4">
            {/* Login Button */}
            <Link 
              href="/login"
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg transition-colors"
            >
              Login
            </Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <div className="w-5 h-4 bg-red-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-0.5 bg-white"></div>
                  </div>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-blue-600"></div>
                </div>
                <span className="text-sm">{language}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;