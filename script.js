// Intersection Observer for fade-in animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        // Add stagger delay for each card
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// Optional: Smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';