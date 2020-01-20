const firebaseConfig = {
  apiKey: "AIzaSyCZYT4Yjp_gxH5QK0xCNfl-acDkgCjA2r8",
  authDomain: "ryutabi-develop.firebaseapp.com",
  databaseURL: "https://ryutabi-develop.firebaseio.com",
  projectId: "ryutabi-develop",
  storageBucket: "ryutabi-develop.appspot.com",
  messagingSenderId: "256365448030",
  appId: "1:256365448030:web:8d8e2a7b75370df5"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const storageRef = firebase.storage().ref()
