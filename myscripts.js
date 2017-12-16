document.addEventListener("DOMContentLoaded", function(event) { 

var btn = document.querySelector("#slideButton");
var slider = document.querySelector("#slider");

btn.addEventListener("click",function(){
    console.log("The value of left is " + slider.style.left);
    if(slider.style.left == "-92px" )
    slider.style.left = "10px"; 
    else{
    slider.style.left = "-92px"; 
    }
});

});