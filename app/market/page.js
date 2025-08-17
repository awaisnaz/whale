import Link from 'next/link';

const MarketPage = () => {
  const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$43,250.00', change: '+2.45%', changePositive: true },
    { name: 'Ethereum', symbol: 'ETH', price: '$2,580.00', change: '+1.23%', changePositive: true },
    { name: 'Binance Coin', symbol: 'BNB', price: '$315.50', change: '-0.87%', changePositive: false },
    { name: 'Cardano', symbol: 'ADA', price: '$0.52', change: '+3.21%', changePositive: true },
    { name: 'Solana', symbol: 'SOL', price: '$98.75', change: '+5.67%', changePositive: true },
    { name: 'Polkadot', symbol: 'DOT', price: '$7.23', change: '-1.45%', changePositive: false },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Crypto Market
          </h1>
          <p className="text-xl text-gray-400">
            Track real-time cryptocurrency prices and market trends.
          </p>
        </div>
        
        <div className="bg-[#1a1d29] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Top Cryptocurrencies</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Name</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Symbol</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium">Price</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium">24h Change</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {cryptoData.map((crypto, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-[#2a2d3a] transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{crypto.symbol[0]}</span>
                        </div>
                        <span className="text-white font-medium">{crypto.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-400">{crypto.symbol}</td>
                    <td className="py-4 px-6 text-right text-white font-semibold">{crypto.price}</td>
                    <td className={`py-4 px-6 text-right font-medium ${
                      crypto.changePositive ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {crypto.change}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-[#1a1d29] rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Market Cap</h3>
            <p className="text-2xl font-bold text-green-500">$1.2T</p>
            <p className="text-sm text-gray-400 mt-1">+2.3% (24h)</p>
          </div>
          
          <div className="bg-[#1a1d29] rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">24h Volume</h3>
            <p className="text-2xl font-bold text-blue-500">$85.6B</p>
            <p className="text-sm text-gray-400 mt-1">+5.7% (24h)</p>
          </div>
          
          <div className="bg-[#1a1d29] rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">BTC Dominance</h3>
            <p className="text-2xl font-bold text-orange-500">42.5%</p>
            <p className="text-sm text-gray-400 mt-1">-0.8% (24h)</p>
          </div>
          
          <div className="bg-[#1a1d29] rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Active Coins</h3>
            <p className="text-2xl font-bold text-purple-500">2,847</p>
            <p className="text-sm text-gray-400 mt-1">+12 (24h)</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/signup"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-lg transition-colors"
          >
            <span>Start Trading</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;