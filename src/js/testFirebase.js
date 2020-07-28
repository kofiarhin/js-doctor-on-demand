const firebase = require("firebase");

var firebaseConfig = {
    apiKey: "AIzaSyD6rfry1q02m2hen1B_pvrgnrMIExZD1gw",
    authDomain: "test-ef94b.firebaseapp.com",
    databaseURL: "https://test-ef94b.firebaseio.com",
    projectId: "test-ef94b",
    storageBucket: "test-ef94b.appspot.com",
    messagingSenderId: "213997830437",
    appId: "1:213997830437:web:e1fb68c10a4763f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;