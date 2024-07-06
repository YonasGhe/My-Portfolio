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


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});
