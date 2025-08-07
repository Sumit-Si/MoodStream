import { ChevronLeft, Heart, Loader2, Play, PlayCircleIcon } from "lucide-react";
import React from "react";
import { useSong } from "../context/SongContext";
import { useNavigate } from "react-router-dom";
import useSearchTrack from "../hooks/useSearchTrack";

function Track() {
  const navigate = useNavigate();
  const {mood} = useSong();
  const {loading,error,tracks} = useSearchTrack(mood);

  if(loading) return <h3><Loader2 className="animate-spin w-5" /> Loading...</h3>
  
  return (
    <div className="p-5 relative">
      <div className="">
        <button onClick={() => navigate(-1)} className="py-1 px-3 text-sm font-semibold rounded-full cursor-pointer hover:opacity-80 bg-base-300 flex items-center"><ChevronLeft className="w-4 h-4" /> Back</button>
        <h1 className="text-3xl font-bold mb-4 capitalize mt-3">Mood: <span className="text-primary font-semibold">{mood}</span></h1>
        <p className="text-base-content/80">
          Playlist for when you're feeling upbeat and ready to go
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between my-8">
        <div className="flex-3/5">
          <h3 className="text-xl font-bold">Energetic Mix</h3>
          <p className="text-base-content/80 mb-3">
            A mix of high-energy tracks to keep you moving
          </p>
          <button className="py-1 px-6 rounded-lg bg-base-300 text-sm font-semibold">
            Play
          </button>
        </div>
        <div className="flex-1/5 flex justify-end overflow-hidden">
          <img
            className="h-52 w-52 object-cover object-center rounded-lg"
            src="https://images.pexels.com/photos/12488665/pexels-photo-12488665.jpeg"
            alt="track img"
          />
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Recommended Tracks</h3>
        <div className="flex gap-2 flex-col">
          <div className="flex justify-between items-center p-2 gap-1">
            <div className="flex gap-3 items-center">
              <div className="rounded-lg bg-base-300 p-2">
                <img
                  className="w-10 h-10 object-cover object-center"
                  src="https://images.pexels.com/photos/12488665/pexels-photo-12488665.jpeg"
                  alt="song img"
                />
              </div>
              <div>
                <h4 className="font-semibold">Song title</h4>
                <h5 className="text-sm text-base-content/80">Artist 1</h5>
              </div>
            </div>
            <div>
              <Heart />
            </div>
          </div>
          <div className="flex justify-between items-center p-2 gap-1">
            <div className="flex gap-3 items-center">
              <div className="rounded-lg bg-base-300 p-2">
                <img
                  className="w-10 h-10 object-cover object-center"
                  src="https://images.pexels.com/photos/12488665/pexels-photo-12488665.jpeg"
                  alt="song img"
                />
              </div>
              <div>
                <h4 className="font-semibold">Song title</h4>
                <h5 className="text-sm text-base-content/80">Artist 1</h5>
              </div>
            </div>
            <div>
              <Heart />
            </div>
          </div>
          <div className="flex justify-between items-center p-2 gap-1">
            <div className="flex gap-3 items-center">
              <div className="rounded-lg bg-base-300 p-2">
                <img
                  className="w-10 h-10 object-cover object-center"
                  src="https://images.pexels.com/photos/12488665/pexels-photo-12488665.jpeg"
                  alt="song img"
                />
              </div>
              <div>
                <h4 className="font-semibold">Song title</h4>
                <h5 className="text-sm text-base-content/80">Artist 1</h5>
              </div>
            </div>
            <div>
              <Heart />
            </div>
          </div>
          <div className="flex justify-between items-center p-2 gap-1">
            <div className="flex gap-3 items-center">
              <div className="rounded-lg bg-base-300 p-2">
                <img
                  className="w-10 h-10 object-cover object-center"
                  src="https://images.pexels.com/photos/12488665/pexels-photo-12488665.jpeg"
                  alt="song img"
                />
              </div>
              <div>
                <h4 className="font-semibold">Song title</h4>
                <h5 className="text-sm text-base-content/80">Artist 1</h5>
              </div>
            </div>
            <div>
              <Heart />
            </div>
          </div>
          <div className="flex justify-between items-center p-2 gap-1">
            <div className="flex gap-3 items-center">
              <div className="rounded-lg bg-base-300 p-2">
                <img
                  className="w-10 h-10 object-cover object-center"
                  src="https://images.pexels.com/photos/12488665/pexels-photo-12488665.jpeg"
                  alt="song img"
                />
              </div>
              <div>
                <h4 className="font-semibold">Song title</h4>
                <h5 className="text-sm text-base-content/80">Artist 1</h5>
              </div>
            </div>
            <div>
              <Heart />
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-1 bg-base-200 rounded-lg shadow-md shadow-base-content/20">
        <div className="flex justify-between items-center p-3 gap-1">
          <div className="flex gap-3 items-center">
            <div className="rounded-lg bg-base-300 p-2">
              <img
                className="w-10 h-10 object-cover object-center"
                src="https://images.pexels.com/photos/12488665/pexels-photo-12488665.jpeg"
                alt="song img"
              />
            </div>
            <div>
              <h4 className="font-bold">Current Song title</h4>
              <h5 className="text-sm text-base-content/80">Current Artist 1</h5>
            </div>
          </div>
          <div className="bg-primary p-2 rounded-full shadow-md shadow-primary/50">
            <Play className="text-base-300 fill-base-300 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
