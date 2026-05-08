import { useEffect, useState, useRef } from "react";
import {
  ArrowUpRight,
  MapPin,
  Clock,
  Briefcase,
  Sparkles,
  Heart,
  Globe2,
  Zap,
  Check,
  User,
  Mail,
  FileText,
  Currency,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import emailjs from "emailjs-com";

type Role = {
  title: string;
  team: string;
  location: string;
  budget: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

const openRoles: Role[] = [
  {
    title: "Senior Frontend Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time/Part-time",
    budget: "$ 65-100 / hr",
    description:
      "Build delightful product experiences with React, TypeScript and modern tooling.",
    responsibilities: [
      "Lead end-to-end development of major product surfaces",
      "Collaborate with design to ship pixel-perfect, accessible UI",
      "Own performance, quality and DX of the frontend stack",
      "Mentor engineers through reviews and pairing",
    ],
    requirements: [
      "5+ years building production React applications",
      "Deep TypeScript and modern CSS experience",
      "Track record of shipping polished, user-facing products",
      "Strong product sense and written communication",
    ],
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote · EU / US",
    type: "Full-time",
    budget: "$ 65-100 / hr",
    description:
      "Shape the visual language and craft intuitive flows from first sketch to ship.",
    responsibilities: [
      "Drive design from discovery through delivery",
      "Build and evolve our design system",
      "Run user research and translate insights into UX",
      "Partner closely with engineering on implementation",
    ],
    requirements: [
      "4+ years of product design experience",
      "Strong portfolio of shipped, complex products",
      "Fluency in Figma and modern prototyping tools",
      "Comfort working autonomously in a remote team",
    ],
  },
  {
    title: "Backend Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time",
    budget: "$ 70-110 / hr",
    description:
      "Design APIs and infrastructure that scale with millions of requests a day.",
    responsibilities: [
      "Architect and build core backend services",
      "Improve reliability, observability and performance",
      "Design clean, well-documented APIs",
      "Contribute to data modeling and database design",
    ],
    requirements: [
      "5+ years of backend engineering experience",
      "Strong with Node.js, Postgres and distributed systems",
      "Experience operating production services at scale",
      "Pragmatic, security-minded engineer",
    ],
  },
  {
    title: "Developer Advocate",
    team: "Community",
    location: "Remote · Americas",
    type: "Full-time",
    budget: "$ 70-110 / hr",
    description:
      "Write, speak and build demos that help developers get the most from our platform.",
    responsibilities: [
      "Create high-quality content, demos and tutorials",
      "Speak at conferences and engage with the community",
      "Gather developer feedback and feed it into product",
      "Grow our open-source presence",
    ],
    requirements: [
      "Strong technical background and writing skills",
      "Experience building developer-facing content",
      "Comfort speaking on video and on stage",
      "Genuine love for developer tooling",
    ],
  },
  {
    title: "Customer Success Manager",
    team: "Operations",
    location: "Remote · EU",
    type: "Full-time",
    budget: "$ 35-55 / hr",
    description:
      "Partner with our top customers to drive adoption, retention and happiness.",
    responsibilities: [
      "Own a portfolio of strategic customer accounts",
      "Run onboarding, QBRs and renewal conversations",
      "Identify expansion opportunities and risks early",
      "Be the voice of the customer internally",
    ],
    requirements: [
      "3+ years in CS or account management at SaaS",
      "Excellent written and verbal communication",
      "Comfort with technical products and APIs",
      "Empathetic, proactive and highly organized",
    ],
  },
  {
    title: "Full-stack developer",
    team: "Engineering",
    location: "Remote · World",
    type: "Full-time/Part-time",
    budget: "$ 70-110 / hr",
    description:
      "This role combines blockchain development with frontend and backend engineering. You’ll take ownership of entire features from blockchain logic to user interface and work closely with product managers, designers, and other developers.",
    responsibilities: [
      "Develop and maintain backend APIs, services, and blockchain integration layers.",
      "Collaborate with the smart contract team to connect UI/UX with on-chain functionality.",
      "Optimize performance, scalability, and responsiveness across the stack.",
      "Participate in technical planning, code reviews, and cross-functional discussions.",
    ],
    requirements: [
      "Frontend: React.js/Next.js, TypeScript/Javascript, TailwindCSS",
      "Backend: Node.js, Express, MongoDB",
      "Web3: ethers.js ",
    ],
  },
  {
    title: "Senior Rust Engineer",
    team: "Engineering",
    location: "Remote · World",
    type: "Full-time/Part-time",
    budget: "$ 110-195 / hr",
    description:
      "As a Senior Rust Backend Engineer, you’ll help us build robust systems that power Web3 wallets, smart contract interactions, token bridges, and more.",
    responsibilities: [
      "Develop and maintain **Rust-based microservices** for blockchain integrations",
      "Architect systems to support millions of requests across multiple chains",
      "Build APIs for smart wallets, token swaps, and cross-chain operations",
      "Work with Web3 standards: **ERC20, ERC4337, account abstraction**, etc.",
      "Collaborate across smart contracts, frontend, and DevOps teams",
    ],
    requirements: [
      "Languages: Rust (primary), Node.js",
      "Blockchains: Ethereum (EVM), Solana, Cosmos",
      "Standards & Protocols: WebSockets, REST, gRPC, Web3.js, Ethers.js",
    ],
  },
  {
    title: "GO Engineer",
    team: "Engineering",
    location: "Remote · World",
    type: "Full-time/Part-time",
    budget: "$ 85-130 / hr",
    description:
      "In this role, you will be responsible for designing, building, and maintaining high-performance, scalable, and reliable backend systems and services.",
    responsibilities: [
      "Design, develop, test, and deploy high-performance backend services, APIs, and microservices in Go.",
      "Contribute to system design and architecture decisions to ensure services are scalable, maintainable, and fault-tolerant.",
      "Work with frontend developers, product managers, and other engineering teams to integrate services and define clear APIs.",
      "Write clean, well-documented, and testable code. Participate in code reviews and advocate for best practices in software development.",
      "Identify and resolve performance bottlenecks, ensuring high throughput and low latency in production systems.",
    ],
    requirements: [
      "3+ years of professional software development experience.",
      "Proven track record as a Go Developer, with substantial experience building production backend systems in Go (Golang).",
      "Experience with distributed systems, concurrency patterns, and microservices architecture.",
    ],
  },
  {
    title: "Python Backend Engineer",
    team: "Engineering",
    location: "Remote · World",
    type: "Full-time/Part-time",
    budget: "$ 70-110 / hr",
    description:
      "The ideal candidate will leverage their expertise in data processing, AI algorithms, and machine learning to build intelligent systems that optimize decision-making and drive innovation across our platform.",
    responsibilities: [
      "Build and optimize scalable data pipelines using Python, SQL, PySpark, and other tools for efficient data processing.",
      "Blockchain Analytics: Leverage blockchain analytics tools to analyze on-chain data, build blockchain-based solutions, and drive decision-making based on decentralized data.",
    ],
    requirements: [
      "Advanced proficiency in Python, SQL, PySpark, and other data engineering tools.",
      "Solid experience with blockchain analytics, on-chain metrics, and working knowledge of smart contracts and decentralized networks.",
      "Good at React/Next.js, Node.js, MongoDB/PostSQL",
    ],
  },
  {
    title: "Lead Developer",
    team: "Engineering",
    location: "Remote · World",
    type: "Full-time/Part-time",
    budget: "$ 115-185 / hr",
    description:
      "This role combines blockchain development with leadership in frontend and backend engineering.",
    responsibilities: [
      "Lead and manage a team of full-stack developers to build and maintain decentralized applications.",
      "Design and oversee the architecture of backend APIs, services, and blockchain integration layers.",
      "Collaborate closely with product managers, smart contract teams, and designers to deliver scalable, functional, and user-friendly applications.",
      "Ensure code quality and best practices through regular code reviews and mentorship.",
      "Optimize application performance, scalability, and security across the full stack.",
      "Drive technical planning, sprint meetings, and cross-functional collaboration to deliver timely and efficient solutions.",
      "Provide guidance on new technologies, frameworks, and strategies to keep the team on the cutting edge of Web3 development.",
      "Take ownership of technical decision-making and contribute to overall product strategy.",
    ],
    requirements: [
      "Frontend: React.js/Next.js, TypeScript/JavaScript, TailwindCSS",
      "Backend: Node.js, Express, MongoDB",
      "Web3: ethers.js",
      "Blockchain: Ethereum, Solana, or other smart contract platforms",
    ],
  },
  {
    title: "Blockchain Developer",
    team: "Engineering",
    location: "Remote · World",
    type: "Full-time/Part-time",
    budget: "$ 115-185 / hr",
    description:
      "As a Blockchain Developer, you will be responsible for developing and implementing blockchain solutions and smart contracts, ensuring the security, scalability, and efficiency of our decentralized platforms.",
    responsibilities: [
      "Design, develop, test, and deploy smart contracts on blockchain platforms ( Ethereum, Solana, Polkadot) to support various decentralized applications (DApps)",
      "Integrate blockchain systems with existing backend services, ensuring seamless interaction between the blockchain and other components of the platform.",
      "Collaborate with frontend and backend developers to ensure smooth integration of blockchain features, APIs, and data structures.",
    ],
    requirements: [
      "Proven experience as a Blockchain Developer or similar role, preferably working with blockchain platforms such as Ethereum, Solana, or Polkadot.",
      "Strong knowledge of blockchain concepts, such as consensus mechanisms, smart contracts, and decentralized networks.",
      "Proficiency in programming languages such as React.js/Next.js, Node.js/Python, Solidity, Rust for blockchain development.",
      "Strong understanding of decentralized application (DApp) development and Web3 technologies.",
    ],
  },
];

const perks = [
  {
    icon: Globe2,
    title: "Remote-First",
    body: "Work from anywhere, but stay connected to our HQ. We offer co-working memberships and an annual team week in US.",
  },
  {
    icon: Heart,
    title: "Premium Tech Setup",
    body: "MacBook Pro (M3 Max) or equivalent Windows/Linux workstation, plus a $1,000 home office allowance.",
  },
  {
    icon: Zap,
    title: "Flexible Hours",
    body: "Core hours 11:00–15:00 GMT-3, otherwise structure your day as you see fit.",
  },
  {
    icon: Sparkles,
    title: "Competitive Compensation",
    body: "Attractive salary + performance-based bonuses. We pay in USD (or crypto, if you prefer).",
  },
];

const teams = ["All", "Engineering", "Design", "Community", "Operations"];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Application Modal Component
function ApplicationModal({
  isOpen,
  onClose,
  role,
}: {
  isOpen: boolean;
  onClose: () => void;
  role: Role | null;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Initialize EmailJS with your public key
  useEffect(() => {
    if (isOpen) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using emailjs-com
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: "success",
          message:
            "✓ Application submitted successfully! We will contact you within 5-7 business days.",
        });

        // Reset form
        if (formRef.current) {
          formRef.current.reset();
        }

        // Close modal after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to submit application. Please try again or email us directly at hr@dantelabs.us",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !role) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold tracking-tight">
            Apply for {role.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below to apply for the {role.title} position.
          </DialogDescription>
        </DialogHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-4 space-y-5">
          {/* Hidden fields for EmailJS template */}
          <input type="hidden" name="to_email" value="hr@dantelabs.us" />
          <input type="hidden" name="role_title" value={role.title} />
          <input type="hidden" name="role_team" value={role.team} />

          {/* Name */}
          <div>
            <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
              <User className="h-4 w-4" />
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="from_name"
              placeholder="John Doe"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
              <Mail className="h-4 w-4" />
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              name="from_email"
              placeholder="john@example.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 (555) 000-0000"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Portfolio/LinkedIn */}
          <div>
            <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
              Portfolio / LinkedIn / GitHub (Optional)
            </label>
            <input
              type="url"
              name="portfolio"
              placeholder="https://..."
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
              Cover Letter / Message (Optional)
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us why you're interested in this role and what makes you a great fit..."
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Resume Note */}
          <div className="rounded-lg bg-secondary/30 p-4">
            <div className="flex items-start gap-2">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div className="text-sm">
                <p className="font-medium text-foreground">
                  Resume/CV Required
                </p>
                <p className="text-muted-foreground">
                  Please email your resume separately to hr@dantelabs.us after
                  submitting the form.
                </p>
              </div>
            </div>
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div
              className={`rounded-lg p-3 text-sm ${
                submitStatus.type === "success"
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "bg-red-500/10 text-red-600 dark:text-red-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [team, setTeam] = useState("All");
  const [query, setQuery] = useState("");
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const filtered = openRoles.filter(
    (r) =>
      (team === "All" || r.team === team) &&
      (query === "" ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase())),
  );

  const handleApplyClick = (role: Role) => {
    setSelectedRole(role);
    setShowApplicationModal(true);
  };

  return (
    <>
      <PageLayout showContact={false}>
        <main className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative overflow-hidden border-b border-border">
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(80% 60% at 50% -10%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)",
              }}
            />
            <div className="mx-auto max-w-5xl px-6 pt-28 pb-24 md:pt-40 md:pb-32 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md transition hover:bg-card"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                We're hiring across the team
              </Link>
              <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-foreground">
                Build what's next,
                <br className="hidden md:block" />{" "}
                <span className="italic text-muted-foreground">
                  with people you'll love.
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
                We're a small, senior team shipping product the world depends
                on. High autonomy, high craft, fully remote.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToId("open-roles")}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  See open roles
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId("life")}
                  className="inline-flex items-center rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition hover:bg-accent"
                >
                  Life at the company
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="border-b border-border">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
              {[
                { k: "42", v: "Teammates" },
                { k: "18", v: "Countries" },
                { k: "100%", v: "Remote" },
                { k: "$24M", v: "Series A" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="group bg-background px-6 py-12 text-center transition hover:bg-secondary/40"
                >
                  <div className="text-5xl font-semibold tracking-tight text-foreground transition group-hover:scale-105">
                    {s.k}
                  </div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Open positions Section */}
          <section
            id="open-roles"
            className="mx-auto max-w-6xl px-6 py-24 md:py-32"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  · Open roles
                </span>
                <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-foreground">
                  Live <span className="italic">positions</span>
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  {openRoles.length} roles open right now. Don't see a fit? We'd
                  still love to hear from you.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Updated today
              </div>
            </div>

            {/* Filters */}
            <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {teams.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTeam(t)}
                    className={`rounded-full border px-4 py-1.5 text-sm transition ${
                      team === t
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="relative md:w-72">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search roles…"
                  className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
              {filtered.length === 0 && (
                <div className="px-6 py-16 text-center text-muted-foreground">
                  No roles match your filters.
                </div>
              )}
              {filtered.map((role, i) => (
                <button
                  key={role.title}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`group relative flex w-full flex-col gap-4 p-6 text-left transition hover:bg-accent/40 md:flex-row md:items-center md:justify-between md:p-8 ${
                    i !== 0 ? "border-t border-border" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        <Briefcase className="h-3 w-3" />
                        {role.team}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground transition group-hover:translate-x-1">
                      {role.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {role.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {role.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        {/* <Currency className="h-3.5 w-3.5" /> */}
                        {role.budget}
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition group-hover:border-foreground group-hover:bg-primary group-hover:text-primary-foreground md:self-center">
                    View role
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Perks Section */}
          <section
            id="life"
            className="relative border-t border-border bg-secondary/30"
          >
            <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
              <div className="max-w-2xl">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  · Life here
                </span>
                <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-foreground">
                  Built for <span className="italic">great work</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  The benefits we'd want if we were the ones joining.
                </p>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {perks.map((p) => (
                  <div
                    key={p.title}
                    className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-110 group-hover:rotate-3">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="apply" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-primary p-10 text-center md:p-20">
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-primary-foreground">
                  Don't see your{" "}
                  <span className="italic opacity-80">role?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-primary-foreground/70">
                  We're always open to meeting exceptional people. Tell us what
                  you'd love to work on.
                </p>
                <div className="mt-10">
                  <a
                    href="mailto:hr@dantelabs.us?subject=General%20application"
                    className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Get in touch
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Role Details Dialog */}
          <Dialog
            open={!!selectedRole && !showApplicationModal}
            onOpenChange={(o) => !o && setSelectedRole(null)}
          >
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
              {selectedRole && (
                <>
                  <DialogHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        <Briefcase className="h-3 w-3" />
                        {selectedRole.team}
                      </span>
                    </div>
                    <DialogTitle className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                      {selectedRole.title}
                    </DialogTitle>
                    <DialogDescription className="text-base text-muted-foreground">
                      {selectedRole.description}
                    </DialogDescription>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {selectedRole.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {selectedRole.type}
                      </span>
                    </div>
                  </DialogHeader>

                  <div className="mt-2 grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Responsibilities
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {selectedRole.responsibilities.map((r) => (
                          <li
                            key={r}
                            className="flex gap-2.5 text-sm text-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Requirements
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {selectedRole.requirements.map((r) => (
                          <li
                            key={r}
                            className="flex gap-2.5 text-sm text-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col-reverse gap-2 border-t border-border pt-6 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedRole(null)}
                      className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => handleApplyClick(selectedRole)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                    >
                      Apply for this role
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          {/* Application Modal */}
          <ApplicationModal
            isOpen={showApplicationModal}
            onClose={() => {
              setShowApplicationModal(false);
              setSelectedRole(null);
            }}
            role={selectedRole}
          />
        </main>
      </PageLayout>
    </>
  );
}

export default Careers;
