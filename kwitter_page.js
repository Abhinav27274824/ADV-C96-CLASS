//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDfX27TNbDbZFHT0zlLf07CBmoMSGCILAw",
      authDomain: "kwitterdatabase-d8013.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-d8013-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-d8013",
      storageBucket: "kwitterdatabase-d8013.appspot.com",
      messagingSenderId: "465433379864",
      appId: "1:465433379864:web:717b7b514190ed7b72af6d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name")
    user_name = localStorage.getItem("user_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value 
      firebase.database().ref(room_name).push({
        name : user_name, 
        message : msg,
        like : 0
      })
      document.getElementById("msg").value = ""
    }
    

