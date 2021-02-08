import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyChu-BYeRkINijd2dCVSq7sNj9a1Y4asRg",
    authDomain: "netflix-clone-3d63a.firebaseapp.com",
    projectId: "netflix-clone-3d63a",
    storageBucket: "netflix-clone-3d63a.appspot.com",
    messagingSenderId: "226666603373",
    appId: "1:226666603373:web:c9e3b984155a3d8b7e7064"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {auth}
  export default db