function task1(){
    var firstName = prompt("Enter First Name : ");
    var lastName = prompt("Enter Last Name : ");
    var fullName = firstName + " " + lastName ;

    alert("Welcome "  + fullName );
}

function task2(){
    var mobile = prompt("Enter your favorite phone with model : ");
    var mobileLength = mobile.length ;
    document.write("My Favorite Phone is : " + mobile + "<br>" + 
    "Length Of String : " + mobileLength);
}

function task3(){
    var str = "Pakistani" ;
    document.write("String : " + str + "<br>" +
    "Index Of 'n' is  " + str.indexOf('n') ); 
}

function task4(){
    var str = "Hello World ";
    document.write("String : " + str + "<br>" +
    "Index Of 'l' is  " + str.lastIndexOf('l'));
}

function task5(){
    var str = "Pakistan";
    document.write("String : " + str + "<br>" +
    "Character at index 3 : " + str.charAt(3));   
}

function task6(){
    var firstName = "usama";
    var lastName = "rehman";
    var fullName = firstName + " " + lastName ;
    alert("Weclome " + fullName);
}

function task7(){
    var city = "Hydrabad";
    var change = city.replace("Hydra", "Islama");
    document.write("City : " + city + "<br>" + "After Replacement : " + change);
    console.log(city , change);
}

function task8(){
    var massage = "Ali and Sami are best friend.They play cricket and footbal together. ";
    var  replacement = massage.replace(/and/g, "&");
    document.write("Massage : " + massage + "<br>" + "Repacement & in Massage : " + replacement);
}

function task9(){
    var val = "1234" ;
    var valNum = parseInt(val);
    document.write("Value : " + val + "<br>" + "Type : String " + "<br>" +
    "Value : " + val + "<br>" + "Type : Number ");
}

function task10(){
    var getInput = prompt("Enter Somthing : "); 
    document.write("User Input : " + getInput + "<br>" + "Upper Case : " + getInput.toUpperCase() );
}

function task11(){
    var getInput = prompt("Enter Somthing : ");  
    var firstLetter = getInput.slice(0,1).toUpperCase();
    var otherLetter = getInput.slice(1);
    var titleCase = firstLetter + otherLetter ;
    document.write("User Input : " + getInput + "<br>" + "Upper Case : " + titleCase );
}

function task12(){
    var num  = "35.36" ;
    var num2 = "";

    for(var i = 0 ; i < num.length ; i++ ){
        if (num[i] === '.'){

        }else{
             num2 += num[i] ;
        }
    }
    document.write("Number : " + num + "<br>" + "Result : " + num2);
}

function task13(){
    var name = prompt("Enter Name : ");
    var Boolean = true ;

    for (var i =0 ; i < name.length ; i++){
        var charCode = name[i].charCodeAt();
        if(charCode === 33 || charCode === 46 || charCode === 44 || charCode === 68 || charCode === 32){
            Boolean = false ;
        }
    }

    if(Boolean === true){
        alert("Username : " + name);
    }else{
        alert("Please enter a valid username");
    }
}

function task14(){
    var iteam = ["cake", "apple pie", "cookies", "chips", "patties"] ;
    var bakeryIteam = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
    var Boolean = false ;

    for(var i = 0 ; i < iteam.length ; i++){
        if(bakeryIteam.toLowerCase() === iteam[i]){
            Boolean = true ;
            document.write(bakeryIteam + " is available at index " + i + " in our bakery.");

        }
    }

    if (Boolean === false){
        document.write(bakeryIteam + " is not available in our bakery.");
    }
}

function task15(){
    var pass = prompt("Enter 6 digit Password : ");
    var passRg = /^([a-zA-Z0-9]{6})+$/;
    if(isNaN(pass[0])){
        if(pass.match(passRg)){
            document.write("Enter Password : " + pass + "<br>" + "Bingo!Password is valid");
        }else{
            document.write("Enter Password : " + pass + "<br>" + "Please enter a valid password");
        }
    }else{
        document.write("Enter Password : " + pass + "<br>" + "Password can not being with a number");
    }
}

function task16(){
    var uni = "University Of Karachi" ;
    var arr = [];
    for (var i = 0 ; i < uni.length ; i++){
        arr.push(uni[i]);
    }

   for (var i = 0 ; i < arr.length ; i++){
       document.write(arr[i] + "<br>");
   }
}

function task17(){
    var userInput = prompt("Enter somthing : ");
    userInput.charAt(userInput.length - 1);
}

function task18(){
    var sentance = "the quick brown fox jumps over the lazy dog.";
    var check = sentance.split(" ");
    var count = 0 ;

    for (var i = 0 ; i < check.length - 1 ; i++){
        if(check[i] === "the"){
            count += 1;
        }
    }
    document.write("Text : " + sentance + "<br>" + 
    "There are "+ count + " occurrence(s) of word 'the'.");
}