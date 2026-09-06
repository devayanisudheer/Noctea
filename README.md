# NOCTÉA

**Find your aesthetic. Wear the mood.**

NOCTÉA is a one-page fashion **discovery** website. It curates fashion products from Amazon, Meesho, Myntra, and AJIO, organized by aesthetic (Goth, Desi, Y2K). NOCTÉA does not sell anything directly — there's no cart, no checkout, and no account system. Visitors browse the collection and click **Shop Now ↗** to go straight to the retailer's page through your affiliate link.

The whole site lives on a single `index.html` page. The only way to leave NOCTÉA is by clicking Shop Now.

---

## Technology

- **HTML5** — one page, semantic markup
- **CSS3** — no framework, no build step
- **Vanilla JavaScript** — no framework, no build step
- **Google Fonts** — UnifrakturCook (the gothic logo) + Inter (body text)

No React, no npm, no backend, no database. Open `index.html` in a browser and the whole site works. It also deploys to GitHub Pages with zero configuration.

## File structure

```
noctea/
├── index.html   → page structure (sections, headings, containers)
├── style.css    → all visual styling and animations
├── script.js    → product data + all interactivity (search, filters, sort, rendering)
└── README.md    → this file
```

You will almost never need to touch `index.html`. Everyday edits — adding products, changing prices, updating affiliate links — all happen inside `script.js`.

---

## How to customize products

Open `script.js` and scroll to the top. You'll find a clearly marked block:

```js
// =====================================================
// EASY PRODUCT EDITING
// =====================================================
const products = [
  {
    id: 1,
    name: "Black Lace Corset Top",
    price: 699,
    oldPrice: 999,
    store: "Myntra",
    category: "goth",
    image: "https://placehold.co/...",
    affiliateLink: "",
    badge: "TRENDING",
    featured: true,
    week: "current"
  },
  ...
];
```

Each product is one object inside the `products` array. To add a new product, copy an existing block, paste it before the closing `];`, give it a **unique `id`**, and fill in its details.

### Product fields explained

| Field | What it does |
|---|---|
| `id` | A unique number. Never reuse an id that's already used. |
| `name` | The product title shown on the card. |
| `price` | The current price, as a plain number (no ₹ symbol, no commas). |
| `oldPrice` | The strikethrough "before discount" price. Set to `null` if there's no discount. |
| `store` | Must be exactly one of: `"Amazon"`, `"Meesho"`, `"Myntra"`, `"AJIO"`. |
| `category` | One of: `"goth"`, `"desi"`, `"y2k"`. |
| `image` | A URL to the product photo. See "How to add product images" below. |
| `affiliateLink` | Your real affiliate URL. See "How to add affiliate links" below. |
| `badge` | A short label like `"TRENDING"` or `"NEW"`. Use `""` for no badge. |
| `featured` | Set to `true` for exactly **one** product you want to show large as the Featured Find. Every other product should have `featured: false`. |
| `week` | `"current"` shows the product in this week's drop right away. See "How to change the weekly collection" below. |

To remove a product, delete its entire `{ ... }` block (including the comma that follows it, if any).

## How to add product images

Replace the placeholder `image` URLs with real photos. Two easy options:

1. **Host images yourself** — upload photos to an image host (e.g. imgur.com, Cloudinary, or a folder in your own GitHub repo) and paste the direct image URL.
2. **Use a folder in this repo** — create an `images/` folder next to `index.html`, add your photos there, and reference them as `image: "images/my-product.jpg"`.

Do not use images copied from Amazon, Myntra, Meesho, or AJIO product listings — use photos you own or are licensed to use. If an image URL ever breaks, the card automatically shows a graceful "NOCTÉA — Image unavailable" placeholder instead of a broken image icon.

## How to add affiliate links

Paste your real affiliate URL into the `affiliateLink` field:

```js
affiliateLink: "https://www.amazon.in/your-real-affiliate-link",
```

If you leave `affiliateLink: ""` (empty), the Shop Now button automatically becomes disabled and shows **"Link coming soon"** instead of guessing a broken URL. Never invent a placeholder URL — an empty string is always the safe default until you have the real link.

## How to change prices

Edit the `price` and `oldPrice` numbers directly on the product object. Prices are automatically formatted with the ₹ symbol and Indian-style number grouping — you don't need to type the symbol yourself.

## How to change categories

Set a product's `category` field to one of the three supported values (see the table above). The category also controls which filter pill and which aesthetic card the product appears under — no other file needs to change.

If you want to bring back one of the original eight aesthetics (Soft Girl, Dark Feminine, Coquette, Minimal, Streetwear) or add a brand-new one, add it to the `AESTHETICS` list near the top of the "DOM References" section in `script.js`, and add a matching filter pill button in `index.html`'s Filters section — that pair of edits drives the filter pills' labels, the aesthetic cards, and each product card's category label.

## How to change the weekly collection

Every product has a `week` field. There are two ways to use it:

- **`week: "current"`** — the simplest option. The product always shows up in "this week's drop," every week, until you change it.
- **`week: "2026-W37"`** (an ISO week id) — the product will only appear during that specific calendar week, then automatically disappear afterward. This lets you plan future drops in advance and keep old drops in the file as a hidden archive (they simply won't render once their week has passed).

`script.js` automatically calculates the current ISO week using `getISOWeek()`, so you never need to hardcode "what week it is" — the site figures it out from the visitor's device clock every time the page loads. The "SEPTEMBER 7 — SEPTEMBER 13" style date range at the top of the drop section is calculated the same way, from `getStartOfWeek()` and `formatWeekRange()`.

**Weekly refresh routine:** each week, go through last week's products and either delete them, or change their `week` to a specific past ISO week id (e.g. `"2026-W36"`) to keep them as a hidden archive. Then add this week's new products with `week: "current"`.

## How to add new stores

The site currently expects `store` to be `"Amazon"`, `"Meesho"`, `"Myntra"`, or `"AJIO"`, since those are shown as plain text labels (e.g. "AVAILABLE ON · MYNTRA"). To add another store, just type its name as the `store` value on any product — no other code changes are required, since the label is rendered directly from whatever text you provide.

---

## How to deploy NOCTÉA (GitHub Pages)

1. Go to [github.com](https://github.com) and sign in.
2. Click **New repository**.
3. Name it something like `noctea`. Choose **Public**, then click **Create repository**.
4. On the new repository page, click **uploading an existing file** (or use **Add file → Upload files**).
5. Upload all four files: `index.html`, `style.css`, `script.js`, `README.md`.
6. Scroll down and click **Commit changes**.
7. Open the repository's **Settings** tab.
8. In the left sidebar, click **Pages**.
9. Under **Build and deployment**, choose **Deploy from a branch**.
10. Under **Branch**, select **main** and **/ (root)**, then click **Save**.
11. Wait a minute or two for GitHub to finish deploying. Refresh the Pages settings screen — it will show your live URL, something like:

   ```
   https://your-username.github.io/noctea/
   ```

Open that URL and your site is live.

### Updating the site later

Whenever you want to add products, change prices, or update affiliate links:

1. Edit `script.js` (locally, or directly in GitHub's web editor — click the pencil icon on the file).
2. Commit the change.
3. GitHub Pages automatically rebuilds and updates your live site within a minute or two — no extra steps needed.

### Using a custom domain (optional)

If you later want the site to live at something like `noctea.com` instead of the default GitHub Pages URL:

1. Buy the domain from any domain registrar.
2. In your repository, go to **Settings → Pages → Custom domain**, and enter your domain.
3. At your domain registrar, add a **CNAME record** pointing to `your-username.github.io`.
4. Wait for DNS to propagate (this can take anywhere from a few minutes to a few hours).

A custom domain is entirely optional — the site works perfectly on the free GitHub Pages URL without one.

---

## Notes

- Only three aesthetics are currently active — Goth, Desi, and Y2K. The other five from the original brief are documented above under "How to change categories" if you ever want to bring one back.
- Current products use placeholder images from placehold.co with real affiliate links already filled in — swap each `image` URL for a hosted photo once you have one (see "How to add product images").
- Search, filters, sorting, and Load More all run client-side with no page reload.
- The affiliate disclosure at the bottom of the page is always visible, as required by most affiliate programs' terms of service.