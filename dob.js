function dob(){
let user_input=document.getElementById("input").value
let user_dob=new Date(user_input)
let cur_date=new Date();
let age=cur_date.getFullYear()-user_dob.getFullYear();
if(cur_date.getFullYear()<user_dob.getFullYear()){
    document.getElementById("output").textContent="enter valid age"

}
else{
    document.getElementById("output").innerHTML=age
}
}
document.getElementById("button").addEventListener("click",dob)
