export type CategorySlug = "frontend" | "backend" | "devops" | "mern";

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  tools: string[];
}

export interface Category {
  slug: CategorySlug;
  label: string;
  heading: string;
  strapline: string;
  description: string;
  outcomes: string[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  repo: string;
  demo?: string;
}

export const profile = {
  name: "Ahmed",
  role: "Full-Stack Developer and DevOps Engineer",
  tagline:
    "I build production-ready products end-to-end: accessible interfaces, reliable APIs, and cloud infrastructure that scales.",
  location: "Tunis, Tunisia",
  email: "ahmed@email.com",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/frontend", label: "Frontend" },
  { href: "/backend", label: "Backend" },
  { href: "/devops", label: "DevOps" },
  { href: "/mern", label: "MERN" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ahmed" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ahmed" },
  { label: "Email", href: "mailto:ahmed@email.com" },
];

export const stats = [
  { value: "5+", label: "Years shipping products" },
  { value: "20+", label: "Projects delivered" },
  { value: "99.9%", label: "Uptime focus" },
  { value: "<24h", label: "Average response time" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Architecture",
    description:
      "Fast, accessible interfaces designed for high engagement and strong Core Web Vitals.",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "State Management",
    ],
  },
  {
    title: "Backend Systems",
    description:
      "Modular services with clear contracts, robust auth, and predictable data layers.",
    tools: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "REST and WebSockets",
    ],
  },
  {
    title: "Platform and Delivery",
    description:
      "Automated deployments with observability, reproducible infrastructure, and rollback safety.",
    tools: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
      "Terraform",
    ],
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description:
      "Clarify scope, define constraints, and translate business goals into measurable technical outcomes.",
  },
  {
    title: "Build",
    description:
      "Implement in small, testable slices with clean interfaces and documentation for handover.",
  },
  {
    title: "Ship",
    description:
      "Automate deployments, monitor key signals, and iterate quickly using real user feedback.",
  },
];

export const categories: Record<CategorySlug, Category> = {
  frontend: {
    slug: "frontend",
    label: "Frontend",
    heading: "Frontend Projects",
    strapline: "Interfaces that feel fast, clear, and reliable.",
    description:
      "Production UIs focused on accessibility, performance budgets, and maintainable component architecture.",
    outcomes: [
      "Performance-first React and Next.js implementations",
      "Accessible user flows with clear interaction states",
      "Design systems and reusable component patterns",
    ],
  },
  backend: {
    slug: "backend",
    label: "Backend",
    heading: "Backend Projects",
    strapline: "Services built for reliability under load.",
    description:
      "APIs and service architectures engineered for observability, security, and straightforward scaling.",
    outcomes: [
      "Auth, RBAC, and secure API boundaries",
      "Resilient data and caching strategies",
      "Clear service contracts and monitoring hooks",
    ],
  },
  devops: {
    slug: "devops",
    label: "DevOps",
    heading: "DevOps Projects",
    strapline: "Delivery pipelines with confidence built in.",
    description:
      "Infrastructure and CI/CD pipelines that reduce deployment risk and speed up release cycles.",
    outcomes: [
      "Containerized environments for consistent delivery",
      "Pipeline automation with quality gates",
      "Observability and incident-response readiness",
    ],
  },
  mern: {
    slug: "mern",
    label: "MERN",
    heading: "MERN Applications",
    strapline: "Full-stack products from schema to screen.",
    description:
      "End-to-end web applications built with MongoDB, Express, React, and Node.js.",
    outcomes: [
      "Integrated product workflows across the full stack",
      "Real-time collaboration and user-centric features",
      "Clean deployment and scaling strategy",
    ],
  },
};

export const projectsByCategory: Record<CategorySlug, Project[]> = {
  frontend: [
    {
      id: "fe-ecommerce",
      title: "E-commerce Experience",
      summary:
        "A storefront with dynamic filtering, optimistic cart updates, and checkout funnel optimization.",
      impact:
        "Improved checkout completion and reduced bounce rate on mobile product pages.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      repo: "https://github.com/ahmed/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
    },
    {
      id: "fe-dashboard",
      title: "Analytics Dashboard",
      summary:
        "A role-aware dashboard with live KPI tiles, export workflows, and segment filtering.",
      impact:
        "Cut reporting turnaround from hours to minutes with self-serve analytics views.",
      stack: ["React", "TypeScript", "Chart.js", "TanStack Query"],
      repo: "https://github.com/ahmed/analytics-dashboard",
    },
    {
      id: "fe-task",
      title: "Team Task Workspace",
      summary:
        "A collaborative workspace featuring board/list views, keyboard shortcuts, and smart notifications.",
      impact:
        "Raised weekly active team usage through smoother planning and execution flows.",
      stack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
      repo: "https://github.com/ahmed/task-app",
    },
  ],
  backend: [
    {
      id: "be-auth-api",
      title: "Identity and Access API",
      summary:
        "A secure API service with JWT rotation, role policies, and audited admin actions.",
      impact:
        "Standardized authentication across products and lowered support tickets for access issues.",
      stack: ["Node.js", "Express", "PostgreSQL", "Redis"],
      repo: "https://github.com/ahmed/rest-api",
    },
    {
      id: "be-realtime",
      title: "Realtime Messaging Service",
      summary:
        "WebSocket-first messaging backend with presence state, delivery tracking, and retry queues.",
      impact:
        "Delivered low-latency collaboration features for distributed teams.",
      stack: ["Node.js", "Socket.io", "MongoDB", "Redis"],
      repo: "https://github.com/ahmed/chat-api",
    },
    {
      id: "be-files",
      title: "Document Storage API",
      summary:
        "A versioned document API with object storage, signed URLs, and policy-based access.",
      impact:
        "Reduced upload failures and made file permissions traceable and auditable.",
      stack: ["Node.js", "TypeScript", "AWS S3", "MongoDB"],
      repo: "https://github.com/ahmed/file-api",
    },
  ],
  devops: [
    {
      id: "do-cicd",
      title: "Release Pipeline Modernization",
      summary:
        "CI/CD workflows with lint, test, preview environments, and staged promotion to production.",
      impact:
        "Reduced release friction and improved rollback confidence for every deployment.",
      stack: ["GitHub Actions", "Docker", "AWS", "Terraform"],
      repo: "https://github.com/ahmed/cicd-pipeline",
    },
    {
      id: "do-k8s",
      title: "Kubernetes Runtime Platform",
      summary:
        "A cluster baseline with autoscaling, ingress control, service policies, and workload templates.",
      impact:
        "Improved environment consistency and reduced onboarding time for new services.",
      stack: ["Kubernetes", "Helm", "Prometheus", "Grafana"],
      repo: "https://github.com/ahmed/k8s-setup",
    },
    {
      id: "do-observability",
      title: "Monitoring and Alerting Stack",
      summary:
        "Centralized logs, metrics, and actionable alerts with severity routing and runbook links.",
      impact:
        "Shortened incident triage and made production health visible in real time.",
      stack: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
      repo: "https://github.com/ahmed/monitoring-stack",
    },
  ],
  mern: [
    {
      id: "mern-social",
      title: "Community Platform",
      summary:
        "A social product with feed ranking, threaded comments, and real-time notification streams.",
      impact:
        "Increased user retention through faster interactions and richer engagement loops.",
      stack: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      repo: "https://github.com/ahmed/social-media",
    },
    {
      id: "mern-collab",
      title: "Project Collaboration Suite",
      summary:
        "A full-stack planning suite with assignments, sprint tracking, and document sharing.",
      impact:
        "Improved planning clarity and reduced blockers for cross-functional teams.",
      stack: ["MongoDB", "Express", "React", "Node.js", "AWS S3"],
      repo: "https://github.com/ahmed/collaboration-tool",
    },
    {
      id: "mern-marketplace",
      title: "Multi-vendor Marketplace",
      summary:
        "A marketplace platform with seller onboarding, order workflows, and payout tracking.",
      impact:
        "Enabled rapid onboarding of vendors while preserving transaction reliability.",
      stack: ["MongoDB", "Express", "React", "Node.js", "Redis"],
      repo: "https://github.com/ahmed/marketplace",
    },
  ],
};

export const featuredProjects = [
  projectsByCategory.frontend[0],
  projectsByCategory.backend[0],
  projectsByCategory.devops[0],
  projectsByCategory.mern[0],
];

