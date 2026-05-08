import ProjectPageLayout from "@/components/ProjectPageLayout";
import {
  Thermometer,
  ShieldCheck,
  Mountain,
  FileSymlink,
  Cpu,
  FlaskConical,
} from "lucide-react";

const GovernanceDao = () => {
  return (
    <ProjectPageLayout
      title="Decentralized DAO Governance"
      subtitle="Blockchain-powered intelligent governance for resilient decentralized organizations"
      imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
      brandName="International"
    >
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">
          Ongoing R&D Project — Currently in Prototyping Phase
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">
        Case Study: Decentralized DAO Governance
      </h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          A pioneering collective of global stakeholders partnered with
          DanteLabs Blockchain to develop next-generation decentralized
          autonomous organizations (DAOs) capable of intelligent, adaptive
          governance. The goal was to create a platform that integrates dynamic
          decision-making, transparent operations, and tamper-proof governance
          data, enabling resilient organizations across industries and
          geographies.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Traditional governance models in DAOs often struggle with voter apathy,
        opaque decision processes, and slow adaptation to changing conditions.
        Many lack real-time transparency and verifiable records of compliance or
        participation, undermining trust and scalability. The client needed a
        smart, adaptive, and fully transparent governance solution with
        immutable on-chain audit trails to ensure accountability and compliance.
      </p>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        DanteLabs Blockchain delivered a comprehensive DAO governance platform,
        combining AI-powered decision support with blockchain-secured
        transparency:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Thermometer className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Adaptive Voting & Proposal System
            </h4>
            <p>
              AI-driven prioritization and dynamic quorum adjustments optimize
              governance efficiency based on member participation and
              organizational needs.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cpu className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Blockchain Governance Ledger
            </h4>
            <p>
              All proposals, votes, and compliance data are immutably recorded
              on-chain, guaranteeing transparency and tamper-proof auditability.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <ShieldCheck className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              AI-Powered Governance Assistant
            </h4>
            <p>
              Learns organizational patterns and member preferences to recommend
              proposals, flag risks, and streamline decision-making workflows.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Mountain className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Security & Compliance
            </h4>
            <p>
              Smart contract-enforced rules ensure policy adherence and
              regulatory compliance with fully auditable on-chain proof.
            </p>
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Modular governance architecture supporting flexible DAO models</li>
        <li>
          Token-weighted voting with real-time participation metrics logged
          on-chain
        </li>
        <li>
          Mobile and desktop apps for seamless member engagement and governance
          tracking
        </li>
        <li>Automated compliance reporting through smart contracts</li>
        <li>Secure multi-signature and role-based access control</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Preliminary Results</h3>
      <p>
        Early prototypes demonstrated significant improvements in voter
        engagement, decision turnaround time, and transparent reporting. The
        blockchain-backed governance ledger increased stakeholder trust by
        ensuring that all governance actions are verifiable and immutable.
        AI-enhanced workflows reduced administrative overhead while maintaining
        compliance with evolving regulatory frameworks.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            Ongoing Development
          </h4>
          <p>
            Current R&D efforts focus on expanding AI-driven risk assessment
            tools, integrating decentralized identity solutions, and developing
            token-based incentive mechanisms to encourage active and responsible
            participation within the DAO ecosystem.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default GovernanceDao;
