const fs = require('fs');
const { json } = require('stream/consumers');
var purchasechosen = "";
const purchasephrase = "Would you like to buy ";

let beakers = 0;

let beakerhud = "";

let woodenchairpurchased = false;

fs.readFile("./renderer/userdata/inventory.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Failed to reach inventory status.", err);
    return;
  }


  const jsonData = JSON.parse(jsonString);
  beakers = jsonData.beakers;
  beakerhud = document.getElementById("beakerhud");
  console.log("Beaker amount recieved:", jsonData.beakers);

  // checking if upgrades have been purchased
  if(jsonData.items.some(item => item.id === 101)){
    woodenchairpurchased = true;
    document.getElementById("woodenchair").classList.add("sold");
  }


  // Updating the counter on screen!
  beakerhud.textContent = beakers + " Beakers Owned";



});

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

//
//
//
// names and descriptions here!
// ALSO includes purchasing code
//
//
//
//


// getting text/elements from the actual popup
popup = document.getElementById("purchasepopup");
popuptext = document.getElementById("purchasetext");
var itemname = "";
var itemprice = 0;
var itemid = 0;
var itemresell = 0;


matchbox = document.getElementById("matchbox");
matchbox.addEventListener("mouseover", () => {
    Name.textContent = "Gas-Dipped Matchbox";
    Name.className = "normalitem";
    description.textContent = "This gas-dipped matchbox is perfect for burning any multiple-choice answers up. Feel free to use when you want a better guess!";
    cost.textContent = "Cost: 25 Beakers";
});
matchbox.addEventListener("click", () => {
    popup.classList.remove("hidden");
    purchasechosen = "Gas-Dipped Matchbox";
    popuptext.textContent = purchasephrase + purchasechosen + " for 25 Beakers?";

});



angryman = document.getElementById("angryman");
angryman.addEventListener("mouseover", () => {

    Name.textContent = "Very Angry Man";
    Name.className = "rareitem";
    description.textContent = "Skips any question. We are not liable for any assault/verbal abuse from the Angry Man.";
    cost.textContent = "Cost: 50 Beakers";
});

angryman.addEventListener("click", () => {
    popup.classList.remove("hidden");
    purchasechosen = "Very Angry Man";
    popuptext.textContent = purchasephrase + purchasechosen + " for 50 Beakers?";

});



//
//
//HOUSE UPGRADES
//
//

woodenchair = document.getElementById("woodenchair");
woodenchair.addEventListener("mouseover", () => {

    Name.textContent = "Broken Wooden Chair";
    Name.className = "normalitem";
    description.textContent = "This will look absolutely SPECTACULAR in your house! Just kidding. This is a piece of trash I found outside. Please take it.";
    cost.textContent = "Cost: 15 Beakers";
});

woodenchair.addEventListener("click", () => {
    console.log(woodenchairpurchased);
    if(woodenchairpurchased == false){
        popup.classList.remove("hidden");
        purchasechosen = "Broken Wooden Chair";
        popuptext.textContent = purchasephrase + purchasechosen + " for 15 Beakers?";
    }


});






// purchase window code


cancelbutton = document.getElementById("cancelpurchase");
cancelbutton.addEventListener("click", () => {
    popup.classList.add("hidden");
})

purchasebutton = document.getElementById("purchase");
purchasebutton.addEventListener("click", () => {
    popup.classList.add("hidden");

    //
    //
    // PLEASE PUT PRICES AND NAMES HERE
    // also figure out what id's are what later? make a new file? thanks
    //
    //
    if(purchasechosen == "Gas-Dipped Matchbox"){
        itemname = "Gas-Dipped Matchbox"
        itemprice = 25;
        itemid = 1;
        itemresell = 10;
    } else if(purchasechosen == "Very Angry Man"){
        itemname = "Very Angry Man"
        itemprice = 50;
        itemid = 2;
        itemresell = 20;
    } else if(purchasechosen == "Broken Wooden Chair"){
        woodenchairpurchased = true;
        document.getElementById("woodenchair").classList.add("sold");
        itemname = "Broken Wooden Chair"
        itemprice = 15;
        itemid = 101;
        itemresell = 6;
    }
    //
    //

    // runs after getting itemname and itemprice
    console.log("Purchased: " + itemname);

    // checks if player has enough beakers
    if(itemprice > beakers){
        console.log("You broke bish.")
        return;
    }
    beakers = beakers-itemprice;
    console.log(beakers);


    //
    //
    // actually WRITING TO FUCKING DISK HOLY SHIT this took ages
    //
    //
    fs.readFile("./renderer/userdata/inventory.json", "utf8", (err, jsonString) => {
        if (err) {
            console.error("Failed to read inventory file:", err);
            return;
        }

        let jsonData = JSON.parse(jsonString);

        // Update beakers
        jsonData.beakers = beakers;

        // Add purchased item to inventory
        if (!jsonData.items) jsonData.items = [];
        jsonData.items.push({
            id: itemid,
            name: itemname,
            resell: itemresell
        });

        // Write back to file
        fs.writeFile("./renderer/userdata/inventory.json", JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error("Failed to save inventory file:", err);
                return;
            }
            console.log("Purchase saved to inventory.json!");
            // updating beaker hud and playing sound
            beakerhud.textContent = beakers + " Beakers Owned";
            const chaching = document.getElementById("chaching");
            chaching.currentTime = 0;
            chaching.volume = 0.5;
            chaching.play();

        });
    });
    //
    //
    //





})










//BEAKER HUD CODE
//
//
//
//
//
//
// Loading in the coins/beakers??


//
//
//
//
//
//
//
