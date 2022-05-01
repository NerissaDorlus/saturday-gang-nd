import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./credentials.js";

const getDb = () => {
  if (getApps.length === 0) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return getFirestore();
};

const getAttendees = async () => {
  const db = getDb();
  //Get the collection
  const attendeeCollection = db.collection("attendees");
  //then get all the docs of the collection
  try {
    const snapshot = await attendeeCollection.get();
    const attendees = [];
    snapshot.docs.forEach((doc) => {
      attendees.push({ id: doc.id, ...doc.data() });
    });

    return attendees;
  } catch (error) {
    console.error(error);
  }
};

const res = await getAttendees();

console.log("This is the result", res);
