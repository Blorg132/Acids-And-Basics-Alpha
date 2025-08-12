const fs = require('fs');



//
// TO ADD AN ITEM TO THE INVENTORY
// 1. Add id below
// 2. Add proper <p> element and get it's id
// 3. Modify the textContent and modify the one-line filter to the <p> id and such.
//


//declaring item id's
const matchboxid = 1;
const angrymanid = 2;


var sellprice = 0;
//
//

// getting elements from the page

matchboxcount = document.getElementById("matchboxcount");
angrymancount = document.getElementById("angrymancount");

//
//


const jsonData = JSON.parse(fs.readFileSync('./renderer/userdata/inventory.json', 'utf8'));

const items = jsonData.items;  // access the array inside


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

sellwindow = document.getElementById("sellwindow");

matchboxcount.addEventListener("click", () => {
    sellwindow.classList.remove("hidden");
})


angrymancount.addEventListener("click", () => {
    sellwindow.classList.remove("hidden");
})



// cancel and sell button nonsense


cancelbutton = document.getElementById("cancelsell");
cancelbutton.addEventListener("click", () => {
    sellwindow.classList.add("hidden");
});

sellbutton = document.getElementById("sell");
sellbutton.addEventListener("click", () => {
    sellwindow.classList.add("hidden");

});