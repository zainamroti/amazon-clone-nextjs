// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
// import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


// console.log(`API Key from process:: ${process.env.NEXT_PUBLIC_APIKEY}`)

const firebaseConfig = {
    apiKey: `${process.env.NEXT_PUBLIC_APIKEY}`,
    authDomain: `${process.env.NEXT_PUBLIC_AUTHDOMAIN}`,
    projectId: `${process.env.NEXT_PUBLIC_PROJECTID}`,
    storageBucket: `${process.env.NEXT_PUBLIC_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.NEXT_PUBLIC_MESSAGINGSENDERID}`,
    appId: `${process.env.NEXT_PUBLIC_APPID}`,
    measurementId: `${process.env.NEXT_PUBLIC_MEASUREMENTID}`,
}

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }