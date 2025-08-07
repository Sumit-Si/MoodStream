import { useEffect, useState } from "react";
import axiosInstance from "../libs/axios";

const useSearchTrack = (mood) => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTrackByMood = async () => {
    try {
      const res = await axiosInstance.post(
        `${import.meta.env.VITE_RAPID_API_BASE_URL}/search`,
        {
          params: {
            q: mood,
            type: "tracks",
            limit: 10,
          },
        }
      );

      console.log(res, "response");
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    fetchTrackByMood();
  }, []);

  return { loading, error, tracks };
};

export default useSearchTrack;
