'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Video, 
  Film, 
  Zap, 
  Layers, 
  Folder, 
  Bot, 
  Settings,
  Home,
  ChevronRight,
  Sparkles,
  Wand2,
  Play
} from 'lucide-react';

const tools = [
  {
    category: 'Video Platforms',
    items: [
      { 
        name: 'HypeCut Dashboard', 
        path: '/', 
        icon: Home, 
        description: 'Main dashboard & analytics',
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Produce.so Clone', 
        path: '/produce', 
        icon: Film, 
        description: 'YouTube automation for faceless channels',
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'VidRush.ai Clone', 
        path: '/vidrush', 
        icon: Zap, 
        description: '8 AI video tools in one place',
        color: 'from-orange-500 to-red-500'
      },
    ]
  },
  {
    category: 'Video Creation',
    items: [
      { 
        name: 'Veo 3 Studio', 
        path: '/videos/create', 
        icon: Video, 
        description: 'Google Vertex AI video generation',
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Projects', 
        path: '/projects', 
        icon: Folder, 
        description: 'Manage video projects',
        color: 'from-indigo-500 to-violet-500'
      },
      { 
        name: 'AI Agents', 
        path: '/agents', 
        icon: Bot, 
        description: 'Create and manage AI agents',
        color: 'from-pink-500 to-rose-500'
      },
    ]
  },
  {
    category: 'Settings',
    items: [
      { 
        name: 'API Configuration', 
        path: '/settings/api', 
        icon: Settings, 
        description: 'Connect Google Veo, Runway, etc.',
        color: 'from-zinc-500 to-zinc-400'
      },
    ]
  }
];

export default function ToolsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-zinc-900 border-l border-white/10 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Tools Menu</h2>
              <p className="text-xs text-zinc-400">All AI video platforms</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-zinc-400" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-6 overflow-y-auto h-[calc(100vh-88px)]">
          {tools.map((section) => (
            <div key={section.category} className="mb-8">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                {section.category}
              </h3>
              <div className="space-y-3">
                {section.items.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.path}
                      href={tool.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium flex items-center gap-2">
                          {tool.name}
                          <ChevronRight className="w-4 h-4 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-sm text-zinc-400 truncate">{tool.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Quick Stats */}
          <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
            <h4 className="text-white font-medium mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Quick Stats
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">7</p>
                <p className="text-xs text-zinc-400">Tools Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-xs text-zinc-400">Platforms</p>
              </div>
            </div>
          </div>

          {/* Version */}
          <div className="mt-8 text-center">
            <p className="text-xs text-zinc-500">HypeCut Producer v1.0.0</p>
          </div>
        </div>
      </div>
    </>
  );
}

// Simple link component for use in other pages
export function ToolsMenuLink() {
  return (
    <Link 
      href="/menu"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <Menu className="w-6 h-6 text-white" />
    </Link>
  );
}