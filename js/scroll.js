function scrollbarVisible(element) {
    return element.scrollHeight > element.clientHeight;
  }
var arrows = document.getElementsByClassName("arrows");
document.body.addEventListener("scroll", switchArrows);

function switchArrows(){
    if (scrollbarVisible){
        arrows[0].style.visible = false;
        console.log("1");
      }else{
        console.log("1");
        arrows[0].style.visible = true;
      }
}
