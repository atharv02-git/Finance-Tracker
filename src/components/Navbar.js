import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
// Styles
import "./Navbar.css";

export default function Navbar() {
  const { logout } = useLogout();
  return (
    <nav className="navbar">
      <ul>
        <li className="title">
          <Link to="/">MyFinance</Link>
        </li>

        <li>
          <Link to="Login">Login</Link>
        </li>
        <li>
          <Link to="Signup">Signup</Link>
        </li>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </ul>
    </nav>
  );
}
