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
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
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

  // only dispath if not cancelled, i.e we have to trigger response only of user is on the same page as useFirestore hook
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a document
  const adddocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const addedDocument = await ref.add(doc);
      dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: addedDocument });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // delete document
  const deleteDocument = async (id) => {};

  //   useEffect for cleanup function
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { adddocument, deleteDocument, response };
};
