import { createContext, useContext } from "react";

export const SongContext = createContext({
    songs: [],
    
});

export const SongProvider = SongContext.Provider;

export const useSong = () => {
    return useContext(SongContext);
}