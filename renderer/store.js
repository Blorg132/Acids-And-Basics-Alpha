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
let oaktablepurchased = false;
let chandypurchased = false;
let nastyfridgepurchased = false;
let cheappaintingpurchased = false;
let abstractpaintingpurchased = false;
let fancypaintingpurchased = false;
let doubledoorfridgepurchased = false;

document.addEventListener('inventoryReady', () => {
    console.log("Inventory is ready:", INVENTORYDATA);
    // Safe to use INVENTORYDATA here
    


    beakers = INVENTORYDATA.beakers;
    beakerhud = document.getElementById("beakerhud");
    console.log("Beaker amount recieved:", INVENTORYDATA.beakers);

    // checking if upgrades have been purchased
    if(INVENTORYDATA.items.some(item => item.id === 101)){
        woodenchairpurchased = true;
        document.getElementById("woodenchair").classList.add("sold");
    }

    if(INVENTORYDATA.items.some(item => item.id === 102)){
        metalchairpurchased = true;
        document.getElementById("metalchair").classList.add("sold");
    }

    if(INVENTORYDATA.items.some(item => item.id === 103)){
        thereclinerpurchased = true;
        document.getElementById("therecliner").classList.add("sold");
    }

    if(INVENTORYDATA.items.some(item => item.id === 104)){
        pooltablepurchased = true;
        document.getElementById("pooltable").classList.add("sold");
    }

        if(INVENTORYDATA.items.some(item => item.id === 105)){
            metaltablepurchased = true;
            document.getElementById("metaltable").classList.add("sold");
        }

    if(INVENTORYDATA.items.some(item => item.id === 106)){
        oaktablepurchased = true;
        document.getElementById("oaktable").classList.add("sold");
    }

    if(INVENTORYDATA.items.some(item => item.id === 107)){
        chandypurchased = true;
        document.getElementById("chandy").classList.add("sold");
    }



    if(INVENTORYDATA.items.some(item => item.id === 109)){
        nastyfridgepurchased = true;
        document.getElementById("nastyfridge").classList.add("sold");
    }

    if(INVENTORYDATA.items.some(item => item.id === 110)){
        doubledoorfridgepurchased = true;
        document.getElementById("doubledoorfridge").classList.add("sold");
    }

    if(INVENTORYDATA.items.some(item => item.id === 112)){
        cheappaintingpurchased = true;
        document.getElementById("cheappainting").classList.add("sold");
    }

    if(INVENTORYDATA.items.some(item => item.id === 113)){
        abstractpaintingpurchased = true;
        document.getElementById("abstractpainting").classList.add("sold");
    }

    if(INVENTORYDATA.items.some(item => item.id === 114)){
        fancypaintingpurchased = true;
        document.getElementById("fancypainting").classList.add("sold");
    }

    
    // Updating the counter on screen!
    beakerhud.textContent = beakers + " Beakers Owned";
    // Item Description Showing and Everything

    Name = document.getElementById("name");
    description = document.getElementById("description");
    cost = document.getElementById("cost");

    // defaulting to normal text when mouse leaves
    description.addEventListener("mouseleave", () => {
        description.textContent = "Welcome to the Emporium! Hover over anything to see if you want to buy it!";
        Name.textContent = "";
        cost.textContent = "";
        // Updating the counter on screen!
        beakerhud.textContent = beakers + " Beakers Owned";
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
    // Updating the counter on screen!
    beakerhud.textContent = beakers + " Beakers Owned";


    matchbox = document.getElementById("matchbox");
    matchbox.addEventListener("mouseover", () => {
        Name.textContent = "Illegal Gas-Dipped Matchbox";
        Name.className = "normalitem";
        description.textContent = "This gas-dipped matchbox is perfect for burning any multiple-choice answers up. It's pretty much impossible to buy. Unless... you could give yourself infinite money in the game files? Hm...";
        cost.textContent = "Cost: 9999 Beakers";
    });
    matchbox.addEventListener("click", () => {
        popup.classList.remove("hidden");
        purchasechosen = "Gas-Dipped Matchbox";
        popuptext.textContent = purchasephrase + purchasechosen + " for 9999 Beakers?";

    });



    angryman = document.getElementById("angryman");
    angryman.addEventListener("mouseover", () => {

        Name.textContent = "Very Angry Man";
        Name.className = "rareitem";
        description.textContent = "Skips any question. Not really useful as it is. I'll give him to you, if you can somehow get the money for him. I heard financial fraud is popular this time of year.";
        cost.textContent = "Cost: 9999 Beakers";
    });

    angryman.addEventListener("click", () => {
        popup.classList.remove("hidden");
        purchasechosen = "Very Angry Man";
        popuptext.textContent = purchasephrase + purchasechosen + " for 9999 Beakers?";

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
        description.textContent = "Strong, tough, and perfect for any high-school cafeteria or interrogation room. Make sure you keep kids from eating the gum stuck under it.";
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

    ////////////////
    /////OAK TABLE
    ////////////////
    oaktable = document.getElementById("oaktable");
    oaktable.addEventListener("mouseover", () => {
        Name.textContent = "Oak Table";
        Name.className = "exquisiteitem";
        description.textContent = "A beautiful piece sourced from Bolivian oak and crafted with Italian hands. I'd try and say something bad about it, but to be honest, I can't.";
        cost.textContent = "Cost: 260 Beakers";
    });

    oaktable.addEventListener("click", () => {
        console.log(oaktablepurchased);
        if(oaktablepurchased == false){
            popup.classList.remove("hidden");
            purchasechosen = "Oak Table";
            popuptext.textContent = purchasephrase + purchasechosen + " for 260 Beakers?";
        }


    });

    //////////////////////////////////
    //roof stuff
    //////////////////////////////////
    chandy = document.getElementById("chandy");
    chandy.addEventListener("mouseover", () => {
        Name.textContent = "Chandy";
        Name.className = "exquisiteitem";
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

    ///////////////////////////////////////
    ///////FRIDGES//////////////////////////
    ///////////////////////////////////////

    nastyfridge = document.getElementById("nastyfridge");
    nastyfridge.addEventListener("mouseover", () => {
        Name.textContent = "Nasty Fridge";
        Name.className = "normalitem";
        description.textContent = "It's got mold, it's got rust, and it hasn't turned on properly since the 80s. But let's be honest, you just need a blockade to hide your ripped wallpaper.";
        cost.textContent = "Cost: 80 Beakers";
    });

    nastyfridge.addEventListener("click", () => {
        console.log(nastyfridgepurchased);
        if(nastyfridgepurchased == false){
            popup.classList.remove("hidden");
            purchasechosen = "Nasty Fridge";
            popuptext.textContent = purchasephrase + purchasechosen + " for 80 Beakers?";
        }


    });

    doubledoorfridge = document.getElementById("doubledoorfridge");
    doubledoorfridge.addEventListener("mouseover", () => {
        Name.textContent = "Double-Door Fridge";
        Name.className = "rareitem";
        description.textContent = "Trusty, reliable, and looks great with pretty much anything. My cousin had one of these a couple years ago, and it never let him down, up until his house sparked into flames. Oh yeah- this fridge is flammable.";
        cost.textContent = "Cost: 140 Beakers";
    });

    doubledoorfridge.addEventListener("click", () => {
        console.log(doubledoorfridgepurchased);
        if(doubledoorfridgepurchased == false){
            popup.classList.remove("hidden");
            purchasechosen = "Double-Door Fridge";
            popuptext.textContent = purchasephrase + purchasechosen + " for 140 Beakers?";
        }


    });



    /////////////////////////////////////////////////
    ////////////////////////PAINTINGS////////////////
    ///////////////////////////////////////////////////


    cheappainting = document.getElementById("cheappainting");
    cheappainting.addEventListener("mouseover", () => {
        Name.textContent = "Cheap Painting";
        Name.className = "normalitem";
        description.textContent = "The beauty of mass production! Now, even YOU can have your very own masterpiece. This one even includes a condiment stain!";
        cost.textContent = "Cost: 60 Beakers";
    });

    cheappainting.addEventListener("click", () => {
        console.log(cheappaintingpurchased);
        if(cheappaintingpurchased == false){
            popup.classList.remove("hidden");
            purchasechosen = "Cheap Painting";
            popuptext.textContent = purchasephrase + purchasechosen + " for 60 Beakers?";
        }


    });


    abstractpainting = document.getElementById("abstractpainting");
    abstractpainting.addEventListener("mouseover", () => {
        Name.textContent = "Abstract Painting";
        Name.className = "rareitem";
        description.textContent = "An abstract painting recovered from a shipwreck in perfect condition, hidden amongst kelp and an antique wind instrument. Doesn't this remind you of something? Ah, whatever...";
        cost.textContent = "Cost: 125 Beakers";
    });

    abstractpainting.addEventListener("click", () => {
        console.log(abstractpaintingpurchased);
        if(abstractpaintingpurchased == false){
            popup.classList.remove("hidden");
            purchasechosen = "Abstract Painting";
            popuptext.textContent = purchasephrase + purchasechosen + " for 125 Beakers?";
        }


    });

    fancypainting = document.getElementById("fancypainting");
    fancypainting.addEventListener("mouseover", () => {
        Name.textContent = "Fancy Painting";
        Name.className = "exquisiteitem";
        description.textContent = "If anyone actually knew about this painting, I'm damn sure it'd be in a famous museum somewhere. Actually... if anyone asks where you got it, keep my name out of it.";
        cost.textContent = "Cost: 220 Beakers";
    });

    fancypainting.addEventListener("click", () => {
        console.log(fancypaintingpurchased);
        if(fancypaintingpurchased == false){
            popup.classList.remove("hidden");
            purchasechosen = "Fancy Painting";
            popuptext.textContent = purchasephrase + purchasechosen + " for 220 Beakers?";
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
            itemprice = 9999;
            itemid = 1;
            itemresell = 6969;
        } else if(purchasechosen == "Very Angry Man"){
            itemname = "Very Angry Man"
            itemprice = 9999;
            itemid = 2;
            itemresell = 6969;
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
        } else if(purchasechosen == "Nasty Fridge"){
            itemname = "Nasty Fridge";
            itemprice = 80;
            itemid = 109;
            itemresell = 30;
            if(beakers > itemprice){
                nastyfridgepurchased = true;
                document.getElementById("nastyfridge").classList.add("sold");
            }
        } else if(purchasechosen == "Cheap Painting"){
            itemname = "Cheap Painting";
            itemprice = 60;
            itemid = 112;
            itemresell = 26;
            if(beakers > itemprice){
                cheappaintingpurchased = true;
                document.getElementById("cheappainting").classList.add("sold");
            }
        } else if(purchasechosen == "Abstract Painting"){
            itemname = "Abstract Painting";
            itemprice = 125;
            itemid = 113;
            itemresell = 60;
            if(beakers > itemprice){
                abstractpaintingpurchased = true;
                document.getElementById("abstractpainting").classList.add("sold");
            }
        } else if(purchasechosen == "Fancy Painting"){
            itemname = "Fancy Painting";
            itemprice = 220;
            itemid = 114;
            itemresell = 100;
            if(beakers > itemprice){
                fancypaintingpurchased = true;
                document.getElementById("fancypainting").classList.add("sold");
            }
        } else if(purchasechosen == "Oak Table"){
            itemname = "Oak Table";
            itemprice = 260;
            itemid = 106;
            itemresell = 120;
            if(beakers > itemprice){
                oaktablepurchased = true;
                document.getElementById("oaktable").classList.add("sold");
            }
        } else if(purchasechosen === "Double-Door Fridge"){
            itemname = "Double-Door Fridge";
            itemprice = 140;
            itemid = 110;
            itemresell = 65;
            if(beakers > itemprice){
                doubledoorfridgepurchased = true;
                document.getElementById("doubledoorfridge").classList.add("sold");
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
        // actually WRITING TO DISK HOLY WABUDO this took ages
        //
        //

        INVENTORYDATA.beakers = beakers;

        // Add purchased item to inventory
        if (!INVENTORYDATA.items) INVENTORYDATA.items = [];
        INVENTORYDATA.items.push({
            id: itemid,
            name: itemname,
            resell: itemresell
        });

        // Write back to file
        (async () => {
            await writeJson('inventory.json', INVENTORYDATA);
            console.log("Purchase saved to inventory.json!");
            // updating beaker hud and playing sound
            beakerhud.textContent = beakers + " Beakers Owned";
            const chaching = document.getElementById("chaching");
            chaching.currentTime = 0;
            chaching.volume = 0.5;
            chaching.play();
        })();
        });
});




