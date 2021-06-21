"use strict"

function begin(){
    let logo = document.querySelector(".header-logo");

    logo.onclick = function(){
        location.reload()
    }

    let spoilers = document.querySelector(".third-block-spoilers");
    spoilers.onclick = function(event){
        if (event.target){
            let thiselem = event.target.closest(".spoiler__header");
            if (thiselem){
                thiselem.parentNode.classList.toggle("third-block_deployed");
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", begin);