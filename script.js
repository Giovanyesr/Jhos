document.addEventListener('DOMContentLoaded', () => {
    const introContainer = document.getElementById('intro-container');
    const surpriseContainer = document.getElementById('surprise-container');
    const mainHeart = document.getElementById('main-heart');
    const replayBtn = document.getElementById('replay-btn');
    const typewriterElement = document.getElementById('typewriter-text');

    const message = "En este día especial, quiero recordarte lo importante que eres para mí. Nuestro corazón morado 💜 late con fuerza. ¡Gracias por ser mi persona favorita!";

    // Heart click event
    mainHeart.addEventListener('click', () => {
        introContainer.style.opacity = '0';
        setTimeout(() => {
            introContainer.style.display = 'none';
            introContainer.classList.add('hidden');

            surpriseContainer.style.display = 'flex'; // Changed to flex to keep centering
            void surpriseContainer.offsetWidth; // Trigger reflow
            surpriseContainer.classList.remove('hidden');
            surpriseContainer.style.opacity = '1';

            typeWriter(message, typewriterElement, 50);
            startHeartRain();
        }, 1000);
    });

    // Replay button
    replayBtn.addEventListener('click', () => {
        surpriseContainer.style.opacity = '0';
        setTimeout(() => {
            surpriseContainer.style.display = 'none';
            surpriseContainer.classList.add('hidden');

            introContainer.style.display = 'flex'; // Changed to flex
            void introContainer.offsetWidth;
            introContainer.classList.remove('hidden');
            introContainer.style.opacity = '1';

            typewriterElement.innerHTML = "";
            // Keep rain going or not? Let's leave it.
        }, 1000);
    });

    function typeWriter(text, element, speed) {
        element.innerHTML = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    function startHeartRain() {
        setInterval(createHeart, 300);
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');

        const hearts = ['💜', '💖', '💘', '💝', '💜'];
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + 'vw';

        const duration = Math.random() * 3 + 4;
        heart.style.animationDuration = duration + 's';

        const size = Math.random() * 1.5 + 1;
        heart.style.fontSize = size + 'rem';

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
});
