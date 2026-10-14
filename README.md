# Fernly — Houseplant Care & Plant Finder Guide

A multi-page informational web application built with plain semantic HTML5, modern CSS3 custom properties, and vanilla ES6+ JavaScript.

**Live Pages (5):**
- [index.html](file:///f:/OCTOBER%20WEBSITE/Fernly/index.html) — Home (Hero with floating leaf shapes, botanical categories, beginner starter picks, interactive light guide with dynamic SVG, seasonal care tabs, testimonials, newsletter).
- [about.html](file:///f:/OCTOBER%20WEBSITE/Fernly/about.html) — About (Mission story, expert board, research & testing methodology reviewed October 2026, values against pseudoscience, peatland conservation).
- [services.html](file:///f:/OCTOBER%20WEBSITE/Fernly/services.html) — Services & Consultations (Tool overviews `#finder-overview` & `#watering`, Care workshops `#workshops` with reservation modal, Virtual clinic consults `#troubleshooting`, FAQ accordion, and inquiry form section).
- [plant-finder.html](file:///f:/OCTOBER%20WEBSITE/Fernly/plant-finder.html) — Interactive Tool Suite (Multi-parameter plant finder `#finder`, accessible care card detail modal, watering schedule builder `#watering-builder` with transparent multipliers and .ics export, common-problems troubleshooter `#troubleshooter`, and "My Plants" persistent localStorage collection).
- [contact.html](file:///f:/OCTOBER%20WEBSITE/Fernly/contact.html) — Dedicated Contact Page (Direct advisory desks, validated inquiry form with client-side feedback, clinic operating hours, and inquiry FAQ).

---

## Design System Specifications

| Token | Implementation |
|---|---|
| **Colors** | Max 3 brand colors: `--color-primary` (`#183c2e`), `--color-secondary` (`#3b664f`), `--color-accent` (`#c46944`) |
| **Typography** | Google Fonts: `'Fraunces'` (warm organic serif for headings) & `'Plus Jakarta Sans'` (clean geometric body) |
| **Heading Weights** | H1: 560 (≤580), H2: 520 (≤540), H3: 500 (≤520) — **never 600+** |
| **Alignment** | Section headings & subtext centered globally; cards equal height with shared baselines |
| **Border Radius** | Unified `--radius-global: 16px` |
| **Elevation Shadow** | Unified `--shadow-global: 0 10px 30px -8px rgba(24, 60, 46, 0.08)` |
| **Icons** | Phosphor Icons CDN (Crisp scalable vectors, no emojis) |
| **Imagery** | 30+ curated, distinct high-resolution Unsplash photos; no duplicates across pages |

---

## Key Features

1. **Plant Finder (`plant-finder.html#finder`)**:
   - Multi-filter: Light (low, medium, bright indirect, direct sun), Space (desk/shelf, tabletop, floor, hanging), Difficulty (beginner, intermediate, expert), Size (small, medium, large), and Pet-Safety (toggle for 100% pet-safe species).
   - Deep-linking support (e.g. `plant-finder.html?category=tropicals`, `?light=low`, `?pet=safe`).
   - Live search by common name, botanical name, or alias.
   - Dynamic result count, active filter chips with one-click removal, and empty state.
   - ItemList JSON-LD structured data.

2. **Accessible Care Card Modal**:
   - Focus trap, Esc key listener, backdrop dismissal.
   - Detailed specifications: light, watering interval, humidity, temperature range, potting mix, fertilizer, repotting, propagation.
   - Species-specific problems linking directly to the troubleshooter.
   - "Build watering schedule" pre-fill button.
   - Print-ready stylesheet `@media print`.

3. **Watering Schedule Builder (`plant-finder.html#watering-builder`)**:
   - Species picker + pot material (terracotta, plastic, ceramic), container size, light, room humidity, and season.
   - Computes interval with transparent rule-of-thumb multiplier breakdown table.
   - Visual 14-day calendar view with watering day badges.
   - Tactile finger test reminder ("Check soil 2 inches down first").
   - Downloadable `.ics` calendar reminder event generator.

4. **Common-Problems Troubleshooter (`plant-finder.html#troubleshooter`)**:
   - 9 leaf and stem symptoms with optional plant species context.
   - Guided environmental questionnaire (soil moisture depth, window exposure, recent drafts/repots).
   - Ranked likely causes (phrased as likely, not certain), step-by-step remedies, "When to repot", and "When to seek expert help" notes.

5. **"My Plants" Persistent Collection**:
   - Stored in browser `localStorage` (`fernly_saved_plants`).
   - Available as both a slide-over drawer and a dedicated section on `plant-finder.html`.
   - Add/remove plants, add personal notes per plant (e.g., location, last repot date).
   - Live badge counter in navbar synchronized across all 4 pages.

6. **Interactive Light-Level Guide (`index.html#light-guide`)**:
   - Window orientation (North, South, East, West) + distance from glass.
   - Live dynamic SVG room illustration with sunbeam diffusion and foot-candle estimates.
   - Recommended plant species with direct links to pre-filtered finder.

7. **Safety, Honesty & Credibility**:
   - Pet-safety disclosures on every card with icon and text (`pet-badge-safe` vs `pet-badge-toxic`).
   - Vet disclaimer: general guidance only; contact vet or pet poison hotline if ingested.
   - Debunked air-purifying claims honestly explained.
   - Care guidelines reviewed October 2026.
   - Mandatory disclosure line in footer across all 4 pages.

---

## File Structure

```
Fernly/
├── index.html            # Home page (7+ sections, hero floating leaves, light guide, JSON-LD)
├── about.html            # About page (Story, Experts, Research method, Values, CTA)
├── services.html         # Services page (Tool overviews, Workshops + Modal, Consultations, FAQ)
├── plant-finder.html     # Tool page (Finder, Care modal, Schedule builder, Troubleshooter, My Plants)
├── contact.html          # Contact page (Advisory desks, Validated contact form, Hours, FAQ)
├── assets/
│   ├── css/
│   │   └── style.css     # Unified CSS variables, typography, animations, print stylesheet
│   └── js/
│       ├── data.js       # 28 seed plants, troubleshooting rules, seasonal tips, light factors
│       ├── main.js       # Nav drawer, modals, form validation, toasts, FAQ accordion
│       ├── finder.js     # Live filter, search, sort, care modal, deep link parser
│       ├── schedule.js   # Watering intervals, calendar preview, .ics generator
│       ├── troubleshoot.js # Guided symptom flow, ranked causes, fixes
│       ├── myplants.js   # LocalStorage persistence, personal notes, drawer & section render
│       └── light.js      # Light guide SVG calculation and recommendations
└── README.md
```
