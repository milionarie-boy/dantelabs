import ProjectPageLayout from "@/components/ProjectPageLayout";
import { Activity, Gauge, Flag, Users, BarChart3 } from "lucide-react";

const HockeyProject = () => {
  return (
    <ProjectPageLayout
      title="TechCorp International"
      subtitle="Blockchain-powered supply chain transparency for global enterprises"
      imageUrl="/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png"
      brandName="Mars Blades"
    >
      <h2 className="text-3xl font-bold mb-6">
        Case Study: Supply Chain Transparency Platform
      </h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          A global logistics and manufacturing conglomerate approached DanteLabs
          Blockchain to develop a next-generation supply chain transparency
          system. Their objective was to create a platform that delivers
          real-time tracking, secure data sharing, and automated compliance
          across complex, multi-tier supply chains—improving operational
          efficiency, accountability, and stakeholder trust.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Previous attempts to measure hockey performance relied on multiple
        external sensors or camera systems that were cumbersome, expensive, and
        limited to controlled environments. Mars Blades needed a solution that
        was simple enough for daily use but sophisticated enough to capture the
        nuanced movements that differentiate elite players, particularly
        focusing on acceleration, speed transitions, and maneuverability on ice.
      </p>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        DanteLabs Blockchain developed the TechCorp SupplyChain Trust Platform,
        combining IoT data capture, blockchain-secured records, and smart
        contract automation for seamless global logistics:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Activity className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              IoT-Driven Asset Monitoring
            </h4>
            <p>
              Sensor-equipped containers, vehicles, and products enable
              real-time data collection on location, temperature, humidity,
              vibration, and more.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Gauge className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Blockchain-Backed Traceability
            </h4>
            <p>
              Every event—from production to final delivery—is immutably
              recorded on-chain, ensuring full transparency and auditability.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Flag className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Smart Contract Automation
            </h4>
            <p>
              Compliance checks, payments, and event-triggered alerts are
              executed via programmable smart contracts, reducing human error
              and accelerating operations.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Users className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Stakeholder Dashboards
            </h4>
            <p>
              Role-based interfaces give manufacturers, logistics providers,
              retailers, and regulators secure access to relevant supply chain
              data.
            </p>
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold mb-4">System Components</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>
          IoT-integrated tracking modules for cargo, fleet, and warehouse
          environments
        </li>
        <li>
          Smart contracts for SLA enforcement, milestone verification, and
          automated invoicing
        </li>
        <li>
          Multi-device web & mobile dashboards for real-time monitoring and
          anomaly detection
        </li>
        <li>
          Blockchain nodes distributed across stakeholders to ensure
          decentralized trust
        </li>
        <li>
          AI-enhanced analytics for forecasting, risk detection, and process
          optimization
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">End-to-End Visibility</h4>
            <p>
              Track assets across geographies and partners in real-time with
              blockchain-verified data integrity.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Fraud & Error Reduction</h4>
            <p>
              Immutable records and smart contract automation reduce fraud,
              counterfeiting, and human error in logistics.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Regulatory Compliance</h4>
            <p>
              Automatically log compliance data for certifications,
              import/export regulations, and audit readiness.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">
            ✓
          </div>
          <div>
            <h4 className="font-semibold">Operational Efficiency</h4>
            <p>
              Real-time anomaly alerts, automated SLA enforcement, and
              predictive analytics streamline global operations.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        The TechCorp SupplyChain Trust Platform has been deployed across pilot
        networks in Asia, Europe, and North America. Early results show reduced
        delays, improved compliance reporting, and enhanced traceability.
        Enterprises using the system report higher partner accountability and
        significant cost savings through automated logistics workflows.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <BarChart3 className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            Research Impact
          </h4>
          <p>
            The platform’s data has supported academic and commercial studies on
            resilient logistics, sustainability tracking, and the future of
            autonomous supply chains. DanteLabs Blockchain continues to innovate
            with TechCorp International, laying the foundation for a scalable,
            transparent, and intelligent global supply network.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default HockeyProject;
