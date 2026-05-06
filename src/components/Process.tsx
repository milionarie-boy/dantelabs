import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const processes = [
  {
    id: 1,
    title: "Protocol & Smart Contract Design",
    description:
      "We begin by designing custom blockchain architectures and smart contracts tailored to your industry and use case, selecting the most suitable frameworks and standards.",
    steps: [
      "Requirement gathering & ecosystem analysis",
      "Tokenomics and governance model design",
      "Smart contract architecture (ERC-20, ERC-721, DeFi, DAO, custom modules)",
      "Initial testnet deployment and validation",
    ],
  },
  {
    id: 2,
    title: "dApp & System Integration",
    description:
      "Our engineering team seamlessly integrates blockchain with applications, APIs, and external systems, ensuring scalability, usability, and interoperability.",
    steps: [
      "UI/UX design for wallets and dApps",
      "API and oracle integration",
      "Cross-chain and layer-2 interoperability",
      "Security & scalability optimization",
    ],
  },
  {
    id: 3,
    title: "AI & Data Analytics Layer",
    description:
      "We develop specialized AI and data analytics modules that transform raw blockchain data into real-time insights and predictive intelligence for your ecosystem.",
    steps: [
      "Blockchain data indexing & visualization",
      "ML model training on on-chain/off-chain data",
      "Real-time monitoring dashboards",
      "Advanced insight delivery (fraud detection, trend analysis)",
    ],
  },
  {
    id: 4,
    title: "Compliance, Security & Certification",
    description:
      "We ensure your blockchain solutions meet industry, regulatory, and security standards — protecting users, assets, and reputation.",
    steps: [
      "Smart contract auditing & penetration testing",
      "GDPR & financial compliance mapping",
      "KYC/AML integration for regulated use cases",
      "Mainnet deployment & certification",
    ],
  },
  {
    id: 5,
    title: "Deployment & Ongoing Support",
    description:
      "We provide comprehensive training, onboarding, and ecosystem support to guarantee successful adoption and long-term growth.",
    steps: [
      "User & developer onboarding",
      "Governance and DAO setup",
      "Performance and adoption monitoring",
      "Continuous iteration and ecosystem expansion",
    ],
  },
];

const Process = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    processSectionsRef.current = processes.map(
      (_, i) => processSectionsRef.current[i] || null,
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("animate-fade-in");
          (entries[0].target as HTMLElement).style.opacity = "1";
          observer.unobserve(entries[0].target);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestSection = null;
      let closestDistance = Infinity;

      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });

      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process" className="bg-white py-16">
      <div className="container mx-auto px-4" ref={processRef}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to developing textile sensor
            solutions that ensures quality, reliability, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Process Navigation */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-24 space-y-2">
              {processes.map((process) => (
                <button
                  key={process.id}
                  onClick={() => {
                    setActiveProcess(process.id);
                    const el = document.getElementById(`process-${process.id}`);
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-all",
                    activeProcess === process.id
                      ? "bg-gray-100 shadow-sm"
                      : "hover:bg-gray-50",
                  )}
                >
                  <div className="flex items-center">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-all",
                        activeProcess === process.id
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-500",
                      )}
                    >
                      {activeProcess > process.id ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <span>{process.id}</span>
                      )}
                    </div>
                    <span
                      className={cn(
                        "font-medium",
                        activeProcess === process.id
                          ? "text-gray-900"
                          : "text-gray-600",
                      )}
                    >
                      {process.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Process Details */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="space-y-16">
              {processes.map((process) => (
                <div
                  id={`process-${process.id}`}
                  key={process.id}
                  className="scroll-mt-24 transition-all duration-500"
                  ref={(el) =>
                    (processSectionsRef.current[process.id - 1] = el)
                  }
                >
                  <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                  <p className="text-gray-700 mb-6">{process.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {process.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 text-sm">
                            {idx + 1}
                          </div>
                          <span>{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
