
const firebaseConfig = {

    apiKey: "AIzaSyAf2oSUH6iyph8KtTEvHc-LsFwfsn9Cfoo",
    databaseURL: "https://movielisting-30bef-default-rtdb.firebaseio.com",
  
    authDomain: "movielisting-30b0f.firebaseapp.com",
  
    projectId: "movielisting-30b0f",
  
    storageBucket: "movielisting-30b0f.appspot.com",
  
    messagingSenderId: "350796094300",
  
    appId: "1:350796094300:web:446ca27a4f932a651dbf99",
  
    measurementId: "G-TP7GY1WS6J"
  
  };
  
 // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', registerUser);
});

function registerUser(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                username: username,
                email: email
            };

            // Store user data in Realtime Database
            return database.ref('users/' + user.uid).set(userData);
        })
        .then(() => {
            alert("User registered successfully!");
            form.reset();
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}