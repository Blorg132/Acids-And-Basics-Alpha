const fs = require('fs');

//chairs
let woodenchairowned = false;
let metalchairowned = false;
let thereclinerowned = false;
//tables
let pooltableowned = false;

function furnishClicked(){
    popupwindow = document.getElementById("selectionwindow");
    popupwindow.classList.remove("hidden");

    //Getting Clickables from Each Furniture

    woodenchair = document.getElementById("woodenchair");
    metalchair = document.getElementById("metalchair");
    therecliner = document.getElementById("therecliner");

    pooltable = document.getElementById("pooltable");

    //
    // Reading Inventory from Disk
    //


    // NOTE: Readfilesync breaks this. i have no idea why, but i'm assuming it'll fuck something up in the future.
    fs.readFile("./renderer/userdata/inventory.json", "utf8", (err, jsonString) => {
        inventoryData = JSON.parse(jsonString);

        // Checking to see what inventory pieces are owned
        //CHAIRS
        if(inventoryData.items.some(item => item.id === 101)){
            woodenchairowned = true;
            document.getElementById("woodenchair").classList.remove("unavailable");
        }
        if(inventoryData.items.some(item => item.id === 102)){
            metalchairowned = true;
            document.getElementById("metalchair").classList.remove("unavailable");
        }
        if(inventoryData.items.some(item => item.id === 103)){
            thereclinerowned = true;
            document.getElementById("therecliner").classList.remove("unavailable");
        }

        //TABLES

        if(inventoryData.items.some(item => item.id === 104)){
            pooltableowned = true;
            document.getElementById("pooltable").classList.remove("unavailable");
        }


    });
    //
    //
    
}