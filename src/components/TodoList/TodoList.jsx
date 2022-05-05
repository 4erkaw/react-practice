import classNames from "classnames/bind";
import s from "./TodoList.module.css";
import Todo from "../Todo";

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
          <Todo
            text={text}
            completed={completed}
            onDelete={() => {
              onDeleteTodo(id);
            }}
            onToggleCompleted={() => {
              onToggleCompleted(id);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
