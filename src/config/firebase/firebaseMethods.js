import app from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

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
    console.log(obj);
    console.log(nodeName);
    console.log(id);
    console.log();
    let reference = ref(database, `${nodeName}/${id ? id : ""}/`)
    return set(reference, obj);
}

let getData = (nodeName, id) => {
    let users = {}
    let reference = ref(database, `${nodeName}/${id ? id : ""}`)
    onValue(reference, (snapshot) => {
        users = snapshot.val()
    }, {
        onlyOnce: false
    });
    return users;
}

export {
    signUp,
    logIn,
    sendData,
    getData
}
