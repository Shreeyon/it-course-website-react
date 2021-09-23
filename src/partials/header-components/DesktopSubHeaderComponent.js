import React from "react";

import { Link } from "react-router-dom";
export default function DesktopSubHeaderComponent(props) {
  return (
    <div>
      <li>
        <button
          onClick={() => {
            window.open(props.link, "__blank");
          }}
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
        >
          {props.title}
        </button>
      </li>
    </div>
  );
}
