# HypeCut Producer

AI-powered video creation platform for content creators. Generate viral YouTube videos with multiple AI providers including Google Veo 3.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## ✨ Features

- 🎬 **Project-Based Organization** - Organize videos by theme/topic
- 🤖 **Multiple AI Providers** - Google Veo 3, Runway ML, Pika Labs, Stable Video
- 💰 **Credit System** - Pay-per-use with transparent pricing
- 📊 **Analytics Dashboard** - Track views, revenue, performance
- 🎨 **AI Guidance** - Auto-generated project style guides
- 📱 **Mobile Responsive** - Works on all devices

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/jameshypecutbot-hue/hypecut-producer.git
cd hypecut-producer

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
hypecut-producer/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Dashboard
│   ├── projects/          # Project management
│   │   ├── page.tsx       # Projects list
│   │   └── create/        # Project creation wizard
│   ├── settings/          # Configuration
│   │   └── api/           # API settings
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Styles
├── .github/workflows/     # CI/CD
├── deploy.sh              # Deployment script
└── README.md
```

## 🔧 Configuration

### API Providers

Configure AI video generation providers in `/settings/api`:

| Provider | Cost/min | Quality | Best For |
|----------|----------|---------|----------|
| Google Veo 3 | $0.05 | ★★★★★ | High-quality videos |
| Runway ML | $0.15 | ★★★★★ | Realistic motion |
| Pika Labs | $0.10 | ★★★★☆ | Fast generation |
| Stable Video | $0.03 | ★★★☆☆ | Budget option |

### Environment Variables

Create `.env.local`:

```env
# Supabase (for auth & database)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# AI Provider API Keys
GOOGLE_VEO_API_KEY=
RUNWAY_API_KEY=
PIKA_API_KEY=
STABLE_VIDEO_API_KEY=
```

## 📦 Deployment

### Option 1: Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Auto-deploy on every push

### Option 2: Manual

```bash
# Build
npm run build

# Serve static files
cd dist
python3 -m http.server 8080
```

### Option 3: Using Deploy Script

```bash
# Make script executable
chmod +x deploy.sh

# Deploy with message
./deploy.sh "feat: add new feature"
```

## 🛠️ Development

### Adding New AI Provider

1. Edit `app/settings/api/page.tsx`
2. Add provider to `initialProviders` array
3. Include: id, name, description, endpoint, costPerMinute
4. Rebuild and deploy

### Project Creation Flow

1. **Basics** - Name, description, target audience
2. **Style** - Content type, visual style, tone
3. **AI Guidance** - Generate project guidelines
4. **Review** - Confirm and create

## 📝 Error Handling

The app includes comprehensive error handling:

- ✅ Form validation with clear messages
- ✅ API connection testing
- ✅ Loading states on all actions
- ✅ Graceful error recovery

## 🎨 Design System

- **Primary:** Purple-500 to Pink-500 gradients
- **Background:** Zinc-950 via Zinc-900 to Purple-950
- **Cards:** Zinc-900/50 with Zinc-800 borders
- **Text:** White headings, Zinc-400 body

## 📊 Roadmap

- [x] Project management
- [x] AI provider integration
- [x] Credit system UI
- [ ] Real API connections
- [ ] User authentication
- [ ] Payment integration
- [ ] YouTube upload
- [ ] Analytics dashboard

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📄 License

MIT License - see LICENSE file

---

Built with ❤️ by James for HypeCut