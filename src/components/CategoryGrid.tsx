'use client';

import Link from 'next/link';
import { 
  Trophy, 
  Zap, 
  Target, 
  Car, 
  Users, 
  Gamepad2, 
  Dumbbell, 
  Crown,
  Star,
  Globe
} from 'lucide-react';

const CategoryGrid = () => {
  const categories = [
    { 
      name: 'Football', 
      icon: Trophy, 
      color: 'from-green-500 to-emerald-600',
      count: '15 Channels',
      href: '/category/football'
    },
    { 
      name: 'Cricket', 
      icon: Target, 
      color: 'from-blue-500 to-cyan-600',
      count: '8 Channels',
      href: '/category/cricket'
    },
    { 
      name: 'Tennis', 
      icon: Zap, 
      color: 'from-yellow-500 to-orange-600',
      count: '6 Channels',
      href: '/category/tennis'
    },
    { 
      name: 'Basketball', 
      icon: Users, 
      color: 'from-purple-500 to-pink-600',
      count: '5 Channels',
      href: '/category/basketball'
    },
    { 
      name: 'Motors', 
      icon: Car, 
      color: 'from-red-500 to-rose-600',
      count: '4 Channels',
      href: '/category/motors'
    },
    { 
      name: 'Rugby', 
      icon: Dumbbell, 
      color: 'from-indigo-500 to-blue-600',
      count: '3 Channels',
      href: '/category/rugby'
    },
    { 
      name: 'WWE', 
      icon: Crown, 
      color: 'from-amber-500 to-yellow-600',
      count: '2 Channels',
      href: '/category/wwe'
    },
    { 
      name: 'UFC', 
      icon: Star, 
      color: 'from-gray-500 to-slate-600',
      count: '2 Channels',
      href: '/category/ufc'
    },
    { 
      name: 'Boxing', 
      icon: Gamepad2, 
      color: 'from-teal-500 to-cyan-600',
      count: '3 Channels',
      href: '/category/boxing'
    },
    { 
      name: 'Other Sports', 
      icon: Globe, 
      color: 'from-violet-500 to-purple-600',
      count: '10+ Channels',
      href: '/category/other'
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            All Categories
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose from our wide selection of sports categories and enjoy live streaming
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                href={category.href}
                className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">{category.count}</p>
                  
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-all duration-300"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
