// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.body.style.overflow = "auto";
    }, 3000);
});

// Start Button
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {

    // Music Start
    music.play();

    // Button Animation
    startBtn.innerHTML = "Opening... ❤️";
    startBtn.style.transform = "scale(0.95)";

    setTimeout(() => {
        window.location.href = "welcome.html";
    }, 1500);

});
