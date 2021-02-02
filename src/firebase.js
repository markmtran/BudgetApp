import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyC0fOrbPMmtdAbdMW98-Ikyc8KQw0117Gk",
  authDomain: "budget-app-74ee6.firebaseapp.com",
  databaseURL: "https://budget-app-74ee6-default-rtdb.firebaseio.com",
  projectId: "budget-app-74ee6",
  storageBucket: "budget-app-74ee6.appspot.com",
  messagingSenderId: "560202966556",
  appId: "1:560202966556:web:672e69ca78e08c512de1d9",
  measurementId: "G-CVW69K8ZKB"
};
firebase.initializeApp(config);

export default firebase;