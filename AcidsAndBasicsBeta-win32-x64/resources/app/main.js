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
      devTools: false
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



ipcMain.handle('save-lesson-clicked', async (event, lessonName) => {
  const lessondataPath = getJsonPath('lessondata.json');

  let data = {};
  if (fs.existsSync(lessondataPath)) {
    const raw = fs.readFileSync(lessondataPath, 'utf8');
    data = JSON.parse(raw);
  } else {
    // If file doesn't exist, create it with defaults
    data = {
      lessonclicked: '',
      lesson1: false, lesson2: false, lesson3: false, lesson4: false,
      lesson5: false, lesson6: false, lesson7: false, lesson8: false,
      lesson9: false, lesson10: false, lesson11: false, lesson12: false,
      lesson13: false, lesson14: false, lesson15: false, lesson16: false,
      lesson17: false, lesson18: false, lesson19: false, lesson20: false
    };
  }

  // Update the clicked lesson
  data.lessonclicked = lessonName;

  // Save back
  fs.writeFileSync(lessondataPath, JSON.stringify(data, null, 2));
});