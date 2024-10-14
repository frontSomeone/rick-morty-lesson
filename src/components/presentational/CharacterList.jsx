import { CharacterItem } from "./CharacterItem";
import { useCharacters } from "../hooks/useCharacters";

export const CharacterList = ({ ids }) => {
    const { characters, isLoading } = useCharacters(ids); 
    if (isLoading) {
      return <div className="loading">Загрузка...</div>;
    }
    if (Object.keys(ids).length === 0) {
      return <div className="undefinedChar">Персонажи отсутствуют</div>;
    }
    if (Object.keys(ids).length === 1) {
      return (
        <div className="characters-container">
            <CharacterItem key={characters.id} character={characters} />
        </div>
      );
    }
  return (
    <div className="characters-container">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};
