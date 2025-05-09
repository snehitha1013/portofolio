

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


const animatedText = document.querySelector('.animated-text');
const phrases = [
    'Web Developer',
    'UI/UX Enthusiast',
    'Creating Beautiful & Functional Websites',
    'Passionate Coder'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    animatedText.textContent = currentPhrase.substring(0, charIndex);

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500); // Pause before typing next
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200); // Typing speed
    }
}
typeEffect();

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for your message! I will get back to you soon. 😊');
    form.reset();
});


const revealElements = document.querySelectorAll('.section-container');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
});


const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙 Dark Mode';
toggleBtn.className = 'btn';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.zIndex = '999';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});


const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '⬆️';
backToTopBtn.className = 'btn';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '80px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.zIndex = '999';
backToTopBtn.style.display = 'none';
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
