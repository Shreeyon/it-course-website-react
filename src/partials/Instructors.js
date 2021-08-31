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
                    <Link className="block mb-4" to="/blog-post">
                      <figure className="relative h-0 pb-9/16">
                        <img
                          className="absolute inset-0 w-half h-full object-cover"
                          src={require("../images/matric-results.png").default}
                          width="352"
                          height="198"
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
                    <Link className="block mb-4" to="/blog-post">
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
                    <Link className="hover:underline" to="/blog-post">
                      <h3 className="h4 font-red-hat-display mb-2">
                        Shreeya Khoosal
                      </h3>
                    </Link>
                  </header>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    Shreeya achieved an sublime 94% percent for the I.T matric
                    finals in 2019. Praised as an expert tutor in her field,
                    their is no doubt that she will enable you to ace your
                    matric I.T practical finals.
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
