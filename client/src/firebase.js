import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const config = require("./privateKeys.js");

const app = firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
});

export const auth = app.auth();
export const storage = firebase.storage();
export const storageRef = storage.ref();
export default app;
