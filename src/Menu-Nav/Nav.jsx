import style from "./Nav.module.css"
import { Link, NavLink } from "react-router-dom"

export default function Nav() {

  const handlerClassName = ({ isActive }) => isActive ? style.active : ''

  return (
    <>
      <nav>
        <ul className={style.menu}>
          <NavLink className={handlerClassName} to="/">Home</NavLink>
          <NavLink className={handlerClassName} to="/about">About Us</NavLink>
          <NavLink className={handlerClassName} to="/blog">Blog</NavLink>
        </ul>
      </nav>
    </>
  );
}