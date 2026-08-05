import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "../volunteerprojectcloud-firebase-adminsdk-fbsvc-3e175d39c2.json" with { type: "json" };

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

export { db };