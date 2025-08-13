const fs = require('fs');
const { json } = require('stream/consumers');
var purchasechosen = "";
const purchasephrase = "Would you like to buy ";

let beakers = 0;

let beakerhud = "";


// Setting initial upgrade purchase to false
let woodenchairpurchased = false;
let metalchairpurchased = false;
let thereclinerpurchased = false;
let pooltablepurchased = false;
let metaltablepurchased  = false;
let chandypurchased = false;


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

  if(jsonData.items.some(item => item.id === 102)){
    metalchairpurchased = true;
    document.getElementById("metalchair").classList.add("sold");
  }

  if(jsonData.items.some(item => item.id === 103)){
    thereclinerpurchased = true;
    document.getElementById("therecliner").classList.add("sold");
  }

  if(jsonData.items.some(item => item.id === 104)){
    pooltablepurchased = true;
    document.getElementById("pooltable").classList.add("sold");
  }

if(jsonData.items.some(item => item.id === 105)){
    metaltablepurchased = true;
    document.getElementById("metaltable").classList.add("sold");
  }

  //////////////////////////////////
  // Missing id 106 here
  //////////////////////////////////

  if(jsonData.items.some(item => item.id === 107)){
    chandypurchased = true;
    document.getElementById("chandy").classList.add("sold");
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


// WOODEN CHAIR
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
//
//

//METAL CHAIR

metalchair = document.getElementById("metalchair");
metalchair.addEventListener("mouseover", () => {

    Name.textContent = "Sturdy Metal Chair";
    Name.className = "rareitem";
    description.textContent = "A chair made out of steel, everyone's favorite alloy. Looks a little bit uncomfortable- but hey - it'll probably last a lifetime.";
    cost.textContent = "Cost: 75 Beakers";
});

metalchair.addEventListener("click", () => {
    console.log(metalchairpurchased);
    if(metalchairpurchased == false){
        popup.classList.remove("hidden");
        purchasechosen = "Sturdy Metal Chair";
        popuptext.textContent = purchasephrase + purchasechosen + " for 75 Beakers?";
    }


});

//
//
// THE RECLINER
//
//

therecliner = document.getElementById("therecliner");
therecliner.addEventListener("mouseover", () => {
    Name.textContent = "The Recliner";
    Name.className = "exquisiteitem";
    description.textContent = "The one and only. Most people think that comfort and practicality are mutually exclusive; this bad boy proves them wrong.";
    cost.textContent = "Cost: 130 Beakers";
});

therecliner.addEventListener("click", () => {
    console.log(thereclinerpurchased);
    if(thereclinerpurchased == false){
        popup.classList.remove("hidden");
        purchasechosen = "The Recliner";
        popuptext.textContent = purchasephrase + purchasechosen + " for 130 Beakers?";
    }


});

//
//
//  POOL TABLE
pooltable = document.getElementById("pooltable");
pooltable.addEventListener("mouseover", () => {
    Name.textContent = "Pool Table";
    Name.className = "normalitem";
    description.textContent = "A classic for every bar and nightclub. Not your classic though, you're just a nerd who likes chemistry.";
    cost.textContent = "Cost: 40 Beakers";
});

pooltable.addEventListener("click", () => {
    console.log(pooltablepurchased);
    if(pooltablepurchased == false){
        popup.classList.remove("hidden");
        purchasechosen = "Pool Table";
        popuptext.textContent = purchasephrase + purchasechosen + " for 40 Beakers?";
    }


});


/// METAL TABLE
/////////

metaltable = document.getElementById("metaltable");
metaltable.addEventListener("mouseover", () => {
    Name.textContent = "Metal Table";
    Name.className = "rareitem";
    description.textContent = "Strong, tough, and perfect for any high-school cafeteria or interrogation room. Make sure you keep kids from licking the rust under it.";
    cost.textContent = "Cost: 100 Beakers";
});

metaltable.addEventListener("click", () => {
    console.log(metaltablepurchased);
    if(metaltablepurchased == false){
        popup.classList.remove("hidden");
        purchasechosen = "Metal Table";
        popuptext.textContent = purchasephrase + purchasechosen + " for 100 Beakers?";
    }


});


//////////////////////////////////
//roof stuff
//////////////////////////////////
chandy = document.getElementById("chandy");
chandy.addEventListener("mouseover", () => {
    Name.textContent = "Chandy";
    Name.className = "rareitem";
    description.textContent = "Old Victorian-era chandelier in solid condition. We call it Chandy so as to not scare away the common folk in the store.";
    cost.textContent = "Cost: 115 Beakers";
});

chandy.addEventListener("click", () => {
    console.log(chandypurchased);
    if(chandypurchased == false){
        popup.classList.remove("hidden");
        purchasechosen = "Chandy";
        popuptext.textContent = purchasephrase + purchasechosen + " for 115 Beakers?";
    }


});


//
//
//
// purchase window code


cancelbutton = document.getElementById("cancelpurchase");
cancelbutton.addEventListener("click", () => {
    popup.classList.add("hidden");
})

purchasebutton = document.getElementById("purchase");
purchasebutton.addEventListener("click", () => {
    popup.classList.add("hidden");
    fs.readFileSync("./renderer/userdata/inventory.json", "utf8");

    //
    //
    // PLEASE PUT PRICES AND NAMES HERE
    // also figure out what id's are what later? make a new file? thanks
    //
    // ALSO OH MY FUCKING GOD
    // PLEASE PUT THE BEAKER > ITEMPRICE CHECK AFTER DECLARING THE VARIABLES
    // IF YOU DO IT BEFORE EVERYTHING GETS FUCKED
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
        itemname = "Broken Wooden Chair";
        itemprice = 15;
        itemid = 101;
        itemresell = 6;
        if(beakers > itemprice){
            woodenchairpurchased = true;
            document.getElementById("woodenchair").classList.add("sold");
            console.log(document.getElementById("woodenchair").classList);
        }
    } else if(purchasechosen == "Sturdy Metal Chair"){
        itemname = "Sturdy Metal Chair";
        itemprice = 75;
        itemid = 102;
        itemresell = 30;
        if(beakers > itemprice){
            metalchairpurchased = true;
            document.getElementById("metalchair").classList.add("sold");
        }
    } else if(purchasechosen == "The Recliner"){
        itemname = "The Recliner";
        itemprice = 130;
        itemid = 103;
        itemresell = 60;
        if(beakers > itemprice){
            thereclinerpurchased = true;
            document.getElementById("therecliner").classList.add("sold");
        }
    } else if(purchasechosen == "Pool Table"){
        itemname = "Pool Table";
        itemprice = 40;
        itemid = 104;
        itemresell = 18;
        if(beakers > itemprice){
            pooltablepurchased = true;
            document.getElementById("pooltable").classList.add("sold");
        }
    } else if(purchasechosen == "Chandy"){
        itemname = "Chandy";
        itemprice = 115;
        itemid = 107;
        itemresell = 50;
        if(beakers > itemprice){
            chandypurchased = true;
            document.getElementById("chandy").classList.add("sold");
        }

    } else if(purchasechosen == "Metal Table"){
        itemname = "Metal Table";
        itemprice = 100;
        itemid = 105;
        itemresell = 48;
        if(beakers > itemprice){
            metaltablepurchased = true;
            document.getElementById("metaltable").classList.add("sold");
        }
    }
    //
    //

    // runs after getting itemname and itemprice

    // checks if player has enough beakers
    if(beakers < itemprice){
        popup.classList.remove("hidden");
        popuptext.textContent = "Man, you're broke. Get out of my store!";
        return;
    }

    console.log("Purchased: " + itemname);
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

});




