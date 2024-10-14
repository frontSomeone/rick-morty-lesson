import { useState } from "react";
import { EpisodeList } from "./EpisodeList";
import { LocationsList } from "./LocationsList";

export const RickAndMorty = () => {
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  return (
    <div>
      <div className="container" onClick={() => setShowEpisodes(true)}>
        <h1 className="episodesList">Показать все эпизоды</h1>
        {showEpisodes && <EpisodeList/>}
      </div>
      <div className="container" onClick={() => setShowLocations(true)}>
        <h1 className="locationsList">Показать все локации</h1>
        {showLocations && <LocationsList/>}
      </div>
    </div>
  );
};