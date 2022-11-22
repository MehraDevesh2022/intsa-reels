import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import secret from "./secret"
let app = initializeApp(secret);
export let auth = getAuth(app);
export const db = getFirestore(app);
// with these step we able to include firebase in our react app
