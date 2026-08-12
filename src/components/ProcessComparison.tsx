const MANUAL_STEPS = ["Lead arrives", "Inbox", "Manual review", "Spreadsheet", "CRM", "Follow-up"];
const AUTOMATED_STEPS = ["Lead arrives", "AI", "Decision", "CRM", "Action"];

function StepColumn({
  steps,
  variant,
}: {
  steps: string[];
  variant: "manual" | "automated";
}) {
  const isAutomated = variant === "automated";

  return (
    <div className="flex flex-col gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div
            style={isAutomated ? { animationDelay: `${i * 300}ms` } : undefined}
            className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
              isAutomated
                ? `flow-pulse border-accent/40 bg-accent/5 text-zinc-800 dark:text-zinc-100`
                : "border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500"
            }`}
          >
            {step}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProcessComparison() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            Manual process
          </h3>
        </div>
        <StepColumn steps={MANUAL_STEPS} variant="manual" />
      </div>

      <div>
        <div className="mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
            Automated process
          </h3>
        </div>
        <StepColumn steps={AUTOMATED_STEPS} variant="automated" />
      </div>
    </div>
  );
}
