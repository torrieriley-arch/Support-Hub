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

## Deployment (GitHub Pages)

Deployment is automatic — every push to `main` triggers a GitHub Actions workflow that builds the site and publishes it.

### One-time setup (done once in the GitHub UI)

1. Go to the repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Under **Custom domain**, type `supporthub.chowly.help` and click Save

### DNS setup (done once in your DNS provider)

Add a CNAME record:
- **Name**: `supporthub`
- **Value**: `torrieriley-arch.github.io`

After DNS propagates (~5–10 minutes), the site will be live at `supporthub.chowly.help` with free HTTPS.

### To update the site

Just edit any file (e.g., `data/training.json`) and push to `main` — GitHub Actions redeploys automatically.
