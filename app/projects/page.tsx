'use client';

import { useState } from 'react';
import { 
  Folder, 
  Video, 
  Plus, 
  Settings, 
  Image,
  Film,
  Sparkles,
  MoreVertical,
  Play,
  Clock,
  Eye,
  DollarSign,
  ChevronRight,
  Palette
} from 'lucide-react';

// Mock projects data
const mockProjects = [
  {
    id: 1,
    name: "Finance Tips Channel",
    description: "Personal finance and money making strategies",
    type: "videos", // videos, photos, animations
    style: "professional",
    videos: [
      { id: 101, title: "How to Save $10K in 6 Months", thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=320&h=180&fit=crop", status: "published", views: "45K", revenue: "$320", createdAt: "2 days ago" },
      { id: 102, title: "Side Hustle Ideas 2024", thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=320&h=180&fit=crop", status: "published", views: "89K", revenue: "$650", createdAt: "5 days ago" },
      { id: 103, title: "Debt Free Journey", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&h=180&fit=crop", status: "draft", views: "0", revenue: "$0", createdAt: "1 day ago" },
    ],
    stats: { totalVideos: 12, totalViews: "1.2M", revenue: "$8,450" }
  },
  {
    id: 2,
    name: "Tech Reviews",
    description: "Latest tech gadgets and software reviews",
    type: "videos",
    style: "modern",
    videos: [
      { id: 201, title: "Best AI Tools for Creators", thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=320&h=180&fit=crop", status: "published", views: "156K", revenue: "$1,200", createdAt: "1 week ago" },
      { id: 202, title: "iPhone 15 Pro Review", thumbnail: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=320&h=180&fit=crop", status: "processing", views: "0", revenue: "$0", createdAt: "2 hours ago" },
    ],
    stats: { totalVideos: 8, totalViews: "890K", revenue: "$5,230" }
  },
  {
    id: 3,
    name: "Travel Adventures",
    description: "Photo slideshows of travel destinations",
    type: "photos",
    style: "cinematic",
    videos: [
      { id: 301, title: "Japan Cherry Blossom Tour", thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=320&h=180&fit=crop", status: "published", views: "234K", revenue: "$1,890", createdAt: "3 weeks ago" },
    ],
    stats: { totalVideos: 5, totalViews: "450K", revenue: "$2,100" }
  },
  {
    id: 4,
    name: "Fitness Motivation",
    description: "Animated workout routines and tips",
    type: "animations",
    style: "energetic",
    videos: [],
    stats: { totalVideos: 0, totalViews: "0", revenue: "$0" }
  }
];

const projectTypeIcons = {
  videos: Film,
  photos: Image,
  animations: Sparkles
};

const projectTypeLabels = {
  videos: "Video Content",
  photos: "Photo Slideshow",
  animations: "Animations"
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const currentProject = selectedProject ? mockProjects.find(p => p.id === selectedProject) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-purple-950">
      {/* Header */}
      <header className="bg-zinc-900/50 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setSelectedProject(null)}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Folder className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">HypeCut Producer</h1>
                  <p className="text-xs text-zinc-400">Projects</p>
                </div>
              </button>
            </div>
            
            <button 
              onClick={() => setShowCreateModal(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>New Project</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!currentProject ? (
          // Projects List View
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Your Projects</h2>
              <p className="text-zinc-400">Manage your video creation projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProjects.map((project) => {
                const TypeIcon = projectTypeIcons[project.type as keyof typeof projectTypeIcons];
                return (
                  <div 
                    key={project.id}
                    onClick={() => setSelectedProject(project.id)}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 hover:bg-zinc-800/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                        <TypeIcon className="w-6 h-6 text-purple-400" />
                      </div>
                      <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                        {projectTypeLabels[project.type as keyof typeof projectTypeLabels]}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                    <p className="text-sm text-zinc-400 mb-4">{project.description}</p>

                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        {project.stats.totalVideos} videos
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {project.stats.totalViews}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                      <span className="text-green-400 font-medium">{project.stats.revenue}</span>
                      <span className="text-zinc-500 group-hover:text-purple-400 flex items-center gap-1 transition-colors">
                        Open <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Create New Project Card */}
              <button 
                onClick={() => setShowCreateModal(true)}
                className="border-2 border-dashed border-zinc-700 rounded-xl p-6 hover:border-purple-500/50 hover:bg-zinc-800/30 transition-all flex flex-col items-center justify-center min-h-[200px]"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-3">
                  <Plus className="w-6 h-6 text-zinc-400" />
                </div>
                <span className="text-zinc-400 font-medium">Create New Project</span>
              </button>
            </div>
          </div>
        ) : (
          // Project Detail View
          <div>
            {/* Project Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-sm text-zinc-400 hover:text-white mb-2 flex items-center gap-1"
                >
                  ← Back to Projects
                </button>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-white">{currentProject.name}</h2>
                  <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                    {projectTypeLabels[currentProject.type as keyof typeof projectTypeLabels]}
                  </span>
                </div>
                <p className="text-zinc-400">{currentProject.description}</p>
              </div>
              
              <div className="flex gap-3">
                <button className="bg-zinc-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-zinc-700 transition-colors">
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all">
                  <Plus className="w-4 h-4" />
                  Create Video
                </button>
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs text-zinc-400">Total Videos</p>
                <p className="text-xl font-bold text-white">{currentProject.stats.totalVideos}</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs text-zinc-400">Total Views</p>
                <p className="text-xl font-bold text-white">{currentProject.stats.totalViews}</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs text-zinc-400">Revenue</p>
                <p className="text-xl font-bold text-white">{currentProject.stats.revenue}</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs text-zinc-400">Style</p>
                <p className="text-xl font-bold text-white capitalize">{currentProject.style}</p>
              </div>
            </div>

            {/* Project Style Settings */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Project Style</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className={`p-3 rounded-lg border text-left transition-colors ${currentProject.style === 'professional' ? 'border-purple-500 bg-purple-500/10' : 'border-zinc-700 hover:border-zinc-600'}`}>
                  <p className="text-white font-medium">Professional</p>
                  <p className="text-xs text-zinc-400">Clean & Corporate</p>
                </button>
                <button className={`p-3 rounded-lg border text-left transition-colors ${currentProject.style === 'modern' ? 'border-purple-500 bg-purple-500/10' : 'border-zinc-700 hover:border-zinc-600'}`}>
                  <p className="text-white font-medium">Modern</p>
                  <p className="text-xs text-zinc-400">Trendy & Bold</p>
                </button>
                <button className={`p-3 rounded-lg border text-left transition-colors ${currentProject.style === 'cinematic' ? 'border-purple-500 bg-purple-500/10' : 'border-zinc-700 hover:border-zinc-600'}`}>
                  <p className="text-white font-medium">Cinematic</p>
                  <p className="text-xs text-zinc-400">Dramatic & Epic</p>
                </button>
                <button className={`p-3 rounded-lg border text-left transition-colors ${currentProject.style === 'energetic' ? 'border-purple-500 bg-purple-500/10' : 'border-zinc-700 hover:border-zinc-600'}`}>
                  <p className="text-white font-medium">Energetic</p>
                  <p className="text-xs text-zinc-400">Fast & Dynamic</p>
                </button>
              </div>
            </div>

            {/* Videos List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Project Videos</h3>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all text-sm">
                  <Plus className="w-4 h-4" />
                  Create New Video
                </button>
              </div>

              {currentProject.videos.length === 0 ? (
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-12 text-center">
                  <Video className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                  <h4 className="text-white font-medium mb-2">No videos yet</h4>
                  <p className="text-zinc-400 text-sm mb-4">Create your first video for this project</p>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Create Video
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {currentProject.videos.map((video) => (
                    <div key={video.id} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 flex items-center gap-4 hover:border-zinc-700 transition-colors">
                      <img src={video.thumbnail} alt={video.title} className="w-32 h-20 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium truncate">{video.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-zinc-400 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {video.createdAt}
                          </span>
                          {video.status === 'published' && (
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {video.views}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs px-2 py-1 rounded ${
                          video.status === 'published' ? 'bg-green-500/20 text-green-400' :
                          video.status === 'processing' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-zinc-700 text-zinc-400'
                        }`}>
                          {video.status}
                        </span>
                        {video.status === 'published' && (
                          <p className="text-green-400 text-sm mt-1">{video.revenue}</p>
                        )}
                      </div>
                      <button className="text-zinc-500 hover:text-white">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}