# Chowly Support Hub

Internal web app for the Chowly Support team with two sections:
- **Training Hub** — new hire resources (slides, SOPs, videos, PDFs)
- **Sprint Tracker** — embedded Google Sheets sprint view

Access is restricted to `@chowlyinc.com` Google accounts.

---

## Setup

### 1. Clone & install dependencies

```bash
git clone <your-repo-url>
cd chowly-support-hub
npm install
```

### 2. Set up Google OAuth credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials
2. Create an OAuth 2.0 Client ID (Web application)
3. Add authorized redirect URI:
   - Local: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://your-domain.com/api/auth/callback/google`
4. Copy the Client ID and Client Secret

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in:

```
NEXTAUTH_SECRET=<run: openssl rand -base64 32>
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=<from Google Cloud Console>
GOOGLE_CLIENT_SECRET=<from Google Cloud Console>
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to Google sign-in.

---

## Adding content

### Training modules

Edit `data/training.json`. Each module can have any combination of these links (set to `null` to hide):

```json
{
  "id": "unique-id",
  "title": "Module Title",
  "category": "Category Name",
  "description": "Short description shown on the card.",
  "slides": "https://docs.google.com/presentation/d/...",
  "sop": "https://chowly.atlassian.net/wiki/...",
  "video": "https://www.loom.com/share/...",
  "pdf": "/files/filename.pdf"
}
```

To add a PDF: drop the file in `public/files/` and reference it as `/files/filename.pdf`.

### Sprints

Edit `data/sprints.json`. Get the embed URL from your Google Sheet:
**File → Share → Publish to web → Embed**, copy the URL.

```json
{
  "id": "unique-id",
  "title": "Sprint Name",
  "description": "Optional description",
  "embedUrl": "https://docs.google.com/spreadsheets/d/.../embed?...",
  "active": true
}
```

Set `"active": true` on the current sprint. Past sprints appear as tabs.

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → select the repo
3. Add environment variables in Vercel project settings (same 4 vars as `.env.local`)
4. Update `NEXTAUTH_URL` to your Vercel domain
5. Add the Vercel domain to authorized redirect URIs in Google Cloud Console
6. Deploy
