// Skills Slider Navigation
function scrollSkills(direction) {
    const slider = document.getElementById('skillsSlider');
    const scrollAmount = 300;
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Auto-scroll skills slider
let autoScrollInterval;
function startAutoScroll() {
    const slider = document.getElementById('skillsSlider');
    if (!slider) return;

    autoScrollInterval = setInterval(() => {
        if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: 150, behavior: 'smooth' });
        }
    }, 3000);
}

// Stop auto-scroll on hover
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('skillsSlider');

    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoScrollInterval);
        });

        slider.addEventListener('mouseleave', () => {
            startAutoScroll();
        });

        // Start auto-scroll on page load
        startAutoScroll();
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});

// Highlight active menu item based on current page
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html#about')) {
            link.classList.add('active');
        }

        if (currentPage === 'shopify-projects.html' && link.textContent.includes('Shopify')) {
            link.classList.add('active');
        }
        if (currentPage === 'wordpress-projects.html' && link.textContent.includes('WordPress')) {
            link.classList.add('active');
        }
        if (currentPage === 'web-projects.html' && link.textContent.includes('Web')) {
            link.classList.add('active');
        }
        if (currentPage === 'contact.html' && link.textContent.includes('Contact')) {
            link.classList.add('active');
        }
    });
});