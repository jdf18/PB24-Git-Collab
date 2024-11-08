"use strict";
let hidden_images;
document.addEventListener("DomContentLoaded", function(){
    hidden_images = document.querySelectorAll("img.invisible");
})

function toggle(image, btn){
    let image_in_question = document.getElementById(image);
    if (image_in_question.classList.contains("invisible")){
        show(image);
    }
    else{
        hide(image);
    }
    let button_in_question = document.getElementById(btn);
    if (button_in_question.innerHTML == "Show image"){
        button_in_question.innerHTML = "Hide image";
    }
    else{
        button_in_question.innerHTML = "Show image";
    }
}

function show(image){
    let image_to_show = document.getElementById(image);
    image_to_show.classList.remove("invisible");
}
function hide(image){
    let image_to_hide = document.getElementById(image);
    image_to_hide.classList.add("invisible");
}