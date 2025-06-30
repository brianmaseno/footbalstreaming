'use client';

import { useState } from 'react';
import { Play, Users, Eye, Clock } from 'lucide-react';

const FeaturedChannels = () => {
  const [selectedChannel, setSelectedChannel] = useState(0);

  const channels = [
    {
      name: 'Sky Sports Main Event',
      category: 'Football',
      viewers: '12.5K',
      quality: 'HD',
      status: 'LIVE',
      description: 'Sky Sports Main Event Live Stream, Sky Sports Live Streaming',
      iframe: '//stream.crichd.sc/update/skys1.php',
      thumbnail: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&h=250&fit=crop'
    },
    {
      name: 'Sky Sports Action',
      category: 'Sports',
      viewers: '8.2K',
      quality: 'HD',
      status: 'LIVE',
      description: 'Sky Sports Action Live Stream with premium quality',
      iframe: '//stream.crichd.sc/update/skys3.php',
      thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop'
    },
    {
      name: 'SuperSport Football',
      category: 'Football',
      viewers: '15.8K',
      quality: 'HD',
      status: 'LIVE',
      description: 'SuperSport Football Live Stream, Premium football coverage',
      iframe: '//stream.crichd.sc/update/ssf.php',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop'
    },
    {
      name: 'ESPN Sports',
      category: 'Multi-Sport',
      viewers: '20.1K',
      quality: 'HD',
      status: 'LIVE',
      description: 'ESPN Live Sports Streaming with all major sports',
      iframe: '//stream.crichd.sc/update/espn.php',
      thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Live Channels
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Watch premium sports channels with crystal clear HD quality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Channel List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Live Channels</h3>
            {channels.map((channel, index) => (
              <div
                key={index}
                onClick={() => setSelectedChannel(index)}
                className={`cursor-pointer rounded-lg border transition-all duration-300 ${
                  selectedChannel === index
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{channel.name}</h4>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {channel.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{channel.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {channel.viewers}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                        {channel.quality}
                      </span>
                      <span className="text-gray-400">{channel.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
              <div className="p-4 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {channels[selectedChannel].name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {channels[selectedChannel].description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-300">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{channels[selectedChannel].viewers}</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                      <span>LIVE</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https:${channels[selectedChannel].iframe}`}
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  allowFullScreen
                  allow="encrypted-media"
                  title={channels[selectedChannel].name}
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200">
                      <Play className="w-4 h-4" />
                      <span>Playing</span>
                    </button>
                    <div className="text-gray-300 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Live Stream</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {channels[selectedChannel].quality}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {channels[selectedChannel].category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Channel Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">More Live Channels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div
                key={`grid-${index}`}
                className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-slate-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedChannel(index)}
              >
                <div className="relative">
                  <img
                    src={channel.thumbnail}
                    alt={channel.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    LIVE
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {channel.quality}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-white mb-1">{channel.name}</h4>
                  <p className="text-gray-400 text-sm mb-2">{channel.category}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {channel.viewers}
                    </span>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedChannels;
