// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDo0QtSq9At1AOwbQfUADWFbcoQQbl-8oU",
    authDomain: "movie-d70c4.firebaseapp.com",
    databaseURL: "https://movie-d70c4-default-rtdb.firebaseio.com",
    projectId: "movie-d70c4",
    storageBucket: "movie-d70c4.appspot.com",
    messagingSenderId: "811032492157",
    appId: "1:811032492157:web:6bf0fa9ba555460b1b5914",
    measurementId: "G-TT80H74BHW",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Authentication
  const auth = firebase.auth();
  
  document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Firebase authentication
    auth.signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Successfully logged in
        console.log("Login successful");
        window.location.href = "../movie-list/index.html"; // Redirect to movie listing page
      })
      .catch((error) => {
        // Handle errors
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error code: " + errorCode);
        console.error("Error message: " + errorMessage);
        alert("Login failed: " + errorMessage);
      });
  });
  