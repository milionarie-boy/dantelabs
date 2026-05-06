import { motion } from "framer-motion";
import {
  Database,
  Gauge,
  Cpu,
  Bluetooth,
  Battery,
  Server,
  ArrowRight,
  Smartphone,
  Code,
  Wifi,
  Cloud,
  MonitorSmartphone,
  FileText,
  Link,
  LinkIcon,
  Copy,
  Coins,
} from "lucide-react";

const ProductPlatform = () => {
  return (
    <div className="w-full relative">
      {/* Product Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Product
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl">
          With 5+ years invested into building an end-to-end blockchain
          platform, DanteLabs empowers enterprises and developers to own their
          ecosystem — from token economics to branding, governance, and user
          experience. We support the entire product lifecycle, including
          protocol design, smart contract development, compliance certification,
          token launch, and dApp integration.
        </p>
      </motion.div>

      {/* Platform Architecture - Three Column Layout for desktop, Vertical for mobile */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* On-Chain Layer Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-1">
              On-Chain Layer
            </h3>
            <p className="text-xs sm:text-sm text-center mb-4">
              Data Input & Execution
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: <Gauge className="text-black w-4 h-4 sm:w-5 sm:h-5" />,
                  text: "Smart Contracts (DeFi, NFTs, DAOs)",
                },
                {
                  icon: <Cpu className="text-black w-4 h-4 sm:w-5 sm:h-5" />,
                  text: "Consensus Protocols (PoS / PoW)",
                },
                {
                  icon: (
                    <Bluetooth className="text-black w-4 h-4 sm:w-5 sm:h-5" />
                  ),
                  text: "Token Standards (ERC-20, ERC-721, custom modules)",
                },
                {
                  icon: (
                    <Battery className="text-black w-4 h-4 sm:w-5 sm:h-5" />
                  ),
                  text: "Decentralized Identity & Authentication",
                },
                {
                  icon: (
                    <Database className="text-black w-4 h-4 sm:w-5 sm:h-5" />
                  ),
                  text: "Blockchain Storage & Ledgers",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 sm:p-4 flex items-center"
                >
                  <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              This layer ensures trustless execution, transparency,
              <br />
              and immutability of all transactions.
            </p>
          </div>
        </motion.div>

        {/* Flow Arrows - Mobile and Desktop have different appearance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="text-black w-8 h-8" />
        </motion.div>

        {/* Mobile Flow Indicator - Only visible on mobile/tablet */}
        <div className="flex lg:hidden items-center justify-center my-2">
          <ArrowRight className="text-black w-6 h-6 rotate-90" />
        </div>

        {/* WRLDS Platform Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-[1.5]"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col items-center mb-3 sm:mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-0">
                DanteLabs Platform
              </h3>
              <p className="text-lg sm:text-xl font-medium text-center">
                Data Processing & Intelligence
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {[
                {
                  icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
                  name: "Blockchain Oracles",
                },
                {
                  icon: <Copy className="w-4 h-4 sm:w-5 sm:h-5" />,
                  name: "Data Bridges",
                },
                {
                  icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />,
                  name: "AI & ML",
                },
                {
                  icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />,
                  name: "Cloud & Edge Compute for scalability.",
                },
                {
                  icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
                  name: "API Gateways for developer integration",
                },
                {
                  icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />,
                  name: "Layer-2 solutions for throughput optimization",
                },
                {
                  icon: <Link className="w-4 h-4 sm:w-5 sm:h-5" />,
                  name: "Cross-chain interoperability",
                },
                {
                  icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
                  name: "Infrastructure",
                },
                {
                  icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
                  name: "Dev Tools",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center"
                >
                  <div className="mb-1 sm:mb-2">{item.icon}</div>
                  <div className="text-[10px] sm:text-xs">{item.name}</div>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              Our platform processes data and
              <br />
              powers intelligent applications
            </p>
          </div>
        </motion.div>

        {/* Flow Arrows - Desktop Only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="text-black w-8 h-8" />
        </motion.div>

        {/* Mobile Flow Indicator - Only visible on mobile/tablet */}
        <div className="flex lg:hidden items-center justify-center my-2">
          <ArrowRight className="text-black w-6 h-6 rotate-90" />
        </div>

        {/* User Applications Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex-1"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-1">
              User Applications
            </h3>
            <p className="text-xs sm:text-sm text-center mb-4">
              Data Output & Interaction
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: (
                    <MonitorSmartphone className="text-black w-4 h-4 sm:w-5 sm:h-5" />
                  ),
                  text: "Analytics Dashboards for on-chain activity",
                },
                {
                  icon: (
                    <Smartphone className="text-black w-4 h-4 sm:w-5 sm:h-5" />
                  ),
                  text: "Web3 Mobile & Web Applications",
                },
                {
                  icon: <Coins className="text-black w-4 h-4 sm:w-5 sm:h-5" />,
                  text: "Tokenized Asset Management Interfaces",
                },
                {
                  icon: <Code className="text-black w-4 h-4 sm:w-5 sm:h-5" />,
                  text: "Governance & DAO Tools",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 sm:p-4 flex items-center"
                >
                  <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              How people interact with and
              <br />
              benefit from the collected data
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPlatform;
