import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import ProcessComparison from "@/components/ProcessComparison";
import SystemMap from "@/components/SystemMap";
import { CheckIcon } from "@/components/icons";
import { SERVICES } from "@/lib/services-data";
import { PROJECTS } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "AI Automation Agency for Lead Qualification & Customer Support",
  description:
    "We design AI workflow automation systems for business automation — AI lead qualification, AI customer support automation, and business process automation.",
};

const PROCESS_STEPS = [
  { number: "01", title: "Map", description: "Understand the business process." },
  { number: "02", title: "Design", description: "Identify automation opportunities." },
  { number: "03", title: "Build", description: "Connect AI, workflows, APIs and databases." },
  { number: "04", title: "Deploy", description: "Test and integrate." },
  { number: "05", title: "Optimize", description: "Monitor and improve." },
];

const DIFFERENTIATORS = [
  "Engineering-first",
  "Business-process focused",
  "AI + automation",
  "Custom workflows",
  "API integrations",
  "Database-driven systems",
  "Transparent architecture",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Problem */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="The problem"
              title="Most businesses don't need more software. They need their software to work together."
              description="A manual process routes a lead through an inbox, a spreadsheet, and a CRM before anyone follows up. An automated one gets there in a fraction of the steps — with AI making the decision instead of a person copying data."
              align="center"
            />
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <ProcessComparison />
          </Reveal>
        </div>
      </section>

      {/* What we automate */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="What we automate"
              title="An interactive map of where automation applies."
              description="Select a category to see the specific workflows underneath it."
            />
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <SystemMap />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="AI workflow automation, applied to real business processes."
              description="Five areas where AI automation removes repetitive work — from the first enquiry to ongoing operations."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Featured work"
              title="Self-built automation demos."
              description="Two working systems we built ourselves to demonstrate how AI lead qualification and AI customer support automation actually function end-to-end — not client projects, and clearly labeled as demos."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20 border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionHeading eyebrow="Process" title="How a system gets built" align="center" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <div>
                  <p className="text-sm font-semibold text-accent">{step.number}</p>
                  <h3 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why AutomateIQ */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionHeading eyebrow="Why AutomateIQ" title="Truthful differentiators, not sales copy" align="center" />
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <CheckIcon className="h-3.5 w-3.5 flex-shrink-0 text-accent" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-lg text-center text-xs text-zinc-400 dark:text-zinc-600">
            No fabricated client counts, revenue figures, or satisfaction scores — see{" "}
            <a href="/work" className="underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-400">
              Systems
            </a>{" "}
            for the real, self-built projects this is based on.
          </p>
        </div>
      </section>

      <CTASection
        title="Have a repetitive process? Let's automate it."
        description="Tell us what your team spends too much time doing. We'll identify where automation can help."
        ctaLabel="Automate My Workflow"
        ctaHref="/contact"
      />
    </>
  );
}
