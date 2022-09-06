import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseConfig } from "../config/firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const login = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logout = async () => {
  try {
    localStorage.clear();
    await signOut(auth);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { auth };
