 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>I NEVER LOOK AWAY</title>

<link rel="stylesheet" href="style.css">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>

<body>

<!-- Animated Background -->
<div id="stars"></div>
<div id="shooting-stars"></div>

<!-- Intro -->
<section id="intro">

    <div class="intro-content">

        <h1 class="title">
            I NEVER LOOK AWAY
        </h1>

        <p class="subtitle">
            A film made for AJ.
        </p>

        <p class="date">
            ❤️ Together since 28/08/2025
        </p>

        <button id="enterBtn">
            Begin Our Story
        </button>

    </div>

</section>

<!-- Profile Selection -->

<section id="profiles" class="hidden">

<h2>Who's Watching?</h2>

<div class="profiles">

<div class="profile" onclick="startMovie()">

<div class="avatar">
🌷
</div>

<p>Niveu</p>

</div>

<div class="profile" onclick="startMovie()">

<div class="avatar">
💎
</div>

<p>AJ</p>

</div>

<div class="profile" onclick="startMovie()">

<div class="avatar">
💕
</div>

<p>Us</p>

</div>

</div>

</section>

<!-- Home -->

<section id="home" class="hidden">

<header>

<h1>

US : I NEVER LOOK AWAY

</h1>

<p class="movieInfo">

❤️ 100% Our Story • Romance • 1 Season • HD

</p>

<button>

▶ PLAY

</button>

</header>

<section class="continue">

<h2>

Continue Watching

</h2>

<div class="episodes">

<div class="episode">

❤️

<h3>Our First Hello</h3>

</div>

<div class="episode">

📱

<h3>Late Night Calls</h3>

</div>

<div class="episode">

😂

<h3>Our Dumbest Joke</h3>

</div>

<div class="episode">

🌌

<h3>When I Fell For You</h3>

</div>

</div>

</section>

<section class="quote">

<p>

"No matter how many miles are between us...

we're still looking at the same sky."

</p>

</section>

<footer>

<p>

Made with ❤️ by Niveu

</p>

</footer>

</section>

<script src="script.js"></script>

</body>
</html>
/* ======================================================
   I NEVER LOOK AWAY
   Part A - Global Styles + Intro + Profiles
====================================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

html{
    scroll-behavior:smooth;
}

body{
    background:#060814;
    color:white;
    overflow-x:hidden;
    min-height:100vh;
    position:relative;
}

/* Animated background */

#stars{
    position:fixed;
    inset:0;
    background:
        radial-gradient(circle at 20% 30%, rgba(255,255,255,.9) 1px, transparent 2px),
        radial-gradient(circle at 70% 15%, rgba(255,255,255,.8) 1px, transparent 2px),
        radial-gradient(circle at 35% 70%, rgba(255,255,255,.7) 1px, transparent 2px),
        radial-gradient(circle at 85% 60%, rgba(255,255,255,.8) 1px, transparent 2px),
        radial-gradient(circle at 10% 90%, rgba(255,255,255,.6) 1px, transparent 2px);
    background-size:300px 300px;
    animation:twinkle 6s linear infinite;
    z-index:-2;
}

#shooting-stars{
    position:fixed;
    inset:0;
    pointer-events:none;
    z-index:-1;
}

/* Intro */

#intro{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:20px;
}

.intro-content{
    animation:fadeIn 2s ease;
}

.title{
    font-size:clamp(3rem,7vw,6rem);
    font-weight:800;
    letter-spacing:6px;
    text-transform:uppercase;
    color:white;
    text-shadow:
        0 0 10px rgba(255,255,255,.3),
        0 0 30px rgba(116,176,255,.25);
}

.subtitle{
    margin-top:18px;
    font-size:1.2rem;
    color:#d7d7d7;
}

.date{
    margin-top:15px;
    color:#8fc7ff;
    font-weight:600;
}

/* Button */

#enterBtn{
    margin-top:45px;
    padding:15px 45px;
    border:none;
    border-radius:50px;
    cursor:pointer;
    background:white;
    color:#060814;
    font-size:1rem;
    font-weight:700;
    transition:.35s;
}

#enterBtn:hover{
    transform:translateY(-4px) scale(1.04);
    box-shadow:0 0 25px rgba(255,255,255,.4);
}

/* Hidden */

.hidden{
    display:none;
}

/* Profiles */

#profiles{
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:40px 20px;
}

#profiles h2{
    font-size:2.3rem;
    margin-bottom:50px;
}

.profiles{
    display:flex;
    gap:40px;
    flex-wrap:wrap;
    justify-content:center;
}

.profile{
    width:180px;
    padding:30px;
    border-radius:22px;
    text-align:center;
    cursor:pointer;

    background:rgba(255,255,255,.08);
    backdrop-filter:blur(18px);

    transition:.35s;

    border:1px solid rgba(255,255,255,.12);
}

.profile:hover{
    transform:translateY(-10px) scale(1.05);
    background:rgba(255,255,255,.12);
    box-shadow:0 20px 40px rgba(0,0,0,.4);
}

.avatar{
    width:95px;
    height:95px;
    margin:auto;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2.5rem;

    background:linear-gradient(135deg,#ffffff20,#8fc7ff40);
}

.profile p{
    margin-top:20px;
    font-size:1.1rem;
    font-weight:600;
}

/* Basic Home Layout */

#home{
    padding:40px 8%;
}

header{
    padding-top:60px;
}

header h1{
    font-size:clamp(2.2rem,5vw,4rem);
}

.movieInfo{
    margin-top:12px;
    color:#c8d8ff;
}

header button{
    margin-top:30px;
    border:none;
    padding:14px 35px;
    border-radius:50px;
    cursor:pointer;
    font-weight:700;
    transition:.3s;
}

header button:hover{
    transform:scale(1.05);
}

/* Animations */

@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(30px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

@keyframes twinkle{
    0%,100%{
        opacity:.9;
    }
    50%{
        opacity:.6;
    }
}
/* ======================================================
   PART B
   HOME • EPISODES • QUOTE • FOOTER
======================================================*/

/* Continue Watching */

.continue{
    margin-top:80px;
}

.continue h2{
    font-size:2rem;
    margin-bottom:30px;
    font-weight:700;
}

.episodes{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.episode{
    background:rgba(255,255,255,.08);
    border:1px solid rgba(255,255,255,.1);
    backdrop-filter:blur(18px);

    border-radius:20px;

    padding:35px 25px;

    cursor:pointer;

    transition:.35s;

    text-align:center;
}

.episode:hover{

    transform:translateY(-10px);

    box-shadow:0 20px 40px rgba(0,0,0,.45);

    background:rgba(255,255,255,.12);

}

.episode h3{

    margin-top:20px;

    font-size:1.15rem;

}

.episode{

    font-size:3rem;

}

/* Quote */

.quote{

    margin:90px auto;

    max-width:900px;

    text-align:center;

    padding:45px;

    border-radius:24px;

    background:rgba(255,255,255,.06);

    backdrop-filter:blur(20px);

    border:1px solid rgba(255,255,255,.08);

}

.quote p{

    font-size:1.4rem;

    line-height:2;

    color:#dce8ff;

    font-style:italic;

}

/* Footer */

footer{

    margin-top:120px;

    padding:35px;

    text-align:center;

    color:#9fb9ff;

    border-top:1px solid rgba(255,255,255,.08);

}

/* Hover Glow */

.profile:hover,
.episode:hover,
button:hover{

    box-shadow:

    0 0 20px rgba(150,190,255,.18),

    0 0 40px rgba(150,190,255,.12);

}

/* Glass Effect */

.profile,
.episode,
.quote{

    box-shadow:

    inset 0 1px 1px rgba(255,255,255,.08),

    0 10px 30px rgba(0,0,0,.35);

}

/* Smooth Fade */

section{

    animation:fadeIn .8s ease;

}

/* Scrollbar */

::-webkit-scrollbar{

    width:10px;

}

::-webkit-scrollbar-track{

    background:#050814;

}

::-webkit-scrollbar-thumb{

    background:#6b8cff;

    border-radius:30px;

}

::-webkit-scrollbar-thumb:hover{

    background:#9ab4ff;

}

/* Selection */

::selection{

    background:#6b8cff;

    color:white;

}

/* Hero Button */

header button{

    background:linear-gradient(135deg,#ffffff,#dbe8ff);

    color:#06111f;

}

header button:hover{

    transform:scale(1.08);

}

/* Profile Avatar Animation */

.avatar{

    transition:.35s;

}

.profile:hover .avatar{

    transform:rotate(8deg) scale(1.08);

}

/* Episode Icons */

.episode{

    position:relative;

    overflow:hidden;

}

.episode::before{

    content:"";

    position:absolute;

    top:-100%;

    left:-40%;

    width:80px;

    height:250%;

    transform:rotate(25deg);

    background:rgba(255,255,255,.08);

    transition:.6s;

}

.episode:hover::before{

    left:140%;

}

/* Elegant Divider */

.divider{

    width:120px;

    height:2px;

    margin:50px auto;

    background:linear-gradient(to right,transparent,#ffffff55,transparent);

}
/* ======================================================
   PART C
   ANIMATIONS • SHOOTING STARS • RESPONSIVE
======================================================*/

/* Shooting Star */

#shooting-stars::before,
#shooting-stars::after{
    content:"";
    position:absolute;
    width:180px;
    height:2px;
    background:linear-gradient(to right,#fff,transparent);
    border-radius:50px;
    opacity:.8;
    animation:shoot 8s linear infinite;
}

#shooting-stars::after{
    top:35%;
    left:-250px;
    animation-delay:4s;
}

#shooting-stars::before{
    top:15%;
    left:-300px;
}

@keyframes shoot{

    0%{
        transform:translateX(0) translateY(0) rotate(25deg);
        opacity:0;
    }

    10%{
        opacity:1;
    }

    100%{
        transform:translateX(1800px) translateY(400px) rotate(25deg);
        opacity:0;
    }

}

/* Floating Glow */

body::before{

    content:"";

    position:fixed;

    width:500px;

    height:500px;

    background:radial-gradient(circle,
    rgba(120,170,255,.15),
    transparent 70%);

    top:-200px;

    right:-150px;

    filter:blur(50px);

    pointer-events:none;

    z-index:-3;

}

body::after{

    content:"";

    position:fixed;

    width:450px;

    height:450px;

    background:radial-gradient(circle,
    rgba(255,255,255,.08),
    transparent 70%);

    bottom:-150px;

    left:-100px;

    filter:blur(60px);

    pointer-events:none;

    z-index:-3;

}

/* Fade Up Animation */

.fade-up{

    animation:fadeUp .8s ease both;

}

@keyframes fadeUp{

    from{

        opacity:0;

        transform:translateY(40px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/* Pulse Button */

#enterBtn{

    animation:pulse 2.5s infinite;

}

@keyframes pulse{

    0%,100%{

        box-shadow:0 0 0 rgba(255,255,255,0);

    }

    50%{

        box-shadow:0 0 25px rgba(255,255,255,.35);

    }

}

/* Glass Hover */

.profile,
.episode{

    transition:
    transform .35s,
    box-shadow .35s,
    background .35s;

}

/* Mobile */

@media(max-width:900px){

    .profiles{

        flex-direction:column;

        align-items:center;

    }

    .profile{

        width:260px;

    }

    .episodes{

        grid-template-columns:1fr;

    }

    header{

        text-align:center;

    }

    header button{

        width:100%;

    }

}

@media(max-width:600px){

    .title{

        letter-spacing:2px;

        font-size:2.6rem;

    }

    .subtitle{

        font-size:1rem;

    }

    .movieInfo{

        font-size:.95rem;

    }

    .quote p{

        font-size:1.05rem;

        line-height:1.8;

    }

}

/* Smooth Transition */

button{

    transition:.3s ease;

}

button:active{

    transform:scale(.96);

}

/* Soft Glow Text */

.title,
header h1{

    text-shadow:
    0 0 12px rgba(255,255,255,.25),
    0 0 35px rgba(115,175,255,.25);

}

/* Footer */

footer p{

    opacity:.75;

    letter-spacing:1px;

}
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
.fadeOut{
    animation: fadeOut .8s forwards;
}

@keyframes fadeOut{
    from{
        opacity:1;
    }
    to{
        opacity:0;
    }
}
