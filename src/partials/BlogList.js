import React from "react";
import { Link } from "react-router-dom";

function Instructors() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="lg:flex lg:justify-between">
            {/* Main content */}
            <div
              className="lg:flex-grow"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <div className="max-w-3xl mx-auto text-center pb-12">
                <h2 className="h2 font-red-hat-display">
                  Taught by expert instructors
                </h2>
                <p className="text-xl text-gray-400">
                  Get taught by ex-students who have both finished in the top 1%
                  of I.T candidates in the 2019 Matric Finals
                </p>
              </div>
              {/* Articles container */}
              <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">
                {/* 1st article */}
                <article className="flex flex-col h-full">
                  <header>
                    <Link className="block mb-4" to="/blog-post">
                      <figure className="relative h-0 pb-9/16">
                        <img
                          className="absolute inset-0 w-full h-full object-cover"
                          src={require("../images/matric-taufeeq.png").default}
                          width="200"
                          height="100"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                    <Link className="hover:underline" to="/blog-post">
                      <h3 className="h4 font-red-hat-display mb-2">
                        Taufeeq Razak
                      </h3>
                    </Link>
                  </header>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </article>

                {/* 2nd article */}
                <article className="flex flex-col h-full">
                  <header>
                    <Link className="block mb-4" to="/blog-post">
                      <figure className="relative h-0 pb-9/16">
                        <img
                          className="absolute inset-0 w-full h-full object-cover"
                          src={require("../images/news-02.jpg").default}
                          width="352"
                          height="198"
                          alt="News 02"
                        />
                      </figure>
                    </Link>
                    <Link className="hover:underline" to="/blog-post">
                      <h3 className="h4 font-red-hat-display mb-2">
                        Shreeya Khoosal
                      </h3>
                    </Link>
                  </header>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Instructors;
