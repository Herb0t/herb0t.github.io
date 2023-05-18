import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'

import './App.css'

function App() {
  let wrapper = "";

  let columns = 0,
      rows = 0,
      toggled = false;

  const toggle = () => {
    toggled = !toggled;
    
    document.body.classList.toggle("toggled");
  }

  const handleOnClick = index => {
    toggle();
    
    anime({
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index
      })
    });
  }

  const createTile = index => {
    const tile = document.createElement("div");
    
    tile.classList.add("tile");
    
    tile.style.opacity = toggled ? 0 : 1;
    
    tile.onclick = e => handleOnClick(index);
    
    return tile;
  }

  const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index));
    });
  }

  const createGrid = () => {
    if(wrapper === null) {
      console.error("No wrapper element found.");

      return;
    };

    wrapper.innerHTML = "";
    
    const size = document.body.clientWidth > 800 ? 50 : 25;
    
    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);
    console.log(columns, rows);
    console.log(wrapper);
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    
    createTiles(columns * rows);
  }

  // once the page loads create the grid useEffect
  useEffect(() => {
    wrapper = document.getElementById("tiles");
    createGrid();
  }, []);

  window.onresize = () => createGrid();

  return (
    <div id="tiles">
    </div>
  )
}

export default App
