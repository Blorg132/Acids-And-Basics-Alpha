const fs = require('fs');

// Item Description Showing and Everything

Name = document.getElementById("name");
description = document.getElementById("description");
cost = document.getElementById("cost");

// defaulting to normal text when mouse leaves
description.addEventListener("mouseleave", () => {
    description.textContent = "Welcome to the Emporium! Hover over anything to see if you want to buy it!";
    Name.textContent = "";
    cost.textContent = "";
});


// upgrade code

matchbox = document.getElementById("matchbox");
matchbox.addEventListener("mouseover", () => {
    Name.textContent = "Gas-Dipped Matchbox";
    Name.className = "normalitem";
    description.textContent = "This gas-dipped matchbox is perfect for burning any questions up. Feel free to use when you're not smart enough.";
    cost.textContent = "25";
});



angryman = document.getElementById("angryman");
angryman.addEventListener("mouseover", () => {

    Name.textContent = "Very Angry Man";
    Name.className = "rareitem";
    description.textContent = "This is an angry man. Woohoo!";
    cost.textContent = "50";
});



// Loading in the coins/beakers??
fs.readFile("./renderer/userdata/inventory.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Failed to reach inventory status.", err);
    return;
  }
  const jsonData = JSON.parse(jsonString);
  console.log("Beaker amount recieved:", jsonData.beakers);


  // Updating the counter on screen!
  const beakers = jsonData.beakers;
  beakerhud = document.getElementById("beakerhud");
  beakerhud.textContent = beakers + " Beakers in Bank";
});