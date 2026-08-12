// Single source of truth for the brand name and site-wide constants.
// Change SITE_NAME here to rebrand the entire site.
export const SITE_NAME = "AutomateIQ";
export const SITE_TAGLINE = "AI Automation Systems";
export const SITE_POSITIONING = "We build AI-powered systems that automate repetitive business processes.";
export const SITE_DESCRIPTION =
  "AutomateIQ designs and builds AI-powered automation systems — lead qualification, customer support, and workflow automation — for businesses that want to eliminate repetitive manual work.";

// Placeholder until a production domain is registered. Used only as the
// metadataBase for resolving Open Graph/canonical URLs.
export const SITE_URL = "https://automateiq.example.com";

// Placeholders — replace with real values once provided. Never invent these.
export const EMAIL = "hello@automateiq.example.com";
export const LINKEDIN_URL = "";
export const GITHUB_URL = "";

export type NavLink = { label: string; href: string };

// Primary navbar.
export const NAV_LINKS: NavLink[] = [
  { label: "Systems", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
];

// Footer navigation — same destinations, different grouping (includes
// Contact as a direct link since the footer has no persistent CTA button).
export const FOOTER_NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Systems", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PRIMARY_CTA: NavLink = { label: "Automate My Workflow", href: "/contact" };
export const SECONDARY_CTA: NavLink = { label: "Explore Our Systems", href: "/work" };

// Intentionally placeholders — no real social accounts configured yet. Fill
// in real URLs here when they're provided; the Footer renders these as
// inactive placeholders until then rather than linking anywhere.
export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "GitHub", href: GITHUB_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
];
