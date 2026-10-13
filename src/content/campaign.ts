/**
 * ============================================================================
 * CAMPAIGN CONTENT CONFIGURATION (editor-only)
 * ============================================================================
 * Edit this file to customize campaign text. Comments here never appear on the
 * public website. Leave optional fields empty ("") until real, approved values
 * are available — unfinished contact/organizer fields stay hidden on the site.
 * ============================================================================
 */

export type AssistanceCategory = {
  id: string;
  title: string;
  description: string;
  /** Set to false to hide this category without deleting it. */
  enabled: boolean;
};

export type CampaignUpdate = {
  id: string;
  /** ISO date string, e.g. "2026-03-15" */
  date: string;
  title: string;
  body: string;
};

export type CampaignPhoto = {
  id: string;
  /** Path under /public, e.g. "/images/family.jpg" */
  src: string;
  alt: string;
  caption: string;
};

export type CampaignContent = {
  siteTitle: string;
  siteDescription: string;
  logoText: string;
  headline: string;
  heroSupportingText: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  /** Path under /public. Leave empty to hide the hero image. */
  heroImage: string;
  heroImageAlt: string;
  /** Leave empty until an approved organizer name is ready for public display. */
  organizerName: string;
  beneficiaryDescription: string;
  storyTitle: string;
  storyIntro: string;
  storyParagraphs: string[];
  storyPhotos: CampaignPhoto[];
  assistanceCategories: AssistanceCategory[];
  /** Leave empty until a real delivery method is approved for public display. */
  fundDeliveryDescription: string;
  /** Leave empty until a real accountability plan is approved for public display. */
  accountabilityDescription: string;
  /** Leave empty to hide contact UI. */
  contactEmail: string;
  /** Leave empty to hide the social button. */
  socialUrl: string;
  socialLabel: string;
  /** Leave empty to hide the updates section. */
  updates: CampaignUpdate[];
};

export const campaign: CampaignContent = {
  siteTitle: "Family Relief — Gaza | Help Abdullah Access Medical Care",
  siteDescription:
    "Abdullah Refaat alghefary is a father from Gaza living with thyroid cancer. His family is seeking humanitarian assistance for medical needs and essential living expenses.",

  logoText: "Family Relief — Gaza",

  headline: "Help Abdullah Access the Medical Care He Needs",
  heroSupportingText:
    "Abdullah Refaat alghefary is a father from Gaza living with thyroid cancer. His family is seeking humanitarian assistance for medical needs and essential living expenses, while hoping to find a safe and lawful way for him to access the treatment he needs outside Gaza if possible.",
  primaryCtaLabel: "Read Abdullah’s Story",
  secondaryCtaLabel: "Contact the Organizer",

  heroImage: "/images/family-before-illness.jpg",
  heroImageAlt:
    "Abdullah Refaat alghefary standing indoors with his two young children before his illness",

  organizerName: "",

  beneficiaryDescription:
    "This request is intended to support Abdullah Refaat alghefary, a father from Gaza living with thyroid cancer, together with his wife and their two young children.",

  storyTitle: "Abdullah’s story",
  storyIntro:
    "A family’s request for help so Abdullah can continue seeking the medical care he needs.",

  storyParagraphs: [
    "Abdullah Refaat alghefary is a father from Gaza. Before his illness, he shared everyday life with his wife and their two young children. The photograph at the top of this page shows him with his children during that earlier time.",
    "Abdullah has thyroid cancer and needs continued medical care. The family has shared photographs from his medical journey, including images from hospital care and after surgery on his neck.",
    "His family is seeking humanitarian assistance for medical needs and essential living expenses. They hope to find a safe and lawful way for him to access treatment outside Gaza if possible. This page does not claim that medical evacuation or departure has been approved or guaranteed.",
  ],

  storyPhotos: [
    {
      id: "family",
      src: "/images/family-before-illness.jpg",
      alt: "Abdullah Refaat alghefary with his two young children before his illness",
      caption: "Abdullah with his children, before the illness",
    },
    {
      id: "hospital",
      src: "/images/patient-in-hospital.jpg",
      alt: "Abdullah resting in a hospital bed during medical care",
      caption: "During hospital care",
    },
    {
      id: "surgery",
      src: "/images/patient-surgery.jpg",
      alt: "Healing surgical incision on Abdullah’s neck after surgery",
      caption: "After neck surgery",
    },
  ],

  assistanceCategories: [
    {
      id: "medical",
      title: "Medical care and treatment",
      description:
        "Support may help with medical care related to thyroid cancer, including treatment, surgery recovery, medications, scans, and hospital-related needs as circumstances allow.",
      enabled: true,
    },
    {
      id: "living",
      title: "Essential family living expenses",
      description:
        "Support may help Abdullah’s wife and children meet basic living needs while he is ill and seeking care.",
      enabled: true,
    },
    {
      id: "food",
      title: "Food and basic supplies",
      description:
        "Support may help provide food, hygiene items, and other household supplies for the family.",
      enabled: true,
    },
    {
      id: "travel",
      title: "Necessary travel or medical evacuation expenses",
      description:
        "If a safe and lawful route for treatment outside Gaza becomes available, support may help with related travel or medical-evacuation expenses. This is not a claim that such a route is currently approved or guaranteed.",
      enabled: true,
    },
  ],

  fundDeliveryDescription: "",
  accountabilityDescription: "",

  contactEmail: "",
  socialUrl: "",
  socialLabel: "Message on social media",

  updates: [],
};

/** True when a string has real public content (not empty / placeholder-like). */
export function isConfiguredText(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith("[PLACEHOLDER")) return false;
  if (trimmed.toLowerCase().includes("placeholder:")) return false;
  return true;
}

export function getEnabledCategories(): AssistanceCategory[] {
  return campaign.assistanceCategories.filter(
    (category) =>
      category.enabled &&
      isConfiguredText(category.title) &&
      isConfiguredText(category.description),
  );
}

export function hasOrganizerName(): boolean {
  return isConfiguredText(campaign.organizerName);
}

export function hasFundDeliveryInfo(): boolean {
  return isConfiguredText(campaign.fundDeliveryDescription);
}

export function hasAccountabilityInfo(): boolean {
  return isConfiguredText(campaign.accountabilityDescription);
}

export function hasContactEmail(): boolean {
  const email = campaign.contactEmail.trim();
  if (!email || email.includes("placeholder") || email.includes("example.com")) {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function hasSocialUrl(): boolean {
  const url = campaign.socialUrl.trim();
  if (!url || url.includes("placeholder") || url.includes("example.com")) {
    return false;
  }
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function hasAnyContactMethod(): boolean {
  return hasContactEmail() || hasSocialUrl();
}

export function hasHeroImage(): boolean {
  return campaign.heroImage.trim().length > 0;
}

export function hasUpdates(): boolean {
  return campaign.updates.some(
    (update) =>
      isConfiguredText(update.id) &&
      isConfiguredText(update.date) &&
      isConfiguredText(update.title) &&
      isConfiguredText(update.body),
  );
}
