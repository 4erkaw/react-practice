import s from "./TodoList.module.css";

export default function TodoList({ todo, onDeleteTodo }) {
  return (
    <ul className={s.list}>
      {todo.map(({ id, text, completed }) => (
        <li key={id} className={s.item}>
          <p>{text}</p>
          <button type="button" onClick={() => onDeleteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
