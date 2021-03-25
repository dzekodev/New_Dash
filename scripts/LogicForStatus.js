function ChangeStatueColor(){
    var CheckBox = document.getElementById("checkbox");
    var Status = document.getElementById("status");
    var CheckBox_1 = document.getElementById("checkbox_1");
    var Status_1 = document.getElementById("status_1");
    var CheckBox_2 = document.getElementById("checkbox_2");
    var Status_2 = document.getElementById("status_2");
    var CheckBox_3 = document.getElementById("checkbox_3");
    var Status_3 = document.getElementById("status_3");
    if(CheckBox.checked==true){
        Status.innerHTML="Open";
        Status.style.color="rgba(34, 0, 184, 0.944)";
    }else{
        Status.innerHTML="Closed";
        Status.style.color="#5e5c5c86";
    }
    
    if(CheckBox_1.checked==true){
        Status_1.innerHTML="Open";
        Status_1.style.color="rgba(34, 0, 184, 0.944)";
    }else{
        Status_1.innerHTML="Closed";
        Status_1.style.color="#5e5c5c86";
    }
    if(CheckBox_2.checked==true){
        Status_2.innerHTML="Open";
        Status_2.style.color="rgba(34, 0, 184, 0.944)";
    }else{
        Status_2.innerHTML="Closed";
        Status_2.style.color="#5e5c5c86";
    }
    if(CheckBox_3.checked==true){
        Status_3.innerHTML="Open";
        Status_3.style.color="rgba(34, 0, 184, 0.944)";
    }else{
        Status_3.innerHTML="Closed";
        Status_3.style.color="#5e5c5c86";
    }
}