const video = document.getElementById('introvid');
const intro = document.getElementById('intro');
const main = document.getElementById('main');

if (localStorage.getItem('video') === 'vu') {
    intro.style.display = 'none';
    document.body.style.overflow = 'auto';

    // Empêche la vidéo de jouer dans le fond
    video.pause();
    video.currentTime = 0;
} else {
    video.onended = () => {
        // Lancer l’animation
        video.style.animation = 'shrinkAndSlide 2s forwards';

        // Attendre la fin de l'animation
        video.addEventListener('animationend', () => {
            intro.style.display = 'none';
            main.style.display = 'flex';
            document.body.style.overflow = 'auto';
            localStorage.setItem('video', 'vu');
        });
    };
}

window.addEventListener('beforeunload', () => {
    // Réinitialiser la vidéo
    video.pause();
    video.currentTime = 0;
});