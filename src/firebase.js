import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB1yD9wygupOEzq9Vm_HxY73lI-jpaknUA',
  authDomain: 'slack-clone-74ac4.firebaseapp.com',
  projectId: 'slack-clone-74ac4',
  storageBucket: 'slack-clone-74ac4.appspot.com',
  messagingSenderId: '954306564163',
  appId: '1:954306564163:web:9a003cbf9fc76374a044f6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
