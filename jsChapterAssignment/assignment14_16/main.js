    // Task 1

    // Task 2

    // Task 3
    function task3(){
       var stringArray = ["karachi" , "lahore", "multan" , "peshawer"]; 
       alert("String Array : " + stringArray);
    }

    // Task 4
    function task4(){
        var numArray = [1,2,3,4];
        alert("Number Array : " + numArray);
    }

    // Task 5
    function task5(){
        var booleanArray = [true , false , false , true] ;
        alert("Boolean Array : "+ booleanArray);
    }

    // Task 6
    function task6(){
        var mixedArray = [1 , true , 2 , 'lahore', 'karachi' , false , 4];
        alert("Mix Array : " + mixedArray );
    }

    // Task 7
    function task7(){
       var degreeArray = ['SSC' , "HSC", "BSC" , "MSC", "BCOM" , "MS" , "M.Phil" , "PhD"] ;
       document.write("<h1>Qualification</h1><br><b>" + degreeArray[0] + "<br>" +
       degreeArray[1] + "<br>" + degreeArray[2] + "<br>" + degreeArray[3] + "<br>" + degreeArray[4] + "<br>" +
       degreeArray[5] + "<br>" + degreeArray[6] + "<br>" + degreeArray[7] + "</b>"
       );
    }

    //  Task 8
    function task8(){
        var nameArr = ["Micheal", "Jhon" , "Tony"];
        var score = [320 , 230 , 480];

        document.write("Score of "+ nameArr[0] + " is " + score[0] + "." + "Percentage : " + (score[0] / 500) * 100 + "%" + "<br>" +
        "Score of "+ nameArr[1] + " is " + score[1] + "." + "Percentage : " + (score[1] / 500) * 100 + "%" + "<br>" +
        "Score of "+ nameArr[2] + " is " + score[2] + "." + "Percentage : " + (score[2] / 500) * 100 + "%" 
        );
    }

    // Task 9
    function task9(){
    document.write("<h1>Array Element Adding & Removing</h1><br><br>");
    var color = ['yellow','white','black'];
    document.write("<b>Array : </b> [" + color + "]<br>");
    // console.log(color);

    var addBeginning = prompt("what color you want to add to the beginner array element : ");
    color.unshift(addBeginning);
    document.write("<b>Add color in the Beginner : </b>[" + color + "]<br>");
    // console.log(color);

    var addEnd = prompt("what color you want to add at the end : ");
    color.push(addEnd);
    document.write("<b>Add color in the End : </b>[" + color + "]<br>");
    // console.log(color);

    var addMoreBeginning1 = prompt("Add two more color in the beginner \nEnter first color :");
    var addMoreBeginning2 = prompt("Enter second color :  ");
    color.unshift(addMoreBeginning1 ,addMoreBeginning2);
    document.write("<b>Add More color in the Beginner : </b>[" + color + "]<br>");
    // console.log(color);

    color.shift();
    document.write("<b>First color deleted successfully : </b>[" + color + "]<br>");
    // console.log(color);

    color.pop();
    document.write("<b>Last color deleted successfully : </b>[" + color + "]<br>");
    // console.log(color);

    var indexNum = +prompt("Which index you want to add a color : ");
    var randomColor = prompt("Enter Color Name ");
    color.splice(indexNum , 0 ,randomColor);
    document.write("<bYou add "+ randomColor + " color on Index " + indexNum + " : </b>[" + color + "]<br>");
    // console.log(color);

    var delIndexNum1 = +prompt("Which start index you want to delete : ");
    var delIndexNum2 = +prompt("How many index you want to delete : ");
    color.splice(delIndexNum1, delIndexNum2);
    document.write("<bYou deleted Index " + delIndexNum1 + " from index " + (delIndexNum1 + delIndexNum2) + " : </b>[" + color + "]<br>");
    // console.log(color);
    }


    //  Task 10
    function task10(){
        var arr = [ 320 , 230 , 480, 120];
        var sortElement = 0 ;
        document.write("Scores Of Students : " + arr + "<br>");

        for (var i = 1 ; i <= arr.length ; i++ ){
           for (var j = 0  ; j < i ; j++){
               if (arr[j] > arr[i]){
                   sortElement = arr[j] ;
                   arr[j] = arr[i];
                   arr[i] = sortElement ;
                }
            }
        }
        document.write("Ordered Scores Of Students :" + arr + "<br>");
    }


    // Task 11
    function task11(){
        var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer"];
        var newCities = cities.slice(2,4);

        document.write("Cities List : " + cities + "<br>" + "Selected Cities List : " + newCities );
    }

    //  Task 12
    function task12(){
        var arr = ["This" , "is", "my", "cat"];
        var joinArr = arr.join(" ");
        document.write("Array : " + arr + "<br>" + "String : " + joinArr);
    }

    // Task 13
    function task13(){
        var arr = ["keyboard", "mouse", "printer" , "monitor"];

        for (var i = 0 ; i <= arr.length ; i++){
           arr.shift();
           document.write("["+arr+"]<br>");
        }
        arr.shift();
        document.write("["+arr+"]");

    }

     // Task 14
    function task14(){
        var arr = ["keyboard", "mouse", "printer" , "monitor"];
    
        for (var i = 0 ; i <= arr.length ; i++){
           arr.pop();
           document.write("["+arr+"]<br>");
        }
        arr.pop();
        document.write("["+arr+"]");
    }

    //  Task 15
    function task15(){
        var mobile = ["Apple", "Sumsung", "Motorola", "Nokia", "Sony", "Haier"] ;

        document.write("<b>Available Mobile : </b> " +  "<select name = 'mobile' >" + 
        "<option value='apple' > " + mobile[0] + "</option>" +
        "<option value='apple' > " + mobile[1] + "</option>" +
        "<option value='apple' > " + mobile[2] + "</option>" +
        "<option value='apple' > " + mobile[3] + "</option>" +
        "<option value='apple' > " + mobile[4] + "</option>" +
        "<option value='apple' > " + mobile[5] + "</option>" +
        "</select>"
        );
    }

