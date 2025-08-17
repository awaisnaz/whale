'use client';
import { useState } from 'react';
import { Line, Doughnut, Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BubbleController
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BubbleController
);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [depositType, setDepositType] = useState('crypto');
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [selectedNetwork, setSelectedNetwork] = useState('Bitcoin');

  // Dummy data for charts and tables
  const balanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Balance',
      data: [4500, 5200, 4800, 5750, 5400, 5750],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  const portfolioData = {
    labels: ['Bitcoin', 'Ethereum', 'Uniswap', 'Others'],
    datasets: [{
      data: [40, 30, 20, 10],
      backgroundColor: ['#F59E0B', '#3B82F6', '#EC4899', '#6B7280'],
      borderWidth: 0
    }]
  };

  const bubbleData = {
    datasets: [
      {
        label: 'Bitcoin',
        data: [{ x: 45000, y: 2.5, r: 20 }],
        backgroundColor: 'rgba(245, 158, 11, 0.6)'
      },
      {
        label: 'Ethereum',
        data: [{ x: 3200, y: 1.8, r: 15 }],
        backgroundColor: 'rgba(59, 130, 246, 0.6)'
      },
      {
        label: 'Cardano',
        data: [{ x: 1.2, y: -0.5, r: 10 }],
        backgroundColor: 'rgba(239, 68, 68, 0.6)'
      },
      {
        label: 'Solana',
        data: [{ x: 95, y: 3.2, r: 12 }],
        backgroundColor: 'rgba(16, 185, 129, 0.6)'
      },
      {
        label: 'Polygon',
        data: [{ x: 0.85, y: 1.1, r: 8 }],
        backgroundColor: 'rgba(139, 92, 246, 0.6)'
      }
    ]
  };

  const cryptoAssets = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$36,755', change: '+2.50%', balance: '2.52976876', value: '$36,755', status: 'positive' },
    { name: 'Tether', symbol: 'USDT', price: '$36,755', change: '+2.50%', balance: '2.52976876', value: '$36,755', status: 'positive' },
    { name: 'Tron', symbol: 'TRX', price: '$36,755', change: '+2.06%', balance: '906.03924887', value: '$36,755', status: 'positive' },
    { name: 'Uniswap', symbol: 'UNI', price: '$36,755', change: '+5.06%', balance: '23.43076478', value: '$36,755', status: 'positive' },
    { name: 'Binance', symbol: 'BNB', price: '$36,755', change: '+2.50%', balance: '2.52976876', value: '$36,755', status: 'positive' },
    { name: 'Matic', symbol: 'MATIC', price: '$36,755', change: '+2.50%', balance: '2.52976876', value: '$36,755', status: 'positive' },
    { name: 'Polygon', symbol: 'MATIC', price: '$36,755', change: '+2.50%', balance: '2.52976876', value: '$36,755', status: 'positive' }
  ];

  const accounts = [
    { name: 'Main Account', balance: '1,077.3 USD', type: 'main' },
    { name: 'Trading Account', balance: '1,077.3 USD', type: 'trading' },
    { name: 'Margin Account', balance: '677.3 USD', type: 'margin' },
    { name: 'Futures Account', balance: '1,077.3 USD', type: 'futures' }
  ];

  const nftNews = [
    {
      title: 'NFT Market Sees 40% Growth This Quarter',
      category: 'Market Analysis',
      description: 'The NFT marketplace has experienced significant growth with new collections launching daily.',
      date: '2 hours ago'
    },
    {
      title: 'Ethereum Gas Fees Drop to Lowest in Months',
      category: 'Technology',
      description: 'Recent network upgrades have led to a substantial decrease in transaction costs.',
      date: '4 hours ago'
    },
    {
      title: 'Major Brands Enter NFT Space',
      category: 'Business',
      description: 'Fortune 500 companies are increasingly adopting NFT technology for digital assets.',
      date: '6 hours ago'
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Balance Card */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-green-100 mb-2">Current Balance</p>
            <h2 className="text-4xl font-bold mb-2">$5,750.20</h2>
            <p className="text-green-100">0.27864652 BTC</p>
          </div>
          <div className="text-right">
            <p className="text-green-100 mb-1">+$2.72 (1%)</p>
            <div className="w-32 h-16">
              <Line data={balanceData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }} />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="bg-gray-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Portfolio Overview</h3>
          <div className="w-32 h-32">
            <Doughnut data={portfolioData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-300">Bitcoin 40%</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-300">Ethereum 30%</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-gray-300">Uniswap 20%</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <span className="text-gray-300">Others 10%</span>
          </div>
        </div>
      </div>

      {/* Account Balances */}
      <div className="grid grid-cols-4 gap-4">
        {accounts.map((account, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className={`w-2 h-2 rounded-full ${
                account.type === 'main' ? 'bg-green-500' :
                account.type === 'trading' ? 'bg-green-500' :
                account.type === 'margin' ? 'bg-orange-500' :
                'bg-red-500'
              }`}></div>
              <span className="text-gray-400 text-sm">{account.name}</span>
            </div>
            <p className="text-white font-semibold">{account.balance}</p>
          </div>
        ))}
      </div>

      {/* Assets Table */}
      <div className="bg-gray-800 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Assets</h3>
          <div className="flex space-x-4 text-sm text-gray-400">
            <span>Asset</span>
            <span>Price</span>
            <span>24h Change</span>
            <span>Available Balance</span>
            <span>P&L/Loss</span>
            <span>Operation</span>
          </div>
        </div>
        <div className="space-y-4">
          {cryptoAssets.map((asset, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black">{asset.symbol.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{asset.name}</p>
                  <p className="text-gray-400 text-sm">{asset.symbol}</p>
                </div>
              </div>
              <span className="text-white">{asset.price}</span>
              <span className="text-green-500">{asset.change}</span>
              <span className="text-white">{asset.balance}</span>
              <span className="text-white">Deposit</span>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-white">Withdraw</button>
                <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">Trade</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLivePrices = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Live Cryptocurrency Prices</h3>
        <div className="h-96">
          <Bubble data={bubbleData} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                labels: { color: 'white' }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `${context.dataset.label}: $${context.parsed.x} (${context.parsed.y}%)`;
                  }
                }
              }
            },
            scales: {
              x: {
                title: { display: true, text: 'Price (USD)', color: 'white' },
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' }
              },
              y: {
                title: { display: true, text: '24h Change (%)', color: 'white' },
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' }
              }
            }
          }} />
        </div>
      </div>
    </div>
  );

  const renderNFTMarket = () => (
    <div className="space-y-6">
      {/* Ethereum Price Overview */}
      <div className="bg-gray-800 rounded-2xl p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Ethereum Price</h3>
            <p className="text-3xl font-bold text-white">$3,245.67</p>
            <p className="text-green-500">+2.45% (24h)</p>
          </div>
          <div className="w-32 h-16">
            <Line data={balanceData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }} />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-gray-400 text-sm">Market Cap</p>
            <p className="text-white font-semibold">$390.2B</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">24h Volume</p>
            <p className="text-white font-semibold">$15.8B</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Circulating Supply</p>
            <p className="text-white font-semibold">120.3M ETH</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">All-Time High</p>
            <p className="text-white font-semibold">$4,891.70</p>
          </div>
        </div>
      </div>

      {/* NFT News */}
      <div className="bg-gray-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Latest NFT News</h3>
        <div className="space-y-4">
          {nftNews.map((news, index) => (
            <div key={index} className="bg-gray-700 rounded-xl p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">{news.category}</span>
                <span className="text-gray-400 text-sm">{news.date}</span>
              </div>
              <h4 className="text-white font-semibold mb-2">{news.title}</h4>
              <p className="text-gray-300 text-sm">{news.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWallet = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Deposit</h3>
        
        {/* Crypto/Fiat Toggle */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setDepositType('crypto')}
            className={`px-4 py-2 rounded-lg ${depositType === 'crypto' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Crypto
          </button>
          <button
            onClick={() => setDepositType('fiat')}
            className={`px-4 py-2 rounded-lg ${depositType === 'fiat' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            Fiat
          </button>
        </div>

        {/* Coin Selection */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Select Coin</label>
          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg p-3"
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </div>

        {/* Network Selection */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Select Network</label>
          <select
            value={selectedNetwork}
            onChange={(e) => setSelectedNetwork(e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg p-3"
          >
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="BSC">Binance Smart Chain</option>
          </select>
        </div>

        {/* QR Code and Address */}
        <div className="bg-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <span className="text-gray-800 text-xs">QR Code</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-300 mb-2">Deposit Address</p>
            <p className="text-white font-mono text-sm bg-gray-800 p-2 rounded">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-yellow-900 border border-yellow-600 rounded-lg p-4 mb-6">
          <p className="text-yellow-200 text-sm">
            ⚠️ Only send {selectedCoin} to this address. Sending other coins may result in permanent loss.
          </p>
        </div>

        {/* Recent Deposits */}
        <div>
          <h4 className="text-white font-semibold mb-4">Recent Deposits</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <div>
                <p className="text-white">0.05 BTC</p>
                <p className="text-gray-400 text-sm">2 hours ago</p>
              </div>
              <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Completed</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <div>
                <p className="text-white">1.2 ETH</p>
                <p className="text-gray-400 text-sm">1 day ago</p>
              </div>
              <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExchange = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Order Book */}
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Order Book</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Price</span>
              <span className="text-gray-400">Amount</span>
              <span className="text-gray-400">Total</span>
            </div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-red-500">$36,{750 + i}</span>
                <span className="text-white">0.{Math.floor(Math.random() * 9000) + 1000}</span>
                <span className="text-white">${(36750 + i) * 0.1234}</span>
              </div>
            ))}
            <div className="border-t border-gray-700 pt-2">
              <div className="text-center text-white font-semibold">$36,755.50</div>
            </div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-green-500">$36,{745 - i}</span>
                <span className="text-white">0.{Math.floor(Math.random() * 9000) + 1000}</span>
                <span className="text-white">${(36745 - i) * 0.1234}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Chart */}
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">BTC/USD</h3>
          <div className="h-64">
            <Line data={balanceData} options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                x: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                y: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } }
              }
            }} />
          </div>
        </div>

        {/* Buy/Sell Panel */}
        <div className="bg-gray-800 rounded-2xl p-6">
          <div className="flex space-x-2 mb-4">
            <button className="flex-1 bg-green-600 text-white py-2 rounded">Buy</button>
            <button className="flex-1 bg-gray-700 text-white py-2 rounded">Sell</button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Price</label>
              <input type="text" className="w-full bg-gray-700 text-white rounded p-2" placeholder="36,755.50" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Amount</label>
              <input type="text" className="w-full bg-gray-700 text-white rounded p-2" placeholder="0.001" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Total</label>
              <input type="text" className="w-full bg-gray-700 text-white rounded p-2" placeholder="36.76" />
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded font-semibold">Buy BTC</button>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = ['Dashboard', 'Live Prices', 'Exchange', 'Wallet', 'NFT Market'];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="text-white font-semibold text-xl">Whale.</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src="/api/placeholder/24/24" alt="Profile" className="w-8 h-8 rounded-full" />
              <span className="text-white">Erfan Amaele</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 min-h-screen p-6">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab
                    ? 'bg-green-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'Dashboard' && renderDashboard()}
          {activeTab === 'Live Prices' && renderLivePrices()}
          {activeTab === 'Exchange' && renderExchange()}
          {activeTab === 'Wallet' && renderWallet()}
          {activeTab === 'NFT Market' && renderNFTMarket()}
        </main>
      </div>
    </div>
  );
}