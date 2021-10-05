import React, { useState } from "react";

import Modal from "../../utils/Modal";
export default function VideoSingle(props) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  return (
    <div className={props.isVisible ? undefined : "hidden"}>
      <div className="relative">
        <img
          className="w-full"
          src={require("../../images/logo.png").default}
          width="352"
          height="264"
          alt="Video thumbnail 01"
        />
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-grow flex justify-center items-center">
            <a
              className="hover:opacity-75 transition duration-150 ease-in-out"
              href="#0"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setVideoModalOpen(true);
              }}
              aria-controls="modal"
            >
              <img
                src={require("../../images/play-button.svg").default}
                width="72"
                height="72"
                alt="Play icon"
              />
            </a>
          </div>
          <div className="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center">
            <a
              className="text-gray-900 dark:text-gray-400 font-medium"
              href="#0"
            >
              {props.title}
            </a>
            <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">
              {props.length}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        id="modal"
        ariaLabel="modal-headline"
        show={videoModalOpen}
        handleClose={() => setVideoModalOpen(false)}
      >
        <div className="relative pb-9/16">
          <iframe
            className="absolute w-full h-full"
            src={props.videoUrl}
            title="Video"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}
