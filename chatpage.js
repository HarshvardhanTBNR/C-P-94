var firebaseConfig = {
    apiKey: "AIzaSyBKuvUnV8y3RjFwmPlroOVJLMoV4C32-1c",
    authDomain: "kwitter2-6bc60.firebaseapp.com",
    databaseURL: "https://kwitter2-6bc60-default-rtdb.firebaseio.com",
    projectId: "kwitter2-6bc60",
    storageBucket: "kwitter2-6bc60.appspot.com",
    messagingSenderId: "158206848406",
    appId: "1:158206848406:web:dcca8b59a464e3dd5541b7",
    measurementId: "G-THNPZH9T9C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function Data() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
