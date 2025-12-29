// ================================
// MENU RESPONSIVE
// ================================
const nav = document.querySelector('.nav ul');
const toggleMenu = document.createElement('div');
toggleMenu.classList.add('menu-toggle');
toggleMenu.innerHTML = '&#9776;'; // icône hamburger
document.querySelector('.header .container').appendChild(toggleMenu);

toggleMenu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// ================================
// SMOOTH SCROLL
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// ANIMATION AU SCROLL
// ================================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .about-text, .stat');
    const windowBottom = window.innerHeight + window.scrollY;

    elements.forEach(el => {
        const elementTop = el.offsetTop + 100; // déclenchement avant le bas de l'écran
        if(windowBottom > elementTop){
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ================================
// LIGHTBOX SIMPLE POUR GALERIE PROJETS
// ================================
const galleryImages = document.querySelectorAll('.service-card img');

galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        // Création overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.9)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = 1000;

        // Image agrandie
        const largeImg = document.createElement('img');
        largeImg.src = img.src;
        largeImg.style.maxWidth = '90%';
        largeImg.style.maxHeight = '90%';
        largeImg.style.borderRadius = '8px';
        overlay.appendChild(largeImg);

        // Clic pour fermer
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        document.body.appendChild(overlay);
    });
});

// ================================
// INITIALISATION CARDS HIDDEN
// ================================
document.querySelectorAll('.service-card, .about-text, .stat').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
});
