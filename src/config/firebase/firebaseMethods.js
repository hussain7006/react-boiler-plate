import app from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue, get, push, child } from "firebase/database";

const auth = getAuth(app);
const database = getDatabase(app);


let signUp = (obj) => {
    let { email, password } = obj;
    return createUserWithEmailAndPassword(auth, email, password)
}

let logIn = (obj) => {
    let { email, password } = obj;
    return signInWithEmailAndPassword(auth, email, password)
}

let logOut = () => { }

let checkUser = () => { }


// Database methods

let sendData = (obj, nodeName, id) => {
    if (!id) {
        const postListRef = ref(database, 'posts');
        obj.id = push(postListRef).key;
    }
    let reference = ref(database, `${nodeName}/${obj.id ? obj.id : id}/`)
    return set(reference, obj);
}

let getData = (nodeName, id) => {

    let reference = ref(database)
    return get(child(reference, `${nodeName}/${id ? id : ""}`))
}

export {
    signUp,
    logIn,
    sendData,
    getData
}
