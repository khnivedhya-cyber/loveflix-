/* ======================================================
   I NEVER LOOK AWAY
   script.js
======================================================*/

// Elements

const intro = document.getElementById("intro");
const profiles = document.getElementById("profiles");
const home = document.getElementById("home");

const enterBtn = document.getElementById("enterBtn");

// Enter button

enterBtn.addEventListener("click", () => {

    intro.classList.add("fadeOut");

    setTimeout(() => {

        intro.style.display = "none";

        profiles.classList.remove("hidden");

        profiles.classList.add("fade-up");

    }, 800);

});

// Profile Selection

function startMovie(){

    profiles.classList.add("fadeOut");

    setTimeout(()=>{

        profiles.style.display="none";

        home.classList.remove("hidden");

        home.classList.add("fade-up");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },800);

}

// Play Button

const playBtn = document.querySelector("header button");

if(playBtn){

playBtn.addEventListener("click",()=>{

alert("🎬 Episode 1 is coming in Milestone 2 ❤️");

});

}

// Keyboard Shortcuts

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

if(!profiles.classList.contains("hidden")){

startMovie();

}

}

});

// Tiny Twinkle Effect

setInterval(()=>{

document.body.style.filter="brightness(1.02)";

setTimeout(()=>{

document.body.style.filter="brightness(1)";

},300);

},7000);

// Shooting Star Creator

const shootingStars = document.getElementById("shooting-stars");

function createStar(){

const star=document.createElement("div");

star.className="dynamic-star";

star.style.position="absolute";

star.style.width="140px";

star.style.height="2px";

star.style.background="linear-gradient(to right,#fff,transparent)";

star.style.top=Math.random()*40+"%";

star.style.left="-200px";

star.style.transform="rotate(25deg)";

star.style.opacity=".8";

star.style.pointerEvents="none";

shootingStars.appendChild(star);

let x=-200;

let y=0;

const move=setInterval(()=>{

x+=20;

y+=5;

star.style.left=x+"px";

star.style.top=`calc(${star.style.top} + ${y}px)`;

if(x>window.innerWidth+300){

clearInterval(move);

star.remove();

}

},25);

}

setInterval(createStar,9000);

// Greeting

console.log("❤️ Welcome to I NEVER LOOK AWAY ❤️");

// Future Features

/*
Milestone 2

✔ Continue Watching

✔ Episode Pages

✔ Gallery

✔ Chat Replay

✔ Love Letter

✔ Proposal

✔ Moving NO Button

✔ Confetti

✔ Music

✔ Voice Narration

*/
