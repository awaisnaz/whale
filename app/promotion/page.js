import Link from 'next/link';

const PromotionPage = () => {
  const promotions = [
    {
      title: 'Welcome Bonus',
      description: 'Get $50 in crypto when you sign up and make your first trade',
      reward: '$50 Bonus',
      type: 'New User',
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Referral Program',
      description: 'Earn 20% commission for every friend you refer to Whale',
      reward: '20% Commission',
      type: 'Referral',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Trading Competition',
      description: 'Compete with other traders and win up to $10,000 in prizes',
      reward: '$10,000 Prize Pool',
      type: 'Competition',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Staking Rewards',
      description: 'Stake your crypto and earn up to 12% APY on your holdings',
      reward: 'Up to 12% APY',
      type: 'Staking',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Promotions & Rewards
          </h1>
          <p className="text-xl text-gray-400">
            Maximize your earnings with our exclusive offers and rewards program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {promotions.map((promo, index) => (
            <div key={index} className="bg-[#1a1d29] rounded-2xl p-8 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${promo.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {promo.type}
                  </span>
                  <div className={`w-12 h-12 bg-gradient-to-r ${promo.color} rounded-lg flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{promo.title}</h3>
                <p className="text-gray-400 mb-6">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-500 font-bold text-lg">{promo.reward}</span>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                    Claim Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-[#1a1d29] rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">VIP Program</h2>
            <p className="text-gray-400 mb-8">Unlock exclusive benefits and higher rewards as you trade more.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Bronze</h4>
                <p className="text-gray-400 text-sm">0.1% Trading Fee</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Silver</h4>
                <p className="text-gray-400 text-sm">0.08% Trading Fee</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Gold</h4>
                <p className="text-gray-400 text-sm">0.05% Trading Fee</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Platinum</h4>
                <p className="text-gray-400 text-sm">0.02% Trading Fee</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Earning?</h2>
          <p className="text-gray-400 mb-8">Join thousands of users who are already earning with Whale.</p>
          <Link 
            href="/signup"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-lg transition-colors"
          >
            <span>Get Started Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromotionPage;