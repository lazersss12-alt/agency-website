import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function CTASection({
  title,
  description,
  ctaLabel = "Automate My Workflow",
  ctaHref = "/contact",
}: {
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 sm:flex-row sm:items-center sm:p-10 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="max-w-xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-balance text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            )}
          </div>
          <Link
            href={ctaHref}
            className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white outline-none transition-colors hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            {ctaLabel}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
