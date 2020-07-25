    //  Task 03
function del() {
    var getRow = document.getElementById("btn").parentNode.parentNode ;
    getRow.remove();
}

    // Task 04

function change(){
    var getImg = document.getElementById("img").src = "deal_2.jpeg";
}
function preImg(){
    var getImg = document.getElementById("img").src = "deal_3.jpeg";
}

    // Task 05

let i = 0  ;
function inc(){
    var incVal = document.getElementById("screen").innerText ;
    if(i < 10){
        document.getElementById("screen").innerText = "0" + ++i;
    }else{
        document.getElementById("screen").innerText = ++i ;
    }
}
function dec() {
    var incVal = document.getElementById("screen").innerText ;
    if(i < 10){
        document.getElementById("screen").innerText = "0" + --i;
    }else{
        document.getElementById("screen").innerText = --i ;
    }    
}