import React, { useState } from "react";
import CategoryButton from "./preview-course-content/CategoryButton";
import VideoSingle from "./preview-course-content/VideoSingle";

function Tabs() {
  const [category, setCategory] = useState(0);
  const categories = [
    <CategoryButton
      buttonTitle="Setting up access"
      category={category}
      isSelected={category === 0}
      setCategory={() => {
        setCategory(0);
      }}
    />,
    <CategoryButton
      buttonTitle="Setting up java"
      category={category}
      isSelected={category === 1}
      setCategory={() => {
        setCategory(1);
      }}
    />,
    <CategoryButton
      buttonTitle="First SQL question"
      category={category}
      isSelected={category === 2}
      setCategory={() => {
        setCategory(2);
      }}
    />,
    <CategoryButton
      buttonTitle="Introduction to Java"
      category={category}
      isSelected={category === 3}
      setCategory={() => {
        setCategory(3);
      }}
    />,
    <CategoryButton
      buttonTitle="First java question"
      category={category}
      isSelected={category === 4}
      setCategory={() => {
        setCategory(4);
      }}
    />,
  ];
  const videos = [
    <VideoSingle
      isVisible={category === 0}
      title="Setting up access"
      length="2 min"
    />,
    <VideoSingle
      isVisible={category === 1}
      title="Setting up java"
      length="2 min"
    />,
    <VideoSingle isVisible={category === 2} title="SQL Q1.1" length="2 min" />,
    <VideoSingle
      isVisible={category === 3}
      title="Introduction to the Java Section"
      length="2 min"
    />,
    <VideoSingle
      isVisible={category === 4}
      title="First java question"
      length="2 min"
    />,
  ];
  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div
        className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">Preview Course</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our course has been hand crafted so that you can ace your matric
              I.T finals.
            </p>
          </div>

          {/* Section content */}
          <div>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">
              {/* Category buttons */}
              <div className="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
                {categories}
              </div>

              {/* Videos */}
              <div className="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
                <div className="grid md:grid-cols-2 gap-6">{videos}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
