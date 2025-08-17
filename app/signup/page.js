'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import QRCode from 'qrcode';
import { useEffect } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    referralCode: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Generate QR code for the signup URL
    const generateQRCode = async () => {
      try {
        const url = await QRCode.toDataURL('https://www.cryptowhale.com');
        setQrCodeUrl(url);
      } catch (err) {
        console.error('Error generating QR code:', err);
      }
    };
    generateQRCode();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Here you would integrate with better-auth
      console.log('Signup data:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login with better-auth
  };

  return (
    <div className="min-h-screen bg-[#0f1419] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-[#1a1d29] rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Form */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Create Your Account
                </h1>
                <p className="text-gray-400 mb-8">
                  Setting up an account takes less<br />than 1 minute.
                </p>

                {/* Login/Signup Toggle */}
                <div className="flex mb-8">
                  <Link 
                    href="/login" 
                    className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    Login
                  </Link>
                  <button className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium">
                    SignUp
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full pl-12 pr-12 py-4 bg-[#2a2d3a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="w-full pl-12 pr-12 py-4 bg-[#2a2d3a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>

                  {/* Referral Code Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleInputChange}
                      placeholder="Referral code (Optional)"
                      className="w-full pl-12 pr-4 py-4 bg-[#2a2d3a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>

                  {/* Continue Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isLoading ? 'Creating Account...' : 'Continue'}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>

                {/* Social Login */}
                <div className="mt-8">
                  <p className="text-center text-gray-400 mb-6">Or Continue with</p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => handleSocialLogin('facebook')}
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => handleSocialLogin('apple')}
                      className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C8.396 0 8.025.044 8.025.044c0 0-.396.044-.396.044C3.521.088 0 3.6 0 8.017c0 4.624 3.521 8.396 8.025 8.396 0 0 .396.044.396.044s.396-.044.396-.044c4.504-.044 8.025-3.772 8.025-8.396C16.042 3.6 12.521.088 8.017.044 8.017.044 8.396 0 12.017 0zm2.178 7.887c.983.104 1.67.548 1.67 1.453 0 .878-.696 1.453-1.67 1.453-.983 0-1.67-.575-1.67-1.453 0-.905.687-1.349 1.67-1.453zm-4.69 0c.983.104 1.67.548 1.67 1.453 0 .878-.687 1.453-1.67 1.453-.974 0-1.67-.575-1.67-1.453 0-.905.696-1.349 1.67-1.453z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => handleSocialLogin('google')}
                      className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - QR Code and Info */}
            <div className="lg:w-1/2 bg-[#2a2d3a] p-8 lg:p-12 flex flex-col justify-center items-center">
              <div className="text-center max-w-md">
                {/* QR Code */}
                <div className="mb-8">
                  {qrCodeUrl ? (
                    <div className="bg-white p-4 rounded-2xl inline-block">
                      <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48" />
                    </div>
                  ) : (
                    <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center mx-auto">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                    </div>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">
                  Login With QR code
                </h2>
                <p className="text-gray-400 mb-6">
                  Scan QR code with <span className="text-green-500">app</span>
                </p>

                {/* URL Display */}
                <div className="bg-[#1a1d29] rounded-lg p-4 flex items-center space-x-3 mb-8">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-400 text-sm">https://www.cryptowhale.com</span>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">Trade</h3>
                  <p className="text-white text-lg mb-2">
                    anything anywhere with
                  </p>
                  <p className="text-white text-lg font-bold">Whale.io!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;