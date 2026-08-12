import Link from "next/link";
import type { Service } from "@/lib/services-data";
import { ServiceIconGlyph, ArrowRightIcon } from "@/components/icons";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 outline-none transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
        <ServiceIconGlyph icon={service.icon} className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-base font-semibold text-zinc-900 dark:text-zinc-50">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {service.summary}
      </p>
      <p className="mt-3 text-xs leading-relaxed text-zinc-400 dark:text-zinc-500">
        {service.example}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Learn more
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
