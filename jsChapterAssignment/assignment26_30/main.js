function task1(){
    var num = +prompt("Enter Number : ");

    document.write("Number : " + num + "<br>" + 
    "Round Off Value : " + Math.round(num) + "<br>" +
    "Floor Value : " + Math.floor(num) + "<br>" +
    "Value Off Value : " + Math.ceil(num)
    );
}

function task2(){
    var num = +prompt("Enter Number : ");

    document.write("Number : " + num + "<br>" + 
    "Round Off Value : " + Math.round(num) + "<br>" +
    "Floor Value : " + Math.floor(num) + "<br>" +
    "Value Off Value : " + Math.ceil(num)
    );
}

function task3(){
     var num = +prompt("Enter Numbere : ");
     var absoluteValue = Math.abs(num);
     alert(absoluteValue);
}

function task4(){
    var dice = Math.random() * 6;
    alert("Random Dice Value : " + Math.ceil(dice));
}

function task5(){
    var coin = Math.random() * 2 ;
    if(Math.ceil(coin) === 1){
        alert(Math.ceil(coin) + "\nRandom coin value : Tails");
    }else{
        alert(Math.ceil(coin) + "\nRandom coin value : Head");
    }
}

function task6(){
    var ran = Math.random() * 100 ;
    alert("random number between 1 and 100 : " + Math.ceil(ran));
}

function task7(){
    var weight = prompt("Enter your weight in kilograms : ");
    alert("The weight of user is " + weight + " kilograms");
}

function task8(){
    var ranNum = Math.random() * 10 ;
    var takeNum = +prompt("Guess the number between 1 to 10 : ");

    if (Math.ceil(ranNum) === takeNum){
        alert("Congratulation Your number match with secret number");
    }else{
        alert("Try again!");
    }
}