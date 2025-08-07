import { createContext, useContext } from "react";

export const SongContext = createContext({
    tracks: [],
    mood: "happy",
    changeMood: () => {},
    
});

export const SongProvider = SongContext.Provider;

export const useSong = () => {
    return useContext(SongContext);
}