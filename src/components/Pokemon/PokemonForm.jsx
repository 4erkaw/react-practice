import { Component } from "react";
import { Notify } from "notiflix";

export default class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };

  handleNameChange = (e) => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.pokemonName.trim() === "") {
      return Notify.warning("lox");
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">Find</button>
      </form>
    );
  }
}
