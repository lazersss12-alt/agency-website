import Link from "next/link";
import ControlRoomDiagram from "@/components/ControlRoomDiagram";
import { ArrowRightIcon } from "@/components/icons";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            AI Automation Systems
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            Turn Repetitive Work Into Systems That Run.
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            We design and build AI-powered workflows that qualify leads, streamline customer
            support, connect business tools and remove repetitive manual work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={PRIMARY_CTA.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white outline-none transition-colors hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              {PRIMARY_CTA.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href={SECONDARY_CTA.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 outline-none transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              {SECONDARY_CTA.label}
            </Link>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:mt-20 sm:p-10 dark:border-zinc-800 dark:bg-zinc-950">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Automation Control Room
          </p>
          <ControlRoomDiagram />
        </div>
      </div>
    </section>
  );
}
