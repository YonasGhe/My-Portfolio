document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Web Developer", "System developer", "Web Designer", "Programmer", "Creator"];
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
            "about-me": "About Me",
            "projects": "Projects",
            "skills": "Skills",
            "resume": "Resume",
            "contact": "Contact",
            "my-skills": "My Skills",
            "about-me": "ABOUT ME",
            "I AM": "I'M",
            "yonas": "Yonas Ghebremedhin",
            "rotating-texts": ["En Webbutvecklare", "En Systemutvecklare", "En Webbdesigner", "En Programmerare", "En Skapare"],
            "about-description": "I am a student with a passion and talented web developer. As a person, I am driven, motivated and communicative. I'm also determined, reliable, and creative individual who is always ready to take on new challenges. Personaly, I'm a dedicated student who spends countless hours learning and practicing, always striving to improve my craft. As a web developer, I have worked on several projects, both personal and professional, where I am honing my skills and gaining knowledge about the latest web development tools and technologies. I have designed and developed websites for local businesses, non-profit organizations, and personal blogs. My work is characterized by its aesthetic appeal and ease of use, making it easy for users to navigate and access the information they need.",
            "explore-my-work": "Explore My Work",
            "projects": "Projects",
            "projects-description": "Take a look at some of the projects I've worked on during my studies.",
            "skills-description": "Discover the skills I have acquired in web development and design.",
            "resume": "Resume",
            "resume-description": "View and download my resume for more details on my education and experience.",
            "contact-me": "Contact Me",
            "read-more": "Read more",            
            "copyright": "&copy; Developed by Yonas"
        },

        
        sv: {
            "about me": "Om Mig",
            "projects": "Projekt",
            "skills": "Kompetenser",
            "resume": "CV",
            "contact": "Kontakt",
            "about-me": "Om mig",
            "I AM": "JAG ÄR",
            "yonas": "Yonas Ghebremedhin",
            "rotating-texts": ["A Web Developer", "A System Developer", "A Web Designer", "A Programmer", "A Creator"],
            "about-description": "Jag är en student med passion och talang för webbutveckling. Som person är jag driven, motiverad och kommunikativ. Jag är också bestämd, pålitlig och kreativ individ som alltid är redo att ta sig en nya utmaningar. Personligen är jag en dedikerad student som spenderar otaliga timmar på att lära mig och öva, alltid strävar efter att förbättra mitt hantverk. Som webbutvecklare har jag arbetat med flera projekt, både personliga och professionella, där jag slipar mina färdigheter och får kunskap om de senaste verktygen och teknologierna för webbutveckling. Jag har designat och utvecklat webbplatser för lokala företag, ideella organisationer och personliga bloggar. Mitt arbete kännetecknas av sin estetiska tilltalande och användarvänlighet, vilket gör det enkelt för användare att navigera och få tillgång till den information de behöver.",
            "explore-my-work": "Utforska mitt arbete",
            "projects": "Projekter",
            "projects-description": "Ta en titt på några av de projekt jag har arbetat med under mina studier.",
            "skills-description": "Upptäck de färdigheter jag har förvärvat inom webbutveckling och design.",
            "resume": "CV",
            "resume-description": "Visa och ladda ner mitt CV för mer information om min utbildning och erfarenhet.",
            "contact-me": "Kontakta mig",
            "read-more": "Läs mer",
            "copyright": "&copy; Utvecklad av Yonas"
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


