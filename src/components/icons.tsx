import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/services-data";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function LeadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 5h16l-6 8v6l-4-2v-4L4 5Z" />
    </svg>
  );
}

export function SupportIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12a8 8 0 1 1 3.2 6.4L4 19l1.1-3.4A7.96 7.96 0 0 1 4 12Z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </svg>
  );
}

export function CrmIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="6" r="2.25" />
      <circle cx="18" cy="6" r="2.25" />
      <circle cx="12" cy="18" r="2.25" />
      <path d="M7.7 7.6 10.5 16M16.3 7.6 13.5 16M8.25 6h7.5" />
    </svg>
  );
}

export function WorkflowIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="6" height="5" rx="1" />
      <rect x="15" y="15" width="6" height="5" rx="1" />
      <path d="M9 6.5h4a3 3 0 0 1 3 3V15" />
      <path d="m14 7.5 2-1.5-2-1.5" />
    </svg>
  );
}

export function ToolsIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 6.5 17 4l3 3-2.5 2.5" />
      <path d="m14.5 9.5-8.75 8.75a1.5 1.5 0 0 1-2.12-2.12L12.38 6.4" />
      <path d="m17 9 3 3" />
    </svg>
  );
}

const ICONS: Record<ServiceIcon, (props: IconProps) => React.JSX.Element> = {
  lead: LeadIcon,
  support: SupportIcon,
  crm: CrmIcon,
  workflow: WorkflowIcon,
  tools: ToolsIcon,
};

export function ServiceIconGlyph({ icon, ...props }: { icon: ServiceIcon } & IconProps) {
  const Icon = ICONS[icon];
  return <Icon {...props} />;
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: 1.4 })} fill="currentColor" stroke="none">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: 1.4 })} fill="currentColor" stroke="none">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-6.24c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.53V20H8.9V8.5h3.24v1.57h.05c.45-.86 1.56-1.76 3.2-1.76 3.43 0 4.06 2.25 4.06 5.18V20Z" />
    </svg>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}
