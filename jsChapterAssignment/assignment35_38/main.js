function task1(){

     function date(){
        document.write(new Date());
    }
    date();

}

function task2(){

    function name(){
        var firstName = prompt("Enter First Name : ");
        var lastName = prompt("Enter Last Name : ");

        alert("Welcome " + firstName + " " + lastName);
    }
    name();
}
function task3(){

    function add(){
        var num1 = +prompt("Enter First Number :");
        var num2 = +prompt("Enter Second Number :");
        var addNum = num1 + num2 ;
        return addNum ;
    }
    var result = add();
    document.write("Addition Of Both Number : " + result);
}

function task4(){
    function cal(num1 , num2 , sing){
        if(sing === '+'){
            return num1 + num2 ;
        }
        else if(sing === '-'){
            return num1 - num2 ;
        }
        else if(sing === '*'){
            return num1 * num2 ;
        }
        else if(sing === '/'){
            return num1 / num2 ;
        }
        else if(sing === '%'){
            return num1 % num2 ;
        }else{
            alert("Please enter correct sing.")
        }


    }
    var num1 = +prompt("Enter First Number : ");
    var num2 = +prompt("Enter Second Number : ");
    var sing = prompt("Enter Sing (+,-,/,%): ");

    var result = cal(num1 , num2 , sing);
    document.write("<h1>Calculator</h1><br>" + "Result : " + num1 + " " + sing + " " + num2 + " = " + result);
}

function task5(){
    function square(num){
        return num ** 2 ; 
    }
    alert("Square of 4 : "+ square(4));
}

function task6(){
    function factor(num){

        if(num < 0){
            return "Please enter a positive number" ;
        }
        else if(num === 0 || num === 1 ){
            return 1 ;
        }
        else if(num > 1 ){
            for(var i = num - 1 ; i >= 1 ; i--){
                num *= i ;
            }
            return num ;
        }else{
              return "input is not valid" ;
           }

    }

    var num = +prompt("Enter Number : ");
    document.write("Factorial " + num + "!" + " = " + factor(num));
}

function task7(){

    function counting(){
        var start = +prompt("Enter Start Number : ");
        var end = +prompt("Enter End  number : ");

        for(var i = start ; i <= end ; i++ ){
            document.write(i , "<br>");
        }
       
    }
    counting();
}

function task8(){

    function calculateHypotenuse(){
        var base = +prompt("Enter Base :");
        var per = +prompt("Enter perpandicular :");
        var hyp = base**2 + per**2;
        calculateSquare(hyp);

        function calculateSquare(hyp){
            document.write("Hypotenuse of right triangle : " + hyp**(1/2));
        }
    }
    calculateHypotenuse();
}

function task9(){

    function calculateArea(width , height){
        var area = width * height ;
        document.write("Area Of Triangle : " + area);
    }
    var height = 5 ;
    calculateArea(4 , height );
}

function task10(){

    function palindrome(){
        var str = prompt("Enter String : ");
        var backStr = '';

        for(var i = str.length -1 ; i >= 0  ; i--){

            backStr += str[i];
        }
        if(str.toLowerCase() === backStr.toLowerCase()){
            alert(str + " is Palindrome");
        }else{
            alert(str + " is not Palindrome");
        }
    }
    palindrome();
}

function task11(){

    function titleCase(str){
        var arr = str.split(" ");

        for(var i =0 ; i < arr.length ; i++){
            var firstLetter = arr[i][0].toUpperCase() ;
            var otherLetter = arr[i];
            var word = 
        }

    }
    titleCase("the quick brown fox");
}

function task12(){
    
    function checkLength(sen){
        var splitSen = sen.split(" ");
        var longestWord = " ";
        for(var i = 1 ; i <= splitSen.length ; i++ ){
             console.log(splitSen );
          
            for(var j = 0 ;  j <= i ; j++){

                if(splitSen[j].length < splitSen[i].length ){
                    longestWord = splitSen[j] ;
                    splitSen[j] = splitSen[i] ;
                    splitSen[i] = longestWord ;
                }
            }

        }
        return splitSen ;

    }
    
    var sen = prompt("Enter sentence : ");
    var result =  checkLength(sen) ;
    console.log(result);
}

function task13(){
    
    function occurrencesStr(str , letter){
        var count = 0 ;
        for(var i =0 ; i < str.length ; i++){
            if (str[i] === letter){
                count += 1 ;
            }
        }
        return count ;
    }

    var countNum = occurrencesStr("JSResourceS.com", "o");
    document.write("In this string 'JSResourceS.com' letter  'o' is " + countNum + " times in the string.");
}

function task14(){

    function calcCircumference(r){
        var circOfCircle = 2*pi*(r**2);
        document.write("Circumference Of Circle Is "+ circOfCircle);
    }

    function calcArea(r){
        var areOfCircle = pi*(r**2);
        document.write("Area Of Circle Is "+ areOfCircle);
    }

    const pi = 3.142 ;
    var radius = prompt("Enter radius of circle : ");
    calcCircumference(radius);
    calcArea(radius);
}