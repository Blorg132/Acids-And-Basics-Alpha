

// playing sound effects


// CLICK SOUNDS
function playClickSound1(destination) {
  const sound = new Audio('sounds/clicksound1.wav');
  sound.volume = 0.3;
  sound.play();

  // Wait briefly, then navigate
  setTimeout(() => {
    window.location.href = destination;
  }, 250);
}





// CUSTOM ALERT CODE!!! (for lessons)

// customAlert
function customAlert(message) {
  // Overlay
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  overlay.style.zIndex = 999; // behind the box but above page

  // Alert Box
  const box = document.createElement('div');
  box.style.position = 'fixed';
  box.style.top = '50%';
  box.style.left = '50%';
  box.style.transform = 'translate(-50%, -50%)';
  box.style.background = '#fff';
  box.style.padding = '20px 30px';
  box.style.borderRadius = '10px';
  box.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  box.style.fontFamily = 'sans-serif';
  box.style.textAlign = 'center';
  box.style.zIndex = 1000; // must be higher than overlay!

  // Message
  const text = document.createElement('p');
  text.textContent = message;
  text.style.marginBottom = '20px';

  // OK Button
  const btn = document.createElement('button');
  btn.textContent = 'OK';
  btn.style.padding = '8px 16px';
  btn.style.border = 'none';
  btn.style.borderRadius = '5px';
  btn.style.backgroundColor = '#007bff';
  btn.style.color = '#fff';
  btn.style.cursor = 'pointer';

  btn.onclick = () => {
      document.body.removeChild(overlay);
      document.body.removeChild(box);
  };

  // Assemble
  box.appendChild(text);
  box.appendChild(btn);
  document.body.appendChild(overlay);
  document.body.appendChild(box);
}

// making clickable words


document.getElementById("clickmatter").addEventListener("click", function() {
  customAlert("You clicked the word!");
});