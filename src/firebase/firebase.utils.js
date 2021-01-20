import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {docType} from './doc-type'

const config = {
    apiKey: "AIzaSyDpkrDqzISkQoyiKfsXyqqtbl7VJ5BW6aQ",
    authDomain: "react-shop-6d7de.firebaseapp.com",
    projectId: "react-shop-6d7de",
    storageBucket: "react-shop-6d7de.appspot.com",
    messagingSenderId: "384181917785",
    appId: "1:384181917785:web:666a367eea6797437a3948",
    measurementId: "G-Y9XVG1C7P2"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const storeNewUser = async (userData) => {
    const userRef = firestore.doc(`${docType.USERS}/${userData.uid}`)
    const user = await userRef.get()

    if (!user.exists) {
        const { email, displayName, uid } = userData
        const createAt = new Date();
        try {
            await userRef.set({
                uid,
                displayName,
                email,
                createAt
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' })

export const googleSignin = () => {
    return auth.signInWithPopup(provider)
}

export default firebase;

