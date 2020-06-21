function task1(){
    var arr =  [
        [0,1,2,3]
    ];
}

function task2(){
    var arr = [
        [0,1,2,3],
        [1,0,1,2],
        [2,1,0,1]
    ];
    for (var i = 0 ; i < arr.length ; i++){
         document.write(arr[i].join(" ") , "<br>");
    }
}

function task3(){
    for (var i = 1 ; i <= 10 ; i++){
        document.write( i + "<br>");
    }
}

function task4(){
    var tableNum = +prompt("Enter Table Number : ");
    var tableLen = +prompt("Enter Table Length : ");
    document.write("<h1>Table Number : " + tableNum + " </h1>");

    for(var i = 1 ; i <= tableLen ; i++ ){
        document.write(tableNum + " x " + i + " = " + tableNum * i +  "<br>");
    }
}

function task5(){
    var fruits = ["Apple", "Mango", "Banana", "Orange", "Strawberry"];
    document.write("Fruits Array : [" + fruits + "]<br><br>");

    for(var i = 0 ; i < fruits.length ; i++){
        document.write("Element at index " + i + " is " + fruits[i] + "<br>");
    }
}

function task6(){
    var num = +prompt("Enter number : ");
   
    document.write("<b>Counting :</b>");
    for (var i = 1 ; i <= num ; i++ ){
        document.write( i + " , ");
    }

    document.write("<br><b>Reverse Counting :</b>");
    for(var i = num ; i > 0 ; i++ ){
        document.write(i , " , ");
    }

    document.write("<br><b>Even :</b>");
    for(var i = num ; i > 0 ; i++ ){
        if(i % 2 === 0){
            document.write(i , " , ");
        }
    }

    document.write("<br><b>Odd :</b>");
    for(var i = num ; i > 0 ; i++ ){
        if(i % 2 === 1){
            document.write(i , " , ");
        }
    }
}

function task7(){
    var arr = ["cake" , "apple pie", "cookie", "chips", "patties"];

    var getElement = prompt("Welcome to ABC Bakery.What do you want to order sir/mam");
    var Boolean = false ;

    for (var i = 0 ; i < arr.length ; i++){
        if(arr[i] === getElement){
            Boolean = true ;
            document.write(getElement + " is <b>available</b> at index " + i + " in over Bakery ." );
        }
    }

    if (Boolean == false){
        document.write("We are sorry." + getElement + " is not <b>available</b> in over Bakery ." );
    }
}

function task8(){
    var numArr = [24,53,78,91,12];
    var largestNum = 0 ;

    for(var i = 0 ; i < numArr.length ; i++){
        if(numArr[i] >= largestNum ){
            largestNum = numArr[i];
        }
    }

    document.write("Array : "+ numArr + "<br>" + 
    "The Largest number is " + largestNum);
}

function task9(){
    var numArr = [24,53,78,91,12];
    var check = 0 ;

    for(var i = 1 ; i <= numArr.length ; i++){
        for (var j = 0 ; j < i ; j++ ){
            if(numArr[j] > numArr[i]){
                check = numArr[j];
                numArr[j] = numArr[i];
                numArr[i] = check ;
            }
        }
    }

    document.write("Array : "+ numArr + "<br>" + 
    "The smallest number is " + numArr[0]);
}

function task10(){
    for(var i = 1 ; i <= 20 ; i++){
        document.write(i*5 + " , ");
    }
}