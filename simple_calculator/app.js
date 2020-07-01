$(document).ready(function(){
    document.getElementById("historyBtn").addEventListener("click", function(){
        $("#historyBtn").hide();
        document.getElementById("keyBoard").style.display = 'none' ;
        document.getElementById("history").style.display = "block";
    });
    document.getElementById("calcBtn").addEventListener("click",function(){
        $("#historyBtn").show();
        $("table").fadeIn({duration:'slow', queue:true});
        document.getElementById("history").style.display = "none";
    });
    document.getElementById("clearBtn").addEventListener("click",function(){
        var iteams = document.querySelectorAll("#historyList li");

        for(var i = 0 ; i < iteams.length ; i++ ){
            var rem = iteams[i].remove();
            // console.log(iteams[i].innerHTML);
        }
        $("#historyBtn").show();
        $("table").fadeIn({duration:'slow', queue:true});
        clearData();
        document.getElementById("history").style.display = "none";
    });
});

function getNumber(num){
    var result = document.getElementById("resultBar").value += num;    
}

function clearData(){
    var result = document.getElementById("resultBar").value = " ";
    document.getElementById("currHistory").innerHTML = " " ;

}

function result(){
    currHistory(document.getElementById("resultBar").value);
    var ans = eval(document.getElementById("resultBar").value);
    var result = document.getElementById("resultBar").value = ans ;
}

function cut(){
    var removeLastElement = document.getElementById("resultBar").value.slice(0,-1) ;
    document.getElementById("resultBar").value = removeLastElement ;
}

function currHistory(result){
    document.getElementById("currHistory").innerHTML = result ;
    var historyData =  document.getElementById("historyData").innerHTML ;

    var textVal = "=" + eval(result);
    var listNode = document.getElementById("historyList"),
    liNode = document.createElement("LI"),
    spanNode = document.createElement("SPAN"),
    spanText =  document.createTextNode(textVal) ,
    textNode = document.createTextNode(result) ;

    liNode.appendChild(textNode);
    spanNode.appendChild(spanText);
    liNode.appendChild(spanNode);
    listNode.appendChild(liNode);
    // console.log(listNode); 
}



