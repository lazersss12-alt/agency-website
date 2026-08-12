import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import CTASection from "@/components/CTASection";
import { ServiceIconGlyph, CheckIcon } from "@/components/icons";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI lead qualification, AI customer support automation, CRM & sales automation, business workflow automation, and custom AI tools.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Business automation built around how your team actually works."
            description="Each service below is a starting point, not a fixed package — every automation is scoped to the specific process it replaces."
          />
        </div>
      </section>

      {SERVICES.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-20 ${i < SERVICES.length - 1 ? "border-b border-zinc-200 dark:border-zinc-800" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                  <ServiceIconGlyph icon={service.icon} className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
                  {service.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.summary}
                </p>

                <div className="mt-6 overflow-x-auto">
                  <WorkflowVisualization steps={service.workflow} variant="compact" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                    The problem
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {service.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                    The solution
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {service.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                    How it works
                  </h3>
                  <ol className="mt-2 flex flex-col gap-2">
                    {service.howItWorks.map((step, idx) => (
                      <li key={step} className="flex gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="flex-shrink-0 font-semibold text-accent">{idx + 1}.</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                    Example use cases
                  </h3>
                  <ul className="mt-2 flex flex-col gap-2">
                    {service.useCases.map((useCase) => (
                      <li key={useCase} className="flex gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span className="leading-relaxed">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Not sure which service fits your process?"
        description="Describe what your team spends too much time on — we'll help identify where automation actually applies."
      />
    </>
  );
}
