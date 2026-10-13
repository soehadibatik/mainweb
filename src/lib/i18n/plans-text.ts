import type { Plan, PlanFeatureGroup } from "@/lib/plans";
import type { Locale } from "./config";

/**
 * Terjemahan teks makna paket (tagline, idealFor, kelompok fitur). Harga dan
 * nilai numerik TIDAK diterjemahkan di sini — tetap dibaca dari data paket.
 * Kunci harus cocok dengan id di plans.ts; kalau ada paket baru dari BO yang
 * belum punya terjemahan, teks Indonesia dipakai apa adanya (fallback).
 */
export type PlanText = {
  tagline: string;
  idealFor: string;
  featureGroups: PlanFeatureGroup[];
};

const en: Record<string, PlanText> = {
  basic: {
    tagline: "A one-page landing site to get online.",
    idealFor:
      "New businesses, personal branding, or promoting a single product or service that needs a quick, affordable online presence.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "One professional landing page",
          "Responsive design (desktop, tablet, mobile)",
          "Sections: Hero, Services, Highlights, Testimonials, Contact",
          "WhatsApp button connected directly: one tap opens a chat",
          "Photo gallery / short portfolio",
          "Contact form (name, message) sent to your email",
          "1 design revision",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "Lightweight site that loads fast even on mobile networks",
          "Basic SEO: meta title & description, structured headings, sitemap",
          "SSL certificate (https)",
          "Google Analytics integration: know who is visiting",
          "Favicon & site colors following your logo",
          "Connected to your own domain (e.g. yourbusiness.com)",
        ],
      },
      {
        title: "Support",
        items: [
          "Maintenance cost included for the first month",
          "Free consultation before work starts: quick guidance on what fits best",
          "Quick guide: how to change text & photos yourself",
          "WhatsApp help during the maintenance period",
        ],
      },
    ],
  },
  beginner: {
    tagline: "A simple profile site: about, services, and contact.",
    idealFor:
      "Small businesses that need more than one page: business profile, services, gallery, and contact page.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "3–5 professional pages",
          "Fully responsive design (mobile, tablet, desktop)",
          "Pages: Home, About, Services, Gallery, Contact",
          "Service / product photo gallery in a clean grid",
          "Contact form connected to your email",
          "WhatsApp button on every page",
          "Google Maps integration for your business location",
          "2 design revisions",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "Basic SEO: meta tags per page + automatic sitemap",
          "SSL certificate (https)",
          "Google Analytics & Search Console: see where visitors come from",
          "Loading speed optimization",
          "Structure ready for a blog / catalog later",
        ],
      },
      {
        title: "Support",
        items: [
          "Monthly maintenance Rp 300K",
          "Minor content updates once a month (text, photos, prices)",
          "Regular content backups",
          "WhatsApp support during business hours",
        ],
      },
    ],
  },
  elementary: {
    tagline: "A professional multi-page company profile.",
    idealFor:
      "Companies that need a professional image in the eyes of clients and partners, complete with a portfolio and team profile.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "5–8 company profile pages",
          "Pages: Home, About, Services, Portfolio, Team, Blog, Contact",
          "Portfolio page with photo gallery & category filter",
          "Simple blog for articles & announcements",
          "Team profile / board list",
          "3 design revisions",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "Complete on-page SEO for every page",
          "SSL certificate (https)",
          "Google Analytics & Search Console",
          "1 professional email account (name@yourdomain.com)",
          "Regular data backups",
          "Connected to your own domain",
        ],
      },
      {
        title: "Support",
        items: [
          "Maintenance Rp 500K/month",
          "Content updates twice a month (articles, portfolio, price info)",
          "Annual renewal Rp 1M including maintenance",
          "Priority technical support via WhatsApp",
          "Guide to managing the blog & gallery",
        ],
      },
    ],
  },
  light: {
    tagline: "A business site with a CMS so you can manage it yourself.",
    idealFor:
      "Businesses that want to update content themselves without coding: articles, products, and galleries managed from a dashboard.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "8–12 professional pages",
          "Full Content Management System (CMS)",
          "Manage articles, pages, and galleries yourself: no coding",
          "Content categories & tags",
          "Multi-user with different access levels (admin, editor)",
          "Flexible service / product pages you can add yourself",
          "3 design revisions",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "On-page SEO + schema markup (rich results in Google)",
          "SSL certificate (https)",
          "3 professional email accounts",
          "Automatic weekly backups",
          "Basic security: firewall & anti-spam",
          "Performance optimized for mobile networks",
        ],
      },
      {
        title: "Support",
        items: [
          "Maintenance Rp 750K/month",
          "Content updates four times a month",
          "Annual renewal Rp 2M including maintenance",
          "Basic CMS training (online)",
        ],
      },
    ],
  },
  intermediate: {
    tagline: "A full-feature business site: blog, catalog, basic integrations.",
    idealFor:
      "Fast-growing businesses that need advanced features: a product catalog, an active blog, and third-party tool integrations.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "12–20 premium pages",
          "Full CMS + custom post types (programs, agents, events, etc.)",
          "Product / service catalog: photos, prices, search & filter",
          "Professional blog with categories & tags",
          "Campaign landing pages (more than one allowed)",
          "Newsletter & lead generation forms connected to email / sheet",
          "Unlimited design revisions during production",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "Advanced SEO + schema markup (products, articles, FAQ)",
          "Optimal loading speed (Core Web Vitals)",
          "Third-party tool integrations: WhatsApp API, Google Workspace, etc.",
          "5 professional email accounts",
          "Automatic daily backups",
          "Website uptime monitoring: watched 24 hours",
        ],
      },
      {
        title: "Support",
        items: [
          "Maintenance Rp 1.5M/month",
          "Unlimited content updates for reasonable needs",
          "Annual renewal Rp 3.5M including maintenance",
          "Priority support + monthly performance reports",
        ],
      },
    ],
  },
  advance: {
    tagline: "Custom platforms: portals, booking, and internal systems.",
    idealFor:
      "Companies that need a dedicated system: information portals, booking systems, membership, or internal applications.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "Custom website built around your business flow: planned from a blueprint, not a template",
          "Online booking / reservation system with schedules & automatic confirmation",
          "Membership & user login system (registration, password reset, profile)",
          "Complete admin dashboard: manage data, users, and content in one screen",
          "Automatic email notifications (signups, orders, reminders)",
          "Multi-language (optional)",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "Custom backend development: logic built for your needs, not a template",
          "Structured & indexed database that stays fast as data grows",
          "REST API for external integrations",
          "Advanced SEO + high performance",
          "Premium SSL & security hardening",
          "Separate daily & weekly backups",
        ],
      },
      {
        title: "Support",
        items: [
          "Maintenance Rp 3M/month",
          "Monitoring, security patches, and regular updates",
          "Annual renewal Rp 5M including maintenance",
          "Fast response SLA for critical issues",
          "Incident reports & follow-up",
        ],
      },
    ],
  },
  proficient: {
    tagline: "Complex web apps with API integrations & dashboards.",
    idealFor:
      "Digital businesses that need a complex web app: an internal marketplace, operational systems, or many API integrations.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "Complex custom web application (portal, operational system, internal marketplace)",
          "Analytics & reporting dashboard with real-time charts",
          "Role & permission system for each team",
          "Automated workflows: approvals, tasks, reminders",
          "Payment gateway integration (Midtrans, Xendit, etc.)",
          "Multi-channel notifications: email & WhatsApp",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "Scalable application architecture: ready to grow without a rebuild",
          "Third-party API integrations: payment, logistics, etc.",
          "Database cluster with replication",
          "Caching layer for maximum performance",
          "Security audit & basic penetration test",
          "Real-time backup + disaster recovery (DR) plan",
        ],
      },
      {
        title: "Support",
        items: [
          "Maintenance Rp 5M/month",
          "24/7 monitoring & incident response",
          "Annual renewal Rp 10M including maintenance",
          "Dedicated account manager",
          "Regular performance reviews with your team",
        ],
      },
    ],
  },
  max: {
    tagline: "Enterprise platforms with high performance & security.",
    idealFor:
      "Large / enterprise companies handling sensitive data and high traffic with strict security standards.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "Large-scale enterprise platform",
          "Multi-tenant / multi-branch system with separate but centralized data",
          "Real-time executive dashboard (key numbers on one screen)",
          "Internal ERP / CRM integration",
          "Scheduled queues & notifications",
          "White-label (full custom branding)",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "High-availability infrastructure: service keeps running when one server fails",
          "Load balancing & auto-scaling when traffic spikes",
          "End-to-end data encryption (sensitive data never exposed)",
          "OWASP security compliance, enterprise standard",
          "Complete audit logs & activity tracking: who changed what, when",
          "Multi-region backups",
        ],
      },
      {
        title: "Support",
        items: [
          "Maintenance Rp 7.5M/month",
          "Dedicated team & 24/7 monitoring",
          "Annual renewal Rp 15M including maintenance",
          "99.9% uptime SLA with penalties",
          "Internal team training at your office",
        ],
      },
    ],
  },
  "pro-max": {
    tagline: "The largest package, built by a team dedicated to you.",
    idealFor:
      "Corporations & business groups that need a complete digital ecosystem, from corporate sites to internal applications, with a dedicated team.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "Complete digital ecosystem: corporate site, portal, internal applications: more than one platform",
          "Super-app: web + mobile-ready integration",
          "Full enterprise system with modularity: new modules can be added without disrupting existing ones",
          "AI & workflow automation (optional)",
          "Cross-system integration: ERP, CRM, HRIS, partner APIs",
          "Long-term development roadmap",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "Microservices architecture: a failing part is fixed without taking the whole system down",
          "Scalability to millions of users",
          "Enterprise-grade security + compliance audits",
          "Full CI/CD DevOps pipeline: tested releases, rollback when something breaks",
          "Disaster recovery & business continuity plan",
          "Continuous performance tuning",
        ],
      },
      {
        title: "Support",
        items: [
          "Maintenance Rp 10M/month, a team dedicated to you",
          "Dedicated squad: PM, engineers, QA, designers",
          "Annual renewal Rp 20M including maintenance",
          "Highest SLA + monthly strategy meetings",
          "24/7 support including holidays",
        ],
      },
    ],
  },
  x: {
    tagline: "Portals, dashboards, and workflows arranged around how you operate.",
    idealFor:
      "Companies that rely on portals, dashboards, or internal workflows at a scale beyond what a standard website can handle.",
    featureGroups: [
      {
        title: "What gets built",
        items: [
          "A website that serves as your main guide, not just a profile page",
          "Some workflows made tidier: who signs in, what is needed, when information moves",
          "Integration with daily operations where it genuinely helps",
          "Design that follows how people actually use the system, not how it was finished",
          "Content manageable by your internal team without touching code",
        ],
      },
      {
        title: "What you get",
        items: [
          "A tidier presence than the 'just a website' version you have now",
          "Information no longer gets lost between apps and WhatsApp groups",
          "Your internal team has clearer steps when something changes",
          "Clients or partners find what they are looking for more easily",
        ],
      },
      {
        title: "What is not included",
        items: [
          "Not a custom program that needs a dedicated team for a year",
          "Not complex infrastructure for millions of users at once",
          "Not a full ecosystem: this is the step before it",
        ],
      },
    ],
  },
  y: {
    tagline: "A website connected directly to your business systems and operations.",
    idealFor:
      "Companies whose website must merge with internal applications, third-party tools, and automated workflows.",
    featureGroups: [
      {
        title: "What gets built",
        items: [
          "A website connected to the workflows you already run",
          "Several systems or tools connected where it genuinely helps",
          "Content management more mature than the previous version",
          "Campaign pages that connect to systems, not just point to a form",
        ],
      },
      {
        title: "What you get",
        items: [
          "People outside no longer have to guess how to reach you or ask for something",
          "Information from the website can reach the places your team actually uses",
          "Content is easier to manage because it isn't handled casually",
          "Less manual 'connecting channels' between the website and its sides",
        ],
      },
      {
        title: "What is not included",
        items: [
          "Not an unlimited 'merge every system into one' project",
          "Not a full enterprise infrastructure",
          "Not automating everything without a reference point",
        ],
      },
    ],
  },
  z: {
    tagline: "Website, internal apps, and cross-unit workflows in one ecosystem.",
    idealFor:
      "Corporations or business groups running many systems at once that need them connected, built together with a dedicated account manager.",
    featureGroups: [
      {
        title: "What gets built",
        items: [
          "One ecosystem agreed on from the start, not a pile of pages or stacked tools",
          "Website and internal systems on equal footing, not split apart",
          "Cross-unit workflows easier to trace and hand over",
          "Integration with partner or internal systems where genuinely needed",
          "A dedicated account & advisor: one person who understands your business context",
          "An agreed development path: not just 'done when the devs are done'",
        ],
      },
      {
        title: "What you get",
        items: [
          "Fewer 'this doesn't sync with that' cases because it was built within one framework",
          "Information and processes easier to follow for the people who need them",
          "Clearer who owns each part of the process",
          "Higher quality collaboration because there is a shared field, not just promises",
        ],
      },
      {
        title: "What is not included",
        items: [
          "Not a replacement for your internal IT team: this is a system built together then handed over with guidance",
          "Not a one-shot project without direction: there is a roadmap, not just a handover",
          "Not an unlimited scope: scope is agreed before the final price",
        ],
      },
    ],
  },
  beta: {
    tagline: "A first serious system: product website, user accounts, and a core dashboard.",
    idealFor:
      "Startups that just got funding or active users and need a solid first system, not just a landing page.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "Product website & onboarding pages following the user's path",
          "Core dashboard: user data, activity, and key metrics on one screen",
          "User account & login system (signup, sign-in, profile)",
          "Catalog or directory you can manage yourself (products, programs, services)",
          "Simple blog for announcements & updates",
          "Content editable by your team without touching code",
          "Design revisions during production as agreed",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "Technology base ready to grow: nothing thrown away when users increase",
          "Initial integrations: payment, email, or tools your team uses",
          "Multi-language when needed",
          "SSL certificate (https) & basic security: firewall, anti-spam",
          "Analytics & funnel tracking: where users come from and where they drop off",
          "Automatic regular backups",
          "Basic monitoring: disruptions known early",
          "Connected to your startup's domain & email",
        ],
      },
      {
        title: "Support & Operations",
        items: [
          "Needs mapping first: workflows dissected before code is written",
          "Periodic maintenance per the agreed period",
          "System management guide for small teams",
          "WhatsApp support during business hours",
          "Small adjustments during production as agreed",
        ],
      },
    ],
  },
  theta: {
    tagline: "A connected digital product: website, apps, and team automation.",
    idealFor:
      "Startups whose product is already used by many people and need a website, apps, and workflows connected to each other.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "Product website, blog, and campaign pages connected to the app",
          "Product & business dashboard with real-time metrics",
          "Multi-role team access: admin, editors, and operators with different permissions",
          "User account system with onboarding flow and notifications",
          "Catalog, programs, or content managed across teams",
          "Design revisions during production as agreed",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "Payment gateway & third-party tool integrations (WhatsApp API, Google Workspace, etc.)",
          "Multi-language when needed",
          "Performance optimized: stays fast as users grow",
          "SSL certificate (https), firewall & anti-spam",
          "Analytics, funnels, and conversion tracking",
          "Automatic weekly backups",
          "Uptime & performance monitoring: disruptions known early",
        ],
      },
      {
        title: "Support & Operations",
        items: [
          "Maintenance & content updates for reasonable needs",
          "Priority technical support via WhatsApp",
          "Guide & short training for your team",
          "Adjustments for changing needs during production",
        ],
      },
    ],
  },
  alpha: {
    tagline: "A startup platform ready to scale: many modules, teams, and integrations under one control.",
    idealFor:
      "Startups moving up a class: a platform with many modules, team roles, and cross-system integrations.",
    featureGroups: [
      {
        title: "Design & Pages",
        items: [
          "Multi-module platform: user portal, admin, and operations in one ecosystem",
          "Executive & operational dashboards with real-time data",
          "Role & permission system for each team: who may see and change what",
          "Campaign & program pages you can launch regularly",
          "Catalog & content across teams, manageable yourself",
          "Blog & article pages for announcements",
          "Design revisions during production as agreed",
        ],
      },
      {
        title: "Technical & Performance",
        items: [
          "Architecture ready to scale: grows without a rebuild from scratch",
          "Cross-system integrations: payment, logistics, ERP & partner APIs",
          "Multi-language when needed",
          "Data encryption & periodic security audits",
          "Automatic daily backups with recovery procedures",
          "24/7 uptime & performance monitoring",
          "Tested releases: changes don't take down what already works",
        ],
      },
      {
        title: "Support & Operations",
        items: [
          "Maintenance & content updates as needed",
          "Priority technical support with periodic reviews together with your team",
          "Internal team training so you can manage it yourself",
          "Adjustments for changing needs during production",
        ],
      },
    ],
  },
};

/** Terjemahkan satu paket; kembalikan paket yang sama bila tidak ada terjemahan. */
export function localizePlan(locale: Locale, plan: Plan): Plan {
  if (locale === "id") return plan;
  const t = en[plan.id];
  if (!t) return plan;
  return { ...plan, tagline: t.tagline, idealFor: t.idealFor, featureGroups: t.featureGroups };
}

/** Terjemahkan daftar paket (urutan dipertahankan). */
export function localizePlans(locale: Locale, plans: Plan[]): Plan[] {
  if (locale === "id") return plans;
  return plans.map((p) => localizePlan(locale, p));
}
