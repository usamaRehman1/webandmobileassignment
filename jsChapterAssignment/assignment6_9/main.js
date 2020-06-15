         
         
        //  Task 1
        function task1(){
             var num = +prompt("Enter Number : ");
             document.write("Result : <br>The value of a is : " + num + "<br>_______________________________________" + "<br>" +
             "The value of ++a is : " + ++num + "<br>Now the value of a is : " + num + "<br><br>" + 
             "The value of ++a is : " + num++ + "<br>Now the value of a is : " + num + "<br><br>" + 
             "The value of ++a is : " + --num + "<br>Now the value of a is : " + num + "<br><br>" + 
             "The value of ++a is : " + num-- + "<br>Now the value of a is : " + num 
            );
        };


        // Task 2
        function task2(){
             var a = 2 , b = 1 ;
             var result = --a - --b + ++b + b-- ;
             document.write("a is " + a + "<br>" + "b is " + b + "<br>" + 
             "post decrement in a --a is " + 1 + "<br>" +
             "post decrement in b --b is " + 0 + "<br>" +
             "--a - --b = " + 1 + "<br>" +
             "--a - --b + ++b = " + 2 + "<br>" +
             "--a - --b + ++b + b-- = " + 3 + "<br>" +
             "Result is " + result 
            );
        };

        // Task 3
        function task3(){
             var name = prompt("Enter FullName  : ");
             document.write("Welcome " + name) ;
        };


        // Task 4
        function task4(){
             var tableNum = +prompt("Enter Table Number : ");

            if (tableNum != " "){
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
            }else{
               document.write("Table Of " + 5 + "<br>" + 
               5 + " x 1 = " + 5 * 1 + "<br>" +
               5 + " x 2 = " + 5 * 2 + "<br>" +
               5 + " x 3 = " + 5 * 3 + "<br>" +
               5 + " x 4 = " + 5 * 4 + "<br>" +
               5 + " x 5 = " + 5 * 5 + "<br>" +
               5 + " x 6 = " + 5 * 6 + "<br>" +
               5 + " x 7 = " + 5 * 7 + "<br>" +
               5 + " x 8 = " + 5 * 8 + "<br>" +
               5 + " x 9 = " + 5 * 9 + "<br>" +
               5 + " x 10 = " + 5 * 10
            );    
            }
        };


        // Task 5
        function task5(){
             var Sub1stName = prompt("Enter 1st Subject Name : ");
             var Sub2ndName = prompt("Enter 2nd Subject Name : ");
             var Sub3rdName = prompt("Enter 3rd Subject Name : ");

             var Sub1stNum = +prompt("Enter 1st Subject Number : ");
             var Sub2ndNum = +prompt("Enter 2nd Subject Number : ");
             var Sub3rdNum = +prompt("Enter 3rd Subject Number : ");

             var Sub1stPer = (Sub1stNum * 100) / 100 ;
             var Sub2ndPer = (Sub2ndNum * 100) / 100 ;
             var Sub3rdPer = (Sub3rdNum * 100) / 100 ;

             var totalObtained = Sub1stNum + Sub2ndNum + Sub3rdNum ;
             var totalper =(( Sub1stPer + Sub2ndPer + Sub3rdPer) * 100 ) / 300 ;

             document.write("<table border =2><tr><th>" +  " Subject</th><th> " + " Total Marks </th><th>" + "Obtained Marks</th><th>" + "Percentage </th><tr>" + 
             "<tr><td> " + Sub1stName + "</td><td> 100 </td><td>" + Sub1stNum + "</td><td>" + Sub1stPer + "%</td></tr>" +
             "<tr><td> " + Sub2ndName + "</td><td> 100 </td><td>" + Sub2ndNum + "</td><td>" + Sub2ndPer + "%</td></tr>" +
             "<tr><td> " + Sub3rdName + "</td><td> 100 </td><td>" + Sub3rdNum + "</td><td>" + Sub3rdPer + "%</td></tr>" +
             "<tr><td></td><td> 300 </td><td>" + totalObtained + "</td><td>" + totalper + "%</td></tr></table>"
        );
        };

