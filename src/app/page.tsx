"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Science",
          id: "about",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
      ]}
      brandName="PurePeptides"
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="PurePeptides"
      description="Scientific-grade peptides synthesized for performance and longevity. Experience the pinnacle of bio-hacking with laboratory-certified purity."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Our Science",
          href: "#about",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/close-up-water-glasses-bottle-with-diamond-blue-bright-background_23-2147948897.jpg"
      imageAlt="Laboratory peptide vials"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Bio-Synthesized for Absolute Purity"
      description="Our commitment to excellence starts in the lab. We utilize cutting-edge synthesis methods to ensure every peptide meets pharmaceutical grade standards, providing you with consistent, potent, and safe results every time."
      metrics={[
        {
          value: "99.9%",
          title: "Purity Standard",
        },
        {
          value: "50+",
          title: "Verified Peptides",
        },
        {
          value: "10k+",
          title: "Global Researchers",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-dark-violet-purple-bubbles-texture_23-2148205061.jpg"
      imageAlt="Protein structure research"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "BPC-157",
          price: "$89.00",
          variant: "10mg Vial",
          imageSrc: "http://img.b2bpic.net/free-photo/chocolate-drops-near-yogurt_23-2147895735.jpg",
          imageAlt: "BPC-157 Peptide",
        },
        {
          id: "2",
          name: "TB-500",
          price: "$95.00",
          variant: "5mg Vial",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-diagnoses-white-illness-team-clean_1291-20.jpg",
          imageAlt: "TB-500 Peptide",
        },
        {
          id: "3",
          name: "CJC-1295",
          price: "$120.00",
          variant: "2mg Vial",
          imageSrc: "http://img.b2bpic.net/free-photo/aluminum-tanks-storage-raw-materials-chemical-industry-sterile-conditions-enterprise_645730-734.jpg",
          imageAlt: "CJC-1295 Peptide",
        },
        {
          id: "4",
          name: "Ipamorelin",
          price: "$115.00",
          variant: "5mg Vial",
          imageSrc: "http://img.b2bpic.net/free-photo/monochrome-beauty-product-skincare_23-2151307311.jpg",
          imageAlt: "Ipamorelin Peptide",
        },
        {
          id: "5",
          name: "GHRP-6",
          price: "$85.00",
          variant: "10mg Vial",
          imageSrc: "http://img.b2bpic.net/free-photo/skincare-essentials-jade-roller-serum-cream-marble_23-2152029107.jpg",
          imageAlt: "GHRP-6 Peptide",
        },
        {
          id: "6",
          name: "Melanotan II",
          price: "$75.00",
          variant: "10mg Vial",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-selfcare-product-still-life_23-2149249548.jpg",
          imageAlt: "Melanotan II Peptide",
        },
      ]}
      title="Shop Our Premium Collection"
      description="High-potency, research-verified compounds delivered directly to your door."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "1500+",
          title: "Successful Synthesis",
          description: "Lab tested results.",
          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-boardroom-space-within-multinational-company-used-meetings_482257-124520.jpg",
        },
        {
          id: "m2",
          value: "99.9%",
          title: "Purity Rating",
          description: "Guaranteed quality.",
          imageSrc: "http://img.b2bpic.net/free-photo/unfocused-fluid-acrylic-balls_23-2148469325.jpg",
        },
        {
          id: "m3",
          value: "24/7",
          title: "Support Access",
          description: "Always available.",
          imageSrc: "http://img.b2bpic.net/free-photo/blue-technology-background_1017-3288.jpg",
        },
      ]}
      title="Precision Metrics"
      description="Proven performance in every batch we produce."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Essential",
          price: "$89",
          subtitle: "Perfect for starters",
          buttons: [
            {
              text: "Choose Plan",
              href: "#",
            },
          ],
          features: [
            "1 Peptide Vial",
            "10mg Concentration",
            "Standard Shipping",
          ],
        },
        {
          id: "p2",
          badge: "Advanced",
          price: "$249",
          subtitle: "Best value bundle",
          buttons: [
            {
              text: "Choose Plan",
              href: "#",
            },
          ],
          features: [
            "3 Peptide Vials",
            "Concentration Priority",
            "Free Express Shipping",
          ],
        },
        {
          id: "p3",
          badge: "Pro",
          price: "$499",
          subtitle: "Research level package",
          buttons: [
            {
              text: "Choose Plan",
              href: "#",
            },
          ],
          features: [
            "7 Peptide Vials",
            "Premium Purity",
            "24/7 Priority Support",
          ],
        },
      ]}
      title="Tailored Research Packages"
      description="Flexible plans designed to accommodate your specific study requirements and research goals."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Dr. Sarah Miller",
          imageSrc: "http://img.b2bpic.net/free-photo/specialist-researcher-woman-holding-vacutainer-with-infected-blood-working-biochemical-vaccine-against-coronavirus-global-pandemic-woman-specialist-analyzing-sample-hospital-laboratory_482257-32369.jpg",
        },
        {
          id: "t2",
          name: "Prof. James Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/pharmacist-work_23-2150600109.jpg",
        },
        {
          id: "t3",
          name: "Dr. Elena Rodriguez",
          imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businesswoman-smiling-standing-near-business-centre_176420-16777.jpg",
        },
        {
          id: "t4",
          name: "Dr. Marcus Thorne",
          imageSrc: "http://img.b2bpic.net/free-photo/cinematic-portrait-man-working-healthcare-system-having-care-job_23-2151237609.jpg",
        },
        {
          id: "t5",
          name: "Prof. Linda G.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-female-researcher-laboratory_23-2148776156.jpg",
        },
      ]}
      cardTitle="Verified by Professionals"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Are these peptides lab tested?",
          content: "Yes, every batch undergoes rigorous third-party chromatography and mass spectrometry testing to ensure purity and identity.",
        },
        {
          id: "f2",
          title: "How is my order shipped?",
          content: "All orders are shipped discreetly with thermal packaging when required to maintain product integrity during transit.",
        },
        {
          id: "f3",
          title: "What is the purity guarantee?",
          content: "We offer a 100% purity guarantee based on our third-party certificates of analysis provided with every product.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Clear answers to your most important research questions."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to elevate your research standards? Contact our scientific support team today for bulk orders, custom synthesis inquiries, or purity documentation."
      buttons={[
        {
          text: "Contact Support",
          href: "mailto:support@purepeptides.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
        {
          title: "Products",
          items: [
            {
              label: "Shop All",
              href: "#products",
            },
            {
              label: "Research Guide",
              href: "#",
            },
            {
              label: "Testing Reports",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
            {
              label: "Returns",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 PurePeptides. All Rights Reserved."
      bottomRightText="Laboratory Research Use Only."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
