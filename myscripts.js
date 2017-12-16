document.addEventListener("DOMContentLoaded", function(event) { 

var btn = document.querySelector("#slideButton");
var slider = document.querySelector("#slider");//the entire sliding vertical menu

// btn.addEventListener("click",function(){
//     console.log("The value of left is " + slider.style.left);
//     if(slider.style.left == "-92px" )
//     slider.style.left = "10px" ; 
//     else{
//     slider.style.left = "-92px"; 
//     }
// });

var allevents = "mouseenter";
e= document.querySelector("#slider");
addListenerMulti(e,allevents,fn);

function addListenerMulti(el, s, fn) {
    s.split(' ').forEach(e => el.addEventListener(e, fn, false));
  }

  
function fn(){
    slider.style.left = "0px"; 
    document.querySelector("#shadowForHover").style.display = "none";
}//function fn ends

e.addEventListener("mouseleave",function(){
    slider.style.left = "-100px"; 
    document.querySelector("#shadowForHover").style.display = "block";
});

});//DOMContentLoaded method