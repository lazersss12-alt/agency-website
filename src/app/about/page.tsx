import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME} — an AI automation engineer and full-stack developer building AI workflow automation systems.`,
};

const CAPABILITIES = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Supabase",
  "REST & third-party APIs",
  "n8n workflow automation",
  "AI / LLM integrations",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading eyebrow="About" title="AI Automation Engineer & Full-Stack Developer" />

          <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              {SITE_NAME} is built around a straightforward idea: most businesses have repetitive
              processes — qualifying leads, answering the same support questions, moving data
              between tools — that don&apos;t need a person doing them by hand every time. The
              work is to design and build the automation that removes that bottleneck, using AI
              where it genuinely helps and plain workflow logic everywhere else.
            </p>
            <p>
              That means connecting AI models, APIs, databases, and the tools a business already
              uses into a system that runs on its own — with structured, predictable behavior
              rather than a black box. The two projects in{" "}
              <a href="/work" className="font-medium text-accent underline underline-offset-4">
                Work
              </a>{" "}
              were built end-to-end this way, as self-built demonstrations of the approach.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            What I work with
          </h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {CAPABILITIES.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a process worth automating?"
        description="Tell us what it looks like today and we'll figure out where automation fits."
      />
    </>
  );
}
