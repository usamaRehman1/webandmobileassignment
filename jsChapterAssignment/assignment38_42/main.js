//    Task 01

// function power(a , b){
//     let pow = a ** b ;

//     return pow ; 
// }
// alert("8 ^ 2 = " +  power(8, 2));


//    Task 02

// function leapYear(){
//     let flag = false;
//     var year = prompt("Enter Year leap year :");

//     // check condition year is leap or not
//     switch(year){
//         case "2012":
//             flag = true ;
//             break ; 
//         case "2016":
//             flag = true ;
//             break ;  
//         case "2020":
//             flag = true ;
//             break ;              
//     }

//     if(flag){
//         alert(year + " is a Leap Year");
//     }else{
//         alert(year + " is not a Leap Year");
//     }

// } 
// //  function calling
// leapYear(); 


//  Task 03

// function triangle(){
//     let a = +prompt("Enter Triangle width in m : ");
//     let b = +prompt("Enter Triangle length in m : ");
//     let c = +prompt("Enter Triangle height in m: ");

//    alert("Area Of Triangle : " + areaTriangle(a,b,c));
// } 

// function areaTriangle(a , b, c){
//     var s = (a+b+c) / 2 ;
//     var area = s*(s-a)*(s-b)*(s-c);

//     return area;
// }
// triangle();



//    Task 04

// function mainFunction(){
//     let sub1 = +prompt("Every Subject contain 100 marks \nEnter Subject Number 1 :");
//     let sub2 = +prompt("Enter Subject Number 2 :");
//     let sub3 = +prompt("Enter Subject Number 3 :");

//     alert("Percentage : " + percentage(sub1,sub2,sub3) + "%");
//     alert("Average : " + average(sub1,sub2,sub3));
// }

// function percentage(sub1,sub2,sub3) {

//     let total = sub1 + sub2 + sub3 ;
//     var per =(total/ 300) * 100 ;
//     var perSetDecimal = per.toFixed(2);

//     return perSetDecimal ;
        
// }
    
// function average(sub1,sub2,sub3) {

//     let total = sub1 + sub2 + sub3 ;
//     var avg = total / 3 ; 
//     var avgSetDecimal = avg.toFixed(2);

//     return avgSetDecimal ;
// }
// mainFunction();


//   Task 05

// var str = "pakistan" ;
// function findIndex(str){
//     var chr = prompt(" String : " + str + "\nWhich character will you find index ?:")
//     var strArr = str.split("") ;
//     var indexNum ,repchr = "" , flag = false;

//     var i = 0 ;
//     while(i < strArr.length){
//         if(chr ===  strArr[i]){
//             repchr += i ;
//             indexNum = i ;
//             flag = true ;
//         }
//         i++;
//     }

//     if(flag){
//         if(repchr.length > 1 ){
//             document.write(chr + " is " + repchr.length + " times in the string" + "<br>" );
//             for(var i = 0 ; i < repchr.length ; i++ ){
//                 document.write(chr + " At " + repchr[i] + " Index" +"<br>");
//             }
//         }else{
//             document.write(chr + " At " + indexNum + " Index" + "<br>");
//         }
//     }else{
//         document.write(chr + " Not in the string");
//     }
// }
// findIndex(str);


    // Task 06

// var sentence = "The quick brown fox jump over the lazy dog";
// document.write("Strig : " + sentence + "<br>");

// function delVowel(sen){

//     var senArr = sen.split("");
//     var i = 0 ;

//     while(i < senArr.length){

//         switch(senArr[i]){
//             case "a" :
//                 senArr[i] = "";
//                 break;
//             case "e" :
//                 senArr[i] = "";
//                 break;
//             case "i" :
//                 senArr[i] = "";
//                 break;
//             case "o" :
//                 senArr[i] = "";
//                 break;
//             case "u" :
//                 senArr[i] = "";
//                 break;            
//         }

//         i++;
//     }
//     document.write("After removing vowel in the sentence : " + senArr.join(""));
// }
// delVowel(sentence);



    //  Task 07

// function distanceMeter(d){
//     var meter = d * 1000 ;
//     return  meter ;
// }

// function distanceFeet(d){
//     var feet = (d * 1000) * 0.35 ;
//     return feet;
// }    

// function distanceInche(d){
//     var inche = (d * 1000) * 39.37 ;
//     return inche ;
// }

// function distanceCentimeter(d){
//     var centimeter = (d * 1000) * 100 ;
//     return centimeter;
// }

// var distance = +prompt("Enter Distance in km : ");
// document.write("Distance in meter : " + distanceMeter(distance) + "m" + "<br>" +
// "Distance in Feet : " + distanceFeet(distance) + "ft" + "<br>" +
// "Distance in Inche : " + distanceInche(distance) + "inche" + "<br>" +
// "Distance in Centimeter : " + distanceCentimeter(distance) + "cm" ); 


    // Task 09

    

    // Task 10

// function change(){
//     var pkr = +prompt("Enter amount with draw!"); 
//     var i = 0 , check = 0 , ten = 0 , fifty = 0 , hundred = 0 ;

//     while(i <= pkr){

//         var len = pkr.toString();
//         check += 1 ;

//         if(check === 10 ){
//             check = 0 ;
//             ten += 1 ;
//             if(ten == 5){
//                 fifty += 1;
//                 ten = 0 ;
//                 if(fifty == 2){
//                     hundred += 1 ;
//                     fifty = 0 ;
//                 }
//             }
//         }
//         i++;
//     }
//     alert("You will have "+ hundred + " hundred notes " + fifty + " fifty notes " +  ten + " ten notes ");
// }
// change();
