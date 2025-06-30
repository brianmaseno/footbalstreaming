import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChannelGrid from '@/components/ChannelGrid';

export default function TennisPage() {
  const tennisChannels = [
    {
      name: 'Sky Sports Tennis',
      description: 'Sky Sports Tennis Live Stream, Grand Slam Coverage',
      iframe: '//stream.crichd.sc/update/skystennis.php',
      viewers: '7.3K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=250&fit=crop'
    },
    {
      name: 'Eurosport Tennis',
      description: 'Eurosport Tennis Live, European Tennis Championships',
      iframe: '//stream.crichd.sc/update/eurosport1.php',
      viewers: '5.8K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop'
    },
    {
      name: 'Tennis Channel',
      description: 'Tennis Channel Live Stream, ATP and WTA Tours',
      iframe: '//stream.crichd.sc/update/tennischannel.php',
      viewers: '9.1K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1534138533799-6ae1b62ab7be?w=400&h=250&fit=crop'
    },
    {
      name: 'ESPN Tennis',
      description: 'ESPN Tennis Live, US Open and Major Tournaments',
      iframe: '//stream.crichd.sc/update/espn2.php',
      viewers: '6.4K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1617088687772-8f993565fe3b?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🎾 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Tennis</span> Live Streams
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch live tennis matches from Wimbledon, US Open, French Open, Australian Open, 
            and ATP/WTA tour events in stunning high definition.
          </p>
        </div>
      </section>

      <ChannelGrid 
        channels={tennisChannels}
        category="Tennis"
        description="Grand Slam tournaments, ATP and WTA tours, and professional tennis from around the world"
      />
      
      <Footer />
    </div>
  );
}
