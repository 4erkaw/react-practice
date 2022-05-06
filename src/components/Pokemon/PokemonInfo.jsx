import { Component } from "react";
import PokemonError from "./PokemonError";
import PokemonData from "./PokemonData";
import PokemonPending from "./PokemonPending";
import { fetchPokemon } from "./services/pokemon-api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: "",
    error: false,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const { pokemonName } = this.props;
    const prevPokemonName = prevProps.pokemonName;
    if (pokemonName !== prevPokemonName) {
      this.setState({ status: Status.PENDING });
      setTimeout(() => {
        fetchPokemon(pokemonName)
          .then((pokemon) =>
            this.setState({ pokemon, status: Status.RESOLVED })
          )
          .catch((error) => this.setState({ error, status: Status.REJECTED }));
      }, 1000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;
    if (status === "idle") {
      return <p>Enter pokemon name</p>;
    }
    if (status === "pending") {
      return <PokemonPending pokemonName={pokemonName} />;
    }
    if (status === "rejected") {
      return <PokemonError message={error.message} />;
    }
    if (status === "resolved") {
      return <PokemonData pokemon={pokemon} />;
    }
  }
}
