var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
  
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    alert("i got Clicked!");

    var audio = new Audio("sounds/02.mp3")
      audio.play();
      
  });
  
  
}
