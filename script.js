/* =====================================================
   NOCTÉA — SCRIPT.JS
   =====================================================
   This file is organized into numbered sections:
     1. Product Data
     2. Weekly Date Functions
     3. DOM References
     4. Product Filtering
     5. Search
     6. Sorting
     7. Product Rendering
     8. Load More
     9. Affiliate Links
    10. Aesthetic Cards
    11. Animations
    12. Initialization
   ===================================================== */


/* =====================================================
   1. PRODUCT DATA
   =====================================================
   EASY PRODUCT EDITING
   ---------------------------------------------------
   Add or edit products below. You do NOT need to edit
   index.html when you change, add, or remove products.

   Every product object supports these properties:

     id           - a unique number. Never reuse an id.
     name         - the product title shown on the card.
     price        - the current price (number, no currency symbol).
     oldPrice     - the original/strikethrough price (number).
                    Set to null if there is no discount.
     store        - one of: "Amazon", "Meesho", "Myntra", "AJIO".
     category     - one of: "goth", "soft-girl", "desi", "y2k",
                    "dark-feminine", "coquette", "minimal", "streetwear".
     image        - a URL to a product photo.
                    REPLACE the placeholder URLs below with real
                    images you have the rights to use.
     affiliateLink- your real affiliate URL for this product.
                    Leave as "" until you have one — the button
                    will safely show "Link coming soon" instead
                    of guessing a URL.
     badge        - a short label such as "TRENDING" or "NEW".
                    Set to "" for no badge.
     featured     - true for ONE product you want to show large
                    as the "Featured Find". Set every other
                    product's featured to false.
     week         - "current" shows the product in this week's
                    drop. You can also use ISO week ids such as
                    "2026-W37" to plan future/past drops — see
                    the Weekly Date Functions section below for
                    how "current" is resolved.
   ===================================================== */

const products = [
  {
    id: 1,
    name: "Gothic Rose Cross Pearl Necklace",
    price: 593,
    oldPrice: 948,
    store: "Amazon",
    category: "goth",
    image: "https://placehold.co/600x800/130a20/dccfff?text=Gothic+Rose+Cross+Pearl+Necklace", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B0eUe5ar1",
    badge: "",
    featured: true,
    week: "current"
  },
  {
    id: 2,
    name: "Gothic 3Pcs Ring Set",
    price: 399,
    oldPrice: null,
    store: "Amazon",
    category: "goth",
    image: "https://placehold.co/600x800/130a20/dccfff?text=Gothic+3Pcs+Ring+Set", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B098m7A69",
    badge: "TRENDING",
    featured: false,
    week: "current"
  },
  {
    id: 3,
    name: "Silver Vintage Gothic Ring Set",
    price: 399,
    oldPrice: null,
    store: "Amazon",
    category: "goth",
    image: "https://placehold.co/600x800/130a20/dccfff?text=Silver+Vintage+Gothic+Ring+Set", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B0215k5kg",
    badge: "TRENDING",
    featured: false,
    week: "current"
  },
  {
    id: 4,
    name: "Plus Size Wide Corset Belt",
    price: 695,
    oldPrice: 1251,
    store: "Amazon",
    category: "goth",
    image: "https://placehold.co/600x800/130a20/dccfff?text=Plus+Size+Wide+Corset+Belt", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B08TR9lv0",
    badge: "",
    featured: false,
    week: "current"
  },
  {
    id: 5,
    name: "Moon and Star Ear Hook Earrings",
    price: 450,
    oldPrice: 1299,
    store: "Amazon",
    category: "goth",
    image: "https://placehold.co/600x800/130a20/dccfff?text=Moon+and+Star+Ear+Hook+Earrings", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B03C80coy",
    badge: "",
    featured: false,
    week: "current"
  },
  {
    id: 6,
    name: "Black Leather Punk Gothic Bracelet Set",
    price: 369,
    oldPrice: 632,
    store: "Amazon",
    category: "goth",
    image: "https://placehold.co/600x800/130a20/dccfff?text=Black+Leather+Punk+Gothic+Bracelet+Set", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B07oBUmQT",
    badge: "TRENDING",
    featured: false,
    week: "current"
  },
  {
    id: 7,
    name: "Gold Sun Arm Cuff Bracelet",
    price: 399,
    oldPrice: null,
    store: "Amazon",
    category: "desi",
    image: "https://placehold.co/600x800/6e3cc7/f5f1fa?text=Gold+Sun+Arm+Cuff+Bracelet", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B05ATf73s",
    badge: "",
    featured: false,
    week: "current"
  },
  {
    id: 8,
    name: "Long Jhumka Earrings with Ear Chain",
    price: 686,
    oldPrice: 2914,
    store: "Amazon",
    category: "desi",
    image: "https://placehold.co/600x800/6e3cc7/f5f1fa?text=Long+Jhumka+Earrings", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B0bIlLBFA",
    badge: "TRENDING",
    featured: false,
    week: "current"
  },
  {
    id: 9,
    name: "Traditional Silver Oxidized Bangles Set",
    price: 389,
    oldPrice: 2499,
    store: "Amazon",
    category: "desi",
    image: "https://placehold.co/600x800/6e3cc7/f5f1fa?text=Traditional+Silver+Bangles+Set", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B0jiUYo1z",
    badge: "TRENDING",
    featured: false,
    week: "current"
  },
  {
    id: 10,
    name: "Set of 15 Gold Plated Stackable Rings",
    price: 348,
    oldPrice: 1745,
    store: "Amazon",
    category: "y2k",
    image: "https://placehold.co/600x800/dccfff/130a20?text=Gold+Plated+Stackable+Rings", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B04QZbRHS",
    badge: "TRENDING",
    featured: false,
    week: "current"
  },
  {
    id: 11,
    name: "Gold Flower Danglers",
    price: 378,
    oldPrice: 799,
    store: "Amazon",
    category: "desi",
    image: "https://placehold.co/600x800/6e3cc7/f5f1fa?text=Gold+Flower+Danglers", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B0bVv5eLe",
    badge: "TRENDING",
    featured: false,
    week: "current"
  },
  {
    id: 12,
    name: "Black Hollow Out Eyelets Y2K Headband",
    price: 259,
    oldPrice: 599,
    store: "Amazon",
    category: "y2k",
    image: "https://placehold.co/600x800/dccfff/130a20?text=Y2K+Eyelets+Headband", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B0gA2llqE",
    badge: "TRENDING",
    featured: false,
    week: "current"
  },
  {
    id: 13,
    name: "Futuristic Wraparound Y2K Sunglasses",
    price: 199,
    oldPrice: 999,
    store: "Amazon",
    category: "y2k",
    image: "https://placehold.co/600x800/dccfff/130a20?text=Futuristic+Y2K+Sunglasses", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B072xrXrq",
    badge: "TRENDING",
    featured: false,
    week: "current"
  },
  {
    id: 14,
    name: "2 Pcs Y2K Star Necklace Set",
    price: 369,
    oldPrice: 399,
    store: "Amazon",
    category: "y2k",
    image: "https://placehold.co/600x800/dccfff/130a20?text=Y2K+Star+Necklace+Set", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B0g5wWJ6r",
    badge: "",
    featured: false,
    week: "current"
  },
  {
    id: 15,
    name: "Star Studded Heart Leather Belt",
    price: 799,
    oldPrice: 1499,
    store: "Amazon",
    category: "goth",
    image: "https://placehold.co/600x800/130a20/dccfff?text=Star+Studded+Heart+Belt", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B0d6h2dZW",
    badge: "",
    featured: false,
    week: "current"
  },
  {
    id: 16,
    name: "Y2K Press On Nails Cherry Blossom Set",
    price: 359,
    oldPrice: 718,
    store: "Amazon",
    category: "y2k",
    image: "https://placehold.co/600x800/dccfff/130a20?text=Y2K+Cherry+Blossom+Nails", // REPLACE: paste a hosted URL for the real product photo once you have one
    affiliateLink: "https://link.amazon/B04CNCOxZ",
    badge: "NEW",
    featured: false,
    week: "current"
  }
];


/* =====================================================
   2. WEEKLY DATE FUNCTIONS
   =====================================================
   These functions calculate the current week automatically
   so you never have to hardcode a date range.
   ===================================================== */

// Returns the Monday that starts the current week (local time).
function getStartOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay(); // 0 = Sunday ... 6 = Saturday
  const diffToMonday = (day === 0) ? -6 : 1 - day;
  d.setDate(d.getDate() + diffToMonday);
  d.setHours(0, 0, 0, 0);
  return d;
}

// Formats a date range like "SEPTEMBER 7 — SEPTEMBER 13".
function formatWeekRange(startDate) {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);

  const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" });
  const startMonth = monthFormatter.format(startDate);
  const endMonth = monthFormatter.format(endDate);

  if (startMonth === endMonth) {
    return `${startMonth} ${startDate.getDate()} — ${endDate.getDate()}`;
  }
  return `${startMonth} ${startDate.getDate()} — ${endMonth} ${endDate.getDate()}`;
}

// Calculates the ISO week number (1-52/53) for a given date,
// so products can optionally be tagged with ids like "2026-W37".
function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return { year: d.getUTCFullYear(), week: weekNo };
}

function getCurrentWeekId() {
  const { year, week } = getISOWeek(new Date());
  return `${year}-W${String(week).padStart(2, "0")}`;
}

// A product is part of the current drop if its "week" property
// is either the literal string "current", or matches this week's
// calculated ISO week id (e.g. "2026-W37").
function isProductInCurrentWeek(product) {
  return product.week === "current" || product.week === getCurrentWeekId();
}


/* =====================================================
   3. DOM REFERENCES
   ===================================================== */

const weekRangeEl = document.getElementById("weekRange");
const searchInput = document.getElementById("searchInput");
const filterScroll = document.getElementById("filterScroll");
const sortSelect = document.getElementById("sortSelect");
const productGrid = document.getElementById("productGrid");
const productCountEl = document.getElementById("productCount");
const emptyStateEl = document.getElementById("emptyState");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const aestheticGrid = document.getElementById("aestheticGrid");
const bgStars = document.getElementById("bgStars");

const PAGE_SIZE = 12;

const state = {
  activeFilter: "all",
  searchTerm: "",
  sortBy: "featured",
  visibleCount: PAGE_SIZE
};

// Aesthetic metadata used both for the filter pills' labels
// and the "Your Mood. Your Aesthetic." card grid.
const AESTHETICS = [
  { key: "goth", glyph: "🖤", label: "Goth" },
  { key: "desi", glyph: "🪷", label: "Desi" },
  { key: "y2k", glyph: "💿", label: "Y2K" }
];


/* =====================================================
   4. PRODUCT FILTERING
   ===================================================== */

function filterByWeek(list) {
  return list.filter(isProductInCurrentWeek);
}

function filterByCategory(list) {
  if (state.activeFilter === "all") return list;
  return list.filter((p) => p.category === state.activeFilter);
}


/* =====================================================
   5. SEARCH
   =====================================================
   Matches product name, store, and category.
   ===================================================== */

function filterBySearch(list) {
  const term = state.searchTerm.trim().toLowerCase();
  if (!term) return list;
  return list.filter((p) => {
    return (
      p.name.toLowerCase().includes(term) ||
      p.store.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term)
    );
  });
}


/* =====================================================
   6. SORTING
   ===================================================== */

function sortProducts(list) {
  const sorted = [...list];
  switch (state.sortBy) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "trending":
      sorted.sort((a, b) => (b.badge === "TRENDING") - (a.badge === "TRENDING"));
      break;
    case "featured":
    default:
      sorted.sort((a, b) => (b.featured === true) - (a.featured === true));
      break;
  }
  return sorted;
}

function getVisibleProducts() {
  let list = filterByWeek(products);
  list = filterByCategory(list);
  list = filterBySearch(list);
  list = sortProducts(list);
  return list;
}


/* =====================================================
   7. PRODUCT RENDERING
   ===================================================== */

function currencyFormat(value) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function aestheticLabelFor(category) {
  const match = AESTHETICS.find((a) => a.key === category);
  return match ? `${match.glyph} ${match.label.toUpperCase()}` : category;
}

function buildProductCard(product) {
  const card = document.createElement("article");
  card.className = "card" + (product.featured ? " card--featured" : "");

  const media = document.createElement("div");
  media.className = "card__media";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.loading = "lazy";
  img.addEventListener("error", () => {
    media.innerHTML = "";
    const fallback = document.createElement("div");
    fallback.className = "card__fallback";
    fallback.innerHTML = `<strong>NOCTÉA</strong><span>Image unavailable</span>`;
    media.appendChild(fallback);
  });
  media.appendChild(img);

  if (product.badge) {
    const badge = document.createElement("span");
    badge.className = "card__badge";
    badge.textContent = product.badge;
    media.appendChild(badge);
  }

  const body = document.createElement("div");
  body.className = "card__body";

  const category = document.createElement("p");
  category.className = "card__category";
  category.textContent = aestheticLabelFor(product.category);

  const name = document.createElement("h3");
  name.className = "card__name";
  name.textContent = product.name;

  const prices = document.createElement("div");
  prices.className = "card__prices";
  const price = document.createElement("span");
  price.className = "card__price";
  price.textContent = currencyFormat(product.price);
  prices.appendChild(price);
  if (product.oldPrice) {
    const oldPrice = document.createElement("span");
    oldPrice.className = "card__old-price";
    oldPrice.textContent = currencyFormat(product.oldPrice);
    prices.appendChild(oldPrice);
  }

  const store = document.createElement("p");
  store.className = "card__store";
  store.textContent = `Available on · ${product.store}`;

  const cta = buildShopNowButton(product);

  body.append(category, name, prices, store, cta);
  card.append(media, body);
  return card;
}

function renderProducts() {
  const filtered = getVisibleProducts();
  const visible = filtered.slice(0, state.visibleCount);

  productGrid.innerHTML = "";
  visible.forEach((product) => {
    productGrid.appendChild(buildProductCard(product));
  });

  updateProductCount(filtered.length);
  updateEmptyState(filtered.length);
  updateLoadMoreVisibility(filtered.length);
}

function updateProductCount(count) {
  let label;
  if (state.searchTerm.trim()) {
    label = `${count} ${count === 1 ? "find" : "finds"}`;
  } else if (state.activeFilter !== "all") {
    const meta = AESTHETICS.find((a) => a.key === state.activeFilter);
    const name = meta ? meta.label.toUpperCase() : state.activeFilter.toUpperCase();
    label = `${count} ${name} ${count === 1 ? "FIND" : "FINDS"}`;
  } else {
    label = `${count} ${count === 1 ? "FIND" : "FINDS"} THIS WEEK`;
  }
  productCountEl.textContent = label;
}

function updateEmptyState(count) {
  emptyStateEl.hidden = count !== 0;
  productGrid.hidden = count === 0;
}

function updateLoadMoreVisibility(totalCount) {
  loadMoreBtn.hidden = state.visibleCount >= totalCount;
}


/* =====================================================
   8. LOAD MORE
   ===================================================== */

loadMoreBtn.addEventListener("click", () => {
  state.visibleCount += PAGE_SIZE;
  renderProducts();
});


/* =====================================================
   9. AFFILIATE LINKS
   =====================================================
   Only the SHOP NOW button ever navigates away from NOCTÉA.
   Product images and names are never clickable links.
   ===================================================== */

function buildShopNowButton(product) {
  const hasLink = typeof product.affiliateLink === "string" && product.affiliateLink.trim() !== "";

  if (hasLink) {
    const link = document.createElement("a");
    link.className = "btn btn--primary card__cta";
    link.href = product.affiliateLink;
    link.target = "_blank";
    link.rel = "noopener noreferrer sponsored";
    link.setAttribute("aria-label", `Shop ${product.name} on ${product.store} (opens in a new tab)`);
    link.innerHTML = `Shop now <span aria-hidden="true">↗</span>`;
    return link;
  }

  const disabledBtn = document.createElement("button");
  disabledBtn.type = "button";
  disabledBtn.className = "btn card__cta";
  disabledBtn.disabled = true;
  disabledBtn.textContent = "Link coming soon";
  return disabledBtn;
}


/* =====================================================
   10. AESTHETIC CARDS
   ===================================================== */

function buildAestheticCard(aesthetic) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "aesthetic-card";
  card.setAttribute("aria-label", `Filter by ${aesthetic.label}`);
  card.innerHTML = `
    <span class="aesthetic-card__glyph" aria-hidden="true">${aesthetic.glyph}</span>
    <span class="aesthetic-card__label">${aesthetic.label}</span>
  `;
  card.addEventListener("click", () => {
    setActiveFilter(aesthetic.key);
    document.getElementById("drop").scrollIntoView({ behavior: "smooth" });
  });
  return card;
}

function renderAestheticGrid() {
  aestheticGrid.innerHTML = "";
  AESTHETICS.forEach((a) => aestheticGrid.appendChild(buildAestheticCard(a)));
}


/* =====================================================
   11. ANIMATIONS
   ===================================================== */

// Scatter a handful of small twinkling stars across the background.
function renderStars() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const count = 40;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const star = document.createElement("span");
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    if (!prefersReduced) {
      star.style.animationDelay = `${Math.random() * 4}s`;
    } else {
      star.style.animation = "none";
      star.style.opacity = "0.35";
    }
    fragment.appendChild(star);
  }
  bgStars.appendChild(fragment);
}

// Smooth-scroll for any element with a data-scroll-target attribute,
// as a small enhancement on top of native CSS scroll-behavior.
function bindSmoothScroll() {
  document.querySelectorAll("[data-scroll-target]").forEach((el) => {
    el.addEventListener("click", (event) => {
      const targetSelector = el.getAttribute("data-scroll-target");
      const target = document.querySelector(targetSelector);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}


/* =====================================================
   12. INITIALIZATION
   ===================================================== */

function setActiveFilter(filterKey) {
  state.activeFilter = filterKey;
  state.visibleCount = PAGE_SIZE;

  filterScroll.querySelectorAll(".pill").forEach((pill) => {
    pill.classList.toggle("is-active", pill.dataset.filter === filterKey);
  });

  renderProducts();
}

function bindFilterPills() {
  filterScroll.querySelectorAll(".pill").forEach((pill) => {
    pill.addEventListener("click", () => setActiveFilter(pill.dataset.filter));
  });
}

function bindSearch() {
  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    state.visibleCount = PAGE_SIZE;
    renderProducts();
  });
}

function bindSort() {
  sortSelect.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderProducts();
  });
}

function renderWeekRange() {
  const startOfWeek = getStartOfWeek(new Date());
  weekRangeEl.textContent = formatWeekRange(startOfWeek).toUpperCase();
}

function init() {
  renderWeekRange();
  renderAestheticGrid();
  renderStars();
  bindFilterPills();
  bindSearch();
  bindSort();
  bindSmoothScroll();
  renderProducts();
}

document.addEventListener("DOMContentLoaded", init);