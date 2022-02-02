import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA01nLBX4S4tQ_3pTppOLbGWAGThPMJVGc",
  authDomain: "pomodore-development.firebaseapp.com",
  projectId: "pomodore-development",
  storageBucket: "pomodore-development.appspot.com",
  messagingSenderId: "305556288154",
  appId: "1:305556288154:web:e66a958c2a2f5a833d6523",
});

export const auth = getAuth(firebaseApp);
export default firebaseApp;
