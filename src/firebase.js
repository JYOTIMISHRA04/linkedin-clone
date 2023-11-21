import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsuUQJEvoCoYO24SpKtMdqaAbyGwnPnIs",
    authDomain: "linkedin-clone-efb57.firebaseapp.com",
    projectId: "linkedin-clone-efb57",
    storageBucket: "linkedin-clone-efb57.appspot.com",
    messagingSenderId: "509899374567",
    appId: "1:509899374567:web:67f5d967e2021e839c0742"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };