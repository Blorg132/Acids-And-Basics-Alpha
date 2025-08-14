const fs = require('fs');

const flashcards = [

  // If you're ever interested into what each of the units mean, here is what i have so far:
  // Unit 1: Basic shit. not really sure. Abhinav you figure it out.
  
  // Unit 1: Basic Things
  { front: "What is the smallest unit of matter?", back: "An atom", unit: "1" },
  { front: "What three particles make up an atom?", back: "Protons, neutrons, and electrons", unit: "1" },
  { front: "What is the charge of a proton?", back: "Positive (+)", unit: "1" },
  { front: "What is the charge of an electron?", back: "Negative (−)", unit: "1" },
  { front: "What is the charge of a neutron?", back: "Neutral (0)", unit: "1" },
  { front: "Where are protons and neutrons found?", back: "In the nucleus", unit: "1" },
  { front: "Where are electrons found?", back: "In electron shells/orbitals", unit: "1" },
  { front: "What defines an element?", back: "The number of protons", unit: "1" },
  { front: "What is the atomic number?", back: "The number of protons in an atom", unit: "1" },
  { front: "What is the mass number?", back: "Protons + Neutrons", unit: "1" },
  { front: "What is a homogenous mixture?", back: "A mixture with uniform composition", unit: "1"},

  // Unit 2: Periodic Table
  { front: "Who created the periodic table?", back: "Dmitri Mendeleev", unit: "2" },
  { front: "What does a group (column) in the periodic table show?", back: "Elements with similar properties", unit: "2" },
  { front: "What does a period (row) in the periodic table show?", back: "Same number of electron shells", unit: "2" },
  { front: "What are Group 1 elements called?", back: "Alkali metals", unit: "2" },
  { front: "What are Group 17 elements called?", back: "Halogens", unit: "2" },
  { front: "What are Group 18 elements called?", back: "Noble gases", unit: "2" },
  { front: "Are metals on the left or right of the periodic table?", back: "Left", unit: "2" },
  { front: "Are nonmetals on the left or right of the periodic table?", back: "Right", unit: "2" },
  { front: "What element has atomic number 1?", back: "Hydrogen", unit: "2" },
  { front: "Which metal is liquid at room temperature?", back: "Mercury", unit: "2" },

  // Unit 3: Chemical Bonding
  { front: "What is an ionic bond?", back: "Transfer of electrons between atoms", unit: "3" },
  { front: "What is a covalent bond?", back: "Sharing of electrons between atoms", unit: "3" },
  { front: "What types of elements form ionic bonds?", back: "Metals and nonmetals", unit: "3" },
  { front: "What types of elements form covalent bonds?", back: "Nonmetals and nonmetals", unit: "3" },
  { front: "What is a molecule?", back: "A group of atoms bonded together", unit: "3" },
  { front: "What is a compound?", back: "A substance made of different elements bonded together", unit: "3" },
  { front: "What is the chemical formula for water?", back: "H₂O", unit: "3" },
  { front: "What is the chemical formula for table salt?", back: "NaCl", unit: "3" },
  { front: "Why do atoms form bonds?", back: "To become more stable", unit: "3" },
  { front: "What is a valence electron?", back: "An electron in the outermost shell", unit: "3" },

  // Unit 4: Chemical Reactions
  { front: "What is a chemical reaction?", back: "A process that changes substances into new ones", unit: "4" },
  { front: "What are the signs of a chemical reaction?", back: "Color change, gas, temperature change, precipitate", unit: "4" },
  { front: "What is a reactant?", back: "A substance that starts a chemical reaction", unit: "4" },
  { front: "What is a product?", back: "A substance formed in a chemical reaction", unit: "4" },
  { front: "What is the law of conservation of mass?", back: "Mass is not created or destroyed in a reaction", unit: "4" },
  { front: "What is an exothermic reaction?", back: "A reaction that releases heat", unit: "4" },
  { front: "What is an endothermic reaction?", back: "A reaction that absorbs heat", unit: "4" },
  { front: "What is a balanced equation?", back: "Same number of atoms on both sides of the equation", unit: "4" },
  { front: "What is a catalyst?", back: "A substance that speeds up a reaction without being used up", unit: "4" },
  { front: "What is a chemical equation?", back: "A symbolic representation of a chemical reaction", unit: "4" },

  // Unit 5: States of Matter
  { front: "What are the three main states of matter?", back: "Solid, liquid, and gas", unit: "5" },
  { front: "What state of matter has a fixed shape and volume?", back: "Solid", unit: "5" },
  { front: "What state of matter has a fixed volume but no fixed shape?", back: "Liquid", unit: "5" },
  { front: "What state of matter has no fixed shape or volume?", back: "Gas", unit: "5" },
  { front: "What is the process of solid to liquid called?", back: "Melting", unit: "5" },
  { front: "What is the process of liquid to gas called?", back: "Evaporation", unit: "5" },
  { front: "What is the process of gas to liquid called?", back: "Condensation", unit: "5" },
  { front: "What is the process of liquid to solid called?", back: "Freezing", unit: "5" },
  { front: "What is the process of solid to gas called?", back: "Sublimation", unit: "5" },
  { front: "What causes changes in states of matter?", back: "Adding or removing heat", unit: "5" }


  // My actual questions

]

//
//
//
//
//
//
//
//
//          // Actual code starts beyond this point.
//





let currentIndex = 0;

@@ -6,7 +94,6 @@ let isFlipped = false;
let monkey = 0;
let cardText = document.getElementById('card-text')
let usedFlashcards = []
let unitSelected = 1;

//counter stuff yet again
let flashcardcounter = document.getElementById("flashcardcounter");


@@ -114,67 +201,4 @@ function shuffleFlashcards(){
// make a unit select button


showFront(); // Load first card on page load



//////////////////////////////////////////////////
////////CHOOSE UNIT BUTTONS//////////////////////
/////////////////////////////////////////////////


// Declaring and getting buttons
let unit1 = document.getElementById("flashcardunit1button");
let unit2 = document.getElementById("flashcardunit2button");
let unit3 = document.getElementById("flashcardunit3button");
let unit4 = document.getElementById("flashcardunit4button");


// Adding click events
// PLEASE NOTE: This is an incredibly shitty way of applying the "clicked" CSS style. But as far as I can tell, no latency, so who gives a rat's ass.

unit1.addEventListener("click", () => {
  // selecting unit
  unitSelected = 1;
  // getting rid of clicked css style on everything else
  unit2.classList.remove("clicked");
  unit3.classList.remove("clicked");
  unit4.classList.remove("clicked");
  console.log(unitSelected);
  unit1.classList.add("clicked");
});

unit2.addEventListener("click", () => {
  // selecting unit
  unitSelected = 2;
  // getting rid of clicked css style on everything else
  unit1.classList.remove("clicked");
  unit3.classList.remove("clicked");
  unit4.classList.remove("clicked");
  console.log(unitSelected);
  unit2.classList.add("clicked");
});


unit3.addEventListener("click", () => {
  // selecting unit
  unitSelected = 3;
  // getting rid of clicked css style on everything else
  unit1.classList.remove("clicked");
  unit2.classList.remove("clicked");
  unit4.classList.remove("clicked");
  console.log(unitSelected);
  unit3.classList.add("clicked");
});


unit4.addEventListener("click", () => {
  // selecting unit
  unitSelected = 4;
  // getting rid of clicked css style on everything else
  unit1.classList.remove("clicked");
  unit2.classList.remove("clicked");
  unit3.classList.remove("clicked");
  console.log(unitSelected);
  unit4.classList.add("clicked");
});
showFront(); // Load first card on page load