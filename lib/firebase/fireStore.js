import firebaseApp from "./firebaseConfig";
import { initializeFirestore } from "firebase/firestore";

// This will ignore undefined properties when writing to the Firestore database
// Set Firestore to ignore undefined properties when writing documents
const db = initializeFirestore(
  firebaseApp,
  {
    ignoreUndefinedProperties: true,
    experimentalForceLongPolling: true,
  },
  "(default)"
);

export default db;
