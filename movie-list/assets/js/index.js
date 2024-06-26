// Your web app's Firebase configuration
console.log("working")
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
  
  // Set database variable
  var database = firebase.database();
  
//   function save() {
//     var ratings = document.getElementById("email").value;
//     var creator = document.getElementById("password").value;
//     var movie_title = document.getElementById("username").value;
//     var watch_time = document.getElementById("say_something").value;
//     var lang = document.getElementById("favourite_food").value;
//     var image_URL = document.getElementById("image_URL").value;
//     database.ref("movies/" + movie_title).set({
//       movie_title: movie_title,
//       ratings: ratings,
//       creator: creator,
//       watch_time: watch_time,
//       lang: lang,
//       image_URL: image_URL,
//     });
  
//     alert("Saved");
//   }
  
  function get() {
    var username = "RRR";
  
    var user_ref = database.ref("movies/" + username);
    user_ref.on("value", function (snapshot) {
      var data = snapshot.val();
  
      //  alert(data.email);//
      console.log(data.movie_title);
      console.log(data.creator);
      console.log(data.ratings);
      console.log(data.watch_time);
      console.log(data.lang);
      console.log(data.image_URL);
      document.getElementById("movie_title-html").innerHTML = data.movie_title
      document.getElementById("rat").innerHTML = data.ratings
      document.getElementById("watch").innerHTML = data.watch_time
      document.getElementById("cre").innerHTML = data.creator
      document.getElementById("lan").innerHTML = data.lang
    });
  }
  get();
  function update() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var updates = {
      email: email,
      password: password,
    };
  
    database.ref("users/" + username).update(updates);
  
    alert("updated");
  }
  
  function remove() {
    var username = document.getElementById("username").value;
  
    database.ref("users/" + username).remove();
  
    alert("deleted");
  }