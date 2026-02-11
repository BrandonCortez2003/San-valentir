

/* ===== CORAZONES ===== */

const container = document.getElementById("hearts");

function createHeart() {
    const h = document.createElement("div");
    h.className = "heart";

    const size = Math.random() * 25 + 12;
    h.style.width = size + "px";
    h.style.height = size + "px";

    h.style.left = Math.random() * window.innerWidth + "px";
    h.style.bottom = "-30px";

    const duration = Math.random() * 6 + 4;
    h.style.animation = `rise ${duration}s linear forwards`;

    container.appendChild(h);
    setTimeout(() => h.remove(), duration * 1000);
}

setInterval(createHeart, 120);


//////////////////////////////////////////////////////
/* ===== COUNTDOWN — inicia con click ===== */
//////////////////////////////////////////////////////

const timer = document.getElementById("timer");
const letter = document.querySelector(".letter");

let countdownRunning = false;

letter.addEventListener("click", () => {
    if (countdownRunning) return;
    countdownRunning = true;

    startCountdown(23000); // 23 segundos reales
});


function startCountdown(durationMs) {

    const endTime = Date.now() + durationMs;

    const interval = setInterval(() => {

        const remaining = endTime - Date.now();

        if (remaining <= 0) {
            clearInterval(interval);
            timer.textContent = "00:00:00:00";

                   window.location.href = "san valentin.html";
            return;
        }

        const ms = Math.floor((remaining % 1000) / 10);
        const sec = Math.floor((remaining / 1000) % 60);
        const min = Math.floor((remaining / 60000) % 60);
        const hr = Math.floor(remaining / 3600000);

        timer.textContent =
            String(hr).padStart(2,'0') + ":" +
            String(min).padStart(2,'0') + ":" +
            String(sec).padStart(2,'0') + ":" +
            String(ms).padStart(2,'0');

    }, 16); // ~60fps
}



document.addEventListener("DOMContentLoaded", () => {

    const btnNo = document.querySelector("#btn-random");

    function moverAleatoriamente(btn) {
        btn.style.position = "absolute";
        btn.style.fontWeight = "bolder";
        btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    }

    if (btnNo) {
        btnNo.addEventListener("mouseenter", function (e) {
            moverAleatoriamente(e.target);
        });
    }

});