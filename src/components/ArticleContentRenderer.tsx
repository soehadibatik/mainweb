import React from "react";
import Link from "next/link";
import { localizePath, type Locale } from "@/lib/i18n/config";

/**
 * Format inline text supporting:
 * - [Link Label](/url)
 * - **Bold Text**
 */
export function renderFormattedInline(text: string, lang: Locale): React.ReactNode[] {
  // Split on **bold** or [link](url)
  const tokenRegex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const tokens = text.split(tokenRegex);

  return tokens.map((token, i) => {
    // Check if bold: **text**
    if (token.startsWith("**") && token.endsWith("**") && token.length >= 4) {
      const boldContent = token.slice(2, -2);
      return (
        <strong key={i} className="font-semibold text-ink-950">
          {renderFormattedInline(boldContent, lang)}
        </strong>
      );
    }

    // Check if link: [label](url)
    const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const label = linkMatch[1];
      const href = linkMatch[2];
      const isInternal = href.startsWith("/");
      const targetHref = isInternal ? localizePath(lang, href) : href;

      return (
        <Link
          key={i}
          href={targetHref}
          className="text-brand-700 underline font-medium hover:text-brand-900 transition-colors"
        >
          {label}
        </Link>
      );
    }

    // Regular text
    return token;
  });
}

/**
 * Render an array of strings as well-formatted article content.
 * Automatically groups:
 * - Ordered list items ("1. ", "2. ", etc.) into <ol> with custom styling
 * - Bullet list items ("• ", "- ") into <ul> with custom bullet badges
 * - Normal text into clean typography <p>
 */
export function ArticleContentRenderer({
  paragraphs,
  lang,
}: {
  paragraphs: string[];
  lang: Locale;
}) {
  type Block =
    | { type: "paragraph"; text: string }
    | { type: "ordered"; items: string[] }
    | { type: "bullet"; items: string[] };

  const blocks: Block[] = [];
  let currentBlock: Block | null = null;

  for (const p of paragraphs) {
    const trimmed = p.trim();

    // Check ordered list (e.g. "1. ", "2. ")
    const orderedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (orderedMatch) {
      if (currentBlock && currentBlock.type === "ordered") {
        currentBlock.items.push(orderedMatch[2]);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: "ordered", items: [orderedMatch[2]] };
      }
      continue;
    }

    // Check bullet list (e.g. "• ", "- ")
    const bulletMatch = trimmed.match(/^[•\-]\s+(.*)$/);
    if (bulletMatch) {
      if (currentBlock && currentBlock.type === "bullet") {
        currentBlock.items.push(bulletMatch[1]);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: "bullet", items: [bulletMatch[1]] };
      }
      continue;
    }

    // Normal paragraph
    if (currentBlock) {
      blocks.push(currentBlock);
      currentBlock = null;
    }
    blocks.push({ type: "paragraph", text: trimmed });
  }

  if (currentBlock) {
    blocks.push(currentBlock);
  }

  return (
    <div className="space-y-4">
      {blocks.map((block, bIdx) => {
        if (block.type === "paragraph") {
          return (
            <p
              key={bIdx}
              className="text-base sm:text-lg text-ink-900/85 leading-relaxed"
            >
              {renderFormattedInline(block.text, lang)}
            </p>
          );
        }

        if (block.type === "ordered") {
          return (
            <ol key={bIdx} className="my-4 space-y-3 pl-1 sm:pl-2">
              {block.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-start gap-3.5 text-base sm:text-lg text-ink-900/85 leading-relaxed"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100/70 font-mono text-xs font-bold text-brand-700 mt-0.5">
                    {itemIdx + 1}
                  </span>
                  <div className="flex-1">
                    {renderFormattedInline(item, lang)}
                  </div>
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "bullet") {
          return (
            <ul key={bIdx} className="my-4 space-y-2.5 pl-1 sm:pl-2">
              {block.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-start gap-3 text-base sm:text-lg text-ink-900/85 leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"
                  />
                  <div className="flex-1">
                    {renderFormattedInline(item, lang)}
                  </div>
                </li>
              ))}
            </ul>
          );
        }

        return null;
      })}
    </div>
  );
}
