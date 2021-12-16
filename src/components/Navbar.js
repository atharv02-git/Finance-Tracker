import { Link } from "react-router-dom";
import {useAuthContext} from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
// Styles
import "./Navbar.css";

export default function Navbar() {
  const { logout } = useLogout();
  const{ user } = useAuthContext();
  return (
    <nav className="navbar">
      <ul>
        <li className="title"><Link to="/">MyFinance</Link></li>

      {!user && (
        <>
          <li><Link to="Login">Login</Link></li>
          <li><Link to="Signup">Signup</Link></li>
        </>
      )}

      {user && (
        <>
          <li>{`Hello, ${user.displayName}`}</li>
          <button className="btn" onClick={logout}>Logout</button>
        </>
      )}
      </ul>
    </nav>
  );
}
