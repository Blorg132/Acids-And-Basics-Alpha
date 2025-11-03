const fs = require('fs');
const { json } = require('stream/consumers');



//
// TO ADD AN ITEM TO THE INVENTORY
// 1. Add id below
// 2. Add proper <p> element and get it's id
// 3. Modify the textContent and modify the one-line filter to the <p> id and such.
//

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* This code is now deprecated, since inventory.html was removed in favor of the discord button. Hooray! */
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//declaring item id's
const matchboxid = 1;
const angrymanid = 2;


var sellprice = 0;
var sellitem = "";
var sellid = 0;

//
//

// getting elements from the page

matchboxcount = document.getElementById("matchboxcount");
angrymancount = document.getElementById("angrymancount");


beakerhud = document.getElementById("beakerhud");
//
//


const jsonData = JSON.parse(fs.readFileSync('./renderer/userdata/inventory.json', 'utf8'));


const items = jsonData.items;  // access the array inside

beakerhud.textContent = jsonData.beakers + " Beakers Owned";



// NOTE: We're using try/catch blocks here because we want text to show up (and also avoid the console spam) when
// user doesn't have the proper id in their inventory.
// That being said, everything below this is actually writing the text (if you didn't know).


matchboxcount.textContent = "Gas-Dipped Matchboxes: " + items.filter(item => item.id === matchboxid).length;
angrymancount.textContent = "Angry Men on Standby:  " + items.filter(item => item.id === angrymanid).length;


//
//
// doing the onclick sells here
//
//


selltext = document.getElementById("selltext");

matchboxcount.addEventListener("click", () => {
    sellwindow.classList.remove("hidden");
    sellid = 1;
    sellitem = "Gas-Dipped Matchbox";
    sellprice = 10;
    // This is necessary to put for every addeventlistener. Sorry!
    selltext.textContent = "Do you want to sell one " + sellitem + " for " + sellprice + "?";
})


angrymancount.addEventListener("click", () => {
    sellwindow.classList.remove("hidden");
    sellid = 2;
    sellitem = "Very Angry Man";
    sellprice = 20;
    // This is necessary to put for every addeventlistener. Sorry!
    selltext.textContent = "Do you want to sell one " + sellitem + " for " + sellprice + "?";
})

// window text


// cancel and sell button nonsense


cancelbutton = document.getElementById("cancelsell");
cancelbutton.addEventListener("click", () => {
    sellwindow.classList.add("hidden");
});

sellbutton = document.getElementById("sell");
sellbutton.addEventListener("click", () => {


    //
    //
    //
    // WARNING: YOU ARE ENTERING MINDduckERY ZONE. YOU WILL BE MINDduckED.
    // PLEASE DO NOT EDIT ANY OF THIS shod. I HAVE NO IDEA HOW THIS WIZARDRY I DEVELOPED EVEN duckING WORKS.
    // THANKS.
    // JUST KNOW THAT IT WRITES TO DISK AND SELLS ITEMS. THAT'S ALL.
    //
    //
    fs.readFile(inventoryPath, "utf8", (err, jsonString) => {

        // Parsing and making it usable.
        let jsonData = JSON.parse(jsonString);

        console.log("Parsed and ready.");

        // Get beaker amount for refund;
        var beakers = jsonData.beakers;
        console.log(beakers);
        // Get the array (adjust if your JSON structure is different)
        const items = Array.isArray(jsonData) ? jsonData : jsonData.items;
        console.log("Obtained array.");
        // Find the index of the first occurrence of the target id
        const index = items.findIndex(item => item.id === sellid);
        console.log("Index: " + index);


        if (index !== -1) {
            // Remove that one item only
            items.splice(index, 1);

        // If jsonData is an object containing the array, update it back
        if (!Array.isArray(jsonData)) {
        jsonData.items = items;
        }


            console.log(`Removed one item with id = ${sellid}`);
            jsonData.beakers += sellprice;
            console.log('Rewarding ' + sellprice + " beakers back to player.");
            console.log(beakers);

            //This is copy and paste. duck you. Find a better way if you want.
            matchboxcount.textContent = "Gas-Dipped Matchboxes: " + items.filter(item => item.id === matchboxid).length;
            angrymancount.textContent = "Angry Men on Standby:  " + items.filter(item => item.id === angrymanid).length;

            // hiding the window again
            sellwindow.classList.add("hidden");
    
        } else {
            console.log(`No item found with id = ${sellid}`);
            selltext.textContent = "What are you, a scammer? NO ITEM FOUND!";
        }

        try {

            //saving it
            fs.writeFileSync('./renderer/userdata/inventory.json', JSON.stringify(jsonData, null, 2));
            console.log('File saved successfully!');
        } catch (writeErr) {
            console.error('Error writing file:', writeErr);
        }
        beakerhud.textContent = jsonData.beakers + " Beakers Owned";
    });


        
});




clearbutton = document.getElementById("clearbutton");
clearbutton.addEventListener("click", () => {
    let jsonData = JSON.parse(fs.readFileSync(inventoryPath, "utf8"));
    jsonData.items = [];
    var houseData = JSON.parse(fs.readFileSync('./renderer/userdata/house.json', 'utf8'));
    houseData.chair = "";
    houseData.table = "";
    houseData.roof = "";
    houseData.painting = "";
    houseData.fridge = "";
    fs.writeFileSync(inventoryPath, JSON.stringify(jsonData, null, 2), "utf8");

});