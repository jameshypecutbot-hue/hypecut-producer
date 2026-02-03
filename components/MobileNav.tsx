'use client';

import Link from 'next/link';
import { 
  Menu, 
  Film, 
  Zap, 
  Video, 
  Folder,
  Bot,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

const quickLinks = [
  { name: 'Dashboard', path: '/', icon: '🏠' },
  { name: 'Produce', path: '/produce', icon: '🎬' },
  { name: 'VidRush', path: '/vidrush', icon: '⚡' },
  { name: 'Veo 3', path: '/videos/create', icon: '🎥' },
  { name: 'Projects', path: '/projects', icon: '📁' },
  { name: 'Agents', path: '/agents', icon: '🤖' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Mobile Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-white font-bold">HypeCut</span>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="mt-3 pb-3 space-y-2 border-t border-white/10 pt-3">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 text-white hover:bg-white/10"
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Fixed Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-white/10 px-2 py-2">
        <div className="flex justify-around">
          {quickLinks.slice(0, 5).map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="flex flex-col items-center p-2 text-zinc-400 hover:text-white"
            >
              <span className="text-xl mb-1">{link.icon}</span>
              <span className="text-xs">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Add padding for fixed bars */}
      <div className="md:hidden h-14" /> {/* Top bar space */}
      <div className="md:hidden h-16" /> {/* Bottom bar space */}
    </>
  );
}