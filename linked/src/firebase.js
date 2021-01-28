import firebase from 'firebase'

const firebaseConfig = {
      apiKey: "AIzaSyDWr512vCxahjFfj2ksV5xSFCEEBqe4RP0",
      authDomain: "linkedin-86056.firebaseapp.com",
      projectId: "linkedin-86056",
      storageBucket: "linkedin-86056.appspot.com",
      messagingSenderId: "464751898981",
      appId: "1:464751898981:web:71bd39d1440a459832718c",
      measurementId: "G-4RMY51H5DV"
    };
const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth};
