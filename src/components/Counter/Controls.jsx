import s from "./Counter.module.css";

export default function Controls({ onIncrement, onDecrement }) {
  return (
    <div className={s.controls}>
      <button type="button" onClick={onIncrement}>
        Increase
      </button>
      <button type="button" onClick={onDecrement}>
        Decrease
      </button>
    </div>
  );
}
