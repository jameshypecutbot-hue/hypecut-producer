'use client';

import { useState } from 'react';
import { 
  Video, 
  FileText, 
  Wand2, 
  Play, 
  Pause,
  Download,
  Settings,
  Clock,
  DollarSign,
  CheckCircle,
  Loader2,
  AlertCircle,
  Sparkles,
  Layers,
  Music,
  Image,
  Type,
  Palette
} from 'lucide-react';

interface VideoScene {
  id: number;
  timestamp: string;
  script: string;
  visualPrompt: string;
  status: 'pending' | 'generating' | 'completed' | 'error';
  videoUrl?: string;
  cost: number;
}

const mockScenes: VideoScene[] = [
  {
    id: 1,
    timestamp: '00:00 - 00:08',
    script: 'Deep in the Amazon rainforest, a discovery that changed everything...',
    visualPrompt: 'Aerial view of dense Amazon rainforest, misty morning light, cinematic',
    status: 'completed',
    videoUrl: 'https://example.com/scene1.mp4',
    cost: 0.40
  },
  {
    id: 2,
    timestamp: '00:08 - 00:16',
    script: 'Scientists were stunned when they found this ancient structure.',
    visualPrompt: 'Ancient stone structure covered in vines, archaeologists examining, documentary style',
    status: 'generating',
    cost: 0.40
  },
  {
    id: 3,
    timestamp: '00:16 - 00:24',
    script: 'What they uncovered would rewrite history books forever.',
    visualPrompt: 'Ancient artifacts and hieroglyphics, mysterious lighting, dramatic reveal',
    status: 'pending',
    cost: 0.40
  }
];

const videoStyles = [
  { id: 'cinematic', name: 'Cinematic', description: 'Movie-quality visuals', cost: 0.05 },
  { id: 'documentary', name: 'Documentary', description: 'Realistic, educational', cost: 0.04 },
  { id: 'animated', name: 'AI Animated', description: 'Stylized motion', cost: 0.03 },
  { id: 'stock', name: 'Stock Footage', description: 'Professional B-roll', cost: 0.02 }
];

export default function VideoCreation() {
  const [activeTab, setActiveTab] = useState('script');
  const [script, setScript] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('cinematic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [scenes, setScenes] = useState<VideoScene[]>(mockScenes);
  const [totalCost, setTotalCost] = useState(1.20);
  const [progress, setProgress] = useState(33);

  const handleGenerateVideo = async () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      setActiveTab('preview');
    }, 3000);
  };

  const handleSceneRegenerate = (sceneId: number) => {
    setScenes(prev => prev.map(s => 
      s.id === sceneId ? { ...s, status: 'generating' } : s
    ));
    setTimeout(() => {
      setScenes(prev => prev.map(s => 
        s.id === sceneId ? { ...s, status: 'completed' } : s
      ));
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'generating':
        return <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-zinc-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">HypeCut</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-zinc-400">Google Vertex AI</p>
                <p className="text-sm text-green-400">● Connected</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 py-4">
            {[
              { id: 'script', label: 'Script', icon: FileText },
              { id: 'scenes', label: 'Scenes', icon: Layers },
              { id: 'preview', label: 'Preview', icon: Play },
              { id: 'export', label: 'Export', icon: Download }
            ].map((step) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`flex items-center gap-2 ${
                    activeTab === step.id ? 'text-white' : 'text-zinc-500'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeTab === step.id 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'bg-zinc-800'
                  }`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Cost Estimator */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                Cost Estimate
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Video Style</span>
                  <span className="text-white">{videoStyles.find(s => s.id === selectedStyle)?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Cost per second</span>
                  <span className="text-white">${videoStyles.find(s => s.id === selectedStyle)?.cost}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Estimated duration</span>
                  <span className="text-white">3-4 minutes</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Total Estimate</span>
                    <span className="text-2xl font-bold text-green-400">${totalCost.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Style */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-400" />
                Video Style
              </h3>
              <div className="space-y-2">
                {videoStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`w-full p-3 rounded-xl text-left transition-all ${
                      selectedStyle === style.id
                        ? 'bg-purple-500/20 border border-purple-500/50'
                        : 'bg-zinc-800 border border-transparent hover:bg-zinc-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium">{style.name}</p>
                        <p className="text-xs text-zinc-400">{style.description}</p>
                      </div>
                      <span className="text-sm text-zinc-400">${style.cost}/s</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Google Vertex Settings */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-400" />
                Vertex AI Settings
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Model</span>
                  <span className="text-white">Veo 3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Region</span>
                  <span className="text-white">us-central1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Resolution</span>
                  <span className="text-white">1080p</span>
                </div>
                <button className="w-full mt-4 bg-zinc-800 text-white py-2 rounded-lg text-sm hover:bg-zinc-700 transition-colors">
                  Configure API
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Content */}
          <div className="lg:col-span-2">
            {activeTab === 'script' && (
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Video Script</h2>
                <p className="text-zinc-400 mb-4">
                  Paste your script or generate one with AI. Each scene will be created separately.
                </p>
                <textarea
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  placeholder="Enter your video script here...&#10;&#10;Example:&#10;Scene 1: Deep in the Amazon rainforest...&#10;Scene 2: Scientists discover ancient ruins...&#10;Scene 3: The mystery unfolds..."
                  rows={12}
                  className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500"
                />
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Generate with AI
                  </button>
                  <button 
                    onClick={() => setActiveTab('scenes')}
                    className="flex-1 bg-zinc-800 text-white py-3 rounded-xl font-medium hover:bg-zinc-700 transition-colors"
                  >
                    Continue to Scenes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'scenes' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">Video Scenes</h2>
                  <button
                    onClick={handleGenerateVideo}
                    disabled={isGenerating}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4" />
                        Generate All Scenes
                      </>
                    )}
                  </button>
                </div>

                {/* Overall Progress */}
                <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-4 mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">Generation Progress</span>
                    <span className="text-white">{progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Scene Cards */}
                {scenes.map((scene) => (
                  <div key={scene.id} className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(scene.status)}
                        <div>
                          <h3 className="text-white font-medium">Scene {scene.id}</h3>
                          <p className="text-sm text-zinc-400">{scene.timestamp}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-400">${scene.cost.toFixed(2)}</span>
                        <button 
                          onClick={() => handleSceneRegenerate(scene.id)}
                          className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                        >
                          <Wand2 className="w-4 h-4 text-zinc-400" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/50 rounded-xl p-3">
                        <p className="text-xs text-zinc-500 mb-1 flex items-center gap-1">
                          <Type className="w-3 h-3" /> Script
                        </p>
                        <p className="text-sm text-zinc-300">{scene.script}</p>
                      </div>
                      <div className="bg-black/50 rounded-xl p-3">
                        <p className="text-xs text-zinc-500 mb-1 flex items-center gap-1">
                          <Image className="w-3 h-3" /> Visual Prompt
                        </p>
                        <p className="text-sm text-zinc-300">{scene.visualPrompt}</p>
                      </div>
                    </div>

                    {scene.status === 'completed' && scene.videoUrl && (
                      <div className="mt-4 aspect-video bg-zinc-800 rounded-xl flex items-center justify-center">
                        <Play className="w-12 h-12 text-white/50" />
                      </div>
                    )}
                  </div>
                ))}

                <button 
                  onClick={() => setActiveTab('preview')}
                  className="w-full bg-zinc-800 text-white py-3 rounded-xl font-medium hover:bg-zinc-700 transition-colors"
                >
                  Preview Full Video
                </button>
              </div>
            )}

            {activeTab === 'preview' && (
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Video Preview</h2>
                <div className="aspect-video bg-zinc-800 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-white/50 mx-auto mb-4" />
                    <p className="text-zinc-400">Preview video will appear here</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-black/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-white">3:24</p>
                    <p className="text-xs text-zinc-500">Duration</p>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-white">24</p>
                    <p className="text-xs text-zinc-500">Scenes</p>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-green-400">$9.60</p>
                    <p className="text-xs text-zinc-500">Total Cost</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Export Video
                  </button>
                  <button 
                    onClick={() => setActiveTab('scenes')}
                    className="flex-1 bg-zinc-800 text-white py-3 rounded-xl font-medium hover:bg-zinc-700 transition-colors"
                  >
                    Edit Scenes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'export' && (
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Export Options</h2>
                <div className="space-y-4">
                  {[
                    { format: 'MP4 (4K)', quality: 'Best', size: '2.4 GB', cost: 'Included' },
                    { format: 'MP4 (1080p)', quality: 'High', size: '890 MB', cost: 'Included' },
                    { format: 'MP4 (720p)', quality: 'Standard', size: '420 MB', cost: 'Included' },
                    { format: 'MOV (ProRes)', quality: 'Professional', size: '8.2 GB', cost: '+$2.00' }
                  ].map((option) => (
                    <div key={option.format} className="flex items-center justify-between p-4 bg-black/50 rounded-xl">
                      <div>
                        <p className="text-white font-medium">{option.format}</p>
                        <p className="text-sm text-zinc-400">{option.quality} • {option.size}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-zinc-400">{option.cost}</p>
                        <button className="mt-2 bg-zinc-800 text-white px-4 py-1 rounded-lg text-sm hover:bg-zinc-700 transition-colors">
                          Export
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}