// 1. Mouse Tracker Radial Light Matrix Run
const glow = document.getElementById('mouseGlow');
window.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// 2. Mathematical 3D Card Tilting Mechanics
const dynamicCards = document.querySelectorAll('.card-3d');

dynamicCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top; 
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate degree vectors based on distances from center coordinate points
        const rotateX = ((centerY - y) / centerY) * 12; 
        const rotateY = ((x - centerX) / centerX) * 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
    
    // Add default transition profiles for smooth reset vectors
    card.style.transition = 'transform 0.1s ease-out, border-color 0.3s';
});
