document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.getElementById('hero');
    const heroH1 = document.querySelector('.hero_copy h1');
    const heroH2 = document.querySelector('.hero_copy h2');
    const hamburger = document.querySelector('.navbar_hamburger');
    const navbarRight = document.querySelector('.navbar_right');

    heroContainer.style.backgroundImage= "url('./resources/images/Sauna met een uitzicht door ruit op meer van water.jpg')";
    heroContainer.style.opacity = '0';

    setTimeout( () => {
        heroContainer.style.opacity = '1';
    }, 50);

    setTimeout( () => {
        heroH1.style.opacity = '1';
    }, 500);

    setTimeout( () => {
        heroH2.style.opacity = '1';
    }, 1000);

    hamburger.addEventListener('click', () => {
        navbarRight.classList.toggle('active');
    });

    if (!('ontouchstart' in window)) {
        let lastParticleTime = 0;
        document.addEventListener('mousemove', (event) => {
            const now = Date.now();
            if (now - lastParticleTime < 100) return;
            lastParticleTime = now;

            const particle = document.createElement('div');
            particle.classList.add('steam-particle');
            particle.style.left = `${event.clientX}px`;
            particle.style.top = `${event.clientY}px`;
            document.body.appendChild(particle);
            setTimeout (() => {
                particle.remove();
            }, 1500);
        })
    }

})