import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

// Styles
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  // Submit handler
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form onSubmit={signupSubmitHandler} className="login-form">
      <h2>Signup</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      { !isPending && <button className="btn">sign up</button> }
      { isPending && <button className="btn" disabled>loading</button> }
      {error && <p>{error}</p>}
    </form>
  );
}
