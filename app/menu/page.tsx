import ToolsMenu from '@/components/ToolsMenu';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black">
      <ToolsMenu />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Tools Navigation</h1>
          <p className="text-zinc-400">Access all AI video platforms from one place</p>
        </div>
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 text-center">
          <p className="text-zinc-400 mb-4">Click the menu button in the bottom right corner to navigate between tools.</p>
          <p className="text-sm text-zinc-500">Or use the links below:</p>
        </div>
      </div>
    </div>
  );
}