

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

//THE SECOND RENDERER COMBO WOMBO

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Essentially, what this entire file does is reads all of the JSONS and will provide all of the functions to write to JSONs.
// For every file that you want to either use or write to a JSON, you MUST reference this renderer.js. Then, the variables
// should be available to the rest of the scripts that you run. I'm pretty sure at least. Pretty sure.

const { ipcRenderer } = require('electron');


/////////////////////////////////////////////////////////////////////
///////the functions/////////////////////////////////////////////////
async function readJson(filename, defaults) {
  return await ipcRenderer.invoke('read-json', filename, defaults);
}

async function writeJson(filename, data) {
  await ipcRenderer.invoke('write-json', filename, data);
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



///////////Initial reading of the JSONs

let INVENTORYDATA;
let HOUSEDATA;
let LESSONDATA;
(async () => {

    /////////////////////DEFAULTS FOR JSONS////////////

    const defaultInventory = {
    "beakers": 0,
    "items": [],
    "beakersearned": 0,
    "coliseumbeakersearned": 0,
    "questionsanswered": 0,
    "championending": false
    };

    const defaultHouse = {
        "comment": "This is going to be where the player can put their furniture/stuff for their house.",
        "comment1": "They can have any couch under 'couch', any book under 'book', etc. Let it be customizable.",
        "table": "",
        "chair": "",
        "roof": "",
        "painting": "",
        "fridge": ""
    };

    const defaultLessons = {
        "comment1": "Grade 8 Section: ",
        "lessonclicked": "lesson8",
        "lesson1": false,
        "lesson2": false,
        "lesson3": false,
        "lesson4": false,
        "lesson5": false,
        "lesson6": false,
        "comment2": "Grade 9 Section: ",
        "lesson7": false,
        "lesson8": false,
        "lesson9": false,
        "lesson10": false,
        "lesson11": false,
        "lesson12": false,
        "lesson13": false,
        "comment3": "Grade 10 Section: ",
        "lesson14": false,
        "lesson15": false,
        "lesson16": false,
        "lesson17": false,
        "lesson18": false,
        "lesson19": false,
        "lesson20": false
    };

    ///////////////////////////////////////
    /////READING THE DATA//////////////////
    ///////////////////////////////////////

    // Keep in mind that this whole process runs EVERYTIME you reference renderer.js. Also, this will load EVERY single JSON, but i'm 90% sure slowdown will be minimal.
    INVENTORYDATA = await readJson('inventory.json', defaultInventory);
    document.dispatchEvent(new Event('inventoryReady'));
    HOUSEDATA = await readJson('house.json', defaultHouse);
    document.dispatchEvent(new Event('houseReady'));
    LESSONDATA = await readJson('lessondata.json', defaultLessons);
    document.dispatchEvent(new Event('lessondataReady'));



    console.log("Renderer.js Recieved and Completed.");



    // writing command, copy and paste this later? await writeJson('inventory.json', inventory);
})();

