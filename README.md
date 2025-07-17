# Acids And Basics Alpha
This is the right one. For sure.


## 🚀 How to Run the App

### 🔧 Prerequisites (do this once)

1. **Install [Node.js](https://nodejs.org/)**
   - This gives you both `node` and `npm`. You'll need both to actually install electron into the folder.

2. **Install [Visual Studio Code](https://code.visualstudio.com/)** (optional but recommended)

---

1. Open Visual Studio Code console AFTER OPENING THE FOLDER and run "npm install"
2. Start the app with "npx electron ."

(note, all of these are without quotations)


//////////////////////////////////////////////

Packaging the App:

3. Package your app
In the terminal, run:


   npx electron-packager . FlashcardApp --platform=win32 --arch=x64 --overwrite
This means:

   . → current folder

   FlashcardApp → your app's name

   win32 → for Windows (use darwin for Mac, linux for Linux)

   x64 → 64-bit architecture

4. Find Your App
Electron Packager will generate a new folder like:

   FlashcardApp-win32-x64/

Inside that folder, you'll find a file like FlashcardApp.exe — that's your standalone desktop app!