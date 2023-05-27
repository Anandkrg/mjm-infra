import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import videobg from "../../assets/video-row.jpg";

const VideoSec = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="maib-con video-row"
        style={{ backgroundImage: "url(" + videobg + ")" }}
      >
        <div className="container">
          <a className="play-btn popup-youtube" href="video/banner-video.mp4">
            <span></span>
          </a>
        </div>
      </div>

      <ModalVideo
        className="maib-con video-row"
        style={{ backgroundImage: "url(" + videobg + ")" }}
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      >
        <div className="container">
          <button
            className="play-btn popup-youtube btn-primary"
            onClick={() => setOpen(true)}
          >
            <span></span>
          </button>
        </div>
      </ModalVideo>
    </>
  );
};

export default VideoSec;
