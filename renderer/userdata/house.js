const fs = require('fs');


////////////////////////////////////////////////////////////
//NOTE: THIS IS OWNED, AND PLACED. DO NOT FORGET ONE PLEASE./
////////////////////////////////////////////////////////////

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
let metaltableowned = false;
let metaltableplaced = false;
let oaktableowned = true;
let oaktableplaced = false;


// roofs
let chandyowned = false;
let chandyplaced = false;

// fridges
let nastyfridgeowned = false;
let nastyfridgeplaced = false;
let doubledoorfridgeowned = false;
let doubledoorfridgeplaced = false;


// paintings
let cheappaintingowned = false;
let cheappaintingplaced = false;
let abstractpaintingowned = false;
let abstractpaintingplaced = false;
let fancypaintingowned = false;
let fancypaintingplaced = false;


//Getting Clickables from The Document///////////////////
popupwindow = document.getElementById("selectionwindow");

woodenchair = document.getElementById("woodenchair");
metalchair = document.getElementById("metalchair");
therecliner = document.getElementById("therecliner");

pooltable = document.getElementById("pooltable");
metaltable = document.getElementById("metaltable");
oaktable = document.getElementById("oaktable");

chandy = document.getElementById("chandy");

nastyfridge = document.getElementById("nastyfridge");
doubledoorfridge = document.getElementById("doubledoorfridge");

cheappainting = document.getElementById("cheappainting");
abstractpainting = document.getElementById("abstractpainting");
fancypainting = document.getElementById("fancypainting");
//////////////////////////////////////////////////////////

// Loading in house and inventory saves from disk!!!!//////////////////////////////////////
let rawHouseData = fs.readFileSync("./renderer/userdata/house.json", "utf8");
let houseData = JSON.parse(rawHouseData);
console.log(houseData);
/////////////////////////////////////////////////////////////////////////////

//Checking to see what furniture was previously placed///////////////////////
if(houseData.chair === "woodenchair"){
    woodenchairplaced = true;
    document.getElementById("physicalwoodenchair").classList.remove("hidden");
    //getting placed look
    woodenchair.classList.add("placed");
}else if(houseData.chair === "metalchair"){
    metalchairplaced = true;
    document.getElementById("physicalmetalchair").classList.remove("hidden");
    //getting placed look
    metalchair.classList.add("placed");
}else if(houseData.chair === "therecliner"){
    thereclinerplaced = true;
    document.getElementById("physicaltherecliner").classList.remove("hidden");
    //getting placed look
    therecliner.classList.add("placed");
}
console.log("Chair loaded!");

if(houseData.table === "pooltable"){
    pooltableplaced = true;
    document.getElementById("physicalpooltable").classList.remove("hidden");
    //getting placed look
    pooltable.classList.add("placed");
} else if(houseData.table === "metaltable"){
    metaltableplaced = true;
    document.getElementById("physicalmetaltable").classList.remove("hidden");
    //getting placed look
    metaltable.classList.add("placed");
} else if(houseData.table === "oaktable"){
    oaktableplaced = true;
    document.getElementById("physicaloaktable").classList.remove("hidden");
    //placed look
    oaktable.classList.add("placed");
}

console.log("Table loaded!");

if(houseData.roof === "chandy"){
    chandyplaced = true;
    document.getElementById("physicalchandy").classList.remove("hidden");
    //getting placed look
    chandy.classList.add("placed");
}


console.log("Roof items loaded!");

if(houseData.fridge === "nastyfridge"){
    nastyfridgeplaced = true;
    document.getElementById("physicalnastyfridge").classList.remove("hidden");
    //getting placed look
    nastyfridge.classList.add("placed");
} else if(houseData.fridge === "doubledoorfridge"){
    doubledoorfridgeplaced = true;
    document.getElementById("physicaldoubledoorfridge").classList.remove("hidden");
    //getting placed look
    doubledoorfridge.classList.add("placed");
}


if(houseData.painting === "cheappainting"){
    cheappaintingplaced = true;
    document.getElementById("physicalcheappainting").classList.remove("hidden");
    //getting placed look
    cheappainting.classList.add("placed");
} else if(houseData.painting === "abstractpainting"){
    abstractpaintingplaced = true;
    document.getElementById("physicalabstractpainting").classList.remove("hidden");
    //getting placed look
    abstractpainting.classList.add("placed");
} else if(houseData.painting === "fancypainting"){
    fancypaintingplaced = true;
    document.getElementById("physicalfancypainting").classList.remove("hidden");
}



/////////////////////////////////////////////////////////////////////
//
//ACTUAL PLACING LOGIC
// lmao this can't be called in furnishClicked() because OTHERWISE everything fucks up!!!!
//
//CHAIRS/////////////////////////////////////////////////////////////
woodenchair = document.getElementById("woodenchair")
woodenchair.addEventListener("click", () => {
    if(woodenchairowned == true && woodenchairplaced == false && houseData.chair === ""){
        document.getElementById("physicalwoodenchair").classList.remove("hidden");
        woodenchair.classList.add("placed");
        woodenchairplaced = true;
        houseData.chair = "woodenchair";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(woodenchairplaced == true){
        document.getElementById("physicalwoodenchair").classList.add("hidden");
        woodenchair.classList.remove("placed");
        woodenchairplaced = false;
        houseData.chair = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
});


metalchair = document.getElementById("metalchair");
metalchair.addEventListener("click", () => {
    if(metalchairowned == true && metalchairplaced == false && houseData.chair === ""){
        document.getElementById("physicalmetalchair").classList.remove("hidden");
        metalchair.classList.add("placed");
        metalchairplaced = true;
        houseData.chair = "metalchair";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(metalchairplaced == true){
        document.getElementById("physicalmetalchair").classList.add("hidden");
        metalchair.classList.remove("placed");
        metalchairplaced = false;
        houseData.chair = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})


therecliner = document.getElementById("therecliner");
therecliner.addEventListener("click", () => {
    if(thereclinerowned == true && thereclinerplaced == false && houseData.chair === ""){
        document.getElementById("physicaltherecliner").classList.remove("hidden");
        therecliner.classList.add("placed");
        thereclinerplaced = true;
        houseData.chair = "therecliner";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(thereclinerplaced == true){
        document.getElementById("physicaltherecliner").classList.add("hidden");
        therecliner.classList.remove("placed");
        thereclinerplaced = false;
        houseData.chair = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})


//////////////////////////////// tables /////////////////////////
// PLEASE MAKE SURE TO CHANGE THE CODE FOR TABLES! IT IS HOUSEDATA.TABLE NOW!!!
/////////////////////////////////

pooltable = document.getElementById("pooltable");
pooltable.addEventListener("click", () => {
    if(pooltableowned == true && pooltableplaced == false && houseData.table === ""){

        document.getElementById("physicalpooltable").classList.remove("hidden");
        pooltable.classList.add("placed");
        pooltableplaced = true;
        houseData.table = "pooltable";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(pooltableplaced == true){
        document.getElementById("physicalpooltable").classList.add("hidden");
        pooltable.classList.remove("placed");
        pooltableplaced = false;
        houseData.table = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})

metaltable = document.getElementById("metaltable");
metaltable.addEventListener("click", () => {
    if(metaltableowned == true && metaltableplaced == false && houseData.table === ""){

        document.getElementById("physicalmetaltable").classList.remove("hidden");
        metaltable.classList.add("placed");
        metaltableplaced = true;
        houseData.table = "metaltable";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(metaltableplaced == true){
        document.getElementById("physicalmetaltable").classList.add("hidden");
        metaltable.classList.remove("placed");
        metaltableplaced = false;
        houseData.table = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})


oaktable = document.getElementById("oaktable");
oaktable.addEventListener("click", () => {
    if(oaktableowned == true && oaktableplaced == false && houseData.table === ""){

        document.getElementById("physicaloaktable").classList.remove("hidden");
        oaktable.classList.add("placed");
        oaktableplaced = true;
        houseData.table = "oaktable";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(oaktableplaced == true){
        document.getElementById("physicaloaktable").classList.add("hidden");
        oaktable.classList.remove("placed");
        oaktableplaced = false;
        houseData.table = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})


//////////////////////////////////roof stuff//////////////////////////
//////////////////////////////////////////////////////////////////////


chandy = document.getElementById("chandy");
chandy.addEventListener("click", () => {
    if(chandyowned == true && chandyplaced == false && houseData.roof === ""){

        document.getElementById("physicalchandy").classList.remove("hidden");
        chandy.classList.add("placed");
        chandyplaced = true;
        houseData.roof = "chandy";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(chandyplaced == true){
        document.getElementById("physicalchandy").classList.add("hidden");
        chandy.classList.remove("placed");
        chandyplaced = false;
        houseData.roof = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})

////////////////////////////////////////////
////////FRIDGES/////////////////////////////
////////////////////////////////////////////

nastyfridge = document.getElementById("nastyfridge");
nastyfridge.addEventListener("click", () => {
    if(nastyfridgeowned == true && nastyfridgeplaced == false && houseData.fridge === ""){

        document.getElementById("physicalnastyfridge").classList.remove("hidden");
        nastyfridge.classList.add("placed");
        nastyfridgeplaced = true;
        houseData.fridge = "nastyfridge";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(nastyfridgeplaced == true){
        document.getElementById("physicalnastyfridge").classList.add("hidden");
        nastyfridge.classList.remove("placed");
        nastyfridgeplaced = false;
        houseData.fridge = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})

doubledoorfridge = document.getElementById("doubledoorfridge");
doubledoorfridge.addEventListener("click", () => {
    if(doubledoorfridgeowned == true && doubledoorfridgeplaced == false && houseData.fridge === ""){

        document.getElementById("physicaldoubledoorfridge").classList.remove("hidden");
        doubledoorfridge.classList.add("placed");
        doubledoorfridgeplaced = true;
        houseData.fridge = "doubledoorfridge";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(doubledoorfridgeplaced == true){
        document.getElementById("physicaldoubledoorfridge").classList.add("hidden");
        doubledoorfridge.classList.remove("placed");
        doubledoorfridgeplaced = false;
        houseData.fridge = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})
//
//

//////////////////////////////////////////////////
////////////////////PAINTINGS//////////////////////
//////////////////////////////////////////////////

cheappainting = document.getElementById("cheappainting");
cheappainting.addEventListener("click", () => {
    if(cheappaintingowned == true && cheappaintingplaced == false && houseData.painting === ""){

        document.getElementById("physicalcheappainting").classList.remove("hidden");
        cheappainting.classList.add("placed");
        cheappaintingplaced = true;
        houseData.painting = "cheappainting";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(cheappaintingplaced == true){
        document.getElementById("physicalcheappainting").classList.add("hidden");
        cheappainting.classList.remove("placed");
        cheappaintingplaced = false;
        houseData.painting = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})


abstractpainting = document.getElementById("abstractpainting");
abstractpainting.addEventListener("click", () => {
    if(abstractpaintingowned == true && abstractpaintingplaced == false && houseData.painting === ""){

        document.getElementById("physicalabstractpainting").classList.remove("hidden");
        abstractpainting.classList.add("placed");
        abstractpaintingplaced = true;
        houseData.painting = "abstractpainting";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(abstractpaintingplaced == true){
        document.getElementById("physicalabstractpainting").classList.add("hidden");
        abstractpainting.classList.remove("placed");
        abstractpaintingplaced = false;
        houseData.painting = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})


fancypainting = document.getElementById("fancypainting");
fancypainting.addEventListener("click", () => {
    if(fancypaintingowned == true && fancypaintingplaced == false && houseData.painting === ""){

        document.getElementById("physicalfancypainting").classList.remove("hidden");
        fancypainting.classList.add("placed");
        fancypaintingplaced = true;
        houseData.painting = "fancypainting";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    } else if(fancypaintingplaced == true){
        document.getElementById("physicalfancypainting").classList.add("hidden");
        fancypainting.classList.remove("placed");
        fancypaintingplaced = false;
        houseData.painting = "";
        fs.writeFileSync("./renderer/userdata/house.json", JSON.stringify(houseData, null, 2));
    }
})



//////////////////////////////////////////////////////////////////////////////
////////////////////////////FURNISH CLICKED///////////////////////////////
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
    if(inventoryData.items.some(item => item.id === 105)){
        metaltableowned = true;
        document.getElementById("metaltable").classList.remove("unavailable");
    }

    if(inventoryData.items.some(item => item.id === 106)){
        oaktableowned = true;
        document.getElementById("oaktable").classList.remove("unavailable");
    }

    // ROOF STUFF

    if(inventoryData.items.some(item => item.id === 107)){
        chandyowned = true;
        document.getElementById("chandy").classList.remove("unavailable");
    }


    /// FRIDGES

    if(inventoryData.items.some(item => item.id === 109)){
        nastyfridgeowned = true;
        document.getElementById("nastyfridge").classList.remove("unavailable");
    }

    if(inventoryData.items.some(item => item.id === 110)){
        doubledoorfridgeowned = true;
        document.getElementById("doubledoorfridge").classList.remove("unavailable");
    }


    /// PAINTINGS

    if(inventoryData.items.some(item => item.id === 112)){
        cheappaintingowned = true;
        document.getElementById("cheappainting").classList.remove("unavailable");
    }

    if(inventoryData.items.some(item => item.id === 113)){
        abstractpaintingowned = true;
        document.getElementById("abstractpainting").classList.remove("unavailable");
    }
    
    if(inventoryData.items.some(item => item.id === 114)){
        fancypaintingowned = true;
        document.getElementById("fancypainting").classList.remove("unavailable");
    }
}

