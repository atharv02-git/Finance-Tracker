import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState("");
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await projectAuth.signOut();
      // dispatching logout and no need to pass payload as user is going to be null
      dispatch({ type: "LOGOUT" });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err);
      setIsPending(false);
    }
  };
  return { logout, error, isPending };
};
