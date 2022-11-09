function encounterSlime(){ //dunno how to pass an object thru the params
  var convinced = 0;
  var img = document.createElement('img');
  img.src = 'https://cdnb.artstation.com/p/assets/images/images/049/156/725/original/woodrush-soda-slimey.gif?1651811702';
  document.getElementById('encounter').appendChild(img);
  if(convinced >= 0){
    let btnA = document.createElement("button");
    btnA.innerHTML = "Pet";
    btnA.addEventListener("click", 
    function () {
      alert("The slime blurbled happily");
    });
    document.getElementById("encounter").appendChild(btnA);

    let btnB = document.createElement("button");
    btnB.innerHTML = "Compliment";
    btnB.addEventListener("click", 
    function () {
      alert("The slime is eased by your good vibes");
    });
    document.getElementById("encounter").appendChild(btnB);

    let btnC = document.createElement("button");
    btnC.innerHTML = "Stare";
    btnC.addEventListener("click", 
    function () {
      alert("The slime stares back");
    });
    document.getElementById("encounter").appendChild(btnC);
    
    let btnD = document.createElement("button");
    btnD.innerHTML = "Punch";
    btnD.addEventListener("click", 
    function () {
      alert("Aw, no! You made the slime cry!");
    });
    document.getElementById("encounter").appendChild(btnD);
    }
}

function encounterGameplay(){
  
}

var Slime = {
    //convinced levels
    currCon: 0,
    totalCon: 100,

    //image source
    imgSrc: "https://cdnb.artstation.com/p/assets/images/images/049/156/725/original/woodrush-soda-slimey.gif?1651811702",
  
    //convinving actions (randomized order)
    p50: "Pet",
    p25: "Compliment",
    pn0: "Stare",
    n25: "Punch",
  
    //text when you win/lose
    winCon: "",
    loseCon: "",

    item: water
};

