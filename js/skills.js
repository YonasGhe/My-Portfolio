
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
        "skills-page-title": "Skills | Portfolio",
        "about-me": "About Me",
        "projects": "Projects",
        "skills": "Skills",
        "resume": "Resume",
        "contact": "Contact",
        "contact-me": "Contacta me",
        "my-skills": "My Skills",
        "skills-description": "Throughout my studies and projects, I have acquired a diverse set of skills in web development. I am proficient in HTML, CSS/SASS, JavaScript, React, Node.js, Express.js, PHP, SQL, Wordpress/Woocommerce, Shopify, and various web development frameworks and bootstraps. I have honed my skills through various projects, both personal and professional. Here are some of the technical and soft skills that I excel in:",
        "front-end": "Front-end",
        "back-end": "Back-end",
        "developed-by": "Developed by"
    },
    sv: {
        "skills-page-title": "Kompetenser | Portfolio",
        "about-me": "Om Mig",
        "projects": "Projekt",
        "skills": "Kompetenser",
        "resume": "CV",
        "contact": "Kontakt",
        "contact-me": "Kontakta mig",
        "my-skills": "Mina Kompetenser",
        "skills-description": "Genom mina studier och projekt har jag skaffat mig en bred uppsättning färdigheter inom webbutveckling. Jag är skicklig i HTML, CSS/SASS, JavaScript, React, Node.js, Express.js, PHP, SQL, Wordpress/Woocommerce, Shopify och olika webbutvecklingsramverk och bootstraps. Jag har finslipat mina färdigheter genom olika projekt, både personliga och professionella. Här är några av de tekniska och mjuka färdigheter som jag utmärker mig i:",
        "front-end": "Front-end",
        "back-end": "Back-end",
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
