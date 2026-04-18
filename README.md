# Your Modern Matriarch — Website

A 5-page static website for Your Modern Matriarch, ready to deploy on GitHub Pages.

## Pages
- `index.html` — Homepage
- `how-it-works.html` — How It Works
- `pricing.html` — Pricing
- `shop.html` — Shop (with category filter)
- `start-here.html` — Start Here (with quiz)
- `style.css` — Shared styles

## How to deploy on GitHub Pages

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up if you haven't already.

### Step 2 — Create a new repository
1. Click the **+** button in the top right → **New repository**
2. Name it `your-modern-matriarch` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. On your new repo page, click **uploading an existing file**
2. Drag all files from this folder into the upload area:
   - `index.html`
   - `how-it-works.html`
   - `pricing.html`
   - `shop.html`
   - `start-here.html`
   - `style.css`
3. Scroll down and click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repo's **Settings** tab
2. Click **Pages** in the left sidebar
3. Under "Source", select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

### Step 5 — Visit your site
After a minute or two, your site will be live at:
`https://YOUR-USERNAME.github.io/your-modern-matriarch/`

## Connecting your GoDaddy domain

Once the site is live on GitHub Pages:

1. In your GitHub Pages settings, add your custom domain (e.g. `yourmodernmatriarch.com`)
2. Log into GoDaddy → DNS Management for your domain
3. Add these DNS records:
   - **A record**: `@` → `185.199.108.153`
   - **A record**: `@` → `185.199.109.153`
   - **A record**: `@` → `185.199.110.153`
   - **A record**: `@` → `185.199.111.153`
   - **CNAME**: `www` → `YOUR-USERNAME.github.io`
4. DNS changes take up to 24 hours to propagate

## Next steps to complete the site

- [ ] Replace placeholder testimonials with real ones
- [ ] Add your founder photo (replace the YMM initials avatar)
- [ ] Update the copyright year and founder name in the footer
- [ ] Connect Stripe for subscription billing (or HoneyBook)
- [ ] Connect a form tool (Tally, Typeform) for the client intake
- [ ] Add Google Analytics for traffic tracking
- [ ] Replace "Download" buttons in the shop with real product links
