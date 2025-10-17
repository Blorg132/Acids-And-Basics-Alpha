// accessing lesson unlock system

const fs = require('fs');
const path = require('path');



//
//
//
//
// CUSTOM ALERT SYSTEM. USE THIS FOR THE LESSONS AND HIGHLIGHTED WORDS.
//
//
//
//
function customAlert(message) {
  // Overlay
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  overlay.style.zIndex = 999; // behind the box but above page

  // Alert Box
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
  box.style.zIndex = 1000; // must be higher than overlay!

  // Message
  const text = document.createElement('p');
  text.textContent = message;
  text.style.marginBottom = '20px';
  text.style.color = '#000000ff';
  text.style.fontSize = "2.5vw";

  // OK Button
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

  // Assemble
  box.appendChild(text);
  box.appendChild(btn);
  document.body.appendChild(overlay);
  document.body.appendChild(box);
}

//
//
//
//
//
//

function saveLessonCompletion(lessonname){
  console.log("hallo");
  const fs = require('fs');
  let dog = fs.readFileSync(lessondataPath, "utf8");
  roggie = JSON.parse(dog);
  roggie.lessonclicked = lessonname;
  fs.writeFileSync(lessondataPath, JSON.stringify(roggie, null, 2));
}


//
//
// GIVING BEAKERS AFTER LESSON
function lessonGiveBeakers(score){
  console.log("Lesson Give Beakers Running")
  fs.readFile(inventoryPath, "utf8", (err, jsonString) => {
    let jsonData = JSON.parse(jsonString);

    fs.readFile(lessondataPath, "utf8", (err, lessonRaw) => {
        if (err) throw err;

        let lessonData = JSON.parse(lessonRaw);
        let givebeakers = false;
        /////////////////////////////////
        // Writing lesson completion
        /////////////////////////////////
        if (lessonData.lessonclicked === "lesson1" && lessonData.lesson1 === false) {
            givebeakers = true;
            lessonData.lesson1 = true;
            console.log(lessonData.lesson1);
            console.log("this runs");

        } else if(lessonData.lessonclicked === "lesson2" && lessonData.lesson2 === false){
            givebeakers = true;
            lessonData.lesson2 = true;
        } else if(lessonData.lessonclicked === "lesson3" && lessonData.lesson3 === false){
            givebeakers = true
            lessonData.lesson3 = true;
        }  else if(lessonData.lessonclicked === "lesson4" && lessonData.lesson4 === false){
            givebeakers = true;
            lessonData.lesson4 = true;

        }  else if(lessonData.lessonclicked === "lesson5" && lessonData.lesson5 === false){
            givebeakers = true;
            lessonData.lesson5 = true;

        }  else if(lessonData.lessonclicked === "lesson6" && lessonData.lesson6 === false){
            givebeakers = true;
            lessonData.lesson6 = true;

        }  else if(lessonData.lessonclicked === "lesson7" && lessonData.lesson7 === false){
            givebeakers = true;
            lessonData.lesson7 = true;

        }  else if(lessonData.lessonclicked === "lesson8" && lessonData.lesson8 === false){
            givebeakers = true;
            lessonData.lesson8 = true;

        }  else if(lessonData.lessonclicked === "lesson9" && lessonData.lesson9 === false){
            givebeakers = true;
            lessonData.lesson9 = true;

        }  else if(lessonData.lessonclicked === "lesson10" && lessonData.lesson10 === false){
            givebeakers = true;
            lessonData.lesson10 = true;

        }  else if(lessonData.lessonclicked === "lesson11" && lessonData.lesson11 === false){
            givebeakers = true;
            lessonData.lesson11 = true;
        }  else if(lessonData.lessonclicked === "lesson12" && lessonData.lesson12 === false){
            givebeakers = true;
            lessonData.lesson12 = true;
        } else if(lessonData.lessonclicked === "lesson13" && lessonData.lesson13 === false){
            givebeakers = true;
            lessonData.lesson13 = true;
        } else if(lessonData.lessonclicked === "lesson14" && lessonData.lesson14 === false){
            givebeakers = true;
            lessonData.lesson14 = true;
        } else if(lessonData.lessonclicked === "lesson15" && lessonData.lesson15 === false){
            givebeakers = true;
            lessonData.lesson15 = true;
        } else if(lessonData.lessonclicked === "lesson16" && lessonData.lesson16 === false){
            givebeakers = true;
            lessonData.lesson16 = true;
        } else if(lessonData.lessonclicked === "lesson17" && lessonData.lesson17 === false){
            givebeakers = true;
            lessonData.lesson17 = true;
        } else if(lessonData.lessonclicked === "lesson18" && lessonData.lesson18 === false){
            givebeakers = true;
            lessonData.lesson18 = true;
        } else if(lessonData.lessonclicked === "lesson19" && lessonData.lesson19 === false){
            givebeakers = true;
            lessonData.lesson19 = true;
        } else if(lessonData.lessonclicked === "lesson20" && lessonData.lesson20 === false){
            givebeakers = true;
            lessonData.lesson20 = true;
        }
        /////////////////////////////////////////
        
        // Saving changes
        fs.writeFileSync('./renderer/userdata/lessondata.json', JSON.stringify(lessonData, null, 2));

        // Give beakers if needed
        // Just so you know, beakersearned is in INVENTORY, not in LESSON DATA
        if (givebeakers) {
          jsonData.beakers += score;
          jsonData.beakersearned = score;
        } else {
          console.log("Unable to give beakers, lesson already completed.");
          jsonData.beakersearned = 0;
        }

        // Save inventory
        fs.writeFileSync('./renderer/userdata/inventory.json', JSON.stringify(jsonData, null, 2));

        console.log(`Updated inventory: ${jsonData.beakers} beakers`);
    });
  });
}
//
//
//