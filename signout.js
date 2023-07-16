
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDczcTSd0oOChheQzDcSjvZI16wtlZdZAM",
    authDomain: "authentication-f96fa.firebaseapp.com",
    projectId: "authentication-f96fa",
    storageBucket: "authentication-f96fa.appspot.com",
    messagingSenderId: "270155373750",
    appId: "1:270155373750:web:1f5ab8cbbd3278846e5a17"
};



//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

auth.onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;

        var users = document.getElementById("user");
        var text = document.createTextNode(email);

        users.appendChild(text);

        console.log(users);
    } else {
        alert("user not authenticated, kindly login or signup")
        window.location = "signup.html"
    }
});

let signOutButton = document.getElementById(signout);
signOutButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");

    auth.signOut();
    alert("sign Out");
    window.location = "signup.html"
})