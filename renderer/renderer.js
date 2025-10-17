
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Essentially, what this entire file does is reads all of the JSONS and will provide all of the functions to write to JSONs.
// For every file that you want to either use or write to a JSON, you MUST reference this renderer.js. Then, the variables
// should be available to the rest of the scripts that you run. I'm pretty sure at least.

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

    const defaultHouse = {};

    const defaultLessons = {};

    ///////////////////////////////////////
    /////READING THE DATA//////////////////
    ///////////////////////////////////////

    // Keep in mind that this whole process runs EVERYTIME you reference renderer.js. Also, this will load EVERY single JSON, but i'm 90% sure slowdown will be minimal.
    let INVENTORYDATA = await readJson('inventory.json', defaultInventory);
    let HOUSEDATA = await readJson('house.json', defaultHouse);
    let LESSONDATA = await readJson('lessondata.json', defaultLessons);



    console.log("Renderer.js Recieved and Completed.");
    console.log(INVENTORYDATA);
    console.log(HOUSEDATA);
    console.log(LESSONDATA);



    // writing command, copy and paste this later? await writeJson('inventory.json', inventory);
})();

