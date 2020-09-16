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

let signInBtn = document.getElementById("signIn") ;

signInBtn.addEventListener('click' , ()=>{
    let email = document.getElementById("email").value ;
    let password = document.getElementById("password").value ;

    document.getElementById("loaders").style.display = 'block'

    firebase.auth().signInWithEmailAndPassword(email , password)
    .then((success)=>{
        document.getElementById("loaders").style.display = 'none'
        // let userUid = firebase.auth().currentUser.uid ;

        localStorage.setItem("userAuth",JSON.stringify(success))
            
        window.location = '../pages/home.html' ;
    })
    .catch((error)=>{
        document.getElementById("loaders").style.display = 'none'
        // Error Handling
        var errorCode = error.code ;
        var errorMessage = error.messagee ;
        // console.log(errorMessage)
        swal({
            title: "Error",
            text: errorMessage,
            icon: "error",
            button: "Ok",
        });
    })

})
