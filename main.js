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
ipcMain.handle('read-json', (event, filename) => {
  const filePath = getJsonPath(filename);

  // Create file if it doesn't exist
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({}));
  }

  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
});

ipcMain.handle('write-json', (event, filename, data) => {
  const filePath = getJsonPath(filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});