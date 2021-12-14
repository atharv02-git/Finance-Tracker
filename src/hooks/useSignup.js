import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState("");

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // Signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // Displaying user name
      await res.user.updateProfile({ displayName });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
