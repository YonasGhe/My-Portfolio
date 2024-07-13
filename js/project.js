
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
        "projects-page-title": "Projects | Portfolio",
        "about-me": "About Me",
        "projects": "Projects",
        "skills": "Skills",
        "resume": "Resume",
        "contact": "kontakt",
        "contact-me": "Contact me",
        "projects-title": "My Projects",
        "projects-description": "I have designed and developed websites for local businesses, non-profit organizations, and personal blogs. My work is characterized by its aesthetic appeal and ease of use, making it easy for users to navigate and access the information they need. Here are some of the challenges I have worked for my projects, showcasing my skills in web development, database handling, and more other tools.",
        "weather-app-title": "Weather App",
        "weather-app-description": "A web application that provides real-time weather information based on the user's location. Built using JavaScript, HTML, and CSS, with data fetched from an external API.",
        "web-shop-title": "Web Shop",
        "web-shop-description": "An e-commerce website built with a focus on responsive design and user experience. Implemented using React.js, Node.js, Express, and MongoDB, with features like product browsing, shopping cart, and user authentication.",
        "database-handling-title": "Database Handling",
        "database-handling-description": "A project demonstrating various database handling techniques, including data modeling and optimization. Worked with MySQL databases to create efficient data management solutions using PHP code.",
        "wordpress-projects-title": "WordPress Projects",
        "wordpress-projects-description": "Developed and customized with its own theme using PHP, Sass, and Vitejs for WordPress/Woocommerce sites to the final project work, enhancing their functionality and design.",
        "rock-paper-scissors-title": "Rock, Paper, Scissors",
        "rock-paper-scissors-description": "A web-based game where you can play the classic game of Rock, Paper, Scissors against a computer opponent, to determine the winner based on user and computer choices for the first 3 scores. The game is built using HTML, CSS, and JavaScript.",
        "live-demo": "Live Demo",
        "copyright": "© Developed by Yonas"
    },
    sv: {
        "projects-page-title": "Projekt | Portfolio",
        "about-me": "Om mig",
        "projects": "Projekt",
        "skills": "Kompetenser",
        "resume": "CV",
        "contact": "Kontakt",
        "contact-me": "kontakta mig",
        "projects-title": "Mina Projekt",
        "projects-description": "Jag har designat och utvecklat webbplatser för lokala företag, ideella organisationer och personliga bloggar. Mitt arbete kännetecknas av sin estetiska tilltalande och användarvänlighet, vilket gör det enkelt för användare att navigera och få tillgång till den information de behöver. Här är några av de utmaningar jag har arbetat för mina projekt, som visar mina färdigheter inom webbutveckling, databashantering och fler andra verktyg.",
        "weather-app-title": "Väderapp",
        "weather-app-description": "En webbapplikation som ger realtidsväderinformation baserat på användarens plats. Byggd med JavaScript, HTML och CSS, med data hämtad från en extern API.",
        "web-shop-title": "Webbshop",
        "web-shop-description": "En e-handelswebbplats byggd med fokus på responsiv design och användarupplevelse. Implementerad med React.js, Node.js, Express och MongoDB, med funktioner som produktbläddring, kundvagn och användarautentisering.",
        "database-handling-title": "Databashantering",
        "database-handling-description": "Ett projekt som visar olika tekniker för databashantering, inklusive datamodellering och optimering. Arbetade med MySQL-databaser för att skapa effektiva datamangementlösningar med PHP-kod.",
        "wordpress-projects-title": "WordPress Projekt",
        "wordpress-projects-description": "Utvecklat och anpassat med eget tema med PHP, Sass och Vitejs för WordPress/Woocommerce-webbplatser till slutprojektarbete, förbättra deras funktionalitet och design.",
        "rock-paper-scissors-title": "Sten, Sax, Påse",
        "rock-paper-scissors-description": "Ett webbaserat spel där du kan spela det klassiska spelet Sten, Sax, Påse mot en dator motståndare, för att bestämma vinnaren baserat på användarens och datorns val för de första 3 poängen. Spelet är byggt med HTML, CSS och JavaScript.",
        "live-demo": "Live Demo",
        "copyright": "© Utvecklad av Yonas"
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
