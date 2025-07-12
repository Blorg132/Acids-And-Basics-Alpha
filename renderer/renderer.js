

// playing sound effects


// CLICK SOUNDS
function playClickSound1(destination) {
  const sound = new Audio('sounds/clicksound1.wav');
  sound.play();

  // Wait briefly, then navigate
  setTimeout(() => {
    window.location.href = destination;
  }, 250);
}
