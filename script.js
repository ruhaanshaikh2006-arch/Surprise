// Simple interactivity for the page
const bigLoveBtn = document.getElementById('bigLoveBtn');
const heartsContainer = document.getElementById('hearts');
const askBtn = document.getElementById('askBtn');
const modal = document.getElementById('modal');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const closeModal = document.getElementById('closeModal');
const status = document.getElementById('status');
const shareBtn = document.getElementById('shareBtn');

function makeHeart(x) {
  const el = document.createElement('div');
  el.className = 'heart';
  el.style.left = (x || (Math.random()*80+5)) + 'vw';
  el.style.top = (Math.random()*70+10) + 'vh';
  el.textContent = '❤️';
  heartsContainer.appendChild(el);
  setTimeout(()=> el.remove(), 2800);
}

bigLoveBtn.addEventListener('click', ()=> {
  for(let i=0;i<20;i++){ setTimeout(() => makeHeart(), i*60) }
});

askBtn.addEventListener('click', ()=> {
  modal.setAttribute('aria-hidden','false');
});

closeModal.addEventListener('click', ()=> {
  modal.setAttribute('aria-hidden','true');
});

noBtn.addEventListener('click', ()=> {
  status.textContent = 'She said NO (for now) 💔';
  modal.setAttribute('aria-hidden','true');
});

yesBtn.addEventListener('click', ()=> {
  status.textContent = 'She said YES! 💍';
  modal.setAttribute('aria-hidden','true');
  for(let i=0;i<40;i++){ setTimeout(() => makeHeart(), i*40) }
});

shareBtn.addEventListener('click', async ()=> {
  const text = `ILMA MUBARIK KHAN — Will you marry this idiot? \nI love you so much ❤️`;
  if (navigator.share) {
    try { await navigator.share({ title:'For Ilma', text }); } catch(e) {}
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    alert('Message copied to clipboard. Paste it to share!');
  } else {
    prompt('Copy this message:', text);
  }
});
