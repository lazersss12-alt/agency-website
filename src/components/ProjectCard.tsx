import Link from "next/link";
import type { Project } from "@/lib/projects-data";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import { ArrowRightIcon } from "@/components/icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
          {project.status}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-600">
          {project.category}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {project.title}
      </h3>
      <p className="mt-1 text-xs font-medium text-zinc-400 dark:text-zinc-600">
        {project.demoLabel}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.shortDescription}
      </p>

      <div className="mt-6 overflow-x-auto">
        <WorkflowVisualization steps={project.workflow} variant="compact" />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        href={`/work/${project.slug}`}
        className="group mt-6 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-accent outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        View case study
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
