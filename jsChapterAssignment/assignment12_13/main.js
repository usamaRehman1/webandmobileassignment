
    //   Task 1
    function task1(){
        var char = prompt("Enter Alphabet letter : ") ;
        var str = char.charCodeAt(0);
        if ( str >= 65 && str <= 90){
            console.log(char + " is a Capittal letter");
        }
        else if(str >= 97 && str <= 122){
            console.log(char + " is a Small letter");
        }
        else{
            console.log("input is not valid");
        }
    };


    // Task 2
    function task2(){
        var num1 = +prompt("Enter First Number : ");
        var num2 = +prompt("Enter Second Number : ");

        if (num1 === num2 ){
            alert("Both Number are equall");
        }
        else if (num1 > num2){
            alert(num1 + " grater then " + num2);
        }
        else if(num2 > num1){
            alert(num2 + " grater then " + num1);
        }
    };    

     
    // Task 3
    function task3(){    
        var num = +prompt("Enter Number : ");

        if (num === 0 ){
            alert("Your Number is Zero");
        }
        else if (num > 0 ){
            alert("You enter positive integer")
        }
        else if(num < 0){
            alert("You enter negative integer")
        }else{
            alert("input is not valid");
        }
    };

    // Task 4
    function task4(){
        var char = prompt("Enter Character : ");
        var Boolean = false ;

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            Boolean =  true ;
        }
        else if(char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
            Boolean = true ;
        }else{
            // alert("somthing wrong");
        }

        if(Boolean == true){
            alert(char + " is a vowel ");
        }else{
            alert(char + " is not a vowel");
        }
    };   
    
    
    // Task 5
    function task5(){
        var pass = "12345678" ;
        var getPass = prompt("Enter Password :e.g. 12345678 ");

        if (pass === getPass){
            alert("Correct!The Password you entered matches the original password.");
        }
        else if(getPass === ''){
            alert("please enter Password");
        }
        else{
            alert("Incorrect Password");
        }
    };

    
    // Task 6
    function task6(){
        var greeting;
        var hour = 13;
        if (hour < 18) {
            greeting = "Good day";
        }else{
            greeting = "Good evening";
        }
        alert(greeting);
    };

    // Task 7
    function task7(){
        var time = +prompt("Enter time in 24 hours formte :") ;

        console.log(time * 120) 

        if(time >= 0000 && time < 1200){
            alert("Good Morning");
        }
        else if(time >= 1200 && time < 1700){
            alert("Good Afternoon");
        }
        else if(time >=1700 && time < 2100){
            alert("Good Evening");
        }
        else if(time >= 2100 && time < 2359 ){
            alert("Good Night");
        }
        else{
            alert("Input is not valid");
        }
    };


