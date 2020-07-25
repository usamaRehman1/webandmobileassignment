function getdata(){

    let flag = true ;

    var workData = document.getElementById("work").value ;
    var chekSameWork = document.querySelectorAll("#workList li");

    for (var i = 0 ; i < chekSameWork.length ; i++ ){
        
        let liText = chekSameWork[i].innerText ;

        if (liText === workData) {
            alert("Its also present in the list");
            document.getElementById("work").value = "" ;
            flag = false ;

        }else{
            // console.log("Not present");
        }
    }

    if(workData != " " && workData != "" && flag != false ){
    var getUl = document.getElementById("workList") ;
    var currLi = document.createElement("LI");
    var liTextNode = document.createTextNode(workData);
    currLi.appendChild(liTextNode);
    getUl.appendChild(currLi);

    // creaet delete button
    var deleteBtn = document.createElement("SPAN");
    deleteBtn.setAttribute("class" , "fa fa-trash");
    deleteBtn.setAttribute("onclick", "del(this.parentElement)");
    currLi.appendChild(deleteBtn);

    // create edit btn
    var editBtn = document.createElement("SPAN");
    editBtn.setAttribute("class" , "fa fa-edit");
    editBtn.setAttribute("onclick", "edit(this.parentElement)");
    currLi.appendChild(editBtn);

    document.getElementById("work").value = "" ;
    }else{
        alert("Your work is not valid \n please try again !");
    }

}

function edit(getli){
    var editText = getli.innerText ;
    // console.log(editText) 

    document.getElementById("work").value = editText ;
    document.getElementById("work").focus() ;

    getli.remove();

}
function del(getli){
    getli.remove();
}