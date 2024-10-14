import { useLocations } from "../hooks/useLocations";
import { CharacterList } from "./CharacterList";
import { LocationsItem } from "./LocationsItem";

export const LocationsList = () => {
    const { locations } = useLocations();
    return (
        <div>
      {locations.map((location) => (
            <LocationsItem
                key={location.id}
                className="episode"
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                content={
                  <CharacterList
                    ids={location.residents.map((resident) => {
                      const id = resident.split("/").pop();
                      return id;
                    })}
                  />}
            />
      ))}
    </div>
    )
}