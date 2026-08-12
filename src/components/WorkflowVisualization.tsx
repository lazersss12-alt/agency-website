import { ArrowRightIcon } from "@/components/icons";

export default function WorkflowVisualization({
  steps,
  variant = "default",
  className = "",
}: {
  steps: string[];
  variant?: "default" | "compact";
  className?: string;
}) {
  const compact = variant === "compact";

  return (
    <div
      role="img"
      aria-label={`Workflow: ${steps.join(" leads to ")}`}
      className={`flex flex-col items-stretch gap-1.5 sm:flex-row sm:flex-wrap sm:items-center ${compact ? "sm:gap-1.5" : "sm:gap-2"} ${className}`}
    >
      {steps.map((step, i) => (
        <div key={`${step}-${i}`} className="flex items-center gap-1.5 sm:contents">
          <div
            className={`rounded-lg border border-zinc-200 bg-white text-center font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 ${
              compact ? "px-2.5 py-1.5 text-[11px]" : "px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm"
            }`}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRightIcon
              aria-hidden
              className="h-3.5 w-3.5 flex-shrink-0 rotate-90 text-zinc-300 sm:rotate-0 dark:text-zinc-700"
            />
          )}
        </div>
      ))}
    </div>
  );
}
