import { Film } from "lucide-react";
import React from "react";

const VideoMedia = () => {
  return (
    <div className="relative group cursor-pointer">
      <div className="text-lg text-purple-500">
        <Film />
      </div>
      <span className="absolute whitespace-nowrap right-11 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold rounded-md px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Video & media
      </span>
    </div>
  );
};

export default VideoMedia;
