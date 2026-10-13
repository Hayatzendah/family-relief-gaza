# Family Relief — Gaza

A trustworthy, transparent, English-language humanitarian fundraising information website for a family in Gaza. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Lucide icons.

This site explains a family's request for assistance. It does **not** process payments, collect personal data through forms, or invent campaign details.

## Requirements

- Node.js 18.18+ (Node 20 or 22 recommended)
- npm 9+

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Editing campaign content

All campaign-specific text and settings live in one file:

```text
src/content/campaign.ts
```

That file is documented in place. Update values such as:

| Field | Purpose |
| --- | --- |
| `siteTitle` / `siteDescription` | SEO metadata |
| `headline` / `heroSupportingText` | Hero copy |
| `heroImage` / `heroImageAlt` | Approved photograph (leave empty to hide) |
| `organizerName` | Organizer display name |
| `beneficiaryDescription` | Who the campaign is intended to help |
| `storyParagraphs` | Our Story section |
| `assistanceCategories` | How help is intended to be used (`enabled: false` hides a category) |
| `fundDeliveryDescription` | How assistance is intended to reach beneficiaries |
| `accountabilityDescription` | Update / accounting plans |
| `contactEmail` | Public email (leave `""` to hide the email button) |
| `socialUrl` / `socialLabel` | Public social link (leave `socialUrl` as `""` to hide) |
| `updates` | Genuine timeline updates (leave `[]` for the empty state) |

### Adding photographs

1. Place family-approved images in `public/images/`.
2. Set `heroImage` / `heroImageAlt` for the hero photograph.
3. Add entries to `storyPhotos` for the gallery.
4. If publishing a medical document, redact phone numbers and ID numbers first (see `scripts/redact_referral.py`).

### Contact buttons

- Set `contactEmail` to show the email button.
- Set `socialUrl` to show the social / messaging button.
- Leave either field empty to keep that button hidden.

### Assistance categories

Set `enabled: false` on any category that does not apply, or remove the category object entirely.

### Campaign updates

Add objects to the `updates` array only when you have genuine information to share:

```ts
{
  id: "update-1",
  date: "2026-03-15",
  title: "Short factual title",
  body: "Accurate update text only.",
}
```

## Deploying

### Vercel (recommended for Next.js)

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Use the default Next.js build settings (`npm run build`).
4. Deploy.

### Other Node hosts

Build locally or in CI:

```bash
npm run build
npm start
```

Serve the app with Node on the platform's required port. Ensure environment variables for the host (if any) are set by the platform — this project does not require payment or analytics secrets by default.

## Design notes

- Warm off-white background, charcoal text, muted olive accents
- Editorial typography (Libre Baskerville + Source Sans 3)
- Smooth scrolling respects `prefers-reduced-motion`
- Mobile navigation supports Escape, focus management, and keyboard use

## Important ethical constraints

Before publishing, replace every `[PLACEHOLDER]` value with accurate, consented information. Do **not**:

- Invent names, medical diagnoses, costs, casualty details, testimonials, or donation totals
- Add payment processing, bank details, or donation checkout without explicit confirmation that the provider permits this campaign
- Claim independent verification, tax-deductible status, or guaranteed delivery unless those claims are factually true and documented
- Publish private phone numbers, personal addresses, or account credentials

## Still needed from the organizer before publishing

Leave these fields empty in `src/content/campaign.ts` until real approved values exist. The public site already hides buttons and avoids inventing details.

### Pre-publish checklist

- [ ] `organizerName`
- [x] Beneficiary description and story copy for Abdullah Refaat alghefary
- [x] Assistance categories (medical, living, food, travel/evacuation if feasible)
- [ ] `fundDeliveryDescription`
- [ ] `accountabilityDescription`
- [ ] `contactEmail` and/or `socialUrl`
- [x] Family photographs in `public/images/` (hero + 3 gallery photos; referral image removed by request)
- [ ] Genuine `updates` entries, if any
- [ ] Review Privacy page wording for the actual hosting provider
