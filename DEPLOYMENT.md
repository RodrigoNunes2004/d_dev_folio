# Deployment Guide for Vercel

## Environment Variables Required

You need to set these environment variables in Vercel:

### 1. VITE_SUPABASE_URL
- **Value**: Your Supabase project URL
- **Example**: `https://ldbuwursywymcfmwxklw.supabase.co`
- **How to get**: Go to Supabase Dashboard → Settings → API → Project URL

### 2. VITE_SUPABASE_ANON_KEY
- **Value**: Your Supabase anonymous key
- **Example**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **How to get**: Go to Supabase Dashboard → Settings → API → anon public

## Steps to Deploy

1. **Push your code to GitHub**
2. **Connect Vercel to your GitHub repository**
3. **Set environment variables in Vercel:**
   - Go to your Vercel project dashboard
   - Go to Settings → Environment Variables
   - Add the two variables above
4. **Deploy!**

## Current Supabase Values (for reference)

- **URL**: `https://ldbuwursywymcfmwxklw.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkYnV3dXJzeXd5bWNmbXd4a2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MTI0MDcsImV4cCI6MjA3MjI4ODQwN30.BS_WHl-msPwy1iN0QP3YqKVoECOKPyAzK27QAFBzZc8`

## Notes

- The contact form will work on Vercel because it uses Supabase Edge Functions
- No additional server configuration needed
- The app is fully static and will work perfectly on Vercel
