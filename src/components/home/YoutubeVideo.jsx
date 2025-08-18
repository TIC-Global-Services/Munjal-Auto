
import { useState } from "react";
import ytbanner from "../../assets/ytbanner.png";

export const YouTubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full   max-w-6xl md:px-0 px-4 my-20 aspect-video    mx-auto rounded-3xl overflow-hidden bg-gray-100">
      {!isPlaying ? (
        <div className="relative cursor-pointer group" onClick={handlePlay}>
          {/* Placeholder Image */}
          <img
            src={ytbanner}
            alt="Video thumbnail"
            className="w-full md:rounded-none rounded-lg aspect-video object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0  hidden md:flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
            <svg
              width="68"
              height="48"
              viewBox="0 0 68 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-100 group-hover:scale-110 transition-transform duration-200"
            >
              <path
                d="M66.52 7.74C65.74 4.81 64.03 2.33 61.1 1.55C55.79 0.13 34 0 34 0C34 0 12.21 0.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74C0.0600001 13.05 0 24 0 24C0 24 0.0600001 34.95 1.48 40.26C2.26 43.19 3.97 45.67 6.9 46.45C12.21 47.87 34 48 34 48C34 48 55.79 47.87 61.1 46.45C64.03 45.67 65.74 43.19 66.52 40.26C67.94 34.95 68 24 68 24C68 24 67.94 13.05 66.52 7.74Z"
                fill="#FF0000"
              />
              <path d="M45 24L27 14V34" fill="white" />
            </svg>
          </div>

          <div className="absolute  inset-0  md:hidden  flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
            <svg
              width="28"
              height="48"
              viewBox="0 0 68 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-100 group-hover:scale-110 transition-transform duration-200"
            >
              <path
                d="M66.52 7.74C65.74 4.81 64.03 2.33 61.1 1.55C55.79 0.13 34 0 34 0C34 0 12.21 0.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74C0.0600001 13.05 0 24 0 24C0 24 0.0600001 34.95 1.48 40.26C2.26 43.19 3.97 45.67 6.9 46.45C12.21 47.87 34 48 34 48C34 48 55.79 47.87 61.1 46.45C64.03 45.67 65.74 43.19 66.52 40.26C67.94 34.95 68 24 68 24C68 24 67.94 13.05 66.52 7.74Z"
                fill="#FF0000"
              />
              <path d="M45 24L27 14V34" fill="white" />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video rounded-3xl"
        />
      )}
    </div>
  );
};
