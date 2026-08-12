import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you'd like to automate — we'll identify where AI and automation can help your business.",
};

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you'd like to automate."
          description="Describe the process that is taking your team too much time. We'll identify where AI and automation can help."
        />

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
