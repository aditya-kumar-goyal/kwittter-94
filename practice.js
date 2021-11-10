
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZanNciOZCayjYpiaK9VQZePGxCH-eNQc",
    authDomain: "kwitter-9e328.firebaseapp.com",
    databaseURL: "https://kwitter-9e328-default-rtdb.firebaseio.com",
    projectId: "kwitter-9e328",
    storageBucket: "kwitter-9e328.appspot.com",
    messagingSenderId: "961321538026",
    appId: "1:961321538026:web:586641cc8fed3baf186293",
    measurementId: "G-1MVRVEJYWE"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function adduser() 
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      })
  }