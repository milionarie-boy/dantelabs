import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import WhyWrlds from "@/components/WhyWrlds";
import BlogPreview from "@/components/BlogPreview";
import SEO from "@/components/SEO";
import { useEffect } from "react";

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = "contact-footer";
    }
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Dante Labs - Decentralized Innovation"
        description="Dante Labs: Pioneering Blockchain solutions with web3 for decentralized things."
        imageUrl="https://i.ibb.co/S4pJMYnQ/dantelabs-Logo.png"
        keywords={[
          "blockchain",
          "web3",
          "solidity",
          "rust",
          "smart contract",
          "dante labs",
          "software",
        ]}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
