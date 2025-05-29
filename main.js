// use 'npx electron .' to run the program!

console.log("Running!");

// creating window
const path = require('path');
const { app, BrowserWindow } = require('electron');

function createMainWindow() {
    // defining properties of the MAIN browserwindow
    const mainWindow = new BrowserWindow({
        title: 'Acids & Basics',
        width: 1024,
        height: 720,
    });

    // load the actual html file in the main window
    mainWindow.loadFile(path.join(__dirname, './renderer/mainpage.html'));
}

// making the window
app.whenReady().then(() => {
    createMainWindow();
});