"use client";

import { ArrowRightIcon } from "@/components/icons";

const nodeClass =
  "rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:-translate-y-0.5 focus-visible:border-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300";

const coreNodeClass =
  "rounded-lg border border-accent bg-accent px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-accent-foreground shadow-md transition-transform duration-300 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

function Node({ label, emphasis = false }: { label: string; emphasis?: boolean }) {
  return (
    <div tabIndex={0} className={emphasis ? coreNodeClass : nodeClass}>
      {label}
    </div>
  );
}

// A single node above splits into three below it (or, read the other way,
// three nodes below converge into the single node above — the line shape is
// identical either way since there are no arrowheads). x = 50/150/250 lines
// up with the center of a 3-equal-column grid rendered at the same width.
function BranchLines() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 30"
      preserveAspectRatio="none"
      className="h-7 w-full text-zinc-300 dark:text-zinc-700"
    >
      <path d="M150,0 V6 M50,6 H250 M50,6 V18 M150,6 V18 M250,6 V18" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// A single straight connector between two centered, single nodes.
function StraightLine() {
  return <div className="mx-auto h-6 w-px bg-zinc-300 dark:bg-zinc-700" />;
}

export default function ControlRoomDiagram() {
  return (
    <div
      role="img"
      aria-label="Automation pipeline: Business feeds Leads, Support and Operations into an AI Core, which produces a Decision, routed to CRM, Response and Workflow, resulting in a completed action."
    >
      {/* Desktop / tablet: branching diagram */}
      <div className="hidden sm:block">
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-3">
          <div />
          <Node label="Business" />
          <div />
        </div>
        <BranchLines />
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-3">
          <Node label="Leads" />
          <Node label="Support" />
          <Node label="Operations" />
        </div>
        <BranchLines />
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-3">
          <div />
          <Node label="AI Core" emphasis />
          <div />
        </div>
        <StraightLine />
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-3">
          <div />
          <Node label="Decision Layer" emphasis />
          <div />
        </div>
        <BranchLines />
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-3">
          <Node label="CRM" />
          <Node label="Response" />
          <Node label="Workflow" />
        </div>
        <StraightLine />
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-3">
          <div />
          <Node label="Result" emphasis />
          <div />
        </div>
      </div>

      {/* Mobile: simple vertical flow, not a shrunk version of the desktop diagram */}
      <div className="flex flex-col items-center gap-2 sm:hidden">
        <Node label="Business" />
        <ArrowRightIcon className="h-4 w-4 rotate-90 text-zinc-300 dark:text-zinc-700" />
        <div className="grid w-full grid-cols-3 gap-2">
          <Node label="Leads" />
          <Node label="Support" />
          <Node label="Operations" />
        </div>
        <ArrowRightIcon className="h-4 w-4 rotate-90 text-zinc-300 dark:text-zinc-700" />
        <Node label="AI Core" emphasis />
        <ArrowRightIcon className="h-4 w-4 rotate-90 text-zinc-300 dark:text-zinc-700" />
        <Node label="Decision Layer" emphasis />
        <ArrowRightIcon className="h-4 w-4 rotate-90 text-zinc-300 dark:text-zinc-700" />
        <div className="grid w-full grid-cols-3 gap-2">
          <Node label="CRM" />
          <Node label="Response" />
          <Node label="Workflow" />
        </div>
        <ArrowRightIcon className="h-4 w-4 rotate-90 text-zinc-300 dark:text-zinc-700" />
        <Node label="Result" emphasis />
      </div>
    </div>
  );
}
