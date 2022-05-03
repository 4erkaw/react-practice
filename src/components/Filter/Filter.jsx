export default function Filter({ value, onChange }) {
  return (
    <label>
      Filter by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
