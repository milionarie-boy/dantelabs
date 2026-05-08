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
          CryptoSkope was conceived with the mission to enhance transparency,
          security, and efficiency in decentralized finance. As DeFi adoption
          accelerates, users and institutions face increasing concerns about
          on-chain data integrity, smart contract vulnerabilities, and the
          complexity of managing decentralized assets. DanteLabs identified an
          opportunity to build a secure, scalable, and user-friendly platform to
          support a new wave of decentralized financial operations.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Existing DeFi solutions often suffer from limited transparency, complex
        user interfaces, and poor real-time monitoring tools. Many platforms
        fail to offer trustworthy data verification, while centralized or opaque
        contract models expose users to risk. The market demands a system that
        offers security, clarity, and seamless integration without compromising
        decentralization.
      </p>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        DanteLabs Technologies is developing CryptoSkope, an advanced DeFi
        framework built on blockchain and secured by smart contract automation.
        The current prototype demonstrates:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Smart Contract Engine
            </h4>
            <p>Core contracts developed; undergoing internal testing</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Radio className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Decentralized Dashboard
            </h4>
            <p>
              Basic UI/UX mockups implemented; role-based visibility in testing
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Box className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Integrated Access Control
            </h4>
            <p>Proof-of-concept completed for decentralized permissioning</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Governance Suite
            </h4>
            <p>
              Voting module prototyped; proposal framework under development
            </p>
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold mb-4">
        Critical Features (In Development)
      </h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>
          Smart Risk Scanner — Early-stage development for proactive threat
          detection
        </li>
        <li>
          On-Chain Performance Metrics — Data pipeline established; dashboard
          pending
        </li>
        <li>
          DeFi Wallet Integration — Testnet connectivity achieved; mainnet
          pending
        </li>
        <li>
          Governance Voting Module — Prototype functional in sandbox environment
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4 mt-8">
        Potential Benefits (Target Outcomes)
      </h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Trustless Transparency</h4>
            <p>Designed for blockchain-native real-time visibility</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Adaptive Intelligence</h4>
            <p>Machine learning planned for future releases</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Security at Scale</h4>
            <p>Architecture built for immutable contracts and encryption</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Minimal Upkeep</h4>
            <p>Auto-updating protocols in design phase</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">User-Centric Design</h4>
            <p>UI/UX research completed; wireframes developed</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Next Steps</h3>
      <p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Complete governance module development (Q3 2026)</li>
          <li>Launch private testnet pilot with selected partners (Q4 2026)</li>
          <li>Incorporate feedback and iterate on prototype features</li>
          <li>Prepare for beta release (targeting Q1 2027)</li>
        </ul>
      </p>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Current Outlook</h3>
      <p>
        CryptoSkope represents an ambitious R&D initiative to redefine security
        and accessibility in decentralized finance. By combining AI, blockchain,
        and smart governance, the platform aims to deliver trust, efficiency,
        and transparency. DanteLabs' technical leadership is laying the
        foundation for a scalable DeFi solution to empower individuals and
        institutions once the prototype matures into a production-ready product.
      </p>
    </ProjectPageLayout>
  );
};

export default CryptoSkope;
