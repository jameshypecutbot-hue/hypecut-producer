'use client';

import { useState } from 'react';
import { 
  Settings, 
  Key, 
  CheckCircle, 
  XCircle, 
  RefreshCw,
  Database,
  Video,
  Sparkles,
  AlertCircle,
  Save
} from 'lucide-react';

interface AIProvider {
  id: string;
  name: string;
  description: string;
  status: 'connected' | 'disconnected' | 'error';
  apiKey?: string;
  endpoint?: string;
  costPerMinute?: number;
}

const initialProviders: AIProvider[] = [
  {
    id: 'google-veo-3',
    name: 'Google Veo 3',
    description: 'Latest high-quality video generation from Google',
    status: 'disconnected',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/veo-3',
    costPerMinute: 0.05
  },
  {
    id: 'runway-ml',
    name: 'Runway ML (Gen-2)',
    description: 'Advanced video generation with realistic motion',
    status: 'disconnected',
    endpoint: 'https://api.runwayml.com/v1',
    costPerMinute: 0.15
  },
  {
    id: 'pika-labs',
    name: 'Pika Labs',
    description: 'Fast video generation with good quality',
    status: 'disconnected',
    endpoint: 'https://api.pika.art/v1',
    costPerMinute: 0.10
  },
  {
    id: 'stable-video',
    name: 'Stable Video Diffusion',
    description: 'Open-source video generation model',
    status: 'disconnected',
    endpoint: 'https://api.stability.ai/v1/generation',
    costPerMinute: 0.03
  }
];

export default function APISettings() {
  const [providers, setProviders] = useState<AIProvider[]>(initialProviders);
  const [testing, setTesting] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const updateApiKey = (id: string, apiKey: string) => {
    setProviders(prev => prev.map(p => 
      p.id === id ? { ...p, apiKey } : p
    ));
  };

  const testConnection = async (id: string) => {
    setTesting(id);
    // Mock test - in real app, this would call the API
    setTimeout(() => {
      setProviders(prev => prev.map(p => 
        p.id === id ? { ...p, status: 'connected' } : p
      ));
      setTesting(null);
    }, 2000);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-purple-950">
      {/* Header */}
      <header className="bg-zinc-900/50 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">API Settings</h1>
                <p className="text-xs text-zinc-400">Configure AI video generation providers</p>
              </div>
            </div>
            
            <button 
              onClick={handleSave}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <Save className="w-4 h-4" />
              {saved ? 'Saved!' : 'Save Settings'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Card */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-blue-400 font-medium mb-1">About AI Providers</h3>
              <p className="text-sm text-zinc-400">
                Connect your API keys to enable video generation. Each provider offers different quality and pricing. 
                Google Veo 2 is recommended for high-quality results.
              </p>
            </div>
          </div>
        </div>

        {/* Providers List */}
        <div className="space-y-6">
          {providers.map((provider) => (
            <div key={provider.id} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    provider.status === 'connected' 
                      ? 'bg-green-500/20' 
                      : 'bg-zinc-800'
                  }`}>
                    <Video className={`w-5 h-5 ${
                      provider.status === 'connected' 
                        ? 'text-green-400' 
                        : 'text-zinc-400'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                      {provider.status === 'connected' && (
                        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Connected
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-400">{provider.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500">Cost</p>
                  <p className="text-white font-medium">${provider.costPerMinute}/min</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* API Endpoint */}
                <div>
                  <label className="text-sm text-zinc-400 block mb-1">API Endpoint</label>
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-300 font-mono">
                    {provider.endpoint}
                  </div>
                </div>

                {/* API Key Input */}
                <div>
                  <label className="text-sm text-zinc-400 block mb-1 flex items-center gap-2">
                    <Key className="w-3 h-3" />
                    API Key
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      placeholder="Enter your API key"
                      value={provider.apiKey || ''}
                      onChange={(e) => updateApiKey(provider.id, e.target.value)}
                      className="flex-1 bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
                    />
                    <button
                      onClick={() => testConnection(provider.id)}
                      disabled={!provider.apiKey || testing === provider.id}
                      className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {testing === provider.id ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Testing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          Test
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Status Indicator */}
                {provider.status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <XCircle className="w-4 h-4" />
                    Connection failed. Please check your API key.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Estimation */}
        <div className="mt-8 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-purple-400" />
            Cost Estimation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
              <p className="text-2xl font-bold text-white">30s</p>
              <p className="text-xs text-zinc-400">Video Length</p>
              <p className="text-xs text-green-400 mt-1">~$0.02-0.08</p>
            </div>
            <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
              <p className="text-2xl font-bold text-white">60s</p>
              <p className="text-xs text-zinc-400">Video Length</p>
              <p className="text-xs text-green-400 mt-1">~$0.03-0.15</p>
            </div>
            <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
              <p className="text-2xl font-bold text-white">3min</p>
              <p className="text-xs text-zinc-400">Video Length</p>
              <p className="text-xs text-green-400 mt-1">~$0.09-0.45</p>
            </div>
            <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
              <p className="text-2xl font-bold text-white">5min</p>
              <p className="text-xs text-zinc-400">Video Length</p>
              <p className="text-xs text-green-400 mt-1">~$0.15-0.75</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}