import Link from 'next/link';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      description: 'Former Goldman Sachs executive with 15+ years in fintech',
      image: 'JS'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Ex-Google engineer specializing in blockchain technology',
      image: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Security',
      description: 'Cybersecurity expert with background in financial services',
      image: 'MC'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Product',
      description: 'Product strategist with experience at top crypto exchanges',
      image: 'ED'
    }
  ];

  const stats = [
    { label: 'Users Worldwide', value: '2M+' },
    { label: 'Countries Supported', value: '150+' },
    { label: 'Trading Volume', value: '$50B+' },
    { label: 'Years of Experience', value: '8+' }
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Whale
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're building the future of cryptocurrency trading with cutting-edge technology, 
            unmatched security, and a user-first approach.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-[#1a1d29] rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 mb-6">
                At Whale, we believe that everyone should have access to the financial opportunities 
                that cryptocurrency provides. Our mission is to democratize crypto trading by making 
                it simple, secure, and accessible to users worldwide.
              </p>
              <p className="text-gray-400">
                We're committed to building a platform that combines institutional-grade security 
                with an intuitive user experience, empowering both beginners and experienced traders 
                to participate in the digital economy.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🐋</div>
              <h3 className="text-2xl font-bold text-white mb-4">Think Big, Trade Bigger</h3>
              <p className="text-white opacity-90">
                Like whales in the ocean, we believe in making waves in the crypto space.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1d29] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Security First</h3>
              <p className="text-gray-400">
                Your assets are protected by military-grade encryption and multi-layer security protocols.
              </p>
            </div>
            
            <div className="bg-[#1a1d29] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-gray-400">
                We continuously push the boundaries of what's possible in cryptocurrency trading.
              </p>
            </div>
            
            <div className="bg-[#1a1d29] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-400">
                We build for our users and listen to their feedback to create the best experience.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#1a1d29] rounded-2xl p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{member.image}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-green-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Whale Community?</h2>
          <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Start your crypto journey with us today and experience the difference that 
            security, innovation, and community can make.
          </p>
          <Link 
            href="/signup"
            className="inline-flex items-center space-x-2 bg-white text-green-600 font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span>Get Started Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;