import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
var firebaseConfig = {
    apiKey: "AIzaSyBVVklUTwRYXj3E8ZB_s_rzp556ZIUJ4yc",
    authDomain: "profile-maker-b3713.firebaseapp.com",
    projectId: "profile-maker-b3713",
    storageBucket: "profile-maker-b3713.appspot.com",
    messagingSenderId: "870682979063",
    appId: "1:870682979063:web:fc4623518edadca16c41f2",
    measurementId: "G-FFSC46SWX4",
}
const fire = firebase.initializeApp(firebaseConfig)

export default fire
