import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyA0tP4Tl8sMCwg4yy6Vm_GHKrYhi9O8Nto",
  authDomain: "photowall-90a9e.firebaseapp.com",
  databaseURL: "https://photowall-90a9e.firebaseio.com",
  projectId: "photowall-90a9e",
  storageBucket: "photowall-90a9e.appspot.com",
  messagingSenderId: "569332269330",
  appId: "1:569332269330:web:f6f1a7d98dcd943b3133cb", //
  measurementId: "G-5DDJCRP3X8" //
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database()
// https://picsum.photos/images

export { database }
