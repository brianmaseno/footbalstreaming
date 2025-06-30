import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChannelGrid from '@/components/ChannelGrid';

export default function CricketPage() {
  const cricketChannels = [
    {
      name: 'Star Sports Cricket',
      description: 'Star Sports Cricket Live Stream, Premier Cricket Coverage',
      iframe: '//stream.crichd.sc/update/starsports1.php',
      viewers: '18.2K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop'
    },
    {
      name: 'Sky Sports Cricket',
      description: 'Sky Sports Cricket Live Stream, International Cricket',
      iframe: '//stream.crichd.sc/update/skycricket.php',
      viewers: '14.6K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop'
    },
    {
      name: 'Sony Six Cricket',
      description: 'Sony Six Live Cricket Streaming, T20 and ODI Matches',
      iframe: '//stream.crichd.sc/update/sonysix.php',
      viewers: '22.4K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop'
    },
    {
      name: 'Willow Cricket',
      description: 'Willow Cricket HD, Premium Cricket Broadcasting',
      iframe: '//stream.crichd.sc/update/willow.php',
      viewers: '9.8K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🏏 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cricket</span> Live Streams
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch live cricket matches from IPL, World Cup, T20, ODI, and Test series. 
            Experience the gentleman's game with premium streaming quality.
          </p>
        </div>
      </section>

      <ChannelGrid 
        channels={cricketChannels}
        category="Cricket"
        description="The gentleman&apos;s game featuring international tournaments, domestic leagues, and bilateral series"
      />
      
      <Footer />
    </div>
  );
}
