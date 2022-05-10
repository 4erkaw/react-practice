import { useState } from "react";
import { Notify } from "notiflix";

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState("");

  const handleNameChange = (e) => {
    const { value } = e.currentTarget;
    setPokemonName(value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokemonName.trim() === "") {
      return Notify.warning("lox");
    }
    onSubmit(pokemonName);
    setPokemonName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">Find</button>
    </form>
  );
}

// export default class PokemonForm extends Component {
//   state = {
//     pokemonName: "",
//   };

//   handleNameChange = (e) => {
//     this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.pokemonName.trim() === "") {
//       return Notify.warning("lox");
//     }
//     this.props.onSubmit(this.state.pokemonName);
//     this.setState({ pokemonName: "" });
//   };

//   render() {
//     const { pokemonName } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           name="pokemonName"
//           value={pokemonName}
//           onChange={this.handleNameChange}
//         />
//         <button type="submit">Find</button>
//       </form>
//     );
//   }
// }
