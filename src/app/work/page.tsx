import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { PROJECTS } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Self-built AI automation demos: an AI lead qualification system and an AI customer support automation workflow, both built end-to-end with n8n, OpenRouter, and Supabase.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Work"
            title="Self-built automation demos."
            description="These are working systems we built ourselves — not client engagements — to demonstrate how AI lead qualification and AI customer support automation function end-to-end, from trigger to structured AI decision to database."
          />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want something built for your own process?"
        description="These demos show the pattern — a real engagement is scoped around your specific workflow."
      />
    </>
  );
}
