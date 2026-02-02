#!/bin/bash

# HypeCut Producer Deployment Script
# Usage: ./deploy.sh [message]

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 HypeCut Producer Deployment${NC}"
echo "=============================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initializing git repository...${NC}"
    git init
    git branch -m main
fi

# Get commit message
if [ -z "$1" ]; then
    COMMIT_MSG="Update: $(date '+%Y-%m-%d %H:%M')"
else
    COMMIT_MSG="$1"
fi

# Build the project
echo -e "${YELLOW}📦 Building project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful${NC}"

# Add all files
echo -e "${YELLOW}📁 Adding files to git...${NC}"
git add .

# Commit
echo -e "${YELLOW}💾 Committing: $COMMIT_MSG${NC}"
git commit -m "$COMMIT_MSG" || echo -e "${YELLOW}⚠️  Nothing to commit${NC}"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo -e "${RED}❌ No remote configured!${NC}"
    echo "Please set up GitHub repository first:"
    echo "  gh repo create hypecut-producer --public --source=. --remote=origin --push"
    exit 1
fi

# Push to GitHub
echo -e "${YELLOW}📤 Pushing to GitHub...${NC}"
git push origin main

echo -e "${GREEN}✅ Deployed successfully!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Check deployment on Vercel dashboard"
echo "2. Or deploy manually:"
echo "   cd dist && python3 -m http.server 8080"
echo ""
echo -e "${GREEN}🎉 Done!${NC}"