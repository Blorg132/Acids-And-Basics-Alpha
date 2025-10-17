const { ipcRenderer } = require('electron');

// Wrapper functions
async function readJson(filename) {
  return await ipcRenderer.invoke('read-json', filename);
}

async function writeJson(filename, data) {
  await ipcRenderer.invoke('write-json', filename, data);
}

// Example usage
(async () => {
  let inventory = await readJson('inventory.json');
  
  // Update inventory
  inventory.items = inventory.items || [];
  inventory.items.push("Sword");
  
  await writeJson('inventory.json', inventory);

  console.log("Updated inventory:", inventory);
})();

