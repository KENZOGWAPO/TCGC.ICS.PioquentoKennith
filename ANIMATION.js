document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('section, header, .hero, .home, .works, .contact, .animated-image, .animated-text');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => observer.observe(element));
});
