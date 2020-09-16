var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
firebase.initializeApp(firebaseConfig);

let signUpBtn = document.getElementById("signUp");

signUpBtn.addEventListener('click', () => {
  var name = document.getElementById("name").value ;
  var address = document.getElementById("address").value ;
  var email = document.getElementById("email").value ;
  var password = document.getElementById("password").value ;

  document.getElementById("loaders").style.display = 'block' ;
  
  firebase.auth().createUserWithEmailAndPassword(email , password)
  .then((success) =>{
    let userObj = {
      name,
      address,
      email,
    }
    let userUid = firebase.auth().currentUser.uid ;


    firebase.database().ref('users/' + userUid ).set(userObj)
    
    .then(() => {
      document.getElementById("loaders").style.display = 'none' ;
      swal({
          title: "Welcome",
          text: "You can use this email to procceed more features",
          icon: "success",
          button: "Done",
      }).then(() => {
          window.location = '../pages/signIn.html'
      })
  }) 
  })
  .catch((error) => {
    document.getElementById("loaders").style.display = 'none';
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // console.log(errorMessage)
    swal({
      title: "Error",
      text: errorMessage,
      icon: "error",
      button: "Ok",
    });
  })
})
