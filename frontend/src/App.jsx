import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VideoPlayer from "./VideoPlayer";
// import VideoPlayer from './videoPlayer'
import { useRef } from "react";

function App() {
  const playerRef = useRef(null);
  const videoLink =
    "http://localhost:8000/uploads/courses/26c9b221-7864-424d-afdb-42d2862b9b2c/index.m3u8";

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div className="App">
        <div>
          <h1>Welcome to ClipBox!</h1>
        </div>
        <VideoPlayer
          options={videoPlayerOptions}
          onPlayerReady={handlePlayerReady}
        />
      </div>
    </>
  );
}

export default App;
