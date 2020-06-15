        //  Task 1
        function task1() {
             var num1 = +prompt("Enter First Number :");
             var num2 = +prompt("Enter Second Number :");
             var addNum = num1 + num2 ;

             document.write("Sum of " + num1 + " and " + num2 + ' is ' +  addNum);
        };


        // Task 2
        function task2(){
            
             var num1 = +prompt("Enter First Number :");
             var num2 = +prompt("Enter Second Number :");
             var subNum = num1 - num2 ;
             var MulNum = num1 * num2 ;
             var DivNum = num1 / num2 ;
             var ModNum = num1 % num2 ;

             document.write("Subtraction of " + num1 + " and " + num2 + ' is ' +  subNum + "<br>" +
             "Multiplication of " + num1 + " and " + num2 + ' is ' +  MulNum + "<br>" +
             "Division of " + num1 + " and " + num2 + ' is ' +  DivNum + "<br>" +
             "Modulus of " + num1 + " and " + num2 + ' is ' +  ModNum + "<br>" );
        };


        // Task 3
        function task3(){
             var num ;
             document.write("Value after declaration is " + num);
             num = 5 ;
             document.write("<br>Initial value is : " + num);
             num++;
             document.write("<br>value after increment is : " + num);
             num += 7 ;
             document.write("<br>value after addition is :  " + num);
             num--;
             document.write("<br>value after decrement is : " + num);
             num %= 2;
             document.write("<br>The remainder is : " + num);
            
        };


        // Task 4
        function task4(){
             var ticketPrice = 600 ;
             document.write("Total cost to buy 5 tickets to a movie is " + ticketPrice*5 );
        };


        // Task 5
        function task5(){
             var tableNum = 4;
             document.write("Table Of " + tableNum + "<br>" + 
             tableNum + " x 1 = " + tableNum * 1 + "<br>" +
             tableNum + " x 2 = " + tableNum * 2 + "<br>" +
             tableNum + " x 3 = " + tableNum * 3 + "<br>" +
             tableNum + " x 4 = " + tableNum * 4 + "<br>" +
             tableNum + " x 5 = " + tableNum * 5 + "<br>" +
             tableNum + " x 6 = " + tableNum * 6 + "<br>" +
             tableNum + " x 7 = " + tableNum * 7 + "<br>" +
             tableNum + " x 8 = " + tableNum * 8 + "<br>" +
             tableNum + " x 9 = " + tableNum * 9 + "<br>" +
             tableNum + " x 10 = " + tableNum * 10
            );
        };

        
        // Task 6
        function task6(){
             var celsiusTemp = 25 ;
             var fahrenheitTemp = 70 ;
             var celsiusConvertFahrenheit = (celsiusTemp * 9/5 ) + 32 ;
             var FahrenheitConvertCelsius = (fahrenheitTemp - 32 ) * 5/9 ;
             document.write(celsiusTemp + "<sup>o</sup>C is " +  celsiusConvertFahrenheit + "<sup>o</sup>F" + "<br>" +
             fahrenheitTemp + "<sup>o</sup>F is " +  FahrenheitConvertCelsius + "<sup>o</sup>C"
            );
        };


        // Task 7
        function task7(){
             var iteam1Price = 650 ;
             var quantityOfIteam1 = 3 ;
             var iteam2Price = 100 ;
             var quantityOfIteam2 = 7 ;
             var shippingCharges = 100 ;

             var totalPriceIteam1 = iteam1Price * quantityOfIteam1 ;
             var totalPriceIteam2 = iteam2Price * quantityOfIteam2 ;

             var totalPrice = totalPriceIteam1 + totalPriceIteam2 + shippingCharges;

             document.write("<h1>Shoping Cart</h1><br>" +
             "Price of iteam 1 is " + iteam1Price + "<br>" +
             "Quantity of iteam 1 is " + quantityOfIteam1 + "<br>" +
             "Price of iteam 2 is " + iteam2Price + "<br>" +
             "Quantity of iteam 2 is " + quantityOfIteam2 + "<br>" +
             "Shipping charges is " + shippingCharges + "<br><br>" +
             "Total coast of your order is "+ totalPrice 
             );

        };


        //  Task 8
        function task8(){
             var totalMarks = 980 ;
             var marksObtained = 804 ;
             var percentage =(marksObtained * 100 ) / totalMarks ;

             document.write("<h1>Marks Sheet</h1><br><br>" +
             "Total Marks = "+ totalMarks + "<br> " +
             "Total Obtained = "+ marksObtained + "<br> " +
             "Percentage = " + percentage + "%"
             );
        };



        // Task 9
        function task9(){
             var usDollar = 10 ;
             var suadiRiyal = 25 ;

             var dollarInPkr = usDollar * 104 ;
             var riyalInPkr =  suadiRiyal * 28 ;
             var totalPkr = dollarInPkr + riyalInPkr ;

             document.write("<h1>Currency In PKR</h1><br><br>"+"Total Currency In PKR " + totalPkr );
        };

        // Task 10
        function task10(){
             var num = 6 ;
             var resultNum = ((num + 5) * 10 ) / 2 ;
             document.write("Number is " + num + " and After solving result  is "+ resultNum);
        };

        // Task 11
        function task11(){
             var currYear = 2020 ;
             var birthYear = 1997 ;
             var ageCalculate = currYear - birthYear ;

             document.write("<h1>Age Calculator </h1><br><br>" +
             "Current Year : " + currYear + "<br>" +
             "Birth Year : " + birthYear + "<br>" +
             "Your Age is : " + ageCalculate
            );
        };

        // Task 12
        function task12(){
             var radius = 20 ;
             const pi = 3.142 ;
             var circumference = 2 * pi * radius ;
             var circleArea = pi * (radius ** 2) ;
             document.write("<h1>The Geometrizer</h1><br><br>"+
             "Radius of a circle : " + radius + "<br>" + 
             "The circumference is : " + circumference + "<br>" + 
             "The Area is : " + circleArea
            );
        };


        // Task 13
        function task13(){
             var snack = "chocolate chip";
             var age = 15 ;
             var maxAge = 65 ;
             var snackAmount = 3 ;
             var totalSnack = (maxAge - age) * snackAmount ;

             document.write("<h1>The Lifetime Supply Calculator</h1><br><br>"+
             "Favourite Snack : " + snack + "<br>" +
             "Current Age : " + age + "<br>" +
             "Estimated Maximum Age : " + maxAge + "<br>" +
             "Amount of snacks per day : " + snackAmount + "<br>" +
             "You will need "+ totalSnack + " chocolate chip to last you until the ripe old age of " + maxAge + "<br>"
            );
        };


        
