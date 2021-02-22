import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDicL7TTNFoHPCeTNR_5Ear0hIMFvJPCC4',
  authDomain: 'slack-clone-82841.firebaseapp.com',
  projectId: 'slack-clone-82841',
  storageBucket: 'slack-clone-82841.appspot.com',
  messagingSenderId: '310673092337',
  appId: '1:310673092337:web:75aa9a199cf328a9788350',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
