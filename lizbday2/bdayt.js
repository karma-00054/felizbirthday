// ====== TYPEWRITER ======
const messageText = `My dear Feliz, I love you more than words can describe. You are like family to me, and I would do absolutely anything for you. Your kindness, your smile, and the way you brighten everyone’s life means the world to me. I am so grateful for you, and I promise to always be here, no matter the distance. Happy Birthday, my dearest! ❤️🎂🎉`;

function typeWriter(text, element, speed=30){
  let i=0;
  function typing(){
    if(i<text.length){
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

document.addEventListener("DOMContentLoaded", ()=>{
  const typewriterEl = document.getElementById("typewriter");
  if(typewriterEl) typeWriter(messageText, typewriterEl, 30);
});

// ====== CONFETTI ======
const confettiContainer = document.getElementById("confetti");
function createConfettiPiece(){
  const piece = document.createElement('div');
  piece.classList.add('confetti-piece');
  piece.style.backgroundColor = ['#ff6f61','#ffdd61','#61ffb8','#61b2ff'][Math.floor(Math.random()*4)];
  piece.style.left = Math.random() * window.innerWidth + 'px';
  piece.style.width = 10 + Math.random()*10 + 'px';
  piece.style.height = piece.style.width;
  piece.style.animationDuration = (3 + Math.random()*5) + 's';
  confettiContainer.appendChild(piece);
  setTimeout(()=>piece.remove(), 8000);
}
setInterval(createConfettiPiece,120);

// ====== HEARTS ======
function popHearts(){
  for(let i=0;i<5;i++){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = ":sparkling_heart:";
    heart.style.left = Math.random()*window.innerWidth + "px";
    heart.style.bottom = "80px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),1500);
  }
}

// ====== COMMENTS ======
const openCommentsBtn = document.getElementById("openComments");
const commentBox = document.getElementById("comment-box");
const submitComment = document.getElementById("submitComment");
const commentInput = document.getElementById("commentInput");
const commentsDiv = document.getElementById("comments");

// Load saved comments
const savedComments = JSON.parse(localStorage.getItem("comments")||"[]");

function addComment(text){
  const div = document.createElement("div");
  div.className = "comment";
  div.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = ":x:";
  delBtn.addEventListener("click",()=>{
    div.remove();
    const idx = savedComments.indexOf(text);
    if(idx>-1){ 
      savedComments.splice(idx,1); 
      localStorage.setItem("comments",JSON.stringify(savedComments)); 
    }
  });
  div.appendChild(delBtn);
  commentsDiv.appendChild(div);
}

savedComments.forEach(c=>addComment(c));

// Open comment box
openCommentsBtn?.addEventListener("click",()=>{
  commentBox.style.display="block";
  openCommentsBtn.style.display="none";
  commentBox.scrollIntoView({behavior:"smooth"});
});

// Submit comment
submitComment?.addEventListener("click",()=>{
  const text=commentInput.value.trim();
  if(!text) return;
  addComment(text);
  savedComments.push(text);
  localStorage.setItem("comments",JSON.stringify(savedComments));
  commentInput.value="";
  popHearts();
  commentsDiv.scrollIntoView({behavior:"smooth", block:"end"});
});
const music = new Audio("music.mp3");
music.loop = true;

const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        musicBtn.textContent = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.textContent = "▶ Play Music";
    }

    isPlaying = !isPlaying;
});
const music = new Audio("music.mp3");

