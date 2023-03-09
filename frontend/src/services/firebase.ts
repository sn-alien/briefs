// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUJ3DPGJbd7NxlnyJqFj2TgOML-fVtSZ8",
  authDomain: "briefs-ae400.firebaseapp.com",
  projectId: "briefs-ae400",
  storageBucket: "briefs-ae400.appspot.com",
  messagingSenderId: "353233599698",
  appId: "1:353233599698:web:da34974a1d0100a5d7010b",
  measurementId: "G-10VMVRMPER",
};
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

const auth = getAuth(firebase);
export { firebase, auth };
