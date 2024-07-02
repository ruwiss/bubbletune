window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div')
    const visual = document.querySelector('.visual');

    // Ses oynatma
    pads.forEach((pad, idx) => {
        pad.addEventListener('click', function () {
            playAudio(idx);
            createBubble(idx);
        });
    });

    document.addEventListener("keydown", function (event) {
        const keys = ["a", "s", "d", "f", "g", "h"];
        const idx = keys.findIndex(e => e == event.key);
        if (idx !== -1) {
            playAudio(idx);
            createBubble(idx);
        }
    });

    const playAudio = (idx) => {
        sounds[idx].currentTime = 0;
        sounds[idx].play();
    }


    const colors = [
        "#60d394",
        "#d36b60",
        "#cdd360",
        "#60c5d3",
        "#d360c5",
        "#6075d3"
    ];

    const createBubble = (idx) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[idx];
        bubble.style.animation = idx > 2 ? 'jump .8s ease-in' : 'jump .8s ease';
        bubble.style.animationDirection = idx > 2 ? "reverse" : "normal";

        const span = pads[idx].querySelector("span");
        span.style.color = "white";
        setTimeout(() => {
            span.style.color = "black";
        }, 300);

        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    }
});