
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBaR9B7dE4fMCV2dMU7UBtQciIgm2V4KNc",
  authDomain: "movie-1a852.firebaseapp.com",
  databaseURL: "https://movie-1a852-default-rtdb.firebaseio.com",
  projectId: "movie-1a852",
  storageBucket: "movie-1a852.appspot.com",
  messagingSenderId: "40040491173",
  appId: "1:40040491173:web:dcdbc74eebaa2d9de1054c",
  measurementId: "G-CL1CMY07DM"
};
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // Initialize variables
        const auth = firebase.auth();
        const database = firebase.database();

        // Set up our register function
        function register () {
            // Get all our input fields
            email = document.getElementById('email').value;
            password = document.getElementById('password').value;
            full_name = document.getElementById('full_name').value;
            favourite_song = document.getElementById('favourite_song').value;
            milk_before_cereal = document.getElementById('milk_before_cereal').value;

            // Validate input fields
            if (validate_email(email) == false || validate_password(password) == false) {
                alert('Email or Password is Outta Line!!');
                return;
            }
            if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false) {
                alert('One or More Extra Fields is Outta Line!!');
                return;
            }

            // Move on with Auth
            auth.createUserWithEmailAndPassword(email, password)
            .then(function() {
                // Declare user variable
                var user = auth.currentUser;

                // Add this user to Firebase Database
                var database_ref = database.ref();

                // Create User data
                var user_data = {
                    email : email,
                    full_name : full_name,
                    favourite_song : favourite_song,
                    milk_before_cereal : milk_before_cereal,
                    last_login : Date.now()
                };

                // Push to Firebase Database
                database_ref.child('users/' + user.uid).set(user_data);

                // Done
                alert('User Created, Now login!!');
                window.location.href="login.html"
            })
            .catch(function(error) {
                // Firebase will use this to alert of its errors
                var error_code = error.code;
                var error_message = error.message;

                alert(error_message);
            });
        }

        // Set up our login function
        function login () {
            // Get all our input fields
            email = document.getElementById('email').value;
            password = document.getElementById('password').value;

            // Validate input fields
            if (validate_email(email) == false || validate_password(password) == false) {
                alert('Email or Password is Outta Line!!');
                return;
            }

            auth.signInWithEmailAndPassword(email, password)
            .then(function() {
                // Declare user variable
                var user = auth.currentUser;

                // Add this user to Firebase Database
                var database_ref = database.ref();

                // Create User data
                var user_data = {
                    last_login : Date.now()
                };

                // Push to Firebase Database
                database_ref.child('users/' + user.uid).update(user_data);

                // Done
                alert('User Logged In!!');
                window.location.href="/movie-list/index.html"


            })
            .catch(function(error) {
                // Firebase will use this to alert of its errors
                var error_code = error.code;
                var error_message = error.message;

                alert(error_message);
            });
        }

        // Validate Functions
        function validate_email(email) {
            expression = /^[^@]+@\w+(\.\w+)+\w$/;
            if (expression.test(email) == true) {
                // Email is good
                return true;
            } else {
                // Email is not good
                return false;
            }
        }

        function validate_password(password) {
            // Firebase only accepts lengths greater than 6
            if (password.length < 6) {
                return false;
            } else {
                return true;
            }
        }

        function validate_field(field) {
            if (field == null) {
                return false;
            }

            if (field.length <= 0) {
                return false;
            } else {
                return true;
            }
        }
