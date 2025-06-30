import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChannelGrid from '@/components/ChannelGrid';

export default function FootballPage() {
  const footballChannels = [
    {
      name: 'Sky Sports Main Event',
      description: 'Sky Sports Main Event Live Stream, Premium Football Coverage',
      iframe: '//stream.crichd.sc/update/skys1.php',
      viewers: '12.5K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&h=250&fit=crop'
    },
    {
      name: 'Sky Sports Football',
      description: 'Sky Sports Football Live Stream, Watch Sky Sports Football Online Free, Sky Sports Football Stream Online Free',
      iframe: '//stream.crichd.sc/update/skysfotb.php',
      viewers: '18.3K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=250&fit=crop'
    },
    {
      name: 'Sky Sports Arena',
      description: 'Sky Sports Arena Live Stream, Watch Sky Sports Arena Online Free, Sky Sports Arena Stream Online Free',
      iframe: '//stream.crichd.sc/update/skysarena.php',
      viewers: '14.7K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=250&fit=crop'
    },
    {
      name: 'Sky Sports Premier League',
      description: 'Sky Sports Premier League Live Stream, Watch Sky Sports 5 Online Free, Sky Sports 5 Stream Online Free',
      iframe: '//stream.crichd.sc/update/skys5.php',
      viewers: '25.2K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=250&fit=crop'
    },
    {
      name: 'Sky Sports F1',
      description: 'Sky Sports F1 Live Stream, Sky Sports F1 Live Streaming, Formula One Live Streaming',
      iframe: '//stream.crichd.sc/update/skyf1.php',
      viewers: '16.9K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop'
    },
    {
      name: 'Sky Sports Mix',
      description: 'Sky Sports Mix Live Stream, Sky Sports Mix Live Streaming, Sky Sports Mix Live',
      iframe: '//stream.crichd.sc/update/skysmix.php',
      viewers: '11.4K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=250&fit=crop'
    },
    {
      name: 'Sky Sports News',
      description: 'Sky Sports Live Stream, Sky Sports News Live Streaming',
      iframe: '//stream.crichd.sc/update/skysn.php',
      viewers: '9.8K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop'
    },
    {
      name: 'TNT Sports 1',
      description: 'TNT Sports 1 Live Stream, TNT Sports 1 Live Streaming, Watch TNT Sports 1 Online',
      iframe: '//stream.crichd.sc/update/bt1.php',
      viewers: '19.6K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop'
    },
    {
      name: 'TNT Sports 2',
      description: 'TNT Sports 2 Live Stream, TNT Sports 2 Live Streaming, Watch TNT Sports 2 Online',
      iframe: '//stream.crichd.sc/update/bt2.php',
      viewers: '17.3K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=250&fit=crop'
    },
    {
      name: 'TNT Sports 3',
      description: 'TNT Sports 3 Live Stream, TNT Sports 3 Live Streaming, Watch TNT Sports 3 Online',
      iframe: '//stream.crichd.sc/update/bteu.php',
      viewers: '15.1K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop'
    },
    {
      name: 'TNT Sports 4',
      description: 'TNT Sports 4 Uk Live Stream, TNT Sports 4 Live Streaming, Watch TNT Sports 4 Online',
      iframe: '//stream.crichd.sc/update/espn.php',
      viewers: '13.7K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1551524164-6cf6ac6928cc?w=400&h=250&fit=crop'
    },
    {
      name: 'SuperSport Football',
      description: 'SuperSport Football Live Stream, African Football Coverage',
      iframe: '//stream.crichd.sc/update/ssf.php',
      viewers: '15.8K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop'
    },
    {
      name: 'Sky Sports Action',
      description: 'Sky Sports Action Live Stream, Multi-Sport Coverage',
      iframe: '//stream.crichd.sc/update/skys3.php',
      viewers: '8.2K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop'
    },
    {
      name: 'Viaplay Sports 1',
      description: 'Viaplay Sports 1 Live Streaming, premium online video streaming service by Viaplay Group',
      iframe: '//stream.crichd.sc/update/premier.php',
      viewers: '12.8K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop'
    },
    {
      name: 'Viaplay Sports 2',
      description: 'Viaplay Sports 2 Live Streaming, premium online video streaming service by Viaplay Group',
      iframe: '//stream.crichd.sc/update/ch2.php',
      viewers: '10.5K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=250&fit=crop'
    },
    {
      name: 'LaLiga UK Sports TV',
      description: 'LaLiga UK Sports TV - Live Sports Streaming, UK and Ireland\'s only 24/7 linear television channel',
      iframe: '//stream.crichd.sc/update/laligauk.php',
      viewers: '16.2K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=250&fit=crop'
    },
    {
      name: 'Ten Sports PK',
      description: 'Ten Sports PK Live Cricket and Football coverage from Pakistan',
      iframe: '//stream.crichd.sc/update/tensp.php',
      viewers: '14.1K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=250&fit=crop'
    },
    {
      name: 'A Sports HD',
      description: 'A Sports Live Streaming - Pakistan\'s First HD A Sports Channel',
      iframe: '//stream.crichd.sc/update/asportshd.php',
      viewers: '11.9K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=250&fit=crop'
    },
    {
      name: 'Sony TEN 1 HD',
      description: 'Sony TEN 1 HD Live - Watch World Cup 2022 Live Cricket matches, football, WWE Live',
      iframe: '//stream.crichd.sc/update/ten1.php',
      viewers: '18.7K',
      quality: 'HD',
      thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ⚽ <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Football</span> Live Streams
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch live football matches from Premier League, Champions League, World Cup, and more. 
            Experience the beautiful game in high-quality streams.
          </p>
        </div>
      </section>

      <ChannelGrid 
        channels={footballChannels}
        category="Football"
        description="The world's most popular sport, featuring top leagues and international competitions"
      />
      
      <Footer />
    </div>
  );
}
