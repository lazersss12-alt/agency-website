export type Project = {
  slug: "lead-qualification" | "customer-support";
  title: string;
  category: string;
  status: string;
  demoLabel: string;
  shortDescription: string;
  workflow: string[];
  tech: string[];
};

// Both projects are self-built demonstration systems, not client work.
// See each case study page for the "self-built automation demo" labeling.
export const PROJECTS: Project[] = [
  {
    slug: "lead-qualification",
    title: "AI Lead Qualification System",
    category: "Lead Qualification",
    status: "Working Demo",
    demoLabel: "Self-built automation demo",
    shortDescription:
      "An AI-powered lead processing system that receives enquiries, evaluates buying intent, assigns a qualification score and stores prioritized leads automatically.",
    workflow: ["Lead Form", "n8n", "OpenRouter", "AI Qualification", "Supabase"],
    tech: ["Next.js", "n8n", "OpenRouter", "Supabase"],
  },
  {
    slug: "customer-support",
    title: "AI Customer Support Automation",
    category: "Customer Support",
    status: "Working Demo",
    demoLabel: "Self-built automation demo",
    shortDescription:
      "An AI support workflow that answers knowledge-base questions, maintains conversation context and escalates requests that require human intervention.",
    workflow: ["Customer", "Support Chat", "n8n", "Knowledge Base", "AI", "Response / Escalation", "Supabase"],
    tech: ["Next.js", "n8n", "OpenRouter", "Supabase"],
  },
];

export function getProject(slug: Project["slug"]) {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project slug: ${slug}`);
  return project;
}
