import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import CTASection from "@/components/CTASection";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { getProject } from "@/lib/projects-data";

const project = getProject("customer-support");

export const metadata: Metadata = {
  title: project.title,
  description: project.shortDescription,
};

const ARCHITECTURE = [
  "Customer",
  "Chat",
  "n8n",
  "Knowledge Base",
  "OpenRouter",
  "Response / Escalation",
  "Supabase",
];

const KB_CATEGORIES = [
  "Company information",
  "Shipping",
  "Order processing",
  "Returns",
  "Refunds",
  "Warranty",
  "Product information",
  "Contact / support",
];

const STATUS_EXAMPLES = [
  {
    label: "Resolved",
    style: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3–5 business days.",
  },
  {
    label: "Needs Human",
    style: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
    question: "I want a refund outside the normal return period.",
    answer: "This request has been flagged for a support representative.",
  },
  {
    label: "Unknown",
    style: "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300",
    question: "Can you guarantee delivery tomorrow?",
    answer: "The knowledge base doesn't cover a delivery guarantee — flagged rather than guessed.",
  },
];

export default function CustomerSupportCaseStudy() {
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
            An AI support workflow that answers knowledge-base questions, maintains conversation
            context and escalates requests that require human intervention.
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
                A customer-facing chat answers questions from a fixed knowledge base and hands
                off to a person when it genuinely can&apos;t help.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                Problem
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                Most support volume is the same handful of questions, but a bot that guesses at
                policy when it doesn&apos;t know the answer is worse than no bot at all.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                Solution
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                The AI answers only from a defined knowledge base and returns a structured
                decision — resolved, needs human, or unknown — on every reply.
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

      {/* Knowledge base */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Knowledge base"
            title="A fixed, auditable source of truth"
            description="The AI can only answer from these categories — nothing is invented outside them. No vector database or embeddings; a direct lookup is deterministic and easy to audit at this scale."
          />
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {KB_CATEGORIES.map((cat) => (
              <div
                key={cat}
                className="rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-center text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Decision Logic */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="AI decision logic"
            title="Every reply is a structured decision"
            description="The model returns an answer plus a status, a confidence score, and — when relevant — a reason, so the outcome is consistent regardless of how the question was phrased."
          />
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Demonstration data
          </p>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATUS_EXAMPLES.map((example) => (
              <div
                key={example.label}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${example.style}`}
                >
                  {example.label}
                </span>
                <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  &ldquo;{example.question}&rdquo;
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {example.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human escalation */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            eyebrow="Human escalation"
            title="Knowing when to hand off"
            description="When the AI determines a request needs a person — a policy exception, a complaint — the conversation is flagged, stored, and surfaced on an internal dashboard for a representative to pick up. No WhatsApp, SMS, Slack, or ticketing integration in this version; escalation stays inside the system by design."
          />
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
              "FAQ, shipping, and return questions resolving correctly from the knowledge base",
              "A refund-exception request correctly escalating to needs_human",
              "An out-of-scope question correctly returning unknown instead of a guess",
              "Empty message submissions rejected with a validation error",
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
            title="Self-built demonstration, not a live support system"
            description="This project is a working prototype for a fictional company, built to demonstrate the pattern end-to-end. All example conversations shown above are demonstration data."
          />
        </div>
      </section>

      <CTASection title="Build something similar" ctaLabel="Build something similar" ctaHref="/contact" />
    </>
  );
}
