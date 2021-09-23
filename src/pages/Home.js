import React from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import Stats from "../partials/Stats";
import PricingTables from "../partials/PricingTables";
import TestimonialsBlocks from "../partials/TestimonialsBlocks";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";
import Instructors from "../partials/Instructors";
import Tabs from "../partials/Tabs";
function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
        {/*  Page sections */}
        <HeroHome />
        <Instructors />
        <Cta />
        <TestimonialsBlocks />
        <Tabs />
        <PricingTables />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
