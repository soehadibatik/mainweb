import { clients as seedClients, featured as seedFeatured, groups as seedGroups, type Client } from "@/lib/clients";
import { comparisonSections as seedComparison, type CompareSection } from "@/lib/comparison";
import { plans as seedPlans, type Plan } from "./plans";
import type { Locale } from "@/lib/i18n/config";

/**
 * Sumber data katalog: back office (bo-mainweb) lewat /api/public/site.
 * Bila BO belum terjangkau — saat local dev, build offline, atau sedang
 * down — situs tetap memakai seed lokal supaya tidak pernah gagal render.
 *
 * Atur lewat env BO_URL (contoh: https://bo.mainweb.id).
 */
export const BO_URL = process.env.BO_URL ?? "http://localhost:3111";

const REVALIDATE = 60;

type RemoteClient = Client & { group?: "unggulan" | "ekosistem" | "lainnya" };

type Payload = {
  plans?: Plan[];
  comparison?: CompareSection[];
  clients?: RemoteClient[];
};

let warned = false;

async function load(): Promise<Payload | null> {
  try {
    const res = await fetch(`${BO_URL}/api/public/site`, { next: { revalidate: REVALIDATE } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as Payload;
  } catch {
    if (!warned) {
      warned = true;
      console.warn(`[catalog] BO tidak terjangkau (${BO_URL}) — memakai data lokal.`);
    }
    return null;
  }
}

export async function getPlans(): Promise<Plan[]> {
  const remote = (await load())?.plans;
  if (!remote || remote.length === 0) return seedPlans;

  const byId = new Map(remote.map((p) => [p.id, p]));
  const merged: Plan[] = [];
  for (const seed of seedPlans) {
    merged.push(byId.get(seed.id) ?? seed);
  }
  const extra = remote.filter((p) => !seedPlans.some((s) => s.id === p.id));
  return merged.concat(extra);
}

export async function getPlan(id: string): Promise<Plan | undefined> {
  return (await getPlans()).find((p) => p.id === id);
}

export async function getComparison(): Promise<CompareSection[]> {
  const remote = (await load())?.comparison;
  if (!remote || remote.length === 0) return seedComparison;
  const byId = new Map(remote.map((s) => [s.title, s]));
  const merged: CompareSection[] = [];
  for (const seed of seedComparison) {
    merged.push(byId.get(seed.title) ?? seed);
  }
  const extra = remote.filter((s) => !seedComparison.some((x) => x.title === s.title));
  return merged.concat(extra);
}

const GROUP_LABEL: Record<Locale, Record<NonNullable<RemoteClient["group"]>, string>> = {
  id: {
    unggulan: "Unggulan",
    ekosistem: "Ekosistem batik",
    lainnya: "Proyek lain",
  },
  en: {
    unggulan: "Featured",
    ekosistem: "Batik ecosystem",
    lainnya: "Other projects",
  },
};

/** Logo dihosting BO (URL absolut) tidak bisa lewat next/image optimizer. */
export const isRemoteLogo = (logo: string) => /^https?:\/\//.test(logo);

export async function getClients(
  lang: Locale = "id",
): Promise<{
  clients: Client[];
  featured: Client[];
  groups: { id: string; label: string; items: Client[] }[];
}> {
  const labels = GROUP_LABEL[lang];
  const remote = (await load())?.clients;
  if (!remote || remote.length === 0) {
    return {
      clients: seedClients,
      featured: seedFeatured,
      groups: seedGroups.map((g) => ({
        ...g,
        label: labels[g.id as NonNullable<RemoteClient["group"]>] ?? g.label,
      })),
    };
  }

  const bare = remote.map(({ group: _group, ...client }) => {
    void _group;
    return client;
  }) as Client[];

  const pick = (id: RemoteClient["group"]) =>
    bare.filter((_, i) => (remote[i].group ?? fallbackGroup(i)) === id);

  return {
    clients: bare,
    featured: pick("unggulan"),
    groups: (["unggulan", "ekosistem", "lainnya"] as const)
      .map((id) => ({ id, label: labels[id], items: pick(id) }))
      .filter((g) => g.items.length > 0),
  };
}

const fallbackGroup = (i: number): NonNullable<RemoteClient["group"]> =>
  i < 6 ? "unggulan" : i < 28 ? "ekosistem" : "lainnya";
