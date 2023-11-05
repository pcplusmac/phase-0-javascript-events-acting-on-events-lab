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

  function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
      dodger.style.bottom = `${bottom + 1}px`;
    }
  }

  function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 1}px`;
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
        case "ArrowUp":
          moveDodgerUp();
          break;
        case "ArrowDown":
          moveDodgerDown();
          break;
        default: break;

    }
    
  });


//   if (e.key === "ArrowLeft") {
        
//   }
