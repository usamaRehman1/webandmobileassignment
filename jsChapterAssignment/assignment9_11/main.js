        
        // Task 1
        function task1(){
             var city = prompt("Enter city Name :");

             if(city.toLowerCase() == "karachi"){
                document.write("Welcome To City Of Light");
             }else{
                document.write("Welcome To " + city);
            }
        };

        // Task 2 
        function task2(){

             var gender = prompt("Enter Gender : ");

             if (gender == "male"){
                alert("Good Morning Sir");
             }
             else if(gender == "female"){
                alert("Good Morning Mam");
             }
             else{
                alert("Pleas enter just gender");
            }
        };

        // Task 3
        function task3(){
             var color1 = prompt("Enter 1st color of trafic signal :");
             var color2 = prompt("Enter 2nd color of trafic signal :");
             var color3 = prompt("Enter 3rd color of trafic signal :");

             document.write("<table border = 2><tr><th>Signal color </th><th>Massage</th></tr>" + 
             "<tr><td>" + color1 + "</td><td> Must Stop </td></tr>" +  
             "<tr><td>" + color2 + "</td><td> Ready To Move  </td></tr>" +  
             "<tr><td>" + color3 + "</td><td> move Now </td></tr> </table>"
            );
        };

        // Task 4
        function task4(){
             var fuel = +prompt("Enter remaining fuel in liter :");

             if (fuel < 0.25 ){
                 alert("Please refill the fuel in your car");
             }else{    
                 alert("In your car fuel is up to 0.25 liter");
             } 
        };


        //   Task 5
        function task5(){
             var a = 4;
            
             if (++a === 5){
                 alert("given condition for variable a is true"); 
             }

             var b = 82;
            
             if ( b++ === 83){
                 alert("given condition for variable b is true"); 
             }

             var c = 12;
            
             if (c++ === 13){
                 alert("condition 1 is true"); 
             }    
             if (c === 13){
                 alert("condition 2 is true"); 
             }
             if (++c < 14){
                 alert("condition 3 is true"); 
             }
             if (c === 14){
                 alert("condition 4 is true"); 
             }

             var materialCost = 20000 ;
             var laborCost = 2000 ;
             var totalCost = materialCost + laborCost ;
             if (totalCost === materialCost + laborCost){
                 alert("The Cost Equals");
             }

             if(true){
                 alert("True");
             }
             if(false){
                 alert("False");
             }

             if("car" < "cat"){
                alert("car is smaller then cat");
             }
        };

        // Task 6
        function task6(){
             var totalMarks = +prompt('Enter Total Marks :');
             var marksObtai = +prompt('Enter Marks Obtained :');
             var percentage = (marksObtai / totalMarks) * 100 ;
             var grade = " ";
             var remarks = "";

             if (percentage >= 80 && percentage <= 100){
                 grade = "A-one" ;
                 remarks = "Excellent";
             }
             else if(percentage >= 70 && percentage < 80 ){
                 grade = "A" ;
                 remarks = "good";
             }
             else if(percentage >= 60 && percentage < 70){
                 grade = "c" ;
                 remarks = "You need to improve";
             }else{
                 grade = "Fail" ;
                 remarks = "sorry";
             }

             document.write("<h1>Mark Sheet </h1><br><br>" + 
             "Total Marks : " + totalMarks + "<br>" + 
             "Marks Obtained: " + marksObtai + "<br>" + 
             "Percentage : " + percentage + "%<br>" + 
             "Grade : " + grade + "<br>" + 
             "Remarks : " + remarks 
            );
        };
         

        //   Task 7
        function task7(){
            var num = 4 ;
            var secNum = +prompt("Guess the Secret number 1 to 10: ");

            if (num === secNum){
               alert("Bingo! correct Answer ");
            }
            else if (++num ===  secNum){
               alert("close enough to the correct answer");
            }
            else{
               alert("sorry! not match");
            }
        };

        
        // Task 8
        function task8(){
            var num = +prompt("Enter Number :");

            var checkDivisible = num % 3 ;
            if ( checkDivisible === 0){
                alert("Number is Divisible by 3");
            }else{
                alert("Number is Not Divisible by  3");
            }
        };

        //   Task 9
        function task9(){
            var num = +prompt("Enter Number : ");

            var checkNum = num % 2;
            if ( checkNum === 0){
                alert("Number is even");
            }else{
                alert("Number is odd");
            }
        };

        //  Task 10
        function task10(){
            var temp = +prompt("Enter Temperature ");

            if (temp > 40){
                alert("Its Too Hot Outside");
            }
            else if(temp > 30){
                alert("The Weather Today Is Normal");
            }
            else if(temp > 20){
                alert("Today's Weather Is Cool");
            }
            else if(temp > 10){
                alert("OMG! Today's Weather Is So Cool");
            }
            else{
                alert("Input is not valid");
            }
        };
        
        //  Task 11
        function task11(){
            var firstNum = +prompt("Enter First Number :");
            var secondNum = +prompt("Enter Second Number :");
            var sign = prompt("Enter Sign.(+,-,/,*,%) :");
            var cal = 0 ;

            if(sign == '+'){
                cal = firstNum + secondNum ;
                alert(firstNum + " + " + secondNum + " = " + cal);
            }
            else if(sign == '-'){
                cal = firstNum - secondNum ;
                alert(firstNum + " - " + secondNum + " = " + cal);
            }
            else if(sign == '*'){
                cal = firstNum * secondNum ;
                alert(firstNum + " * " + secondNum + " = " + cal);
            }
            else if(sign == '/'){
                cal = firstNum / secondNum ;
                alert(firstNum + " / " + secondNum + " = " + cal);
            }
            else if(sign == '%'){
                cal = firstNum % secondNum ;
                alert(firstNum + " % " + secondNum + " = " + cal);
            }
            else{
                alert("Input is not valid");
            }
        };
