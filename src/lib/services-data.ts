export type ServiceIcon = "lead" | "support" | "crm" | "workflow" | "tools";

export type Service = {
  slug: string;
  icon: ServiceIcon;
  title: string;
  summary: string;
  example: string;
  problem: string;
  solution: string;
  howItWorks: string[];
  useCases: string[];
  workflow: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "ai-lead-qualification",
    icon: "lead",
    title: "AI Lead Qualification",
    summary: "Automatically analyze enquiries, identify intent and prioritize leads.",
    example: "A new enquiry is scored and labeled hot, warm, or cold the moment it arrives.",
    problem:
      "Every inbound enquiry looks the same in an inbox until someone reads it. Teams spend time triaging low-intent messages before they ever reach a real opportunity, and high-intent leads can sit unanswered behind them.",
    solution:
      "An AI model reads each enquiry, evaluates buying intent against context you define, and assigns a qualification label and score before a human ever opens it.",
    howItWorks: [
      "An enquiry is submitted through a form or API.",
      "The message is sent to an AI model with instructions on what a qualified lead looks like for your business.",
      "The model returns a structured qualification — a label, a score, and a reason.",
      "The qualified lead is stored and made available to your team, prioritized by score.",
    ],
    useCases: [
      "Scoring inbound enquiries from a website contact form",
      "Prioritizing which leads a sales team calls first",
      "Filtering low-intent submissions before they reach a CRM",
    ],
    workflow: ["Enquiry", "AI Model", "Qualification Score", "Prioritized Lead"],
  },
  {
    slug: "ai-customer-support",
    icon: "support",
    title: "AI Customer Support",
    summary: "Answer repetitive customer questions and escalate complex requests.",
    example: "A shipping question is answered instantly; a refund exception is routed to a person.",
    problem:
      "Most support volume is the same handful of questions — shipping times, return windows, order status — repeated constantly. Answering them by hand is slow for customers and repetitive for teams, but a bot that guesses at policy is worse than no bot at all.",
    solution:
      "An AI assistant answers only from a knowledge base you control, returns a structured decision on every reply, and recognizes when a request needs a person instead of guessing.",
    howItWorks: [
      "A customer sends a message through a chat interface.",
      "The system retrieves relevant knowledge base entries for that question.",
      "An AI model answers using only that knowledge, or flags the request for a human.",
      "Resolved answers are returned instantly; flagged requests are escalated and logged.",
    ],
    useCases: [
      "Answering shipping, returns, and order-status questions instantly",
      "Escalating refund exceptions or complaints to a human",
      "Keeping a full record of every conversation and outcome",
    ],
    workflow: ["Question", "Knowledge Base", "AI Decision", "Answer or Escalation"],
  },
  {
    slug: "crm-sales-automation",
    icon: "crm",
    title: "CRM & Sales Automation",
    summary: "Automate lead routing, follow-ups and sales workflows.",
    example: "A qualified lead is automatically routed to the right owner with a follow-up scheduled.",
    problem:
      "Sales teams lose time on manual handoffs — copying a lead into a CRM, assigning an owner, scheduling a follow-up. Each manual step is a place a lead can stall or get missed entirely.",
    solution:
      "Once a lead is captured or qualified, automation handles routing, CRM updates, and follow-up scheduling without someone doing it by hand.",
    howItWorks: [
      "A lead or event triggers the workflow (new enquiry, status change, qualification result).",
      "Business rules determine routing — by territory, product, or lead score.",
      "The CRM record is created or updated automatically.",
      "Follow-up tasks or reminders are scheduled for the right owner.",
    ],
    useCases: [
      "Routing qualified leads to the right salesperson automatically",
      "Keeping CRM records in sync with form submissions and other tools",
      "Scheduling follow-up reminders without manual data entry",
    ],
    workflow: ["Lead Event", "Routing Rules", "CRM Update", "Follow-Up Scheduled"],
  },
  {
    slug: "business-workflow-automation",
    icon: "workflow",
    title: "Business Workflow Automation",
    summary: "Connect existing tools and eliminate repetitive manual processes.",
    example: "Data entered in one system automatically appears, formatted correctly, in another.",
    problem:
      "Businesses run on a patchwork of tools — spreadsheets, email, a CRM, a database — that don't talk to each other. Someone ends up manually copying information between them, which is slow and error-prone.",
    solution:
      "An automation layer connects the tools you already use, moving and transforming data between them on a trigger, without manual re-entry.",
    howItWorks: [
      "Identify the repetitive process and the systems involved.",
      "Define the trigger — a new record, a form submission, a schedule.",
      "Build the automation that connects the systems via their APIs.",
      "Monitor and adjust as your processes change.",
    ],
    useCases: [
      "Syncing data between a form, a database, and a spreadsheet",
      "Automating repetitive multi-step approval or notification processes",
      "Eliminating manual data entry between disconnected tools",
    ],
    workflow: ["Trigger", "Automation Layer", "Connected Tools", "Updated Records"],
  },
  {
    slug: "custom-ai-tools",
    icon: "tools",
    title: "Custom AI Tools",
    summary: "Build internal AI-powered tools around specific business processes.",
    example: "An internal dashboard that uses AI to summarize, classify, or triage incoming work.",
    problem:
      "Off-the-shelf software rarely matches a specific internal process exactly. Teams either adapt their process to the tool or keep working around its limits manually.",
    solution:
      "A purpose-built internal tool, with AI where it genuinely helps, designed around how your team actually works rather than a generic template.",
    howItWorks: [
      "Understand the specific internal process and its constraints.",
      "Design a tool scoped to that process — not a generic platform.",
      "Build it with the right mix of AI, APIs, and a database.",
      "Hand it off with documentation your team can actually use.",
    ],
    useCases: [
      "An internal dashboard for triaging or classifying incoming requests",
      "A tool that summarizes or extracts structured data from documents",
      "A purpose-built interface for a process no off-the-shelf tool fits",
    ],
    workflow: ["Business Process", "Custom Tool", "AI Where It Helps", "Team Workflow"],
  },
];
