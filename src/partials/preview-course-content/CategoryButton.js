import React from "react";

export default function CategoryButton(props) {
  return (
    <div>
      <button
        className={`lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${
          props.isSelected &&
          "bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25"
        }`}
        onClick={props.setCategory}
      >
        <svg
          className="w-4 h-4 flex-shrink-0 mr-2"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`fill-current ${
              props.isSelected
                ? "text-teal-200 dark:text-teal-400"
                : "text-teal-500 dark:text-gray-400"
            }`}
            d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.586l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z"
          />
        </svg>
        <span
          className={
            props.isSelected
              ? "text-white dark:text-teal-400"
              : "text-gray-600 dark:text-gray-300"
          }
        >
          {props.buttonTitle}
        </span>
      </button>
    </div>
  );
}
