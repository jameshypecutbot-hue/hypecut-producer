'use client';

import { useState } from 'react';
import { 
  Play, 
  Film, 
  FileText, 
  Music, 
  Wand2, 
  Clock,
  Sparkles,
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Video,
  Mic,
  Palette,
  Layers
} from 'lucide-react';

// Mock niche data
const niches = [
  { id: 1, name: 'Space & Universe', icon: '🔭', popularity: 98, difficulty: 'Easy' },
  { id: 2, name: 'Scary Stories', icon: '👻', popularity: 95, difficulty: 'Easy' },
  { id: 3, name: 'History Documentaries', icon: '🏛️', popularity: 92, difficulty: 'Medium' },
  { id: 4, name: 'Anime Recaps', icon: '⚔️', popularity: 89, difficulty: 'Easy' },
  { id: 5, name: 'True Crime', icon: '🔍', popularity: 94, difficulty: 'Medium' },
  { id: 6, name: 'Finance & Money', icon: '💰', popularity: 91, difficulty: 'Hard' },
  { id: 7, name: 'Mystery & Unsolved', icon: '🔮', popularity: 88, difficulty: 'Easy' },
  { id: 8, name: 'Science Facts', icon: '🔬', popularity: 87, difficulty: 'Medium' },
];

const features = [
  {
    icon: FileText,
    title: 'AI Script Generator',
    description: 'Generate viral scripts optimized for retention. Built for faceless channels, trained on top-performing content.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Video,
    title: 'Ultra Long Form Videos',
    description: 'Create 3-4 hour videos automatically. Perfect for watch time optimization and monetization.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Mic,
    title: 'AI Voiceover',
    description: 'Natural-sounding AI voices. Multiple accents and styles to match your niche perfectly.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Music,
    title: 'Music Library',
    description: '1000+ copyright-free music tracks. Auto-matched to your content mood and pacing.',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Wand2,
    title: 'Script Trainer',
    description: 'Clone any YouTube niche. Paste a channel URL and we\'ll learn their style.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: Layers,
    title: 'Auto Editing',
    description: 'Automatic B-roll insertion, transitions, and effects. Professional quality in minutes.',
    color: 'from-indigo-500 to-violet-500'
  }
];

const testimonials = [
  {
    name: 'Alex M.',
    role: 'YouTuber, 500K subs',
    text: 'Went from 2 videos per week to 2 videos per day. My revenue tripled in 3 months.',
    avatar: 'A'
  },
  {
    name: 'Sarah K.',
    role: 'Automation Agency Owner',
    text: 'I run 12 faceless channels. Produce.so handles everything from scripts to final edit. Game changer.',
    avatar: 'S'
  },
  {
    name: 'Marcus T.',
    role: 'Full-time Creator',
    text: 'The ultra long-form feature is insane. 4-hour videos that keep viewers watching. CPM went through the roof.',
    avatar: 'M'
  }
];

const stats = [
  { label: 'Videos Generated', value: '2.5M+' },
  { label: 'Active Creators', value: '50K+' },
  { label: 'Total Watch Hours', value: '1B+' },
  { label: 'Avg. Revenue Increase', value: '340%' }
];

export default function ProduceClone() {
  const [selectedNiche, setSelectedNiche] = useState<number | null>(null);
  const [videoLength, setVideoLength] = useState('long');
  const [showGenerator, setShowGenerator] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Film className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">HypeCut</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</a>
              <a href="#niches" className="text-sm text-zinc-400 hover:text-white transition-colors">Niches</a>
              <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
            </div>
            <button 
              onClick={() => setShowGenerator(true)}
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Start Creating
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-zinc-300">The #1 YouTube Automation Tool</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The AI Platform{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              For Faceless
            </span>{' '}
            Channels
          </h1>
          
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Generate complete Ultra Long Form Videos and Scripts from start to finish. 
            AI-Powered Scripting, Ultra Long Form Video Generation & Ideation. 
            All in one workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => setShowGenerator(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Generate Your First Video
            </button>
            <button className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your YouTube Production, Simplified
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Want to scale to $10k/month with YouTube Automation? 
              This is the only tool you'll ever need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section id="niches" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              1,000+ Faceless YouTube Niches
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Choose from Space, Scary Stories, History, Anime, and more. 
              Each niche is pre-trained to boost retention and monetization.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {niches.map((niche) => (
              <button
                key={niche.id}
                onClick={() => setSelectedNiche(niche.id)}
                className={`p-6 rounded-2xl border text-left transition-all ${
                  selectedNiche === niche.id
                    ? 'bg-purple-500/20 border-purple-500/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <span className="text-3xl mb-3 block">{niche.icon}</span>
                <h3 className="text-white font-semibold mb-1">{niche.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-400">● {niche.popularity}%</span>
                  <span className="text-zinc-500">{niche.difficulty}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Generate Videos in 3 Simple Steps
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Niche',
                description: 'Select from 1,000+ pre-trained niches or clone any YouTube channel style.',
                icon: Layers
              },
              {
                step: '02',
                title: 'Generate Script',
                description: 'AI writes a complete script optimized for retention and watch time.',
                icon: FileText
              },
              {
                step: '03',
                title: 'Export Video',
                description: 'Auto-generated video with voiceover, music, B-roll, and effects.',
                icon: Play
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  <div className="text-6xl font-bold text-white/10 mb-4">{item.step}</div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Generator Modal */}
      {showGenerator && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-12">
            <div className="max-w-2xl mx-auto bg-zinc-900 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Video Generator</h2>
                <button 
                  onClick={() => setShowGenerator(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Video Length Selection */}
              <div className="mb-8">
                <label className="text-sm text-zinc-400 block mb-3">Video Length</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'short', label: 'Short Form', time: '30-60s', desc: 'YouTube Shorts' },
                    { id: 'long', label: 'Long Form', time: '8-15min', desc: 'Standard videos' },
                    { id: 'ultra', label: 'Ultra Long', time: '3-4hrs', desc: 'Max monetization' }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setVideoLength(option.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        videoLength === option.id
                          ? 'bg-purple-500/20 border-purple-500/50'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <p className="text-white font-medium">{option.label}</p>
                      <p className="text-purple-400 text-sm">{option.time}</p>
                      <p className="text-zinc-500 text-xs">{option.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Niche Selection */}
              <div className="mb-8">
                <label className="text-sm text-zinc-400 block mb-3">Select Niche</label>
                <div className="grid grid-cols-4 gap-2">
                  {niches.slice(0, 8).map((niche) => (
                    <button
                      key={niche.id}
                      onClick={() => setSelectedNiche(niche.id)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        selectedNiche === niche.id
                          ? 'bg-purple-500/20 border-purple-500/50'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-2xl block mb-1">{niche.icon}</span>
                      <span className="text-xs text-zinc-300">{niche.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic Input */}
              <div className="mb-8">
                <label className="text-sm text-zinc-400 block mb-3">Video Topic</label>
                <input
                  type="text"
                  placeholder="e.g., The Mystery of the Bermuda Triangle"
                  className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Generate Button */}
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Generate Video
              </button>

              <p className="text-center text-sm text-zinc-500 mt-4">
                Estimated generation time: {videoLength === 'ultra' ? '15-20 minutes' : '3-5 minutes'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Join 50,000+ Creators using HypeCut
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium">{t.name}</p>
                    <p className="text-sm text-zinc-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-zinc-300">"{t.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-zinc-400">Start free, scale as you grow</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '$29',
                period: '/month',
                description: 'Perfect for getting started',
                features: ['10 videos/month', 'Up to 15 min videos', 'Basic niches', 'Standard AI voice'],
                cta: 'Start Free Trial'
              },
              {
                name: 'Pro',
                price: '$79',
                period: '/month',
                description: 'For serious creators',
                features: ['50 videos/month', 'Up to 4 hour videos', 'All 1000+ niches', 'Premium AI voices', 'Priority rendering'],
                popular: true,
                cta: 'Get Pro'
              },
              {
                name: 'Agency',
                price: '$199',
                period: '/month',
                description: 'For automation agencies',
                features: ['Unlimited videos', 'White-label exports', 'API access', 'Dedicated support', 'Custom training'],
                cta: 'Contact Sales'
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
                  <span className="text-zinc-400">{plan.period}</span>
                </div>
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
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              YouTube Channel
            </span>
            ?
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Join 50,000+ creators already scaling with AI
          </p>
          <button 
            onClick={() => setShowGenerator(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Start Creating Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-500">
            © 2026 HypeCut. The #1 YouTube Automation Tool for Faceless Channels.
          </p>
        </div>
      </footer>
    </div>
  );
}