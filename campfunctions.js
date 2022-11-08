var Player = {
  //items
  hasOven: false,
  hasFPan: false,
  hasKnife: false,

  //ingredients
  water: 0,
  wheat: 0,
  lGreens: 0,
  fMeat: 0,
  milk: 0,
  cMeat: 0,

  //dishes
  bread: 0,
  toast: 0,
  cVeg: 0,
  cFish: 0,
  cBeef: 0,
  cheese: 0,
  fSand: 0,
  cSand: 0
};

//resource for set up
//https://stackoverflow.com/questions/14234646/adding-elements-to-object

//toggles between hiding and showing recipe
function openCloseRecipe(){
    var x = document.getElementById("recipes");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

//intended to display stats of chosen elements
function checkInvent(){
/*  let info = "";
  let stats = document.forms[Player];
  
  info += "ATK: " + stats.elements[i].atk + "<br>";

  document.getElementById("checkInfo").innerHTML = info;*/
  //lists what ingredients and "dishes" you have
}

//checks if you have the needed tool
//if you do, goes through with the minigame
function toolAct(){

}