import classNames from "classnames/bind";
import s from "./TodoList.module.css";

const cx = classNames.bind(s);

export default function TodoList({ todo, onDeleteTodo, onToggleCompleted }) {
  return (
    <ul className={s.list}>
      {todo.map(({ id, text, completed }) => (
        <li
          key={id}
          className={cx({
            item: true,
            completed: completed,
          })}
        >
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p>{text}</p>
          <button type="button" onClick={() => onDeleteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
