'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, XCircle, Mail } from 'lucide-react';

const ConfirmEmailPage = () => {
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    const confirmEmail = async () => {
      if (!token) {
        setStatus('error');
        setMessage('Invalid confirmation link');
        return;
      }

      try {
        // Here you would integrate with better-auth to confirm email
        console.log('Confirming email with token:', token);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Simulate success (you can change this to test error state)
        const success = true;
        
        if (success) {
          setStatus('success');
          setMessage('Your email has been successfully confirmed!');
        } else {
          setStatus('error');
          setMessage('Failed to confirm email. The link may be expired.');
        }
      } catch (error) {
        console.error('Email confirmation error:', error);
        setStatus('error');
        setMessage('An error occurred while confirming your email.');
      }
    };

    confirmEmail();
  }, [token]);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <>
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Confirming Your Email
            </h1>
            <p className="text-gray-400 mb-8">
              Please wait while we confirm your email address...
            </p>
          </>
        );
      
      case 'success':
        return (
          <>
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Email Confirmed!
            </h1>
            <p className="text-gray-400 mb-8">
              {message}
            </p>
            <Link 
              href="/login"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Continue to Login</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </>
        );
      
      case 'error':
        return (
          <>
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Confirmation Failed
            </h1>
            <p className="text-gray-400 mb-8">
              {message}
            </p>
            <div className="space-y-4">
              <Link 
                href="/signup"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Try Again</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/login"
                className="w-full border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 font-medium py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Back to Login</span>
              </Link>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1419] flex items-center justify-center px-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-[#1a1d29] rounded-3xl p-8 shadow-2xl text-center">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailPage;