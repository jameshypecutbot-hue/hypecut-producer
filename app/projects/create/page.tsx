'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Sparkles, 
  FileText, 
  Video, 
  Image,
  Film,
  Palette,
  Loader2,
  CheckCircle,
  Wand2
} from 'lucide-react';

interface ProjectForm {
  name: string;
  description: string;
  type: 'videos' | 'photos' | 'animations';
  style: 'professional' | 'modern' | 'cinematic' | 'energetic';
  aiGuidance: string;
  targetAudience: string;
  contentTone: 'educational' | 'entertaining' | 'inspirational' | 'promotional';
}

const projectTypes = [
  { id: 'videos', label: 'Video Content', icon: Film, description: 'Traditional video format' },
  { id: 'photos', label: 'Photo Slideshow', icon: Image, description: 'Image-based slideshow videos' },
  { id: 'animations', label: 'Animations', icon: Video, description: 'Animated content' }
];

const videoStyles = [
  { id: 'professional', label: 'Professional', description: 'Clean, corporate, trustworthy' },
  { id: 'modern', label: 'Modern', description: 'Trendy, bold, eye-catching' },
  { id: 'cinematic', label: 'Cinematic', description: 'Dramatic, epic, storytelling' },
  { id: 'energetic', label: 'Energetic', description: 'Fast, dynamic, exciting' }
];

const contentTones = [
  { id: 'educational', label: 'Educational', description: 'Teach and inform' },
  { id: 'entertaining', description: 'Fun and engaging', label: 'Entertaining' },
  { id: 'inspirational', label: 'Inspirational', description: 'Motivate and inspire' },
  { id: 'promotional', label: 'Promotional', description: 'Sell and promote' }
];

export default function CreateProject() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [generatingGuidance, setGeneratingGuidance] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<ProjectForm>({
    name: '',
    description: '',
    type: 'videos',
    style: 'professional',
    aiGuidance: '',
    targetAudience: '',
    contentTone: 'educational'
  });

  const generateAIGuidance = async () => {
    setGeneratingGuidance(true);
    
    // Mock AI generation - in real app, this would call Google Veo 2 or other AI
    setTimeout(() => {
      const guidance = `## Project: ${form.name}

### Content Strategy
This project focuses on creating ${form.type} content with a ${form.style} visual style. 

### Target Audience
${form.targetAudience || 'General audience interested in the topic'}

### Content Tone
${form.contentTone.charAt(0).toUpperCase() + form.contentTone.slice(1)} - ${contentTones.find(t => t.id === form.contentTone)?.description}

### Video Guidelines
1. **Opening Hook**: Start with a compelling question or statement to grab attention within 3 seconds
2. **Visual Style**: Use ${form.style} aesthetics with consistent color grading
3. **Pacing**: Match the energy level to the content tone
4. **Transitions**: Smooth, professional cuts that maintain viewer engagement
5. **Call to Action**: End with clear next steps for the viewer

### AI Generation Prompts
When generating videos for this project:
- Maintain consistent visual identity
- Use appropriate background music
- Include text overlays for key points
- Optimize for mobile viewing (9:16 aspect ratio)
- Keep videos between 30 seconds and 5 minutes

### Brand Voice
${form.description}

---
*This guidance is AI-generated and will be used to maintain consistency across all project videos.*`;

      setForm(prev => ({ ...prev, aiGuidance: guidance }));
      setGeneratingGuidance(false);
    }, 3000);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Validation
      if (!form.name.trim()) {
        throw new Error('Project name is required');
      }
      if (!form.description.trim()) {
        throw new Error('Project description is required');
      }
      if (!form.aiGuidance) {
        throw new Error('Please generate AI guidance first');
      }
      
      // In real app, save to database
      console.log('Creating project:', form);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      router.push('/projects');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Project Basics</h2>
              <p className="text-zinc-400">Let's start with the basic information about your project</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-zinc-400 block mb-2">Project Name *</label>
                <input
                  type="text"
                  placeholder="e.g., Finance Tips Channel"
                  value={form.name}
                  onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400 block mb-2">Description *</label>
                <textarea
                  placeholder="Describe what your project is about..."
                  value={form.description}
                  onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400 block mb-2">Target Audience</label>
                <input
                  type="text"
                  placeholder="e.g., Young professionals interested in personal finance"
                  value={form.targetAudience}
                  onChange={(e) => setForm(prev => ({ ...prev, targetAudience: e.target.value }))}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Content Type & Style</h2>
              <p className="text-zinc-400">Choose how you want to create your content</p>
            </div>

            {/* Project Type */}
            <div>
              <label className="text-sm text-zinc-400 block mb-3">Content Type</label>
              <div className="grid grid-cols-3 gap-4">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setForm(prev => ({ ...prev, type: type.id as any }))}
                      className={`p-4 border rounded-xl text-left transition-all ${
                        form.type === type.id
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-zinc-700 hover:border-zinc-600'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mb-2 ${form.type === type.id ? 'text-purple-400' : 'text-zinc-400'}`} />
                      <p className={`font-medium ${form.type === type.id ? 'text-white' : 'text-zinc-300'}`}>
                        {type.label}
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">{type.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Video Style */}
            <div>
              <label className="text-sm text-zinc-400 block mb-3">Visual Style</label>
              <div className="grid grid-cols-2 gap-4">
                {videoStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setForm(prev => ({ ...prev, style: style.id as any }))}
                    className={`p-4 border rounded-xl text-left transition-all ${
                      form.style === style.id
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-zinc-700 hover:border-zinc-600'
                    }`}
                  >
                    <p className={`font-medium ${form.style === style.id ? 'text-white' : 'text-zinc-300'}`}>
                      {style.label}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">{style.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Tone */}
            <div>
              <label className="text-sm text-zinc-400 block mb-3">Content Tone</label>
              <div className="grid grid-cols-2 gap-4">
                {contentTones.map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => setForm(prev => ({ ...prev, contentTone: tone.id as any }))}
                    className={`p-4 border rounded-xl text-left transition-all ${
                      form.contentTone === tone.id
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-zinc-700 hover:border-zinc-600'
                    }`}
                  >
                    <p className={`font-medium ${form.contentTone === tone.id ? 'text-white' : 'text-zinc-300'}`}>
                      {tone.label}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">{tone.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">AI Guidance</h2>
              <p className="text-zinc-400">Generate AI guidance to maintain consistency across your videos</p>
            </div>

            {!form.aiGuidance ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wand2 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Generate AI Guidance</h3>
                <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
                  Our AI will analyze your project details and create a comprehensive guide 
                  to ensure all videos maintain consistent quality and style.
                </p>
                <button
                  onClick={generateAIGuidance}
                  disabled={generatingGuidance}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50"
                >
                  {generatingGuidance ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate with AI
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-green-400 mb-4">
                  <CheckCircle className="w-5 h-5" />
                  <span>AI Guidance Generated</span>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-zinc-400">Generated Guidance</span>
                  </div>
                  <pre className="text-sm text-zinc-300 whitespace-pre-wrap font-mono max-h-64 overflow-y-auto">
                    {form.aiGuidance}
                  </pre>
                </div>
                <button
                  onClick={generateAIGuidance}
                  disabled={generatingGuidance}
                  className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1"
                >
                  <Sparkles className="w-4 h-4" />
                  Regenerate
                </button>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Review & Create</h2>
              <p className="text-zinc-400">Review your project details before creating</p>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-zinc-400">Name</span>
                <span className="text-white">{form.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Type</span>
                <span className="text-white capitalize">{form.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Style</span>
                <span className="text-white capitalize">{form.style}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Tone</span>
                <span className="text-white capitalize">{form.contentTone}</span>
              </div>
              <div className="pt-4 border-t border-zinc-700">
                <span className="text-zinc-400">AI Guidance</span>
                <p className="text-sm text-zinc-300 mt-1">
                  {form.aiGuidance ? '✓ Generated' : '✗ Not generated'}
                </p>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 text-lg">!</span>
                </div>
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Project'
              )}
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-purple-950">
      {/* Header */}
      <header className="bg-zinc-900/50 backdrop-blur border-b border-zinc-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => router.push('/projects')}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </button>
            <h1 className="text-lg font-semibold text-white">Create New Project</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-zinc-900/30 border-b border-zinc-800">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Basics' },
              { num: 2, label: 'Style' },
              { num: 3, label: 'AI Guide' },
              { num: 4, label: 'Review' }
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= s.num ? 'bg-purple-500 text-white' : 'bg-zinc-800 text-zinc-500'
                }`}>
                  {s.num}
                </div>
                <span className={`ml-2 text-sm ${step >= s.num ? 'text-white' : 'text-zinc-500'}`}>
                  {s.label}
                </span>
                {i < 3 && <div className="w-8 h-px bg-zinc-700 mx-2" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => {
              setError(null);
              setStep(prev => Math.max(1, prev - 1));
            }}
            disabled={step === 1}
            className="px-6 py-2 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => {
              // Validation before proceeding
              if (step === 1) {
                if (!form.name.trim()) {
                  setError('Please enter a project name');
                  return;
                }
                if (!form.description.trim()) {
                  setError('Please enter a project description');
                  return;
                }
              }
              if (step === 3 && !form.aiGuidance) {
                setError('Please generate AI guidance before continuing');
                return;
              }
              setError(null);
              setStep(prev => Math.min(4, prev + 1));
            }}
            disabled={step === 4}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>

        {/* Error Display */}
        {error && step !== 4 && (
          <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-3 flex items-center gap-2">
            <span className="text-red-400 text-lg">!</span>
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
      </main>
    </div>
  );
}