// =============================================
//  Firebase Configuration — CampusEats
//  Using COMPAT version (matches the CDN scripts in your HTML)
// =============================================

const firebaseConfig = {
  apiKey: "AIzaSyB2G-jXkFgevAfTHwAq64LUsTN5L5TtexE",
  authDomain: "deep-logic-9025b.firebaseapp.com",
  projectId: "deep-logic-9025b",
  storageBucket: "deep-logic-9025b.firebasestorage.app",
  messagingSenderId: "389617688093",
  appId: "1:389617688093:web:5115db7975a39ef25970f4"
};

// Initialize Firebase (compat style — NO "import" needed)
firebase.initializeApp(firebaseConfig);

// These are now available globally across ALL your pages
const auth    = firebase.auth();
const db      = firebase.firestore();
const storage = firebase.storage();