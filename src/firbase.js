import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import secret from "./secret"
let app = initializeApp(secret);
export let auth = getAuth(app);
// with these step we able to include firebase in our react app
