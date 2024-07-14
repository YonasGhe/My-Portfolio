
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
        "resume-page-title": "Resume | Portfolio",
        "about-me": "About Me",
        "projects": "Projects",
        "skills": "Skills",
        "resume": "Resume",
        "contact": "Contact",
        "name": "Name:",
        "email": "Email:",
        "phone": "Phone:",
        "linkedin": "LinkedIn:",
        "cv": "CV",
        "professional-summary": "Professional Summary",
        "profession": "Profession",
        "profession-description": "I am passionate about continuous learning and staying updated with the latest industry trends. Dedicated web developer with a strong foundation in both front-end and back-end technologies. Experienced in designing and developing websites and web applications, with a keen eye for detail and a commitment to delivering high-quality, user-friendly products.",
        "education": "Education",
        "diploma": "Diploma in Web Development, 2022 - ongoing",
        "gritacademy": "Gritacademy Yrkehögskola, Malmö",
        "education-point1": "Focused on training web developers for the e-commerce industry.",
        "education-point2": "Completed courses in HTML/CSS, UX/UI, Frontend JavaScript1 and 2, Database management, PHP and MySQL, Agile project management, Wordpress/woocommerce, Entrepreneurship and the consulting role, Digital business and marketing, and final exam work.",
        "education-point3": "Participated in a 2-year-long education with a 20-week LIA internship program.",
        "teamwork-experience": "Teamwork Experience",
        "teamwork-projects": "Teamwork Projects",
        "various-group-works": "Various Group Works",
        "teamwork-point1": "I enjoy collaborating with others and believe in the power of teamwork to create impactful projects.",
        "teamwork-point2": "Developed and maintained web applications using web development frameworks, bootstrap, and other tools.",
        "teamwork-point3": "Collaborated with designers and back-end developers to create a seamless user experience.",
        "teamwork-point4": "Implemented responsive design principles to ensure compatibility across various devices.",
        "skills": "Skills",
        "my-competences": "My Competences",
        "html-css-js": "HTML, CSS, JavaScript, React.js",
        "node-express": "Node.js, Express.js",
        "bootstrap": "Bootstrap, Libraries and Frameworks",
        "ux-ui": "UX/UI",
        "php-mysql": "PHP, MySQL and Databases",
        "wordpress-shopify": "Wordpress/Woocommerce and Shopify",
        "git-github": "Git & GitHub",
        "web-performance": "Web Performance Optimization, Responsive Design",
        "cross-browser": "Cross-Browser Compatibility, Problem-Solving and Debugging",
        "personal-letter": "Personal Letter",
        "internship": "Internship",
        "internship-description": "I am studying programming in web development right now. The education is extended to 2 years at Gritacademy Yrkehögskola in Malmö. Training is aimed at web developers in the e-commerce industry who have a 20-week LIA internship with companies that I am looking for right now. I studied and practice designing websites using the programming languages HTML, CSS, JavaScript React, Node.js, Express.js, PHP, MySQL databases, and Wordpress/Woocommerce, among other soft skills. I invest in studying web development and concentrate on creating websites while learning about design e-commerce platforms with HTML/CSS, frontend JavaScript, UX, data management, entrepreneurship and consulting services, digital business and marketing, Agile project management, and more. I will have 20 weeks of training after the course ends. I will be able to work as a web developer in these roles after completing my studies: <br> .Web Developer in E-commerce <br> .System Developer with an E-commerce Focus <br> .Web Designer <br> I am looking for an internship where I can test my competence and transition into working life in the last semester of my studies.",
        "resume": "Resume",
        "resume-description": "If you find this interesting and want to know more about me, click the button and download my resume for more details on my education and experience.",
        "download-resume": "Download My Resume",
        "or": "OR",
        "contact-me-description": "If you're interested in knowing more about me or for more information, please <a href='contact.html'>Contact</a> me by completing the contact form.",
        "contact-me": "Contact Me",
        "developed-by": "Developed by"
    },
    sv: {
        "resume-page-title": "CV | Portfolio",
        "about-me": "Om Mig",
        "projects": "Projekt",
        "skills": "Kompetenser",
        "resume": "CV",
        "contact": "Kontakt",
        "name": "Namn:",
        "email": "E-post:",
        "phone": "Telefon:",
        "linkedin": "LinkedIn:",
        "cv": "CV",
        "professional-summary": "Yrkesmässig Sammanfattning",
        "profession": "Yrke",
        "profession-description": "Jag brinner för kontinuerligt lärande och att hålla mig uppdaterad med de senaste branschtrenderna. Dedikerad webbutvecklare med en stark grund i både front-end och back-end teknologier. Erfaren av att designa och utveckla webbplatser och webbapplikationer, med ett skarpt öga för detaljer och ett engagemang för att leverera högkvalitativa, användarvänliga produkter.",
        "education": "Utbildning",
        "diploma": "Diplom i Webbutveckling, 2022 - pågående",
        "gritacademy": "Gritacademy Yrkehögskola, Malmö",
        "education-point1": "Fokuserad på att utbilda webbutvecklare för e-handelsindustrin.",
        "education-point2": "Avslutade kurser i HTML/CSS, UX/UI, Frontend JavaScript1 och 2, Databasadministration, PHP och MySQL, Agil projektledning, Wordpress/woocommerce, Entreprenörskap och konsultrollen, Digital affärsverksamhet och marknadsföring, och slutexamensarbete.",
        "education-point3": "Deltog i en 2-årig utbildning med ett 20-veckors LIA-praktikprogram.",
        "teamwork-experience": "Erfarenhet av Teamarbete",
        "teamwork-projects": "Teamarbete Projekt",
        "various-group-works": "Olika Grupparbeten",
        "teamwork-point1": "Jag tycker om att samarbeta med andra och tror på kraften i teamwork för att skapa effektfulla projekt.",
        "teamwork-point2": "Utvecklade och underhöll webapplikationer med hjälp av webbutvecklingsramar, bootstrap och andra verktyg.",
        "teamwork-point3": "Samarbetade med designers och back-end utvecklare för att skapa en sömlös användarupplevelse.",
        "teamwork-point4": "Implementerade responsiva designprinciper för att säkerställa kompatibilitet över olika enheter.",
        "skills": "kompetenser",
        "my-competences": "Mina Kompetenser",
        "html-css-js": "HTML, CSS, JavaScript, React.js",
        "node-express": "Node.js, Express.js",
        "bootstrap": "Bootstrap, Bibliotek och Ramverk",
        "ux-ui": "UX/UI",
        "php-mysql": "PHP, MySQL och Databaser",
        "wordpress-shopify": "Wordpress/Woocommerce och Shopify",
        "git-github": "Git & GitHub",
        "web-performance": "Webbprestandaoptimering, Responsiv Design",
        "cross-browser": "Korswebbläsarkompatibilitet, Problemlösning och Felsökning",
        "personal-letter": "Personligt Brev",
        "internship": "Praktik",
        "internship-description": "Jag studerar just nu programmering i webbutveckling. Utbildningen är utsträckt till 2 år på Gritacademy Yrkehögskola i Malmö. Utbildningen är inriktad på webbutvecklare inom e-handelsindustrin som har en 20-veckors LIA-praktik med företag som jag letar efter just nu. Jag har studerat och praktiserat att designa webbplatser med hjälp av programmeringsspråken HTML, CSS, JavaScript React, Node.js, Express.js, PHP, MySQL-databaser och Wordpress/Woocommerce, bland andra mjuka färdigheter. Jag investerar i att studera webbutveckling och koncentrerar mig på att skapa webbplatser samtidigt som jag lär mig om design av e-handelsplattformar med HTML/CSS, frontend JavaScript, UX, databasadministration, entreprenörskap och konsulttjänster, digital affärsverksamhet och marknadsföring, agil projektledning och mer. Jag kommer att ha 20 veckors praktik efter att kursen avslutats. Jag kommer att kunna arbeta som webbutvecklare i dessa roller efter att ha avslutat mina studier: <br> .Webbutvecklare inom E-handel <br> .Systemutvecklare med inriktning på E-handel <br> .Webbdesigner <br> Jag letar efter en praktikplats där jag kan testa min kompetens och övergå till arbetslivet under sista terminen av mina studier.",
        "resume": "CV",
        "resume-description": "Om du tycker att detta är intressant och vill veta mer om mig, klicka på knappen och ladda ner mitt CV för mer information om min utbildning och erfarenhet.",
        "download-resume": "Ladda ner mitt CV",
        "or": "ELLER",
        "contact-me-description": "Om du är intresserad av att veta mer om mig eller för mer information, vänligen <a href='contact.html'>Kontakta</a> mig genom att fylla i kontaktformuläret.",
        "contact-me": "Kontakta Mig",
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

