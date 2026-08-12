import Link from "next/link";
import { EMAIL, FOOTER_NAV_LINKS, SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/site-config";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

const SOCIAL_ICONS: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
                {SITE_NAME.charAt(0)}
              </span>
              <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {SITE_NAME}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{SITE_TAGLINE}</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              Navigation
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-sm text-zinc-600 outline-none transition-colors hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-accent dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              Elsewhere
            </h2>
            <ul className="mt-3 flex gap-3">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-500 outline-none transition-colors hover:border-zinc-400 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-accent dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  <EmailIcon className="h-4 w-4" />
                  <span className="sr-only">Email {SITE_NAME}</span>
                </a>
              </li>
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label];
                if (!social.href) {
                  return (
                    <li key={social.label}>
                      <span
                        title={`${social.label} coming soon`}
                        aria-disabled="true"
                        className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-md border border-zinc-200 text-zinc-300 dark:border-zinc-800 dark:text-zinc-700"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{social.label} (not yet available)</span>
                      </span>
                    </li>
                  );
                }
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-500 outline-none transition-colors hover:border-zinc-400 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-accent dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All work shown is self-built demonstration
          software.
        </div>
      </div>
    </footer>
  );
}
