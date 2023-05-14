import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp  = firebase.initializeApp({
  apiKey: 'AIzaSyC0dyWr_mshj-U7C5l_ardpiBgRu6HHVzc',
  authDomain: 'test-db-dc39b.firebaseapp.com',
  projectId: 'test-db-dc39b'
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export const fetchCategories = () => {
  console.log(db)
  db.collection("Category").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    console.log("item ", doc.id, doc.data());
    });
  });
}

