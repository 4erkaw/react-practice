const API = "https://pokeapi.co/api/v2/pokemon/";

export function fetchPokemon(name) {
  return fetch(`${API}${name}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Pokemon ${name} dead inside`));
  });
}
