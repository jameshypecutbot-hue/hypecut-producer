'use client';

import { useState } from 'react';
import { 
  Bot, 
  Plus, 
  Play, 
  Pause, 
  Trash2, 
  Settings, 
  Activity,
  Terminal,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
  MessageSquare,
  Cpu,
  BarChart3
} from 'lucide-react';

// Mock agents data
const mockAgents = [
  {
    id: 'agent-1',
    name: 'Video Researcher',
    role: 'researcher',
    status: 'active',
    model: 'kimi-code/kimi-for-coding',
    tasksCompleted: 23,
    tasksFailed: 2,
    lastActive: '2 min ago',
    description: 'Researches video trends and content ideas'
  },
  {
    id: 'agent-2',
    name: 'Script Writer',
    role: 'writer',
    status: 'idle',
    model: 'kimi-code/kimi-for-coding',
    tasksCompleted: 45,
    tasksFailed: 1,
    lastActive: '15 min ago',
    description: 'Writes video scripts and narratives'
  },
  {
    id: 'agent-3',
    name: 'Thumbnail Designer',
    role: 'designer',
    status: 'paused',
    model: 'kimi-code/kimi-for-coding',
    tasksCompleted: 67,
    tasksFailed: 5,
    lastActive: '1 hour ago',
    description: 'Creates eye-catching video thumbnails'
  }
];

const mockTasks = [
  {
    id: 'task-1',
    agentId: 'agent-1',
    title: 'Research trending topics',
    status: 'running',
    progress: 65,
    startedAt: '10 min ago',
    logs: ['Starting research...', 'Fetching YouTube trends...', 'Analyzing data...']
  },
  {
    id: 'task-2',
    agentId: 'agent-2',
    title: 'Write video script',
    status: 'completed',
    progress: 100,
    startedAt: '30 min ago',
    completedAt: '15 min ago',
    logs: ['Starting script...', 'Drafting content...', 'Finalizing...', 'Done!']
  },
  {
    id: 'task-3',
    agentId: 'agent-1',
    title: 'Analyze competitor videos',
    status: 'failed',
    progress: 45,
    startedAt: '1 hour ago',
    logs: ['Starting analysis...', 'Error: API rate limit exceeded']
  }
];

const agentRoles = [
  { id: 'researcher', label: 'Researcher', icon: BarChart3, description: 'Gathers data and insights' },
  { id: 'writer', label: 'Writer', icon: MessageSquare, description: 'Creates content and scripts' },
  { id: 'designer', label: 'Designer', icon: Bot, description: 'Designs visuals and graphics' },
  { id: 'coder', label: 'Developer', icon: Terminal, description: 'Writes and reviews code' },
  { id: 'analyst', label: 'Analyst', icon: Activity, description: 'Analyzes data and metrics' }
];

export default function AgentDashboard() {
  const [activeTab, setActiveTab] = useState('agents');
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newAgent, setNewAgent] = useState({
    name: '',
    role: 'researcher',
    description: '',
    model: 'kimi-code/kimi-for-coding'
  });

  const handleCreateAgent = () => {
    console.log('Creating agent:', newAgent);
    setShowCreateModal(false);
    setNewAgent({ name: '', role: 'researcher', description: '', model: 'kimi-code/kimi-for-coding' });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
      case 'running':
        return <Loader2 className="w-4 h-4 animate-spin text-blue-400" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-400" />;
      case 'paused':
        return <Pause className="w-4 h-4 text-yellow-400" />;
      default:
        return <Clock className="w-4 h-4 text-zinc-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'running':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      case 'completed':
        return 'text-green-400 bg-green-500/10 border-green-500/30';
      case 'failed':
        return 'text-red-400 bg-red-500/10 border-red-500/30';
      case 'paused':
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      default:
        return 'text-zinc-400 bg-zinc-500/10 border-zinc-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-purple-950">
      {/* Header */}
      <header className="bg-zinc-900/50 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Agent Manager</h1>
                <p className="text-xs text-zinc-400">Create and manage AI agents</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-zinc-400">Active Agents</p>
                <p className="text-lg font-bold text-white">
                  {mockAgents.filter(a => a.status === 'active').length}/{mockAgents.length}
                </p>
              </div>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <Plus className="w-4 h-4" />
                New Agent
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('agents')}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'agents' 
                  ? 'text-white border-purple-500' 
                  : 'text-zinc-400 border-transparent hover:text-white'
              }`}
            >
              Agents
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'tasks' 
                  ? 'text-white border-purple-500' 
                  : 'text-zinc-400 border-transparent hover:text-white'
              }`}
            >
              Tasks
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'logs' 
                  ? 'text-white border-purple-500' 
                  : 'text-zinc-400 border-transparent hover:text-white'
              }`}
            >
              Logs
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'agents' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockAgents.map((agent) => (
              <div 
                key={agent.id}
                onClick={() => setSelectedAgent(agent.id)}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                      <Bot className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{agent.name}</h3>
                      <span className="text-xs text-zinc-500 capitalize">{agent.role}</span>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(agent.status)}`}>
                    {agent.status}
                  </span>
                </div>

                <p className="text-sm text-zinc-400 mb-4">{agent.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-2 bg-zinc-800/50 rounded">
                    <p className="text-lg font-bold text-green-400">{agent.tasksCompleted}</p>
                    <p className="text-xs text-zinc-500">Completed</p>
                  </div>
                  <div className="text-center p-2 bg-zinc-800/50 rounded">
                    <p className="text-lg font-bold text-red-400">{agent.tasksFailed}</p>
                    <p className="text-xs text-zinc-500">Failed</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span>Last active: {agent.lastActive}</span>
                  <Cpu className="w-4 h-4" />
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-800 flex gap-2">
                  <button className="flex-1 bg-zinc-800 text-white py-2 rounded-lg text-sm hover:bg-zinc-700 transition-colors flex items-center justify-center gap-1">
                    <Play className="w-3 h-3" />
                    Run
                  </button>
                  <button className="flex-1 bg-zinc-800 text-white py-2 rounded-lg text-sm hover:bg-zinc-700 transition-colors flex items-center justify-center gap-1">
                    <Settings className="w-3 h-3" />
                    Config
                  </button>
                </div>
              </div>
            ))}

            {/* Create New Agent Card */}
            <button 
              onClick={() => setShowCreateModal(true)}
              className="border-2 border-dashed border-zinc-700 rounded-xl p-6 hover:border-purple-500/50 hover:bg-zinc-800/30 transition-all flex flex-col items-center justify-center min-h-[280px]"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-3">
                <Plus className="w-6 h-6 text-zinc-400" />
              </div>
              <span className="text-zinc-400 font-medium">Create New Agent</span>
              <span className="text-xs text-zinc-500 mt-1">Configure AI capabilities</span>
            </button>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="space-y-4">
            {mockTasks.map((task) => (
              <div key={task.id} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(task.status)}
                    <div>
                      <h3 className="text-white font-semibold">{task.title}</h3>
                      <p className="text-xs text-zinc-400">
                        Agent: {mockAgents.find(a => a.id === task.agentId)?.name}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-zinc-400 mb-1">
                    <span>Progress</span>
                    <span>{task.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                </div>

                {/* Logs */}
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs text-zinc-400">Logs</span>
                  </div>
                  <div className="space-y-1">
                    {task.logs.slice(-3).map((log, idx) => (
                      <p key={idx} className="text-xs text-zinc-500 font-mono">{`> ${log}`}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                  <span>Started: {task.startedAt}</span>
                  {task.completedAt && <span>Completed: {task.completedAt}</span>}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-semibold text-white">System Logs</h2>
            </div>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {[
                { time: '17:30:15', level: 'info', message: 'Agent "Video Researcher" started task #124' },
                { time: '17:29:42', level: 'success', message: 'Agent "Script Writer" completed task #123' },
                { time: '17:28:10', level: 'warning', message: 'API rate limit approaching for agent-1' },
                { time: '17:27:33', level: 'error', message: 'Task #122 failed: Network timeout' },
                { time: '17:26:45', level: 'info', message: 'New agent "Thumbnail Designer" created' },
                { time: '17:25:12', level: 'success', message: 'System check completed - all agents healthy' },
              ].map((log, idx) => (
                <div key={idx} className="flex gap-3 text-sm font-mono">
                  <span className="text-zinc-500">{log.time}</span>
                  <span className={`${
                    log.level === 'error' ? 'text-red-400' :
                    log.level === 'warning' ? 'text-yellow-400' :
                    log.level === 'success' ? 'text-green-400' :
                    'text-blue-400'
                  }`}>[{log.level.toUpperCase()}]</span>
                  <span className="text-zinc-300">{log.message}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Create Agent Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Create New Agent</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-zinc-400 block mb-2">Agent Name</label>
                <input
                  type="text"
                  placeholder="e.g., Video Researcher"
                  value={newAgent.name}
                  onChange={(e) => setNewAgent({...newAgent, name: e.target.value})}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400 block mb-2">Role</label>
                <div className="grid grid-cols-2 gap-3">
                  {agentRoles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <button
                        key={role.id}
                        onClick={() => setNewAgent({...newAgent, role: role.id})}
                        className={`p-3 border rounded-lg text-left transition-all ${
                          newAgent.role === role.id
                            ? 'border-purple-500 bg-purple-500/10'
                            : 'border-zinc-700 hover:border-zinc-600'
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-1 ${newAgent.role === role.id ? 'text-purple-400' : 'text-zinc-400'}`} />
                        <p className={`text-sm font-medium ${newAgent.role === role.id ? 'text-white' : 'text-zinc-300'}`}>
                          {role.label}
                        </p>
                        <p className="text-xs text-zinc-500">{role.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-sm text-zinc-400 block mb-2">Description</label>
                <textarea
                  placeholder="What should this agent do?"
                  value={newAgent.description}
                  onChange={(e) => setNewAgent({...newAgent, description: e.target.value})}
                  rows={3}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400 block mb-2">AI Model</label>
                <select
                  value={newAgent.model}
                  onChange={(e) => setNewAgent({...newAgent, model: e.target.value})}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="kimi-code/kimi-for-coding">Kimi Code (Coding)</option>
                  <option value="kimi-k2/kimi-k2-0905-preview">Kimi K2 (General)</option>
                  <option value="gpt-4">GPT-4</option>
                  <option value="claude-3">Claude 3</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-zinc-800 text-white py-2 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateAgent}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Create Agent
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-8 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-zinc-500">
          <p>Agent Manager v1.0.0 • {mockAgents.length} agents • {mockTasks.length} tasks</p>
        </div>
      </footer>
    </div>
  );
}