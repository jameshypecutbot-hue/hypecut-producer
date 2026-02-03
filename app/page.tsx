'use client';

import { useState } from 'react';
import { 
  Video, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Eye, 
  Clock,
  Zap,
  Play,
  BarChart3,
  Settings,
  Sparkles,
  Target,
  CreditCard,
  Plus
} from 'lucide-react';
import ToolsMenu from '@/components/ToolsMenu';

// Mock data
const mockUser = {
  name: "Creator Pro",
  credits: 142000,
  plan: "Premium",
  stats: {
    totalVideos: 127,
    totalViews: "2.4M",
    subscribers: "45.2K",
    revenue: "$12,847",
    watchHours: "18,432"
  }
};

const mockRecentVideos = [
  {
    id: 1,
    title: "How to Make $1000/Day with AI Tools",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&h=180&fit=crop",
    views: "124K",
    revenue: "$847",
    status: "published",
    createdAt: "2 days ago"
  },
  {
    id: 2,
    title: "The Future of Remote Work in 2024",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=320&h=180&fit=crop",
    views: "89K",
    revenue: "$623",
    status: "published",
    createdAt: "5 days ago"
  },
  {
    id: 3,
    title: "Debt-Free by 30: My Journey",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=320&h=180&fit=crop",
    views: "156K",
    revenue: "$1,247",
    status: "published",
    createdAt: "1 week ago"
  }
];

const mockTrendingTopics = [
  { topic: "AI Productivity Tools", volume: "2.1M", growth: "+45%" },
  { topic: "Remote Work Tips", volume: "1.8M", growth: "+23%" },
  { topic: "Personal Finance", volume: "3.2M", growth: "+67%" },
  { topic: "Side Hustle Ideas", volume: "2.7M", growth: "+89%" },
];

export default function HypeCutDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-purple-950">
      {/* Header */}
      <header className="bg-zinc-900/50 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">HypeCut Producer</h1>
                <p className="text-xs text-zinc-400">AI Video Creation Platform</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-zinc-400">Credits Available</p>
                <p className="text-lg font-bold text-white">{mockUser.credits.toLocaleString()}</p>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">New Video</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400">Total Revenue</p>
                <p className="text-xl font-bold text-white">{mockUser.stats.revenue}</p>
                <p className="text-xs text-green-400">+23% this month</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400">Subscribers</p>
                <p className="text-xl font-bold text-white">{mockUser.stats.subscribers}</p>
                <p className="text-xs text-green-400">+1.2K this month</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400">Total Views</p>
                <p className="text-xl font-bold text-white">{mockUser.stats.totalViews}</p>
                <p className="text-xs text-green-400">+45% this month</p>
              </div>
              <Eye className="w-8 h-8 text-purple-400" />
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400">Watch Hours</p>
                <p className="text-xl font-bold text-white">{mockUser.stats.watchHours}</p>
                <p className="text-xs text-green-400">+67% this month</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Videos */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <div className="p-4 border-b border-zinc-800">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Recent Videos
                </h2>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {mockRecentVideos.map((video) => (
                    <div key={video.id} className="flex items-center space-x-4 p-3 bg-zinc-800/50 rounded-lg">
                      <img src={video.thumbnail} alt={video.title} className="w-24 h-14 object-cover rounded" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium text-sm truncate">{video.title}</h3>
                        <div className="flex items-center space-x-3 text-xs text-zinc-400 mt-1">
                          <span>{video.views} views</span>
                          <span className="text-green-400">{video.revenue}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-zinc-400">{video.createdAt}</p>
                        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded mt-1 inline-block">
                          {video.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trending Topics */}
          <div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <div className="p-4 border-b border-zinc-800">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending Topics
                </h2>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {mockTrendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                      <div>
                        <p className="text-white text-sm font-medium">{topic.topic}</p>
                        <p className="text-xs text-zinc-400">{topic.volume} searches</p>
                      </div>
                      <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">
                        {topic.growth}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-left hover:bg-zinc-800/50 transition-colors">
            <Sparkles className="w-6 h-6 text-purple-400 mb-2" />
            <p className="text-white font-medium">AI Script</p>
            <p className="text-xs text-zinc-400">Generate video scripts</p>
          </button>
          
          <button className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-left hover:bg-zinc-800/50 transition-colors">
            <Target className="w-6 h-6 text-pink-400 mb-2" />
            <p className="text-white font-medium">Trend Finder</p>
            <p className="text-xs text-zinc-400">Discover viral topics</p>
          </button>
          
          <button className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-left hover:bg-zinc-800/50 transition-colors">
            <BarChart3 className="w-6 h-6 text-blue-400 mb-2" />
            <p className="text-white font-medium">Analytics</p>
            <p className="text-xs text-zinc-400">Track performance</p>
          </button>
          
          <button className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-left hover:bg-zinc-800/50 transition-colors">
            <CreditCard className="w-6 h-6 text-green-400 mb-2" />
            <p className="text-white font-medium">Buy Credits</p>
            <p className="text-xs text-zinc-400">Add more credits</p>
          </button>
        </div>
      </main>

      {/* Tools Menu */}
      <ToolsMenu />

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-8 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-zinc-500">
          <p>HypeCut Producer v1.0.0 • Built with AI</p>
        </div>
      </footer>
    </div>
  );
}