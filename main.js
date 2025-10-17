const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 720,
    webPreferences: {
      nodeIntegration: true,   // allows require() in renderer
      contextIsolation: false, // allows direct Node access
    }
  });

  win.loadFile('./renderer/mainpage.html');
}

app.whenReady().then(createWindow);

// Helper to get JSON path in userData
function getJsonPath(filename) {
  return path.join(app.getPath('userData'), filename);
}

// IPC handlers
ipcMain.handle('read-json', (event, filename, defaults = {}) => {
  const filePath = getJsonPath(filename);

  if (!fs.existsSync(filePath)) {
    // Create file with default content
    fs.writeFileSync(filePath, JSON.stringify(defaults, null, 2));
  }

  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
});

ipcMain.handle('write-json', (event, filename, data) => {
  const filePath = getJsonPath(filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});
