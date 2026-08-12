"use client";

import { FormEvent, useState } from "react";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

const BUSINESS_TYPES = [
  "E-commerce / Retail",
  "SaaS / Software",
  "Professional Services",
  "Healthcare",
  "Real Estate",
  "Other",
] as const;

type FormState = {
  name: string;
  email: string;
  company: string;
  businessType: string;
  whatToAutomate: string;
  currentProcess: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  businessType: "",
  whatToAutomate: "",
  currentProcess: "",
  message: "",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string }
  | { kind: "network-error" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Maps Project #1's public webhook payload contract exactly:
// { name, email, company, business_need, message }. business_need carries
// "<businessType> — <whatToAutomate>" so the qualifier still gets both
// signals in the one field Project 1's workflow already expects.
function toWebhookPayload(form: FormState) {
  return {
    name: form.name.trim(),
    email: form.email.trim(),
    company: form.company.trim(),
    business_need: `${form.businessType}: ${form.whatToAutomate.trim()}`,
    message: [form.currentProcess.trim(), form.message.trim()].filter(Boolean).join("\n\n"),
  };
}

function validateStep1(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.businessType) errors.businessType = "Select your business type.";
  if (form.whatToAutomate.trim().length < 5) {
    errors.whatToAutomate = "Tell us what you'd like to automate.";
  }
  return errors;
}

function validateStep2(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (form.message.trim().length < 10) {
    errors.message = "Add a few more details (at least 10 characters).";
  }
  return errors;
}

function validateStep3(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (form.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = "Enter a valid email address.";
  return errors;
}

const fieldClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-100 dark:focus:ring-zinc-100";
const labelClass = "mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300";
const errorClass = "mt-1.5 text-xs text-red-600 dark:text-red-400";

const STEP_LABELS = ["What to automate", "Current process", "Contact details"];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const webhookUrl = process.env.NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL;

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function goNext() {
    const stepErrors = step === 1 ? validateStep1(form) : validateStep2(form);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;
    setStep((s) => s + 1);
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const stepErrors = validateStep3(form);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    if (!webhookUrl) {
      setStatus({
        kind: "error",
        message: "This form isn't configured yet (missing NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL). Nothing was sent.",
      });
      return;
    }

    setStatus({ kind: "loading" });

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toWebhookPayload(form)),
      });

      if (!res.ok) {
        setStatus({ kind: "error", message: `Request failed with status ${res.status}. Please try again.` });
        return;
      }

      // Deliberately not reading qualification/score from the response —
      // that's internal, not something a public visitor should see.
      setStatus({ kind: "success" });
      setForm(initialState);
      setStep(1);
    } catch {
      // fetch() rejects (rather than resolving with a bad status) on DNS
      // failure, no connectivity, CORS block, etc. — treated distinctly
      // from a server-side error response.
      setStatus({ kind: "network-error" });
    }
  }

  if (status.kind === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900 dark:bg-emerald-950/40"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
          <CheckIcon className="h-6 w-6" strokeWidth={2.5} />
        </div>
        <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
          Your request has been received.
        </h3>
        <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-200">
          We&apos;ll review your workflow and get back to you.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 rounded-md text-sm font-medium text-emerald-700 underline underline-offset-4 outline-none hover:text-emerald-900 focus-visible:ring-2 focus-visible:ring-accent dark:text-emerald-300 dark:hover:text-emerald-100"
        >
          Send another request
        </button>
      </div>
    );
  }

  const isLoading = status.kind === "loading";

  return (
    <div>
      <div className="mb-6 flex items-center gap-2" aria-hidden="true">
        {STEP_LABELS.map((label, i) => {
          const stepNumber = i + 1;
          const isCurrent = stepNumber === step;
          const isDone = stepNumber < step;
          return (
            <div key={label} className="flex flex-1 items-center gap-2">
              <div
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  isDone
                    ? "bg-accent text-accent-foreground"
                    : isCurrent
                      ? "border-2 border-accent text-accent"
                      : "border border-zinc-300 text-zinc-400 dark:border-zinc-700 dark:text-zinc-600"
                }`}
              >
                {isDone ? <CheckIcon className="h-3 w-3" strokeWidth={3} /> : stepNumber}
              </div>
              {i < STEP_LABELS.length - 1 && (
                <div className={`h-px flex-1 ${isDone ? "bg-accent" : "bg-zinc-200 dark:bg-zinc-800"}`} />
              )}
            </div>
          );
        })}
      </div>
      <p className="mb-6 text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
        Step {step} of 3 — {STEP_LABELS[step - 1]}
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {step === 1 && (
          <>
            <div>
              <label htmlFor="businessType" className={labelClass}>
                Business type
              </label>
              <select
                id="businessType"
                value={form.businessType}
                onChange={(e) => updateField("businessType", e.target.value)}
                aria-invalid={Boolean(errors.businessType)}
                aria-describedby={errors.businessType ? "businessType-error" : undefined}
                className={fieldClass}
              >
                <option value="" disabled>
                  Select one
                </option>
                {BUSINESS_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p id="businessType-error" className={errorClass}>
                  {errors.businessType}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="whatToAutomate" className={labelClass}>
                What would you like to automate?
              </label>
              <input
                id="whatToAutomate"
                type="text"
                placeholder="e.g. Qualifying inbound leads, answering support questions..."
                value={form.whatToAutomate}
                onChange={(e) => updateField("whatToAutomate", e.target.value)}
                aria-invalid={Boolean(errors.whatToAutomate)}
                aria-describedby={errors.whatToAutomate ? "whatToAutomate-error" : undefined}
                className={fieldClass}
              />
              {errors.whatToAutomate && (
                <p id="whatToAutomate-error" className={errorClass}>
                  {errors.whatToAutomate}
                </p>
              )}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label htmlFor="currentProcess" className={labelClass}>
                Current process <span className="font-normal text-zinc-400">(optional)</span>
              </label>
              <textarea
                id="currentProcess"
                rows={3}
                placeholder="How does this work today?"
                value={form.currentProcess}
                onChange={(e) => updateField("currentProcess", e.target.value)}
                className={`${fieldClass} resize-none`}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Anything else that would help us understand the project..."
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${fieldClass} resize-none`}
              />
              {errors.message && (
                <p id="message-error" className={errorClass}>
                  {errors.message}
                </p>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  disabled={isLoading}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass}
                />
                {errors.name && (
                  <p id="name-error" className={errorClass}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  disabled={isLoading}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass}
                />
                {errors.email && (
                  <p id="email-error" className={errorClass}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                Company <span className="font-normal text-zinc-400">(optional)</span>
              </label>
              <input
                id="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={(e) => updateField("company", e.target.value)}
                disabled={isLoading}
                className={fieldClass}
              />
            </div>
          </>
        )}

        {status.kind === "error" && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
          >
            {status.message}
          </div>
        )}
        {status.kind === "network-error" && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
          >
            Couldn&apos;t reach the server. Check your connection and try again.
          </div>
        )}

        <div className="flex items-center justify-between gap-3 pt-2">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              disabled={isLoading}
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 outline-none transition-colors hover:border-zinc-400 focus-visible:ring-2 focus-visible:ring-accent dark:border-zinc-700 dark:text-zinc-300"
            >
              Back
            </button>
          ) : (
            <span />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white outline-none transition-colors hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Next
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              {isLoading && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              )}
              {isLoading ? "Sending..." : "Automate My Workflow"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
