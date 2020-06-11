import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDxB5VS0IoX03fV1ihBRD_rNag2tJLszn0",
    authDomain: "bruce-doctor-on-demand.firebaseapp.com",
    databaseURL: "https://bruce-doctor-on-demand.firebaseio.com",
    projectId: "bruce-doctor-on-demand",
    storageBucket: "bruce-doctor-on-demand.appspot.com",
    messagingSenderId: "301518226040",
    appId: "1:301518226040:web:ba4f54702d42fd28d0e38d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const firebaseLooper = (snapshot) => {

    let data = [];
    snapshot.forEach(childSnapshot => {

        data.push({ id: childSnapshot.key, ...childSnapshot.val() });
    });

    return data;


}

export { firebase, firebaseLooper };