import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyByzxzjEX5SF2eeVucLdqL_f_0lJ3XXg9c",
	authDomain: "thegram-48002.firebaseapp.com",
	projectId: "thegram-48002",
	storageBucket: "thegram-48002.appspot.com",
	messagingSenderId: "464927015383",
	appId: "1:464927015383:web:7c7fa8614996f959368b92",
	measurementId: "G-FE2HFERWGM"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
