import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Future of Cryptocurrency: Trends to Watch in 2024',
      excerpt: 'Explore the emerging trends and technologies that will shape the crypto landscape in the coming year.',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2023',
      readTime: '5 min read',
      category: 'Market Analysis',
      featured: true
    },
    {
      title: 'Understanding DeFi: A Beginner\'s Guide to Decentralized Finance',
      excerpt: 'Learn the basics of DeFi protocols and how they\'re revolutionizing traditional financial services.',
      author: 'Michael Chen',
      date: 'Dec 12, 2023',
      readTime: '8 min read',
      category: 'Education',
      featured: false
    },
    {
      title: 'Security Best Practices for Crypto Traders',
      excerpt: 'Essential security measures every cryptocurrency trader should implement to protect their assets.',
      author: 'Emily Davis',
      date: 'Dec 10, 2023',
      readTime: '6 min read',
      category: 'Security',
      featured: false
    },
    {
      title: 'NFT Market Update: What\'s Driving the Latest Surge?',
      excerpt: 'Analyzing the factors behind the recent NFT market recovery and what it means for collectors.',
      author: 'John Smith',
      date: 'Dec 8, 2023',
      readTime: '4 min read',
      category: 'NFTs',
      featured: false
    },
    {
      title: 'Whale Trading Strategies: Learning from the Big Players',
      excerpt: 'Discover the trading strategies used by cryptocurrency whales and how retail traders can adapt them.',
      author: 'Sarah Johnson',
      date: 'Dec 5, 2023',
      readTime: '7 min read',
      category: 'Trading',
      featured: false
    },
    {
      title: 'Regulatory Landscape: Global Crypto Regulations Explained',
      excerpt: 'A comprehensive overview of cryptocurrency regulations across different countries and regions.',
      author: 'Michael Chen',
      date: 'Dec 3, 2023',
      readTime: '10 min read',
      category: 'Regulation',
      featured: false
    }
  ];

  const categories = ['All', 'Market Analysis', 'Education', 'Security', 'NFTs', 'Trading', 'Regulation'];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-[#0f1419] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Whale Blog
          </h1>
          <p className="text-xl text-gray-400">
            Stay updated with the latest insights, trends, and news in the cryptocurrency world.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="bg-[#1a1d29] rounded-2xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📰</div>
                  <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{featuredPost.author}</p>
                      <p className="text-gray-400 text-sm">{featuredPost.date}</p>
                    </div>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                index === 0
                  ? 'bg-green-500 text-white'
                  : 'bg-[#1a1d29] text-gray-400 hover:text-white hover:bg-[#2a2d3a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post, index) => (
            <div key={index} className="bg-[#1a1d29] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📝</div>
                  <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">{post.author}</span>
                  </div>
                  <button className="text-green-500 hover:text-green-400 font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest crypto insights, market analysis, 
            and trading tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-white text-green-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-[#1a1d29] hover:bg-[#2a2d3a] text-white font-medium px-8 py-4 rounded-lg transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;