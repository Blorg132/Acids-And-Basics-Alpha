
const path = require('path');

console.log("Running!");

// creating window
const { app, BrowserWindow } = require('electron');

let audioWindow;
function createMainWindow() {
    // defining properties of the MAIN browserwindow
    const mainWindow = new BrowserWindow({
        title: 'Acids & Basics',
        width: 1024,
        height: 720,
        webPreferences: {
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
