import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" activeclassname={s.activeLink} className={s.link}>
        Home
      </NavLink>
      <NavLink to="/authors" activeclassname={s.activeLink} className={s.link}>
        Authors
      </NavLink>
      <NavLink to="/books" activeclassname={s.activeLink} className={s.link}>
        Books
      </NavLink>
    </nav>
  );
}
