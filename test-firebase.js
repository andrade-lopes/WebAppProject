import { db } from "./config/firebase-admin.js";

const snapshot = await db.collection("projects").get();

console.log(`Projects found: ${snapshot.size}`);

snapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
});