// flowers.js - spawn flower and tulip particles
const flowersContainer = document.getElementById('flowers');

function createFlower(type='rose') {
  const el = document.createElement('div');
  el.className = 'flower';
  // choose small SVG for tulip or rose
  const svgs = {
    tulip: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 4c-5 0-9 4-9 9 0 9 9 16 9 16s9-7 9-16c0-5-4-9-9-9z" fill="%23ff6b9a"/><path d="M20 40c6 4 12 4 24 0 0 0-2 16-12 20-10-4-12-20-12-20z" fill="%23222"/></svg>`,
    rose: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="24" r="10" fill="%23ff90b0"/><path d="M32 34c-8 0-20 6-16 16 12 6 20 6 32 0 4-10-8-16-16-16z" fill="%23222"/></svg>`
  };
  el.innerHTML = Math.random()>.5 ? svgs.tulip : svgs.rose;
  // starting position
  el.style.left = (Math.random()*90) + 'vw';
  el.style.top = (100 + Math.random()*10) + 'vh';
  el.style.animationDuration = (8 + Math.random()*8) + 's';
  el.style.opacity = 0.95;
  flowersContainer.appendChild(el);
  setTimeout(()=> el.remove(), 20000);
}

// spawn flowers periodically
setInterval(()=>{
  for(let i=0;i< (window.innerWidth < 720 ? 1 : 2); i++){
    createFlower();
  }
}, 900);

// export for manual spawn
window.spawnFlowers = createFlower;
