// Define funciton move to left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//   Define functio move to right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

//   Add event listener
document.addEventListener("keydown", function (e) {
    
    // Switch 'e' key value
    switch(e.key) {
        case "ArrowLeft":
            moveDodgerLeft();
            break;
        case "ArrowRight":
            moveDodgerRight();
            break;
        default: break;

    }
    
  });


//   if (e.key === "ArrowLeft") {
        
//   }
