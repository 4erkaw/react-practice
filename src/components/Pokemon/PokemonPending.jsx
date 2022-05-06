import { ImSpinner9 } from "react-icons/im";
import PokemonData from "./PokemonData";
import pendingImage from "./img/pendingCat.jpg";

export default function PokemonPending({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div role="alert">
      <div>
        <ImSpinner9 size="32" className="icon-spin" />
        Loading...
      </div>
      <PokemonData pokemon={pokemon} />
    </div>
  );
}
