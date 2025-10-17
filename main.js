
const path = require('path');

console.log("Running!");

// creating window
const { app, BrowserWindow } = require('electron');


// fixing up pathing for export
const userDataPath = remote.app.getPath("userData");
const inventoryPath = path.join(userDataPath, "inventory.json");
const lessondataPath = path.join(userDataPath, "lessondata.json");
const housePath = path.join(userDataPath, "house.json");



let audioWindow;
function createMainWindow() {
    // defining properties of the MAIN browserwindow
    const mainWindow = new BrowserWindow({
        title: 'Acids & Basics',
        width: 1024,
        height: 720,
        webPreferences: {
            //devTools: false,  COMMENT THIS BACK IN FOR FULL RELEASE
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    // load the actual html file in the main window
    mainWindow.loadFile(path.join(__dirname, './renderer/mainpage.html'));
}

// making the window
app.whenReady().then(() => {
    createMainWindow();


});
