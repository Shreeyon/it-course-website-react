import React from "react";

import Header from "../partials/Header";
import HeroTestimonials from "../partials/HeroTestimonials";
import Clients from "../partials/Clients";
import VideoTestimonial from "../partials/VideoTestimonial";
import TestimonialsCarousel from "../partials/TestimonialsCarousel";
import TestimonialsCircles from "../partials/TestimonialsCircles";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
function PaymentCancelled() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative">
          {/* Background image */}
          <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-25"
              src={require("../images/hero-bg-02.jpg").default}
              width="1440"
              height="577"
              alt="Testimonials"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
              aria-hidden="true"
            ></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <h1
                  className="h1 font-red-hat-display mb-4"
                  data-aos="fade-down"
                >
                  Oh no - your purchase was unsuccesful.
                </h1>
                <p
                  className="text-xl text-gray-600 dark:text-gray-400"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  Please retry purchasing
                </p>
                <div className="mt-8" data-aos="fade-down" data-aos-delay="300">
                  <Link
                    className="btn text-white bg-teal-500 hover:bg-teal-400 ml-3"
                    to="/"
                  >
                    Purchase Course
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default PaymentCancelled;
