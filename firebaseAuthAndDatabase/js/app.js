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

let getiteams = localStorage.getItem("userAuth");
let parse = JSON.parse(getiteams);

document.getElementById("auth").innerHTML =`Welcome ${parse.user.email}` ;

function logOut() {
    firebase.auth().signOut()
        .then(() => {
            localStorage.setItem("userAuth", JSON.stringify({ user: "null" }))
            window.location = "../pages/signIn.html"
            // Sign-out successful.
        }).catch((error) => {
            let message = error.message;
            // console.log(message)
            // An error happened.
            swal({
                title: "Error",
                text: errorMessage,
                icon: "error",
                button: "Ok",
            });
        });
}