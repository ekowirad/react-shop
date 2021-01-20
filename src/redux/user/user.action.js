import { auth, firestore } from "../../firebase/firebase.utils"

export const signupWithEmail = (data) => {
    return async dispatch => {
        try {
            const { email, password } = data
            const { user } = await auth.createUserWithEmailAndPassword( email, password)
            console.log(user);
        } catch (e) {
            console.log(e);
        }
    }
}