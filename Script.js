const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});

// Scroll Reveal & Stagger Animation

const revealElements = document.querySelectorAll(
    "section, .service-card, .workflow-card, .project-card, .skill-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.05
});

revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});