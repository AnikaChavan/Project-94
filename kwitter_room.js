const firebaseConfig = {
  apiKey: "AIzaSyC2MOaXxpmSqvdU_Meo8CSshubMEFUnxVw",
  authDomain: "kwitter-project-848b9.firebaseapp.com",
  projectId: "kwitter-project-848b9",
  storageBucket: "kwitter-project-848b9.appspot.com",
  messagingSenderId: "757231597071",
  appId: "1:757231597071:web:5f2c4ffb86278c8ad7d57a",
  measurementId: "G-H0D03483DB"
};

  firebase.initializeApp(firebaseConfig);

function logout(){
  window.location = "index.html";
  document.getElementById("userName").innerHTML= "";
}

var getuser = localStorage.getItem("USERNAME");
document.getElementById("user_name").innerHTML = "Hello There " +getuser+"!";

function addRoom(){
     var roomName = document.getElementById("roomName").value;
     localStorage.setItem("ROOMNAME" ,roomName);
     firebase.database().ref("/").child(roomName).update({
           purpose:"adding room name"
     })
     window.location="kwitter_page.html";
}