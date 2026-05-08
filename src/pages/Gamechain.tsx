import ProjectPageLayout from "@/components/ProjectPageLayout";
import SEO from "@/components/SEO";
import {
  Footprints,
  Zap,
  LineChart,
  Award,
  Sparkles,
  FlaskConical,
} from "lucide-react";

const Gamechain = () => {
  return (
    <ProjectPageLayout
      title="Gamechain Studio"
      subtitle="Next-generation blockchain-powered NFT marketplace innovation"
      imageUrl="https://i.ibb.co/7JW39g1r/NFTandgame.jpg"
      brandName="Metaverse"
    >
      <SEO
        title="Gamechain Studio Project"
        description="Next-generation blockchain-powered NFT marketplace innovation"
        type="article"
      />

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">
          Ongoing R&D Project — Currently in Prototyping Phase
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">Case Study: Gamechain Studio</h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          A leading digital entertainment company partnered with DanteLabs
          Blockchain to develop Gamechain Studio, a cutting-edge NFT marketplace
          designed specifically for gamers and digital creators. Their vision
          was to enable secure ownership, seamless trading, and dynamic
          interaction with gaming assets and collectibles on a decentralized
          platform, empowering creators and players alike.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Traditional digital asset marketplaces often suffer from fragmentation,
        lack of transparency, and limited cross-platform interoperability.
        Gamers faced difficulties proving true ownership of in-game items and
        collectibles, while creators struggled with monetization and fair
        royalty distribution. The industry demanded a transparent, user-friendly
        marketplace that could securely manage digital ownership while fostering
        a vibrant community.
      </p>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        DanteLabs Blockchain developed Gamechain Studio, an NFT marketplace
        platform integrating advanced blockchain technologies and user-centric
        features:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Footprints className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Secure NFT Minting & Trading
            </h4>
            <p>
              Enable gamers and creators to mint unique, provably scarce NFTs
              representing in-game assets, skins, and collectibles.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Immutable Ownership Records
            </h4>
            <p>
              All transactions and NFT ownership are securely recorded on-chain,
              ensuring transparency and preventing fraud.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <LineChart className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Cross-Platform Compatibility
            </h4>
            <p>
              A unified marketplace accessible via desktop and mobile,
              supporting multiple blockchain protocols for wide asset
              interoperability.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Award className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Creator Royalties & Token Incentives
            </h4>
            <p>
              Automated smart contracts handle royalty payments and reward users
              with native tokens for participation and engagement.
            </p>
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold mb-4">Key Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>User-Owned NFT Wallets with full control over digital assets</li>
        <li>
          Dynamic NFT Profiles showcasing player achievements and collectible
          histories
        </li>
        <li>
          Real-Time Marketplace Data with blockchain-verified listings and
          trades
        </li>
        <li>Robust Security against counterfeit and unauthorized transfers</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Preliminary Results</h3>
      <p>
        Early prototype testing demonstrated enhanced user trust through
        transparent ownership verification and seamless marketplace
        transactions. Gamechain Studio’s blockchain foundation enabled new
        revenue streams for creators and introduced tokenized incentives to
        encourage community growth and active trading.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <Sparkles className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">
            Development Roadmap
          </h4>
          <p>
            DanteLabs Blockchain continues to collaborate with the client on
            refining user experience, expanding blockchain integrations, and
            launching Gamechain Studio’s public beta, aiming to revolutionize
            how gamers and creators connect, trade, and monetize digital assets
            on a secure, decentralized platform.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default Gamechain;
