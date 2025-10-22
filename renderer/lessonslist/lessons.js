// CUSTOM ALERT SYSTEM
function customAlert(message) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = 999;

    const box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.top = '50%';
    box.style.left = '50%';
    box.style.transform = 'translate(-50%, -50%)';
    box.style.background = '#fff';
    box.style.padding = '20px 30px';
    box.style.borderRadius = '10px';
    box.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    box.style.fontFamily = 'sans-serif';
    box.style.textAlign = 'center';
    box.style.zIndex = 1000;

    const text = document.createElement('p');
    text.textContent = message;
    text.style.marginBottom = '20px';
    text.style.color = '#000000ff';
    text.style.fontSize = "2.5vw";

    const btn = document.createElement('button');
    btn.textContent = 'OK';
    btn.style.padding = '8px 16px';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.backgroundColor = '#007bff';
    btn.style.color = '#fff';
    btn.style.cursor = 'pointer';

    btn.onclick = () => {
        document.body.removeChild(overlay);
        document.body.removeChild(box);
    };

    box.appendChild(text);
    box.appendChild(btn);
    document.body.appendChild(overlay);
    document.body.appendChild(box);
}

// SAVE LESSON CLICKED
async function saveLessonClicked(lessonName) {
    const { ipcRenderer } = require('electron');
    const data = await ipcRenderer.invoke('read-json', 'lessondata.json', {
        lessonclicked: null,
        lesson1: false, lesson2: false, lesson3: false, lesson4: false,
        lesson5: false, lesson6: false, lesson7: false, lesson8: false,
        lesson9: false, lesson10: false, lesson11: false, lesson12: false,
        lesson13: false, lesson14: false, lesson15: false, lesson16: false,
        lesson17: false, lesson18: false, lesson19: false, lesson20: false
    });

    data.lessonclicked = lessonName;

    await ipcRenderer.invoke('write-json', 'lessondata.json', data);
    console.log("Saved lesson clicked:", lessonName);
}

// GIVE BEAKERS AFTER LESSON
async function lessonGiveBeakers(score) {
    console.log("Lesson Give Beakers Running");

    const inventoryData = await window.ipcRenderer.invoke('read-json', 'inventory.json', {
        beakers: 0,
        beakersearned: 0
    });

    const lessonData = await window.ipcRenderer.invoke('read-json', 'lessondata.json', {
        lessonclicked: null,
        lesson1: false, lesson2: false, lesson3: false, lesson4: false,
        lesson5: false, lesson6: false, lesson7: false, lesson8: false,
        lesson9: false, lesson10: false, lesson11: false, lesson12: false,
        lesson13: false, lesson14: false, lesson15: false, lesson16: false,
        lesson17: false, lesson18: false, lesson19: false, lesson20: false
    });

    let giveBeakers = false;
    const clicked = lessonData.lessonclicked;

    // Check which lesson to unlock
    if (clicked && lessonData[clicked] === false) {
        lessonData[clicked] = true;
        giveBeakers = true;
        console.log(`Lesson ${clicked} completed, giving beakers.`);
    } else {
        console.log("Unable to give beakers, lesson already completed.");
    }

    // Update lessondata.json
    await window.ipcRenderer.invoke('write-json', 'lessondata.json', lessonData);

    // Update inventory
    if (giveBeakers) {
        inventoryData.beakers += score;
        inventoryData.beakersearned = score;
    } else {
        inventoryData.beakersearned = 0;
    }

    await window.ipcRenderer.invoke('write-json', 'inventory.json', inventoryData);
    console.log(`Updated inventory: ${inventoryData.beakers} beakers`);

    return inventoryData.beakersearned; // useful for showing score
}