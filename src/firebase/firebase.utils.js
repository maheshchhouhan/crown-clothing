import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzolWoJSt9nleLSX3o6WrsY65PhDzS3Yg",
  authDomain: "crown-db-5b04b.firebaseapp.com",
  databaseURL: "https://crown-db-5b04b.firebaseio.com",
  projectId: "crown-db-5b04b",
  storageBucket: "crown-db-5b04b.appspot.com",
  messagingSenderId: "851821007833",
  appId: "1:851821007833:web:6c73bda3db35893fc2ffc8",
  measurementId: "G-JLFYHYM70E"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(`error creating user`, error.messagea);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
