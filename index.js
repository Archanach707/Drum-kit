// Detecting Button Press 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
  
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
 
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);

  });
  
}

// Detecting Keyboard Press
document.addEventListener("keypress", function(event) {
  
  makeSound(event.key);

});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom02 = new Audio("sounds/tom-02.mp3");
      tom02.play();
      break;

      case "a":
        var tom04 = new Audio("sounds/tom-04.mp3");
        tom04.play();
        break;

      case "s":
        var tom05 = new Audio("sounds/tom-05.mp3");
        tom05.play();
        break;    

      case "d":
        var tom06 = new Audio("sounds/tom-06.mp3");
        tom06.play();
        break;

      case "j":
        var tom02 = new Audio("sounds/tom-02.mp3");
        tom02.play();
        break;

      case "k":
        var tom03 = new Audio("sounds/tom-03.mp3");
        tom03.play();
        break;

      case "l":
        var tom04 = new Audio("sounds/tom-04.mp3");
        tom04.play();
        break;

    default: console.log(buttonInnerHTML)

  }

}