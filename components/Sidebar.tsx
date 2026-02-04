'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Film, 
  Zap, 
  Video, 
  Folder,
  Bot,
  Settings,
  Menu,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const menuItems = [
  { 
    name: 'Dashboard', 
    path: '/', 
    icon: Home, 
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  { 
    name: 'Produce.so', 
    path: '/produce', 
    icon: Film, 
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  { 
    name: 'VidRush.ai', 
    path: '/vidrush', 
    icon: Zap, 
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  { 
    name: 'Veo 3 Studio', 
    path: '/videos/create', 
    icon: Video, 
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  { 
    name: 'Projects', 
    path: '/projects', 
    icon: Folder, 
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10'
  },
  { 
    name: 'AI Agents', 
    path: '/agents', 
    icon: Bot, 
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10'
  },
];

const bottomItems = [
  { 
    name: 'Settings', 
    path: '/settings/api', 
    icon: Settings, 
    color: 'text-zinc-400',
    bgColor: 'bg-zinc-500/10'
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-screen bg-zinc-900 border-r border-white/10 transition-all duration-300 z-50 ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">HypeCut</span>
            </div>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-zinc-800 border border-white/20 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-3 h-3 text-zinc-400" />
          ) : (
            <ChevronLeft className="w-3 h-3 text-zinc-400" />
          )}
        </button>

        {/* Main Menu */}
        <nav className="p-2 mt-4">
          <p className={`text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 px-2 ${isCollapsed ? 'hidden' : 'block'}`}>
            Tools
          </p>
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${
                    isActive 
                      ? `${item.bgColor} border border-white/10` 
                      : 'hover:bg-white/5'
                  }`}
                  title={isCollapsed ? item.name : undefined}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isActive ? item.bgColor : 'bg-zinc-800'
                  }`}>
                    <Icon className={`w-4 h-4 ${isActive ? item.color : 'text-zinc-400 group-hover:text-white'}`} />
                  </div>
                  {!isCollapsed && (
                    <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {item.name}
                    </span>
                  )}
                  {isActive && !isCollapsed && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom Menu */}
        <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-white/10">
          <p className={`text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 px-2 ${isCollapsed ? 'hidden' : 'block'}`}>
            System
          </p>
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${
                  isActive 
                    ? `${item.bgColor} border border-white/10` 
                    : 'hover:bg-white/5'
                }`}
                title={isCollapsed ? item.name : undefined}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isActive ? item.bgColor : 'bg-zinc-800'
                }`}>
                  <Icon className={`w-4 h-4 ${isActive ? item.color : 'text-zinc-400 group-hover:text-white'}`} />
                </div>
                {!isCollapsed && (
                  <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div 
        className={`transition-all duration-300 ${
          isCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        {/* Content will be rendered here */}
      </div>
    </>
  );
}

// Hook to manage sidebar state
export function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return { isCollapsed, setIsCollapsed };
}