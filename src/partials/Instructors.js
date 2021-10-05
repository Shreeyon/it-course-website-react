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
              </div>
              {/* Articles container */}
              <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">
                {/* 1st article */}
                <article className="flex flex-col h-full">
                  <header>
                    <Link className="block mb-4">
                      <figure className="relative h-0 pb-9/16">
                        <img
                          className="absolute  w-half object-cover"
                          src={require("../images/matric-results.png").default}
                          width="352"
                          height="198"
                          alt="News 01"
                        />
                      </figure>
                    </Link>
                    <Link className="hover:underline">
                      <h3 className="h4 font-red-hat-display mb-2">
                        Taufeeq Razak
                      </h3>
                    </Link>
                  </header>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    Taufeeq achieved an astounding 96% percent for the I.T
                    matric finals in 2019. In addition, Taufeeq won the prize
                    for the most creative PAT in the national competition. His
                    expert teaching style guarantee's that you can achieve
                    similiar results.
                  </p>
                </article>

                {/* 2nd article */}
                <article className="flex flex-col h-full">
                  <header>
                    <Link className="block mb-4">
                      <figure className="relative h-0 pb-9/16">
                        <img
                          className="absolute inset-0 w-full h-full object-cover"
                          src={require("../images/news-04.jpg").default}
                          width="352"
                          height="198"
                          alt="News 02"
                        />
                      </figure>
                    </Link>
                    <Link className="hover:underline">
                      <h3 className="h4 font-red-hat-display mb-2">
                        Shreeya Khoosal
                      </h3>
                    </Link>
                  </header>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    Shreeya finished at the top of her I.T. class and received
                    94% for her IEB Finals. She has been tutoring for several
                    years and has run Matric Finals Prep workshops for
                    Growthpoint’s development programme. Shreeya is intensely
                    committed to empowering herself and others through
                    education. She believes that every student has the ability
                    to improve if given the right guidance and support.
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
