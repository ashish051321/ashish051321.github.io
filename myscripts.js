document.addEventListener("DOMContentLoaded", function(event) { 

var btn = document.querySelector("#toggleSideBar");
var slider = document.querySelector("#mainVerticalMenu");

btn.addEventListener("click",function(){
    console.log("The value of left is " + slider.style.left);
    if(slider.style.left == "-500px" )
    slider.style.left = "10px"; 
    else{
    slider.style.left = "-500px"; 
    }
});

});