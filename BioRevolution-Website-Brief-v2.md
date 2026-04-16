# BioRevolution Coalition - Website Brief v2

**Campaign:** BioRevolution Coalition
**Strapline:** Biology, engineered for growth.
**Format:** Single-page scrolling advocacy site
**Launch:** T-5, target Mon 20 Apr 2026
**Build:** Claude Code or Google Stitch (AI codegen), not hand-built
**Prepared for:** Charles Newman, Resource Media

This version replaces the earlier website brief. It incorporates the design system work delivered by the designer (palette, hex motif system, Voronoi + mycelium patterns, dual light/dark hero treatment) and reflects the decision to build via AI codegen rather than a human developer.

---

## 1. What has changed since v1

- Full six-colour palette locked, with exact hex codes
- Motif library deliberately narrowed to hex + Voronoi + mycelium, plus two inflection accents (amber slash, white brushstrokes)
- Fossil-side contrast simplified to dark greys, not a warm Ember
- Two sub-straplines confirmed, both usable
- Typography lockup confirmed as strapline-only treatment, not a site-wide H1 pattern
- Dev path now AI codegen, so the brief is structured as design tokens plus explicit component specs

---

## 2. Audiences, tone, purpose

Three audiences, one page. Citizens who will sign, industry who will join the coalition, politicians who will champion. Tone is authoritative but accessible. No jargon without a translation. No lecture tone. The page must read as a serious coalition brief, not a protest site.

Purpose is singular: drive petitions on petition.parliament.uk. The site is a funnel, not a destination.

---

## 3. Design tokens

Paste these as CSS custom properties into the root. AI builders should prefer these tokens over literal hex values anywhere in generated code.

```css
:root {
  /* Palette */
  --forest-ink:   #112717;  /* primary dark bg, primary text on light */
  --sage:         #596459;  /* secondary, mid-tone, muted type on dark */
  --leaf-green:   #24B101;  /* primary identity, CTAs, progress fill, links */
  --chartreuse:   #DBE801;  /* highlight, emphasis on dark, strapline accent */
  --cream:        #FFF7E4;  /* default light bg */
  --amber:        #FFBF00;  /* decorative inflection only, never UI */

  /* Fossil-contrast greys (used in comparison diagrams, case studies) */
  --fossil-dark:  #2A2D2E;
  --fossil-mid:   #5C5F60;
  --fossil-light: #B8BABA;

  /* Semantic roles */
  --bg-default:       var(--cream);
  --bg-inverse:       var(--forest-ink);
  --text-default:     var(--forest-ink);
  --text-inverse:     var(--cream);
  --text-muted:       var(--sage);
  --cta-bg:           var(--leaf-green);
  --cta-text:         var(--forest-ink);
  --cta-hover-bg:     var(--chartreuse);
  --highlight:        var(--chartreuse);
  --fossil-contrast:  var(--fossil-dark);

  /* Type */
  --font-sans: "Archivo", "Helvetica Neue", Arial, sans-serif;

  /* Motion */
  --ease-organic: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Contrast rules (non-negotiable)

- Leaf Green `#24B101` fails WCAG AA for body text on cream. **Never use it for text under 18px.** CTAs, buttons, graphic elements only.
- Chartreuse `#DBE801` is near-invisible on cream. **Never use on light backgrounds.** It exists to accent on Forest Ink.
- Amber `#FFBF00` is decoration only. Never CTA, never link, never UI state.
- Body text is Forest Ink on Cream, or Cream on Forest Ink. Nothing else.
- Sage is for muted captions and secondary type only, never primary text.

---

## 4. Typography

Archivo only, four weights loaded: 400, 600, 800, 900. Also load Archivo Narrow 600 if the AI builder can handle a second family call; it is used for stat labels only.

| Level | Weight | Size desktop / mobile | Tracking | Colour on cream / on ink |
|-------|--------|-----------------------|----------|--------------------------|
| H1 display | 900 | 64px / 40px | -2% | Forest Ink / Cream |
| H2 | 800 | 40px / 28px | -1% | Forest Ink / Cream |
| H3 | 600 | 24px / 20px | 0 | Forest Ink / Cream |
| Lead/intro | 600 | 22px / 19px | 0 | Forest Ink / Cream |
| Body | 400 | 18px / 17px | 0, line-height 1.55 | Forest Ink / Cream |
| Stat numeral | 900 | 120px+ | +2% | Leaf Green / Chartreuse |
| Stat label (Archivo Narrow) | 600 | 13px | +8%, UPPERCASE | Sage / Chartreuse |
| Button | 600 | 16px | +6%, UPPERCASE | Forest Ink on Leaf |
| Caption | 400 | 13px | +4% | Sage |

### The strapline lockup (special case)

"Biology, engineered for growth." is set as a two-part lockup, not as a normal H1:

- "Biology," in Archivo 900, sentence case
- Horizontal rule, 1px, 40% width, Sage on cream or Chartreuse on ink
- "ENGINEERED FOR GROWTH" in Archivo 800, tracked +10%, UPPERCASE
- On dark backgrounds, the second phrase is Chartreuse. On cream, it is Forest Ink.

**This lockup is reserved for the strapline only. Do not apply it to other H1s.** All other H1s use the simple Archivo 900 treatment.

### Sub-straplines

Two, both in use, selected by context:

- **Short** (default, used in lockup and hero subhead): "Support the transition to bio-based carbon for the future economy."
- **Long** (used for institutional contexts, press, footer bio): "Backing the UK's transition to bio-based carbon, for growth and resilience."

Subheads are Archivo 600, 22px on desktop, 19px mobile, Sage on cream or Cream on Forest Ink.

---

## 5. Motif system

We are holding the library deliberately tight. Three motifs only, plus two inflection accents.

### Primary motifs

1. **Hexagon** - the master container. Six treatments: solid fill, outline, double-outline keyline, pattern-filled, gradient-filled, standalone mark.
2. **Voronoi mesh** - the primary pattern fill inside hexagons. Reads as precision, chemistry, molecular structure.
3. **Mycelium branching** - organic overlay that bleeds off the hex edge. Reads as growth, biology reclaiming the space.

### Inflection accents (decorative only, sparing)

4. **Amber slash** - a single diagonal stroke, low frequency. Use at most once per section.
5. **White brushstrokes** - small hand-drawn scratches, low frequency. Emphasis on quotes or numbers only.

### Retired

Fractal vein, pinecone spiral, vortex spiral. Do not reintroduce. If the site needs more visual variety post-launch we will add deliberately, not by scope creep.

### Signature composition

A hexagon with Voronoi fill, overlaid by a mycelium branching shape that bleeds off the right or bottom edge of the canvas. Used in the hero and the closing CTA. May also be used at the top of each major section header, at reduced scale.

---

## 6. Duality: light and dark

The site alternates between two base modes, matching the two hero cards the designer produced.

- **Light mode (Cream bg)**: The Problem, What are bio-based solutions, Case Studies, Solution.
- **Dark mode (Forest Ink bg)**: Hero, Critical Flaw, Innovation Gap, Join the BioRevolution.

Transitions between modes are handled by solid section backgrounds, not gradients. The contrast between the two is the rhythm of the page.

---

## 7. Component library (for AI builder)

Specs are deliberately explicit. Each component should be generated with all states listed.

### 7.1 Button

- Default: Leaf Green bg, Forest Ink text, 12px 24px padding, 4px radius, Archivo 600 16px tracked +6% caps.
- Hover: bg shifts to Chartreuse, text stays Forest Ink, 150ms ease-organic.
- Focus: 2px Chartreuse outline, 2px offset.
- On dark bg: same but text can invert to Cream if required for contrast.
- Secondary button: transparent bg, 1.5px Leaf Green border, Leaf Green text. Hover fills to Leaf Green bg.

### 7.2 Hex card

- Clipped to hex shape or contained in a hex outline at 1.5px.
- Padding 32px.
- Cream bg on light sections, Forest Ink bg on dark.
- Pattern fill at 8% opacity in the background, Voronoi.
- Hover: Voronoi opacity rises to 20%, 250ms ease-organic.

### 7.3 Stat block

- Large numeral in Archivo 900, 120-160px, Leaf Green on cream, Chartreuse on ink.
- Label above in Archivo Narrow 600, 13px tracked +8%, UPPERCASE, Sage (light) or Chartreuse (dark).
- One-line explanatory sentence below in Archivo 600, 22px.
- Source citation in Archivo 400, 12px at 60% opacity.

### 7.4 Progress bar (petition counter)

- Track: 24px tall, Sage on cream or Forest Ink border on ink, 4px radius.
- Fill: Leaf Green, animated from 0 to target on scroll into view.
- Live count: Archivo 900, 72px, Leaf Green (cream bg) or Chartreuse (ink bg), mounted above the fill end, updating via Odometer.js.
- Under-bar caption: "OF 10,000 NEEDED FOR GOVERNMENT RESPONSE" in Archivo Narrow 600 tracked caps.
- Past 10,000: bar stays solid Leaf, number continues climbing in the larger slot, with "GOVERNMENT MUST RESPOND" in Chartreuse below.

### 7.5 Nav

- Hidden on hero, solidifies on scroll past 80vh.
- Background: Forest Ink at 95% opacity with backdrop blur.
- Links in Archivo 600, 16px, Cream.
- "Sign the petition" always rendered as a Leaf Green button.

### 7.6 Section header

- H2 in Archivo 800, Forest Ink on cream or Cream on ink.
- Optional small hex mark to the left at 40px, pattern-filled.
- 120px top padding, 80px bottom.

---

## 8. Section-by-section specification

### S1. Hero (dark)

Forest Ink background. Strapline lockup left 60%. Hex + Voronoi + mycelium composition right 40%, bleeding off right edge. Three audience CTAs beneath the lockup, horizontal, hex-cornered, equal visual weight. Scroll indicator bottom-centre.

### S2. The Petition (light)

Cream background. H2 "Add your voice." Body copy from the agreed petition-page text, no longer than four paragraphs. Progress bar component (7.4) dominates the section. Leaf Green "Sign the petition" button, opens parliament petition in new tab. Social share strip directly beneath.

### S3. The Critical Flaw (dark)

Forest Ink background. H2 "The Critical Flaw" in Cream. Four hex cards in a 2x2 grid on desktop, stacked on mobile. Each card has a Voronoi fill at 8% and a crystalline-to-organic hover animation. Card titles in Archivo 800, body in Archivo 400.

### S4. The Problem (light)

Cream background. Long-read prose with pull-quotes every 300 words. One diagram: fossil-carbon cycle vs biogenic-carbon cycle, built in SVG, fossil-dark for the left half, Leaf Green + Chartreuse for the right. Policy-barriers accordion using hex markers as the expand/collapse affordance.

### S5. The Innovation Gap (dark)

Full-bleed Forest Ink. Single centred stat: £0.5 billion in Archivo 900, 160px, Chartreuse. One pull-quote beneath. Nothing else on screen. Mycelium motif ghosted at 15% opacity.

### S6. The Solution (light)

Cream background. Five-point roadmap as nodes on a branching SVG path, drawn on scroll (GSAP DrawSVG or equivalent, 500ms per node). Each node is a numbered hex. Beneath, three stat blocks (component 7.3) side by side on desktop, stacked on mobile.

### S7. Case Studies (light, alternating)

Two cards, default collapsed. Card 1 (Packaging) uses Voronoi fill. Card 2 (Regulation) uses a mycelium fill. Both expand in-place; no modal. Comparison table in Card 2 uses fossil-dark for the fossil column, Leaf Green for the bio column.

### S8. Join the BioRevolution (dark)

Forest Ink background. H2 "Are you ready to join the BioRevolution?" Three columns: Citizens, Industry, Politicians. Each column has a hex mark at the top. Industry column contains an inline sign-up form with four fields. All three CTAs are Leaf Green buttons.

### S9. Footer (dark)

Forest Ink. Coalition logo strip, greyscale by default, colour on hover via CSS filter. Long sub-strapline used here. Privacy, contact, press links in Sage. Social icons in Cream.

---

## 9. Interaction and animation

Five permitted, no more:

1. Scroll-morph on hero: static shard on land, unravels into branching form by the time petition is in view. Reduced-motion: static end-state only.
2. Flip-board counter on petition section, Odometer.js, animates only when in view.
3. Scroll-triggered SVG stroke-draw on the Solution roadmap path, GSAP DrawSVG.
4. Card hover state: Voronoi opacity rises, 250ms.
5. Section-to-section solid colour transitions on scroll.

Anything else is out of scope for v1.

All animations respect `prefers-reduced-motion`. The petition counter number still updates; only the transition animates.

---

## 10. Technical notes

- Single HTML page, no router.
- Tailwind or plain CSS custom properties. If Tailwind, extend config with the tokens above.
- Google Fonts: Archivo 400, 600, 800, 900, plus Archivo Narrow 600. Self-host to avoid render-blocking.
- Petition counter polls `https://petition.parliament.uk/petitions/{id}.json` every 15 minutes, cached server-side via Vercel cron or equivalent. Degrades gracefully to the CTA without a count.
- OG image is dynamic: Vercel `@vercel/og` injects current signature count into the share card.
- Lighthouse targets: LCP under 2.0s, CLS under 0.1, TBT under 200ms.
- All SVGs optimised via SVGO. Total SVG payload under 150KB.
- Favicon: the molecule mark, 64x64 SVG plus .ico fallback.

---

## 11. Content and copy

Petition text, critical flaw points, problem narrative, solution roadmap, stat cards, and case studies are all supplied in the campaign master doc. Do not rewrite these; treat as golden.

British English throughout. No em-dashes, no en-dashes, hyphens only.

### Headline inventory (pre-approved, for any AI builder to draw from)

- Hero: "Biology, engineered for growth." (lockup)
- Hero subhead: "Support the transition to bio-based carbon for the future economy."
- Petition section H2: "Add your voice."
- Critical Flaw H2: "The Critical Flaw"
- Problem H2: "The Problem"
- Problem sub-H2: "Carbon is a building block of modern life. Today, most of it comes from fossil fuels."
- Innovation Gap stat: "£0.5 billion"
- Innovation Gap pull-quote: "The problem is not a lack of innovation. It is a lack of coherent policy."
- Solution H2: "A roadmap for a UK BioRevolution"
- Case studies H2: "Case studies"
- Closing H2: "Are you ready to join the BioRevolution?"

---

## 12. Builder prompt (paste into Claude Code or Google Stitch)

> Build a single-page scrolling advocacy site for the BioRevolution Coalition, a UK parliamentary-petition campaign. Use the design tokens in section 3 of this brief as CSS custom properties. Use Archivo only, four weights (400, 600, 800, 900) plus Archivo Narrow 600. Alternate sections between a Cream (`#FFF7E4`) background and a Forest Ink (`#112727`) background per section 6. Build components per section 7, with all listed states. Build the nine sections per section 8, in order. Implement the five permitted animations in section 9, respecting prefers-reduced-motion. Petition counter polls `petition.parliament.uk/petitions/{id}.json` server-side, cached 15 minutes. Never use Leaf Green for body text. Never use Chartreuse on Cream. All copy is pre-approved; do not rewrite. British English, hyphens only, no em/en dashes. Target Lighthouse LCP under 2.0s.

---

## 13. Out of scope for v1 (revisit T+14 or later)

- MP champion module (no confirmed endorsements at launch)
- News/updates feed
- Generative signature mosaic
- Parallax throughout
- Three.js hero
- Second language versions
- Coalition member CMS (initial member list is hard-coded)

---

## 14. Sign-off

- Design system sign-off: Jen Vanderhoven via Charles Newman
- Copy sign-off: Charles Newman and Becky Goodall
- Technical sign-off: Charles Newman
- Version: v2, 15 April 2026
