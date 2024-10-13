document.addEventListener('DOMContentLoaded', () => {
    const aboutBtn = document.getElementById('aboutBtn');
    const achievementsBtn = document.getElementById('achievementsBtn');
    const homeBtn = document.getElementById('homeBtn');

    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            window.location.href = 'about.html';
        });
    }

    if (achievementsBtn) {
        achievementsBtn.addEventListener('click', () => {
            window.location.href = 'about.html#achievements';
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
