//   Task 01
function signup(){
    document.getElementById("module").style.display = "block"; 
    document.getElementById("showdata").innerHTML = "" ;
}

function closeModule(){
    document.getElementById("module").style.display = "none"; 
}

function submit(){
    var fname = document.getElementById("fname").value ;
    var lname = document.getElementById("lname").value ;
    var email = document.getElementById("email").value ;
    var pass = document.getElementById("pass").value ;

    document.getElementById("module").style.display = "none"; 

    document.getElementById("showdata").innerHTML = "<h2>Your Data </h2>" + "<br> " + " First Name : " + fname + "<br>" +
    "Last Name : " + lname + "<br>" + "Email : " + email + "<br>" + "Password : " + pass;
    
    document.getElementById("fname").value = "" ;
    document.getElementById("lname").value = "" ;
    document.getElementById("email").value = "" ;
    document.getElementById("pass").value  = "";

}

//    Task 02

function readMore() {
    var para = document.getElementById("p1").innerText  = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore expedita aliquam ea temporibus ut officia omnis qui ad voluptatem repudiandae totam minus eaque ipsum, quod dolorem necessitatibus cumque! Quidem!";
}

//    Task 03

function submit(){
    var name = document.getElementById("name").value ;
    var sch = document.getElementById("sch").value ;
    var city = document.getElementById("city").value ;
    var rel = document.getElementById("rel").value ;

    let gettab = document.getElementById("dataTab");
    let tr = document.createElement("TR");

    let td1 = document.createElement("Td");
    let td1Text = document.createTextNode(name);
    td1.appendChild(td1Text);
    tr.appendChild(td1);

    
    let td2 = document.createElement("Td");
    let td2Text = document.createTextNode(sch);
    td2.appendChild(td2Text);
    tr.appendChild(td2);

    
    let td3 = document.createElement("Td");
    let td3Text = document.createTextNode(city);
    td3.appendChild(td3Text);
    tr.appendChild(td3);

    
    let td4 = document.createElement("Td");
    let td4Text = document.createTextNode(rel);
    td4.appendChild(td4Text);
    tr.appendChild(td4);

    
    let td5 = document.createElement("Td");
    let editbtn = document.createElement("BUTTON")
    let editbtnText = document.createTextNode("Edit");
    editbtn.setAttribute("onclick","edit(this.parentNode.parentNode)");
    editbtn.appendChild(editbtnText);
    td5.appendChild(editbtn);
    tr.appendChild(td5);

    
    let td6 = document.createElement("Td");
    let delbtn = document.createElement("BUTTON")
    let delbtnText = document.createTextNode("Delete");
    delbtn.setAttribute("onclick","del(this.parentNode.parentNode)");
    delbtn.appendChild(delbtnText);
    td6.appendChild(delbtn);
    tr.appendChild(td6);

    gettab.appendChild(tr);


    
    document.getElementById("name").value = "" ;
    document.getElementById("sch").value = "" ;
    document.getElementById("city").value = "" ;
    document.getElementById("rel").value = "" ;



}

function edit(gettr){
    
    document.getElementById("name").value = gettr.childNodes[0].innerText ;
    document.getElementById("sch").value =  gettr.childNodes[1].innerText ;
    document.getElementById("city").value =  gettr.childNodes[2].innerText ;
    document.getElementById("rel").value =  gettr.childNodes[3].innerText ;

    gettr.remove();

}
function del(gettr){
    gettr.remove();
}
