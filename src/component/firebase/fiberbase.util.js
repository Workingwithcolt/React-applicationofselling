import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {getFirestore,setDoc,doc, addDoc,updateDoc, collection, getDoc, onSnapshot, writeBatch} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { set } from "immutable";
import { async } from "@firebase/util";
// import  "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcQ9ATVB4Rh5QUkV3v6aSHvGaJN5oIxi4",
  authDomain: "crown-db-d6dc8.firebaseapp.com",
  projectId: "crown-db-d6dc8",
  storageBucket: "crown-db-d6dc8.appspot.com",
  messagingSenderId: "385991468843",
  appId: "1:385991468843:web:403b3645fb6a5871c5476e",
  measurementId: "G-KCWEW3W0CG"
  };

  //what we want to do is that we have to set the data 
  //to firebase at that time we sign to that
const app = firebase.initializeApp(firebaseConfig)
const firestore =   getFirestore();
  
// const specialOfTheDay = doc(firestore,'users/Village')
// function writeDailSpecial(){
//   const docData = {
//     displayName:'Chetan',
//     how:'beautiful',
//     age:'same'
//   };
//   //here we dont want to block the other process for 
//   //carring out other process parallely we make it 
//   //asynchronomous
//   try{
//   setDoc(specialOfTheDay,docData,{merge:true})
//   console.log('This value has been Written to the database')
//   }catch(error){
//     console.log(`I got an error ${error}`);
//   }
// }
// const Events = doc(firestore,'users/Events')
// async function writeDailEvent(){
//   const docData = {
//     name:'BaBaSahebAmbedkar Jayanti',
//     Date:1098,
//     Died_Date:1956,
//     Spouse_name:'DONT KNOW'
//   };
//   //here we dont want to block the other process for 
//   //carring out other process parallely we make it 
//   //asynchronomous
//   try{
//   await updateDoc(Events,docData)
//   console.log('This value has been Written to the database')
//   }catch(error){
//     console.log(`I got an error ${error}`);
//   }
// }

//if it is collection does not exist then it is created
// const orderCollection = collection(firestore,'sorders');
// async function addANewDocument(){
//   const newDoc = await addDoc(orderCollection,{
//     customer:'Arthur',
//     drink:'Latte',
//     total_cost:(100 + Math.floor(Math.random() * 400 ))/100,
//   })
// }
// function listenToADocument(){
//   onSnapshot(specialOfTheDay,(docSnapshot) =>{
//     if(docSnapshot.exists()){
//       const docData = docSnapshot.data();
//       console.log(`In realtime, docData is ${JSON.stringify(docData)}`);

//     }
//   })
// }

// const field = doc(firestore,'App_Users/User_information')
// const fields = collection(firestore,'App_Users');
const auth = getAuth(app)

// const collectionRef = collection('users')
// const snapashot = doc()
// const collectionSnapshot = await collectionRef.getDoc()
// console.log(collectionSnapshot +"That is t")
export const createUserProfileDocument = async (userAuth,additionalData) =>{
  if(!userAuth) return;
  // const { displayName} = userAuth
  // console.log(displayName)
  // const DocumentRef = doc(firestore, 'users', `${displayName}`);
  // const collectionRef = collection(firestore, 'users');
  // console.log(collectionRef)
  // console.log(DocumentRef)
  // console.log("It is an reference")
  // try{
  // const collectionSnapshot =await  onSnapshot(collection(firestore, "users"),(snapshot) => {
  //  console.log(snapshot)
  //  console.log("It is snapshot")
  //  snapshot.docs.map(doc => console.log(doc.data()))
  // },
  // (error) => {
  // })
  // console.log(collectionSnapshot+"it is me")
  // }catch(e){
  //   console.log(e)
  //   console.log("error is under e")
  // }
  // console.log("Above is the snapshot")
  if(additionalData != ""){
  const { displayName,email, metadata } = userAuth
  console.log(displayName)
  console.log(email)
  console.log(metadata.creationTime)
  try{
  await setDoc(doc(firestore,`users/${displayName}`),{
    displayName:displayName,
    email:email,
    createAt:metadata.creationTime
  },{merge:true})
}catch(e){
  console.log(e)
}
}else{
  const { email, metadata} = userAuth
  console.log(additionalData)
  console.log(email)
  console.log(metadata.creationTime)
  try{
  await setDoc(doc(firestore,`users/${email}`),{
    email:email,
    createdAt:metadata.creationTime
  },{merge:true})
}catch(e){
  console.log(e)
}
}

//that is used for getting the reference of the collection 
// const querySnapshot = await getDoc(collection(firestore, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
// console.log(querySnapshot)
}
// async function readASingleDocument(){
//   const mySnapshot =  await getDoc(specialOfTheDay)
//   const EventData = await getDoc(Events)
//   if(mySnapshot.exists() || EventData.exists()){
//     const docData = mySnapshot.data();
//     const docVillage = EventData.data()
//     console.log(`My data is ${JSON.stringify(docData)}`);
//     console.log(`My  Event infomation is ${JSON.stringify(docVillage)}`)
//   }
// }
// readASingleDocument()
// writeDailSpecial()
// addANewDocument()
// writeDailEvent()
// listenToADocument()


export const addCollectionAndDocuments = async (collectionKey, objectToAdd) =>{
  const collectionRef = collection(firestore,collectionKey)
  // console.log("It is the collectionref")
  // console.log(collectionRef)
  const batch = writeBatch(firestore)
  objectToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef)
    batch.set(newDocRef,obj)
  });
  return  await batch.commit()
}


export {firebase}

export {auth,firestore}
// export const auth = firebase.auth();

// export const firestore = firebase.firestore();

// const provider = new  firebase.auth.GoogleAuthProvider();

// provider.setCustomParameter({prompt:'select_account'});

// export const SignInWithGoogle = () => auth.signInWithPopup()







































































