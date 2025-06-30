'use client';

import { useState } from 'react';
import { Play, Users, Eye, Clock, Star, Globe } from 'lucide-react';

interface Channel {
  name: string;
  description: string;
  iframe: string;
  viewers: string;
  quality: string;
  thumbnail: string;
}

interface ChannelGridProps {
  channels: Channel[];
  category: string;
  description?: string;
}

const ChannelGrid = ({ channels, category, description }: ChannelGridProps) => {
  const [selectedChannel, setSelectedChannel] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Live {category} Channels
          </h2>
          {description && (
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Channel List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Available Channels
            </h3>
            {channels.map((channel, index) => (
              <div
                key={index}
                onClick={() => setSelectedChannel(index)}
                className={`cursor-pointer rounded-lg border transition-all duration-300 ${
                  selectedChannel === index
                    ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20'
                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white text-sm">{channel.name}</h4>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold animate-pulse">
                      LIVE
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">{channel.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-300 flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {channel.viewers}
                    </span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded">
                      {channel.quality}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Player */}
          <div className="lg:col-span-3">
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
                    <button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'aspect-video'} bg-black`}>
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
                {isFullscreen && (
                  <button
                    onClick={() => setIsFullscreen(false)}
                    className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-colors duration-200 z-10"
                  >
                    Exit Fullscreen
                  </button>
                )}
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
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm">Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">All {category} Channels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div
                key={`grid-${index}`}
                className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-slate-500 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedChannel(index)}
              >
                <div className="relative">
                  <img
                    src={channel.thumbnail}
                    alt={channel.name}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold animate-pulse">
                    LIVE
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {channel.quality}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-blue-500 rounded-full p-3">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-white mb-2">{channel.name}</h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{channel.description}</p>
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

        {/* Channel Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{channels.length}</div>
            <div className="text-gray-300">Available Channels</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">HD</div>
            <div className="text-gray-300">Stream Quality</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">Live Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelGrid;
