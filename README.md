# AI Voice Agent Application

## Overview
A Next.js application for AI-powered voice automation.

## Features
- **Real OTP Verification** (Twilio)
- **Outbound Calling** (Twilio Voice)
- **Inbound AI Simulation** (OpenAI GPT-4)
- **Modern UI** with Tailwind CSS & Glassmorphism

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Ensure `.env.local` has your API keys:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_VERIFY_SID`
   - `OPENAI_API_KEY`

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Folder Structure
- `src/components`: UI Components
- `src/app/api`: Backend Routes
- `src/lib`: Services configuration
