const fs = require('fs');

//chairs
let woodenchairowned = false;
let woodenchairplaced = false;
let metalchairowned = false;
let metalchairplaced = false;
let thereclinerowned = false;
let thereclinerplaced = false;

//tables
let pooltableowned = false;
let pooltableplaced = false;

//Getting Clickables from The Document///////////////////
popupwindow = document.getElementById("selectionwindow");

woodenchair = document.getElementById("woodenchair");
metalchair = document.getElementById("metalchair");
therecliner = document.getElementById("therecliner");

pooltable = document.getElementById("pooltable");
//////////////////////////////////////////////////////////

// Loading in house saves from disk!!!!//////////////////////////////////////
let rawHouseData = fs.readFileSync("./renderer/userdata/house.json", "utf8");
let houseData = JSON.parse(rawHouseData);
console.log(houseData);
/////////////////////////////////////////////////////////////////////////////

//Checking to see what furniture was previously placed///////////////////////
if(houseData.chair === "woodenchair"){
    woodenchairplaced = true;
    document.getElementById("physicalwoodenchair").classList.remove("hidden");
}else if(houseData.chair === "metalchair"){
    metalchairowned = true;
    document.getElementById("physicalmetalchair").classList.remove("hidden");
}else if(houseData.chair === "therecliner"){
    thereclinerplaced = true;
    document.getElementById("physicaltherecliner").classList.remove("hidden");
}
console.log("Chair loaded!");

if(houseData.table === "pooltable"){
    pooltableplaced = true;
    document.getElementById("physicalpooltable").classList.remove("hidden");
}
/////////////////////////////////////////////////////////////////////////////

function furnishClicked(){
    popupwindow.classList.remove("hidden");

    //I made all the clickables global.... thank me later.... just kidding it kind of does jackshit, 
    //I just hated how it looked over here
    //
    // Reading Inventory from Disk
    //


    // NOTE: Readfilesync breaks this. i have no idea why, but i'm assuming it'll fuck something up in the future.
    let inventoryRaw = fs.readFileSync("./renderer/userdata/inventory.json", "utf8");
    let inventoryData = JSON.parse(inventoryRaw);

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

    //
    //
    //ACTUAL PLACING LOGIC
    //
    //
    //CHAIRS
    woodenchair = document.getElementById("woodenchair")
    woodenchair.addEventListener("click", () => {
        if(woodenchairowned == true && woodenchairplaced == false){

            document.getElementById("physicalwoodenchair").classList.remove("hidden");
            woodenchair.classList.add("placed");
            woodenchairplaced = true;
        } else if(woodenchairplaced == true){
            document.getElementById("physicalwoodenchair").classList.add("hidden");
            woodenchair.classList.remove("placed");
            woodenchairplaced = false;
        }
    });


    metalchair = document.getElementById("metalchair");
    metalchair.addEventListener("click", () => {
        if(metalchairowned == true && metalchairplaced == false){

            document.getElementById("physicalmetalchair").classList.remove("hidden");
            metalchair.classList.add("placed");
            metalchairplaced = true;
        } else if(metalchairplaced == true){
            document.getElementById("physicalmetalchair").classList.add("hidden");
            metalchair.classList.remove("placed");
            metalchairplaced = false;
        }
    })


    therecliner = document.getElementById("therecliner");
    therecliner.addEventListener("click", () => {
        if(thereclinerowned == true && thereclinerplaced == false){

            document.getElementById("physicaltherecliner").classList.remove("hidden");
            therecliner.classList.add("placed");
            thereclinerplaced = true;
        } else if(thereclinerplaced == true){
            document.getElementById("physicaltherecliner").classList.add("hidden");
            therecliner.classList.remove("placed");
            thereclinerplaced = false;
        }
    })

    pooltable = document.getElementById("pooltable");
    pooltable.addEventListener("click", () => {
        if(pooltableowned == true && pooltableplaced == false){

            document.getElementById("physicalpooltable").classList.remove("hidden");
            pooltable.classList.add("placed");
            pooltableplaced = true;
        } else if(pooltableplaced == true){
            document.getElementById("physicalpooltable").classList.add("hidden");
            pooltable.classList.remove("placed");
            pooltableplaced = false;
        }
    })

    //
    //
    
}

