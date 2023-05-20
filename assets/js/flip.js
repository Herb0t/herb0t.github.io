// console.log('flip.js loaded');

let wrapper = "";

let columns = 0,
    rows = 0,
    toggled = false,
    amountOfFlaps = 0,
    flag = [],
    flag2 = true,
    strCount = [],
    a1 = "",
    a2 = "",
    b1 = "",
    b2 = ""
    ;

let beginStr = "                            THANK YOU FOR VISITING                     shop   about  contact                                                                                                                                                                                                                                                             ".toUpperCase().split("");
let endStr = "                          WELCOME     TO MY       SHOP                                                                                                                                                                                                                                                                                                   ".toUpperCase().split("");

const speed = 0.40; // seconds
const char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '];

const charLength = char.length;

const createTile = index => {
  const tile = document.createElement("div");

  const top = document.createElement("div");
  top.classList.add("top");
  const bottom = document.createElement("div");
  bottom.classList.add("bottom");
  const nextHalf = document.createElement("div");
  nextHalf.classList.add("nextHalf");
  const nextFull = document.createElement("div");
  nextFull.classList.add("nextFull");

  tile.appendChild(top);
  tile.appendChild(bottom);
  tile.appendChild(nextHalf);
  tile.appendChild(nextFull);
  
  tile.classList.add(...["tile","splitflap"]);
  
  tile.style.opacity = toggled ? 0 : 1;
  
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
}

const addAnimation = () => {
  a1 = document.querySelectorAll(".top");
  a2 = document.querySelectorAll(".bottom");
  b1 = document.querySelectorAll(".nextFull");
  b2 = document.querySelectorAll(".nextHalf");
  
  for (var x = 0; x < a1.length; x++) {
    a2[x].style.animationDuration = speed + "s";
    b2[x].style.animationDuration = speed + "s";
  }

  strCount = [], flag = [];

  for (var x = 0; x < amountOfFlaps; x++){
    strCount[x] = char.indexOf(beginStr[x]);
    flag[x] = false, flag2 = true;
  }

  // Flip them flaps /////////////////////////////////////////
  setInterval(function() {
    for (var x = 0; x < amountOfFlaps; x++) {

      if (b1[x].innerHTML == endStr[x]) dontFlipIt(x);
      else flipIt(x);

      if (flag.every(function(e) {
          return e
        }) && flag2) flag2 = false, changeDestination();
    }

  }, speed * 1000);
}

function flipIt(x) {
  a1[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
  a2[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
  b1[x].innerHTML = char[strCount[x]];
  b2[x].innerHTML = char[strCount[x]];

  a2[x].classList.remove("flip1");
  a2[x].offsetWidth = a2[x].offsetWidth;
  a2[x].classList.add("flip1");
  b2[x].classList.remove("flip2");
  b2[x].offsetWidth = b2[x].offsetWidth;
  b2[x].classList.add("flip2");

  if (strCount[x] > char.length - 2) strCount[x] = 0;
  else strCount[x]++;
}

function dontFlipIt(x) {
  flag[x] = true;
  a2[x].classList.remove("flip2");
  a2[x].style.backgroundColor = "#f4f4f4";
  b2[x].style.backgroundColor = "#f4f4f4";
  a1[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
  a2[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
}

function changeDestination() {
  setTimeout(function() {
    flag.fill(false);
    flag2 = true;
    
    var tempArr = endStr.slice();
    endStr = beginStr.slice();
    beginStr = tempArr.slice();
  }, 3000);
}

const createGrid = () => {
  if(wrapper === null) {
    console.error("No wrapper element found.");

    return;
  };

  wrapper.innerHTML = "";
  
  const size = document.body.clientWidth > 800 ? 100 : 30;
  
  // columns = Math.floor(document.body.clientWidth / size);
  columns = Math.floor(document.body.clientWidth / size) > 12 ? 12 : Math.floor(document.body.clientWidth / size);
  // rows = Math.floor(document.body.clientHeight / size);
  rows = Math.floor(document.body.clientHeight / size) > 20 ? 20 : Math.floor(document.body.clientHeight / size);
  console.log(columns, rows);
  console.log(wrapper);
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  amountOfFlaps = columns * rows;
  console.log(amountOfFlaps);
  createTiles(amountOfFlaps);
  addAnimation();
}

document.addEventListener("DOMContentLoaded", () => {
  wrapper = document.getElementById("tiles");
  createGrid()
});

window.onresize = () => createGrid();