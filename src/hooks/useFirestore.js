import { useReducer, useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";

let initialState = {
  document: null,
  error: null,
  isPending: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  //   for cleanup function
  const [isCancelled, setIsCancelled] = useState(false);

  //   collection reference
  const ref = projectFirestore.collection(collection);

  // add a document
  const adddocument = async (doc) => {};

  // delete document
  const deleteDocument = async (id) => {};

  //   useEffect for cleanup function
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { adddocument, deleteDocument, ref}
};
