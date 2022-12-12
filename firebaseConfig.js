// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { get, getDatabase, ref, set, update } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTIG97jGx7dbZaDjjMPAwpbLmwfAxQi3U",
  authDomain: "steelcitymentalhealth.firebaseapp.com",
  databaseURL: "https://steelcitymentalhealth-default-rtdb.firebaseio.com",
  projectId: "steelcitymentalhealth",
  storageBucket: "steelcitymentalhealth.appspot.com",
  messagingSenderId: "37522918950",
  appId: "1:37522918950:web:35262c36321bc45e5c60e7",
  measurementId: "G-SDMQ41YWP0"
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getDatabase(app)

export { app, auth, db };

export async function persistPost(title, text, timeStamp, uid) {
  await set(ref(db, 'posts/' + title), {
    title: title,
    text: text,
    timeStamp: timeStamp,
    response:"",
    uuid: uid,
  });
}

export function getUsers(){
  return get(ref(db,"users")).then((querySnapshot) => {
    return querySnapshot.val()
  })
}

export function retrievePosts(id) {
  return get(ref(db,"posts")).then((querySnapshot) => {

    var vals = []
    const snapshot = querySnapshot.val()
    for(var el in snapshot){
      vals.push(snapshot[el])
    }
 
    return vals
  })
}

export function retrievePost(id) {
  console.log(id)
  return get(ref(db,"posts/"+id)).then((querySnapshot) => {

    // Loop through the data and store
    // it in array to display
    const snapshot = querySnapshot.val()
    console.log(snapshot)
    return snapshot
  })
}


export async function forgotPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Your password reset link has been sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }

}

export function logout() {
  signOut(auth)
  console.log("signed out")
}

export async function signInUser(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert("Incorrect username or password, please try again!");
  }
}


export async function createUser(email, password, biography, ageRange) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    persistUser(email, biography, ageRange, user.uid)
  }
  catch (error) {
    console.log(error)
    alert("That username already exists, please try a different one.")
  }
}

export async function persistUser(email, biography, ageRange, id) {
  await set(ref(db, 'users/'+id), {
    email: email,
    biography: biography,
    ageRange: ageRange,
    uuid: id,
  });
}


export function updateResponse(id,response) {
  const updates = {};
  updates['posts/'+id+"/response"] = response;
  update(ref(db), updates);
}

