// ========================================
// LOVEFLIX
// script.js
// ========================================

// Play button

const playBtn = document.querySelector(".watch-btn");

if (playBtn) {
    playBtn.addEventListener("click", () => {
        alert("🎬 Episode 1 coming soon ❤️");
    });
}

// Shooting stars

const shootingStars = document.getElementById("shooting-stars");

function createStar() {

    if (!shootingStars) return;

    const star = document.createElement("div");

    star.style.position = "absolute";
    star.style.width = "150px";
    star.style.height = "2px";
    star.style.background = "linear-gradient(to right, white, transparent)";
    star.style.left = "-200px";
    star.style.top = Math.random() * 40 + "%";
    star.style.transform = "rotate(25deg)";
    star.style.opacity = "0.8";

    shootingStars.appendChild(star);

    let x = -200;
    let y = 0;

    const move = setInterval(() => {

        x += 20;
        y += 5;

        star.style.left = x + "px";
        star.style.top = `calc(${Math.random()*40}% + ${y}px)`;

        if (x > window.innerWidth + 300) {

            clearInterval(move);
            star.remove();

        }

    }, 25);

}

setInterval(createStar, 8000);

console.log("❤️ LOVEFLIX Loaded");
