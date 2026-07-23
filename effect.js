// Floating Hearts Effect

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.color = "#ff4d88";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = -20;

    const fall = setInterval(() => {

        pos += 2;

        heart.style.top = pos + "px";

        if (pos > window.innerHeight) {
            clearInterval(fall);
            heart.remove();
        }

    }, 20);

}

setInterval(createHeart, 400);
