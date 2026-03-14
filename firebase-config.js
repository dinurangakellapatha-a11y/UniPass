import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiNC6RwXqTachVrdOtxInzme10Pk281DU",
  authDomain: "student-login-data-base.firebaseapp.com",
  projectId: "student-login-data-base",
  storageBucket: "student-login-data-base.firebasestorage.app",
  messagingSenderId: "480696491383",
  appId: "1:480696491383:web:8158fedf914d35d8f3d572",
  measurementId: "G-P052S3CSVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
