import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./video.scss";
import 'videojs-errors';

/**
 * Renders <Video /> component
 * 
 */

const Video = ({ url, type }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const onReady = (player) => {
    playerRef.current = player;
    
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  useEffect(() => {
    const options = {
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: url,
          type,
        },
      ],
    } ;
    let player;
    

    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      player = (playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        onReady && onReady(player);
        
      }));
    } else {
      // you can update player here [update player through props]
      player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
      
    }

    player.addClass('vjs-my-video-player');

  });

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered vjs-show-big-play-button-on-pause" />
    </div>
  );
};

export default Video;
