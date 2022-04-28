"use strict";
var slide = document.getElementById("slide");
var upArrow = document.getElementById("downArrow");
var downArrow = document.getElementById("upArrow");

let x = 0;
let width = document.querySelector(".exam-box").offsetWidth;
let equation = width * 19;
console.log(width);
upArrow.addEventListener("click", (e) =>{
    if(x > -equation){
        x = x - width;
    slide.style.left = x + "px"
    };
    e.preventDefault();
});
downArrow.addEventListener("click", (e) =>{
    if(x < "0"){
        x = x + width;
    slide.style.left = x + "px"
    };
    e.preventDefault();
});
