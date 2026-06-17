# Chowly Support Hub

Internal web app for the Chowly Support team with two sections:
- **Training Hub** — new hire resources (slides, SOPs, videos, PDFs)
- **Sprint Tracker** — embedded Google Sheets sprint view

Publicly accessible — no login required.

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
3. Deploy — no environment variables needed

### Custom domain (`supporthub.chowly.help`)
1. In Vercel project settings → Domains → add `supporthub.chowly.help`
2. In your DNS provider, add a CNAME record:
   - **Name**: `supporthub`
   - **Value**: `cname.vercel-dns.com`
