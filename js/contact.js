document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Yonas Ghebremedhin", "A Web Developer", "A System developer", "A Web Designer", "A Programmer", "A Creator"];
    let index = 0;

    function changeText() {
        const rotatingTextElement = document.getElementById("rotating-text");
        rotatingTextElement.textContent = texts[index];
        index = (index + 1) % texts.length;
    }

    setInterval(changeText, 2000); 
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


const translations = {
    en: {
        "contact-page-title": "Contact | Portfolio",
        "about-me": "About Me",
        "projects": "Projects",
        "skills": "Skills",
        "resume": "Resume",
        "contact": "Contact",
        "contact-me": "Contact Me",
        "contact-intro": "If you have any questions, feel free to reach out to me using the contact form below or through my social media profiles.",
        "email": "Email:",
        "email-address": "yonas.ghebremedhin@gmail.com",
        "phone": "Phone:",
        "phone-number": "+46 735 87 18 54",
        "location": "Location: Lund, Sweden",
        "contact-form-title": "Contact Form",
        "full-name": "Full Name:",
        "email-label": "Email:",
        "subject": "Subject:",
        "message": "Message:",
        "send-message": "Send Message",
        "follow-me": "Follow Me",
        "developed-by": "Developed by"
    },
    sv: {
        "contact-page-title": "Kontakt | Portfolio",
        "about-me": "Om Mig",
        "projects": "Projekt",
        "skills": "Kompetenser",
        "resume": "CV",
        "contact": "Kontakt",
        "contact-me": "Kontakta Mig",
        "contact-intro": "Om du har några frågor, tveka inte att kontakta mig via kontaktformuläret nedan eller genom mina sociala medier.",
        "email": "E-post:",
        "email-address": "yonas.ghebremedhin@gmail.com",
        "phone": "Telefon:",
        "phone-number": "+46 735 87 18 54",
        "location": "Plats: Lund, Sverige",
        "contact-form-title": "Kontaktformulär",
        "full-name": "Fullständigt namn:",
        "email-label": "E-post:",
        "subject": "Ämne:",
        "message": "Meddelande:",
        "send-message": "Skicka Meddelande",
        "follow-me": "Följ Mig",
        "developed-by": "Utvecklad av"
    }
};

const setLanguage = (language) => {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.querySelector('#language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
    }
});

