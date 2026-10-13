import type { CaseStudy } from "@/lib/case-studies";
import type { Locale } from "./config";

/**
 * Terjemahan narasi studi kasus. Nama klien, domain, logo, dan planId tidak
 * diterjemahkan (identitas + referensi data). Kunci = slug; tanpa kunci,
 * teks Indonesia dipakai apa adanya.
 */
export type CaseStudyText = Pick<
  CaseStudy,
  "category" | "headline" | "summary" | "intro" | "scope" | "planReason"
>;

const en: Record<string, CaseStudyText> = {
  "cisc-solo-raya": {
    category: "Community website",
    headline: "A community website with a merchandise store and WhatsApp checkout",
    summary:
      "A Chelsea FC Solo Raya supporters' community needed a site that could sell member shirts without a payment gateway. The solution: a product catalog with variants and checkout straight to the admin via WhatsApp.",
    intro: [
      "CISC Solo Raya is a Chelsea FC supporters' community for the Solo Raya area. Its activities are regular (watch parties, gatherings, membership), and one of its main needs is selling member shirts: a main edition, a blue edition, and a white edition, complete with a size chart.",
      "The catch: the community has no legal entity for a payment gateway. Ordering had to keep running through the channel members already use every day: WhatsApp to the admin.",
    ],
    scope: [
      {
        title: "Merchandise catalog with variants",
        items: [
          "Product page per shirt edition (main, blue, white) with photo galleries",
          "Size and long/short sleeve options before checkout",
          "Size chart available directly on the product page",
          "Variant prices calculated automatically (long sleeves and sizes above XL carry a price difference)",
        ],
      },
      {
        title: "Checkout without a payment gateway",
        items: [
          "Order summary assembled on the site, payment confirmed to the admin",
          "Checkout via WhatsApp with order details pre-filled",
          "Member status recorded in the ordering flow",
        ],
      },
    ],
    planReason:
      "An ordering flow with product variants and pricing logic falls into custom systems, not just a company profile.",
  },
  "batik-soehadi": {
    category: "B2B product catalog",
    headline: "A product catalog and content hub for a national batik cloth producer",
    summary:
      "Indonesian batik cloth producers and suppliers need one place that explains the products (handwritten, stamped, printed), serves retail up to B2B tenders, and educates the market through content.",
    intro: [
      "Batik Soehadi produces and supplies batik cloth in Indonesia: hand-drawn batik, stamped batik, printed batik, and combinations, for retail, wholesale, custom, uniforms, up to B2B and tenders.",
      "Their buyers arrive with technical questions: which motif fits, what material is used, how much per meter. The answers to those questions became the foundation of the site.",
    ],
    scope: [
      {
        title: "Product structure separating every line",
        items: [
          "Separate pages for batik cloth, producers, wholesale, convection, uniforms, and custom batik",
          "Each line gets its own target page so it is easy to find in search engines",
        ],
      },
      {
        title: "Calculator and price list",
        items: [
          "Batik cloth price list per meter for every material",
          "Price estimate calculator matching the buyer's needs",
        ],
      },
      {
        title: "Batik knowledge hub",
        items: [
          "Content on motifs, cloth materials, production techniques, and regional batik",
          "Company page: history, production process, commitments",
        ],
      },
    ],
    planReason:
      "A multi-line catalog plus an active blog with many content pages is the classic profile of the Intermediate package.",
  },
  "bikin-batik": {
    category: "Custom production website",
    headline: "A custom batik production website from a factory in Laweyan, Solo",
    summary:
      "A batik factory in Laweyan serves printed, stamped, hand-drawn cloth and uniform orders for institutions, schools, and companies. Its site explains each production method and makes quoting via WhatsApp easy.",
    intro: [
      "Bikin Batik is a custom batik production service from Laweyan, Solo, shipping across Indonesia. Its customers vary: institutions needing complex logo motifs, schools ordering uniforms, up to companies with corporate orders.",
      "Every production method has its own character. Printed batik suits detailed motifs and color gradations; stamped and hand-drawn batik carry their own value. The site's job is to explain those differences before a prospective buyer makes contact.",
    ],
    scope: [
      {
        title: "Production methods explained page by page",
        items: [
          "Printed batik cloth for detailed motifs, color gradations, and institutional logos",
          "Practical technical info right in the catalog: cloth width, starting price per meter",
          "Batik uniform pages for institutions, schools, and companies",
        ],
      },
      {
        title: "Ordering straight to the factory",
        items: [
          "Production contact via WhatsApp from every product page",
          "The factory's location in Laweyan, Solo, shown as its identity",
        ],
      },
    ],
    planReason:
      "A product catalog with a page per production method and no online transactions is well served by the Intermediate CMS.",
  },
  "daster-murah": {
    category: "Wholesale online store",
    headline: "A wholesale dress store with per-kodi pricing and minimum orders",
    summary:
      "A dress wholesaler straight from the factory sells by its own rules: prices per kodi (20 pcs), minimum order per type, free cargo shipping above a certain quantity. The site states all of those rules clearly.",
    intro: [
      "Daster Murah is a factory-direct dress wholesale center: rayon, jumbo, nursing, and batik dresses, shipped across Indonesia.",
      "Wholesale has different pricing logic than retail: prices are counted per kodi (20 pcs), there is a minimum order per type, and shipping costs differ for large volumes. The site must show these rules as they are so buyers are not misled before ordering.",
    ],
    scope: [
      {
        title: "A catalog with honest wholesale rules",
        items: [
          "Per-kodi pricing and per-pcs price conversion shown side by side",
          "Minimum order per type (1 kodi = 20 pcs) written on the product",
          "Free cargo shipping program for large orders announced on the home page",
          "Best Seller labels marking the best-selling products",
        ],
      },
      {
        title: "Orders through the sales channel that already works",
        items: [
          "Orders forwarded to the admin following the existing wholesale flow",
          "Shipping information across Indonesia available without logging in",
        ],
      },
    ],
    planReason:
      "A large catalog with layered pricing rules and regular product updates fits Intermediate and its CMS.",
  },
  "bahan-kain": {
    category: "Content portal + catalog",
    headline: "A textile education portal with a material catalog for the creative industry",
    summary:
      "BahanKain.id positions itself as Indonesia's fabric material center: a product catalog on one side, regularly published fashion and textile education content on the other.",
    intro: [
      "BahanKain.id supplies fabric, yarn, textiles, and accessories for the textile, garment, and craft industries. Some buyers come because they need material; some come looking for knowledge.",
      "Because of that, the site was built as two engines at once: a catalog for those ready to buy, and educational content published almost every day for those still researching. That content is also what draws new visitors from search engines.",
    ],
    scope: [
      {
        title: "Regular multi-rubric content publishing",
        items: [
          "Rubrics: News & Event, Tips & Trick, Culture, Knowledge, and Education",
          "Articles published almost every day on a consistent schedule",
          "Trend coverage (such as New York Fashion Week) alongside technical fabric content",
        ],
      },
      {
        title: "Catalog and content ranking",
        items: [
          "Catalog of materials, yarn, and accessories per category",
          "Trending chart showing the most popular articles",
        ],
      },
    ],
    planReason:
      "A multi-author blog publishing daily demands a full CMS, categories, and performance: Intermediate territory.",
  },
  "monitoring-batik": {
    category: "Internal system (back office)",
    headline: "An internal back office for transactions, invoices, and suppliers",
    summary:
      "Behind the Batik Soehadi ecosystem there is an internal system managing transactions, invoices, purchase orders, and suppliers, with per-role logins. This is example work on the side customers never see.",
    intro: [
      "Not every website we build is a public site. Batik Soehadi runs many B2B transactions, and its operations need their own recording system.",
      "Monitoring Batik is that back office: the place where the team manages transactions, invoices, purchase orders, and supplier data. Its public page is just one login door; the rest is the team's daily working application.",
    ],
    scope: [
      {
        title: "Internal application with authentication",
        items: [
          "Login separate from the public site",
          "Modules for transactions, invoices, purchase orders, and suppliers",
          "Monitoring the website ecosystem's activity from one place",
        ],
      },
      {
        title: "Built for daily users",
        items: [
          "Workflows follow real business processes, not just pretty screens",
          "Security and access rights are a priority because it holds transaction data",
        ],
      },
    ],
    planReason:
      "An internal system with logins, transaction modules, and a REST API falls into Proficient.",
  },
};

/** Terjemahkan satu studi kasus; identitas (nama/domain/planId) tetap. */
export function localizeCaseStudy(locale: Locale, study: CaseStudy): CaseStudy {
  if (locale === "id") return study;
  const t = en[study.slug];
  if (!t) return study;
  return { ...study, ...t };
}

/** Terjemahkan daftar studi kasus (urutan dipertahankan). */
export function localizeCaseStudies(locale: Locale, list: CaseStudy[]): CaseStudy[] {
  if (locale === "id") return list;
  return list.map((s) => localizeCaseStudy(locale, s));
}
