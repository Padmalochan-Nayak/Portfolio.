// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Effect for the Hero Section
const heroText = document.querySelector('.hero h1');
const heroWords = ["Hello, I'm Padmalochan Nayak", "Web Developer", "Java Developer", "Programmer"];
let heroIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeHeroText() {
    const currentWord = heroWords[heroIndex];
    heroText.textContent = isDeleting
        ? currentWord.substring(0, letterIndex--)
        : currentWord.substring(0, letterIndex++);

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeHeroText, 1000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        heroIndex = (heroIndex + 1) % heroWords.length;
        setTimeout(typeHeroText, 500);
    } else {
        setTimeout(typeHeroText, isDeleting ? 100 : 200);
    }
}

typeHeroText();

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆ Top';
backToTopButton.style.cssText = `
    position: fixed; 
    bottom: 20px; 
    right: 20px; 
    display: none; 
    padding: 10px 15px; 
    background-color: #007BFF; 
    color: white; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Simulate Resume Download
function downloadResume() {
    alert("Your resume download will begin shortly!");
    // Example logic: Redirect to your resume file (uncomment below line if you have a resume file URL)
    window.location.href = "resume.pdf";
}
