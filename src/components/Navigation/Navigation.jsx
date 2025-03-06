import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
