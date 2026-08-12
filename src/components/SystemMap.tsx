"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";

const CATEGORIES = [
  { key: "leads", label: "Leads", items: ["Qualification", "Routing", "Follow-up", "CRM sync"] },
  {
    key: "support",
    label: "Support",
    items: ["FAQ automation", "Knowledge-base AI", "Escalation", "Conversation history"],
  },
  { key: "sales", label: "Sales", items: ["Lead enrichment", "Follow-ups", "Proposals", "Pipeline updates"] },
  { key: "operations", label: "Operations", items: ["Task creation", "Notifications", "Approvals", "Reporting"] },
  { key: "data", label: "Data", items: ["Synchronization", "Transformation", "Reporting", "Database workflows"] },
] as const;

export default function SystemMap() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]["key"]>("leads");
  const activeCategory = CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0];

  return (
    <div>
      <div role="tablist" aria-label="Automation categories" className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = cat.key === active;
          return (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`system-panel-${cat.key}`}
              onClick={() => setActive(cat.key)}
              className={`rounded-full border px-4 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-zinc-700"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        id={`system-panel-${activeCategory.key}`}
        role="tabpanel"
        className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {activeCategory.items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          >
            <CheckIcon className="h-3.5 w-3.5 flex-shrink-0 text-accent" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
