import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import CTASection from "@/components/CTASection";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { getProject } from "@/lib/projects-data";

const project = getProject("lead-qualification");

export const metadata: Metadata = {
  title: project.title,
  description: project.shortDescription,
};

const ARCHITECTURE = ["Lead Form", "n8n Webhook", "OpenRouter", "Structured Qualification", "Supabase"];

export default function LeadQualificationCaseStudy() {
  return (
    <>
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-zinc-500 outline-none hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-accent dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <ArrowRightIcon className="h-3.5 w-3.5 rotate-180" />
            Back to work
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
              {project.status}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-600">
              {project.category}
            </span>
          </div>

          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            {project.title}
          </h1>
          <p className="mt-2 text-sm font-medium text-zinc-400 dark:text-zinc-600">
            {project.demoLabel} — not a client project.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            An AI-powered lead processing system that receives enquiries, evaluates buying
            intent, assigns a qualification score and stores prioritized leads automatically.
          </p>
        </div>
      </section>

      {/* Overview / Problem / Solution */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                Overview
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                A public lead form submits an enquiry that is qualified by an AI model in real
                time and stored in a database, visible on an internal dashboard.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                Problem
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                Every inbound enquiry looks the same until someone reads it — high-intent leads
                can sit behind low-intent ones with no way to tell them apart at a glance.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                Solution
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                An AI model scores buying intent against defined criteria the moment an enquiry
                arrives, before a human ever opens it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading eyebrow="Architecture" title="How the system is wired together" />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <WorkflowVisualization steps={ARCHITECTURE} />
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading eyebrow="Workflow" title="What happens on submission" />
          <ol className="mt-8 flex flex-col gap-4">
            {[
              "The lead form submits name, email, company, and a message to an n8n webhook.",
              "n8n sends the enquiry to an OpenRouter-hosted AI model with qualification criteria.",
              "The model returns a structured qualification — label, score, and reason.",
              "The lead and its qualification are stored in Supabase, visible on an internal dashboard.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AI Decision Logic */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="AI decision logic"
            title="A structured qualification, not a guess"
            description="The model returns a fixed schema — a label (hot, warm, cold), a numeric score, and a one-sentence reason — so the result is consistent and usable by the dashboard, independent of the exact wording the model produces."
          />

          <div className="mt-8 max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
              Demonstration data
            </p>
            <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-red-700 dark:bg-red-950/60 dark:text-red-300">
              Hot
            </span>
            <p className="mt-3 text-2xl font-semibold tabular-nums text-zinc-900 dark:text-zinc-50">
              Score: 88
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Reason: Strong buying intent and clear requirement.
            </p>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Technology
          </h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading eyebrow="Testing" title="Verified end-to-end" />
          <ul className="mt-6 flex flex-col gap-3">
            {[
              "Form submission through to a stored, qualified lead",
              "Structured output validated against the qualification schema on every response",
              "Dashboard filtering and stats checked against seeded and live data",
            ].map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Demo */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Demo"
            title="Self-built demonstration, not a live client system"
            description="This project is a working prototype built to demonstrate the pattern end-to-end. All example data shown above is demonstration data, not a real enquiry."
          />
        </div>
      </section>

      <CTASection title="Build something similar" ctaLabel="Build something similar" ctaHref="/contact" />
    </>
  );
}
