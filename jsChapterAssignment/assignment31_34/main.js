
function task1(){
    var date = new Date();
    document.write(date);
}

function task2(){
    var date = new Date();
    var month = ['January', "February", "March", "April", "May", "Jun" , "July", "Augest", "September", "Octuber", "November", "December"]
    document.write("Current Month : " + month[date.getMonth()]);
}

function task3(){
    var date = new Date();
    var day = ["Saturday", "Sunday", "Monday", "Tuesday","Wednessday", "Thursday", "Friday"]
    document.write("Today is : " + day[date.getDay()]);
}

function task4(){
    var date = new Date();
    var dayNum = date.getDay() ;
    var days = ["Saturday", "Sunday", "Monday", "Tuesday","Wednesday", "Thusday", "Friday"] ;
    if(dayNum === 0 || dayNum === 1){
        document.write("It's Fun Day ");
    }else{
        document.write("Today is : " + days[dayNum]);
    }
}

function task5(){
    var date = new Date();
    var getDate = date.getDate();
    if(getDate <= 15){
        alert("First fifteen days of the month");
    }else{
        alert("Last days of the month");
    }
}

function task6(){
    var currDate = new Date();
    var date = new Date("jan. 1,1970");
    var milliSec = date.getTime();
    var minutes = milliSec /(1000*60*60);
    document.write("Current Date  : " + currDate + "<br>" + 
    "Elapsed milliseconds since January 1, 1970 : " + milliSec + "<br>" +
    "Elapsed minutes since January 1, 1970 : " + minutes
    );
}

function task7(){
    var date = new Date();
    var hours = date.getHours();

    if (hours > 12){
        alert("It's PM");
    }else{
        alert("It's AM");
    }
}

function task8(){
    var laterDate = new Date("dec 31,2020");
    document.write("Later Date : " + laterDate);
}

function task9(){
    var currDate = new Date();
    var date = new Date("jun 18,2015");
    var milliSec = date.getTime();
    var currMilliSec = currDate.getTime();
    var diff = currMilliSec - milliSec ;
    var days = diff / (1000 * 60 * 60 * 24);
    document.write(Math.floor(days) + " days have passed since 1st Ramadam, 2015");
}

function task10(){
    var currDate = new Date();
    var currMilliSec = currDate.getTime();
    var date = new Date("dec 5,2015  22:50:16");
    var miliSec = date.getTime();
    var diff = currMilliSec - miliSec ;
    var sec = diff/(1000*60);
    document.write("On reference date : " + date + "<br>" +
    Math.floor(sec) + " seconds had passed since beginning of 2015"
    );
}

function task11(){
}

function task12(){

}

function task13(){
    var age = +prompt("Enter Your Age : ");
    var date = new Date();
    var year = date.getFullYear();
    document.write("Your Age is " + age + "<br>" +
    "Your Birth Year is " + (year - age));
}

function task14(){
    var name = prompt("Enter Name : ");
    var unit = +prompt("how many unit use this month : ")
    var month = ['January', "February", "March", "April", "May", "Jun" , "July", "Augest", "September", "Octuber", "November", "December"]
    var date = new Date();
    var getMonth = date.getMonth();

    var netAmount = unit * 16 ;
    var grossAmount = netAmount + 350 ;

    document.write("<h1>K-Electric Bill</h1><br><br>"+
    "Customer Name : " + name + "<br>" +
    "Month : " + month[getMonth] + "<br>" +
    "Number Of Unit : " + unit + "<br>" +
    "Charge Per Unit : 16 " + "<br><br>" +
    "Net Amount Payable (Within Due Date) : " + netAmount + "<br>" +
    "Late Payment Sursharge : 350 " + "<br>" +
    "Gross Amount Payable (After Due Date) " + grossAmount
    );
}