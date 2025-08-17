import Link from 'next/link';

const NFTPage = () => {
  const nftCollections = [
    { name: 'Crypto Whales', floor: '2.5 ETH', volume: '1,250 ETH', items: '10,000' },
    { name: 'Digital Ocean', floor: '1.8 ETH', volume: '890 ETH', items: '5,000' },
    { name: 'Pixel Pirates', floor: '0.9 ETH', volume: '567 ETH', items: '8,888' },
    { name: 'Meta Monsters', floor: '3.2 ETH', volume: '2,100 ETH', items: '7,777' },
    { name: 'Space Explorers', floor: '1.2 ETH', volume: '445 ETH', items: '6,666' },
    { name: 'Cyber Punks', floor: '4.1 ETH', volume: '3,200 ETH', items: '9,999' },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            NFT Marketplace
          </h1>
          <p className="text-xl text-gray-400">
            Discover, collect, and trade unique digital assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#1a1d29] rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Total Volume</h3>
            <p className="text-2xl font-bold text-green-500">12,450 ETH</p>
            <p className="text-sm text-gray-400 mt-1">+8.2% (24h)</p>
          </div>
          
          <div className="bg-[#1a1d29] rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Collections</h3>
            <p className="text-2xl font-bold text-blue-500">2,847</p>
            <p className="text-sm text-gray-400 mt-1">+15 (24h)</p>
          </div>
          
          <div className="bg-[#1a1d29] rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Active Users</h3>
            <p className="text-2xl font-bold text-purple-500">45,230</p>
            <p className="text-sm text-gray-400 mt-1">+12.5% (24h)</p>
          </div>
          
          <div className="bg-[#1a1d29] rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Floor Price</h3>
            <p className="text-2xl font-bold text-orange-500">0.8 ETH</p>
            <p className="text-sm text-gray-400 mt-1">-2.1% (24h)</p>
          </div>
        </div>
        
        <div className="bg-[#1a1d29] rounded-2xl overflow-hidden mb-12">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Trending Collections</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Collection</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium">Floor Price</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium">Volume</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium">Items</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {nftCollections.map((collection, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-[#2a2d3a] transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg font-bold">{collection.name[0]}</span>
                        </div>
                        <span className="text-white font-medium">{collection.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right text-white font-semibold">{collection.floor}</td>
                    <td className="py-4 px-6 text-right text-green-500 font-medium">{collection.volume}</td>
                    <td className="py-4 px-6 text-right text-gray-400">{collection.items}</td>
                    <td className="py-4 px-6 text-right">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1d29] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Create NFTs</h3>
            <p className="text-gray-400 mb-6">Mint and sell your own unique digital collectibles.</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="bg-[#1a1d29] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Explore Collections</h3>
            <p className="text-gray-400 mb-6">Browse thousands of unique NFT collections.</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Browse Now
            </button>
          </div>
          
          <div className="bg-[#1a1d29] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Trade & Invest</h3>
            <p className="text-gray-400 mb-6">Buy, sell, and trade NFTs with confidence.</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Start Trading
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/signup"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-lg transition-colors"
          >
            <span>Join the Marketplace</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NFTPage;