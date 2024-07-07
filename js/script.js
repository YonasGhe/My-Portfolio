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


