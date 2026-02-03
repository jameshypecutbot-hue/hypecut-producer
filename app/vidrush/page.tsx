'use client';

import { useState } from 'react';
import { 
  Video, 
  Image,
  FileText,
  Mic,
  User,
  Wand2,
  Play,
  Sparkles,
  Zap,
  Layers,
  Music,
  Scissors,
  Upload,
  Download,
  Settings,
  ChevronRight,
  Star,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp
} from 'lucide-react';

const tools = [
  {
    id: 'text-to-video',
    name: 'Text to Video',
    description: 'Transform text prompts into stunning videos',
    icon: FileText,
    color: 'from-blue-500 to-cyan-500',
    popular: true,
    time: '2-5 min',
    cost: '$0.50'
  },
  {
    id: 'image-to-video',
    name: 'Image to Video',
    description: 'Animate your images with AI motion',
    icon: Image,
    color: 'from-purple-500 to-pink-500',
    popular: true,
    time: '1-3 min',
    cost: '$0.30'
  },
  {
    id: 'video-to-video',
    name: 'Video Restyle',
    description: 'Transform video style with AI',
    icon: Video,
    color: 'from-orange-500 to-red-500',
    popular: false,
    time: '3-8 min',
    cost: '$1.00'
  },
  {
    id: 'face-swap',
    name: 'Face Swap',
    description: 'Swap faces in videos seamlessly',
    icon: User,
    color: 'from-green-500 to-emerald-500',
    popular: false,
    time: '2-4 min',
    cost: '$0.40'
  },
  {
    id: 'ai-avatar',
    name: 'AI Avatar',
    description: 'Create talking avatar videos',
    icon: User,
    color: 'from-indigo-500 to-violet-500',
    popular: true,
    time: '1-2 min',
    cost: '$0.20'
  },
  {
    id: 'voice-clone',
    name: 'Voice Clone',
    description: 'Clone any voice for narration',
    icon: Mic,
    color: 'from-yellow-500 to-orange-500',
    popular: false,
    time: '30 sec',
    cost: '$0.10'
  },
  {
    id: 'script-to-video',
    name: 'Script to Video',
    description: 'Full video from script automatically',
    icon: FileText,
    color: 'from-pink-500 to-rose-500',
    popular: true,
    time: '5-10 min',
    cost: '$2.00'
  },
  {
    id: 'video-editor',
    name: 'AI Editor',
    description: 'Smart editing with AI assistance',
    icon: Scissors,
    color: 'from-teal-500 to-cyan-500',
    popular: false,
    time: '2-5 min',
    cost: '$0.60'
  }
];

const recentCreations = [
  { id: 1, tool: 'Text to Video', prompt: 'A futuristic city at sunset, flying cars, neon lights', time: '2 min ago', thumbnail: '🌆' },
  { id: 2, tool: 'AI Avatar', prompt: 'Business presentation, professional attire', time: '5 min ago', thumbnail: '👔' },
  { id: 3, tool: 'Image to Video', prompt: 'Ocean waves crashing, cinematic slow motion', time: '12 min ago', thumbnail: '🌊' },
  { id: 4, tool: 'Script to Video', prompt: '10 Amazing Facts About Space', time: '1 hour ago', thumbnail: '🚀' }
];

const stats = [
  { label: 'Videos Created', value: '10M+' },
  { label: 'Active Users', value: '500K+' },
  { label: 'AI Models', value: '15+' },
  { label: 'Avg. Rating', value: '4.9★' }
];

export default function VidRushClone() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const renderToolInterface = () => {
    switch (selectedTool) {
      case 'text-to-video':
        return (
          <div className="space-y-6">
            <div>
              <label className="text-sm text-zinc-400 block mb-2">Describe your video</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A serene mountain landscape at sunrise, with mist rolling through valleys, cinematic lighting, 4K quality..."
                rows={4}
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-zinc-400 block mb-2">Duration</label>
                <select className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 text-white">
                  <option>4 seconds</option>
                  <option>8 seconds</option>
                  <option>16 seconds</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-zinc-400 block mb-2">Aspect Ratio</label>
                <select className="w-full bg-black border border-white/20 rounded-xl px-4 py-2 text-white">
                  <option>16:9 (Landscape)</option>
                  <option>9:16 (Portrait)</option>
                  <option>1:1 (Square)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 'image-to-video':
        return (
          <div className="space-y-6">
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-purple-500/50 transition-colors">
              {uploadedImage ? (
                <div className="text-white">Image uploaded ✓</div>
              ) : (
                <>
                  <Upload className="w-12 h-12 text-zinc-500 mx-auto mb-4" />
                  <p className="text-zinc-400 mb-2">Drop your image here</p>
                  <p className="text-sm text-zinc-500">or click to browse</p>
                </>
              )}
            </div>
            <div>
              <label className="text-sm text-zinc-400 block mb-2">Motion Description (optional)</label>
              <input
                type="text"
                placeholder="Camera pans slowly from left to right..."
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
        );

      case 'ai-avatar':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-3">
              {[1,2,3,4,5,6,7,8].map((i) => (
                <button key={i} className="aspect-square bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors flex items-center justify-center text-3xl">
                  {['👨‍💼', '👩‍💼', '🧑‍🔬', '👩‍🎨', '🧑‍✈️', '👩‍🍳', '🧑‍🏫', '👩‍⚕️'][i-1]}
                </button>
              ))}
            </div>
            <div>
              <label className="text-sm text-zinc-400 block mb-2">Script / What should the avatar say?</label>
              <textarea
                rows={3}
                placeholder="Hello! Welcome to my channel. Today we're going to learn about..."
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="text-sm text-zinc-400 block mb-2">Voice</label>
              <div className="grid grid-cols-3 gap-2">
                {['Professional Male', 'Professional Female', 'Casual Male', 'Casual Female', 'Energetic', 'Calm'].map((voice) => (
                  <button key={voice} className="p-2 bg-zinc-800 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700 transition-colors">
                    {voice}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12 text-zinc-400">
            <Wand2 className="w-16 h-16 mx-auto mb-4" />
            <p>Select a tool from above to get started</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">VidRush</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#tools" className="text-sm text-zinc-400 hover:text-white transition-colors">Tools</a>
              <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
              <a href="#gallery" className="text-sm text-zinc-400 hover:text-white transition-colors">Gallery</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-zinc-400">100 credits</span>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Create
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-zinc-300">Trusted by 500K+ creators worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Create Videos with{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Magic
            </span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Text to video, image animation, AI avatars, face swap & more. 
            All the AI video tools you need in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Start Creating Free
            </button>
            <button className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">8 Powerful AI Tools</h2>
            <p className="text-zinc-400">Everything you need to create stunning videos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`p-6 rounded-2xl border text-left transition-all ${
                    selectedTool === tool.id
                      ? 'bg-white/10 border-purple-500/50'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-white font-semibold">{tool.name}</h3>
                    {tool.popular && (
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">{tool.description}</p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {tool.time}
                    </span>
                    <span>{tool.cost}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creator Interface */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tool Selector */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">Select Tool</h3>
              <div className="space-y-2">
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => setSelectedTool(tool.id)}
                      className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all ${
                        selectedTool === tool.id
                          ? 'bg-purple-500/20 border border-purple-500/50'
                          : 'bg-white/5 border border-transparent hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-medium text-sm">{tool.name}</p>
                        <p className="text-xs text-zinc-500">{tool.cost}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Creation Interface */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">
                  {selectedTool ? tools.find(t => t.id === selectedTool)?.name : 'Create Video'}
                </h3>
                
                {renderToolInterface()}

                {selectedTool && (
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-5 h-5" />
                        Generate Video
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Creations */}
      <section id="gallery" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Recent Creations</h2>
            <button className="text-purple-400 hover:text-purple-300 flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentCreations.map((creation) => (
              <div key={creation.id} className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-all">
                <div className="aspect-video bg-zinc-800 flex items-center justify-center text-6xl">
                  {creation.thumbnail}
                </div>
                <div className="p-4">
                  <span className="text-xs text-purple-400">{creation.tool}</span>
                  <p className="text-white text-sm mt-1 truncate">{creation.prompt}</p>
                  <p className="text-xs text-zinc-500 mt-2">{creation.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-zinc-400">Pay only for what you use. No subscriptions.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '$10',
                credits: '100 credits',
                description: 'Perfect for trying out',
                features: ['All AI tools', 'Standard quality', 'Email support']
              },
              {
                name: 'Pro',
                price: '$50',
                credits: '600 credits',
                description: 'Best value for creators',
                popular: true,
                features: ['All AI tools', '4K quality', 'Priority generation', 'API access']
              },
              {
                name: 'Enterprise',
                price: '$200',
                credits: '2500 credits',
                description: 'For power users',
                features: ['All AI tools', '4K quality', 'Fastest generation', 'Dedicated support', 'Custom models']
              }
            ].map((plan) => (
              <div 
                key={plan.name}
                className={`rounded-2xl p-6 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/20 border border-purple-500/50' 
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {plan.popular && (
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white mt-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-purple-400 font-medium">{plan.credits}</p>
                <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition-colors ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-500">
            © 2026 VidRush. All AI video tools in one place.
          </p>
        </div>
      </footer>
    </div>
  );
}