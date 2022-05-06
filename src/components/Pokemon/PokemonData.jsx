export default function PokemonData({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <img
        src={sprites.other["official-artwork"].front_default}
        alt={name}
        width="240"
        height="100"
      />
      <h2>{name}</h2>
      <ul>
        {stats.map(({ stat, base_stat }) => (
          <li key={stat.name}>
            {stat.name}: {base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
