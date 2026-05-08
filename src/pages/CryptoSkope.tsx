import ProjectPageLayout from "@/components/ProjectPageLayout";
import { Shield, Radio, Activity, Box, FlaskConical } from "lucide-react";

const CryptoSkope = () => {
  return (
    <ProjectPageLayout
      title="CryptoSkope"
      subtitle="Next-Gen DeFi Infrastructure for Transparent, Secure Finance"
      imageUrl="https://i.ibb.co/BvqMd6T/crypto-Skope-modified.png"
      brandName="MetaMask"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">
        Case Study: CryptoSkope by DanteLabs Technologies
      </h2>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">
          Ongoing R&D Project — Currently in Prototyping Phase
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          CryptoSkope was founded with the mission to enhance transparency,
          security, and efficiency in decentralized finance. As DeFi adoption
          accelerated, users and institutions faced increasing concerns about
          on-chain data integrity, smart contract vulnerabilities, and the
          complexity of managing decentralized assets. CryptoSkope needed a
          secure, scalable, and user-friendly platform that could support a new
          wave of decentralized financial operations.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Existing DeFi solutions often suffered from limited transparency,
        complex user interfaces, and poor real-time monitoring tools. Many
        platforms failed to offer trustworthy data verification, while
        centralized or opaque contract models exposed users to risk. The market
        demanded a system that offered security, clarity, and seamless
        integration without compromising decentralization.
      </p>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        DanteLabs Technologies delivered CryptoSkope, an advanced DeFi framework
        built on blockchain and secured by smart contract automation. With
        AI-enhanced analytics, real-time dashboards, and decentralized
        governance, the platform provides:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Smart Contract Engine
            </h4>
            <p>
              Secure, auditable contracts executed on-chain with automated
              compliance logic.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Radio className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Decentralized Dashboard
            </h4>
            <p>
              Permissionless access with role-based visibility, enabling secure
              data management without sacrificing decentralization.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Box className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Integrated Clothing
            </h4>
            <p>
              Decentralized access control, ensuring only authorized personnel
              can review sensitive data
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Governance Suite
            </h4>
            <p>
              Modular DAO infrastructure supporting transparent proposals,
              weighted voting, and tamper-proof audit trails
            </p>
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold mb-4">Critical Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Smart Risk Scanner for proactive threat detection</li>
        <li>On-Chain Performance Metrics for transparent ROI tracking</li>
        <li>
          DeFi Wallet Integration for seamless access and secure asset control
        </li>
        <li>
          Governance Voting Module with immutable vote logging and results
          display
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Trustless Transparency</h4>
            <p>
              Blockchain-native design ensures real-time visibility,
              verifiability, and auditability of all financial operations.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Adaptive Intelligence</h4>
            <p>
              Machine learning adjusts to market conditions and user strategies,
              enhancing protocol safety and reducing exploits.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Security at Scale</h4>
            <p>
              Immutable contracts, end-to-end encryption, and hardened
              infrastructure for institutional-grade DeFi.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Minimal Upkeep</h4>
            <p>
              Auto-updating protocols, secure contract upgrades, and streamlined
              UI for effortless management.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">User-Centric Design</h4>
            <p>
              Intuitive tools for beginners and professionals, delivering fast
              onboarding and responsive support.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        The deployment of CryptoSkope redefined security and accessibility in
        decentralized finance. By combining AI, blockchain, and smart
        governance, the platform delivered an unprecedented level of trust,
        efficiency, and transparency. DanteLabs’ technical leadership enabled
        CryptoSkope to achieve rapid adoption, measurable impact, and a scalable
        foundation for the evolving DeFi landscape—empowering both individuals
        and institutions to engage with decentralized finance with confidence.
      </p>
    </ProjectPageLayout>
  );
};

export default CryptoSkope;
