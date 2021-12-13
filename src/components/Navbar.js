import { Link } from "react-router-dom";
// Styles
import "./Navbar.css";

export default function Navbar() {
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
      </ul>
    </nav>
  );
}
