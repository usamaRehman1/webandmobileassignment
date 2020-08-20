let quizQue = [
    {
        no : "1",
        question : "What is capital of Pakistan ?" ,
        options : ["karachi","lahore", "peshawer", "islamabad"],
        answer : "islamabad",
    },
    {
        no : "2",
        question : "What is 2+2 ?" ,
        options : [4,5, 6, 7],
        answer : 4,
    },
    {
        no : "3",
        question : "who is the president of Pakistan ?" ,
        options : ["imran khan","zardari ", "mamnon hussan", "arif alvi"],
        answer : "arif alvi",
    },
    {
        no : "4",
        question : "what is 6/2?" ,
        options : [3,4, 3.2, 3.4],
        answer : 3,
    },
    {
        no : "5",
        question : "who is the president of America?" ,
        options : ["imran khan","donald trump", "queen elzabeth", "arif alvi"],
        answer : "donald trump",
    }
]

let score = 0  , queCounter = 0 , flag = false , millisecond = 0 ,  second = 0 , minutes = 0;
let displayMilliSec = "", displaySec = "" , displayMin = "" , interval;

function home(){
    document.querySelector(".module").style.display = "none";
    document.querySelector(".result").style.display = "none";
    document.querySelector(".card").style.display = "block";
}

function startquiz(){
    document.querySelector(".module").style.display = "block";
    document.querySelector(".result").style.display = "none";
    document.querySelector(".card").style.display = "none";

    nextQue();
}

function nextQue(){
    showQuestion(queCounter);
    addActiveClass(queCounter);
    // checkQue();
    queCounter++;

}

function timer(){

    millisecond++;
    if(millisecond / 100 == 1){
        millisecond =  0;
        second++;
        if(second / 60 == 1){
            second = 0 ;
            minutes++ ; 
        }
    }

    if(second < 10){
        displaySec = "0" + second.toString();
    }else{
        displaySec = second ;
    }

    if(minutes < 10){
        displayMin = "0" + minutes.toString();
    }else{
        displayMin = minutes;
    }


    //  5 minutes timer
    if(minutes < 5){
        document.getElementById("clock").innerHTML = displayMin + ":" + displaySec;

    }else{
        document.getElementById("clock").innerHTML = "00:00";
        millisecond = 0;
        second = 0;
        minutes = 0;
        clearInterval(interval);
        
        document.querySelector(".result").style.display = "block";
        document.querySelector(".module").style.display = "none";

        let totalQue = document.querySelector(".total-question").innerHTML = quizQue.length;
        let attempQue = document.querySelector(".attempt-question").innerHTML = score;
        let totalCorrect = document.querySelector(".total-correct").innerHTML = score;
        let totalWrong = document.querySelector(".total-wrong").innerHTML = quizQue.length - score;
        let per = document.querySelector(".percentage").innerHTML = (score / quizQue.length) * 100 + "%";
        let attemptDiv = document.querySelector(".attemptDiv").innerHTML = score + "/" + quizQue.length;

        queCounter = 0 ;
        score = 0 ;
    }


}

function showQuestion(){
    interval = setInterval(timer , 10);

    
    if(queCounter < quizQue.length){
        
        document.getElementById("queCounter").innerText = "Question no "  +  quizQue[queCounter]["no"] + " to " +  quizQue.length;
        document.getElementById("question").innerText = "0" + quizQue[queCounter]["no"] + " : " + quizQue[queCounter]["question"];
        let ul = document.getElementById("optionUl") ;
        ul.innerHTML = `<li>${quizQue[queCounter]["options"][0]}</li>
        <li>${quizQue[queCounter]["options"][1]}</li>
        <li>${quizQue[queCounter]["options"][2]}</li>
        <li>${quizQue[queCounter]["options"][3]}</li>`;

    }else{
        document.querySelector(".result").style.display = "block";
        document.querySelector(".module").style.display = "none";

        let totalQue = document.querySelector(".total-question").innerHTML = quizQue.length;
        let attempQue = document.querySelector(".attempt-question").innerHTML = score;
        let totalCorrect = document.querySelector(".total-correct").innerHTML = score;
        let totalWrong = document.querySelector(".total-wrong").innerHTML = quizQue.length - score;
        let per = document.querySelector(".percentage").innerHTML = (score / quizQue.length) * 100 + "%";
        let attemptDiv = document.querySelector(".attemptDiv").innerHTML = score + "/" + quizQue.length;
        
        millisecond = 0;
        second = 0;
        minutes = 0;
        score = 0 ;
        queCounter = 0 ;
    }


}

function addActiveClass(queCounter){
    var options = document.querySelectorAll("#optionUl li") ;
    
    for(let i = 0 ; i < options.length ; i++){
        options[i].onclick = function(){
            for(var j = 0 ; j < options.length ; j++){

                if(options[j].classList.contains("active")){
                    options[j].classList.remove("active");
                }

            }
            options[i].classList.add("active");
            checkQue(options[i].innerHTML ,queCounter);
        }
    }
}

function checkQue(clickOnOption , queCounter){
    
    if(clickOnOption == quizQue[queCounter]["answer"] ){
        score++ ;
    }


}





