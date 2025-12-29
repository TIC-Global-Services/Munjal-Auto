
import { useState, useRef, useEffect } from "react";
import ytbanner from "../../assets/ytbanner.png";
import { Play, Pause } from "lucide-react";
import munjalvideo from "../../assets/home/munjalvideo.mp4";
export const YouTubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-6xl px-5 sm:px-5 md:px-5 lg:px-10 xl:px-14 my-20 aspect-video mx-auto rounded-3xl overflow-hidden " onClick={handleTogglePlay}>
      {!isPlaying ? (
        <div className="relative cursor-pointer group w-full h-full" >
          {/* Placeholder Image */}
          <img src={ytbanner} alt="Video Thumbnail" className="w-full h-full object-cover rounded-3xl" />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-3xl">
            <Play className="text-white text-6xl opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full group">
          <video
            ref={videoRef}
            src={munjalvideo}
            className="w-full h-full object-cover rounded-3xl pointer-events-none"
            onEnded={() => setIsPlaying(false)}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button onClick={handleTogglePlay} className="text-white text-6xl opacity-80 hover:opacity-100 transition-opacity">
              {isPlaying ? <Pause /> : <Play />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
