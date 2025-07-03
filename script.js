// ======== Theme Toggle (Dark/Light Mode) ========
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle ? themeToggle.querySelector('i') : null;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.remove('dark-mode', 'light-mode');
body.classList.add(savedTheme);
if (icon) {
    icon.classList.toggle('fa-sun', savedTheme === 'dark-mode');
    icon.classList.toggle('fa-moon', savedTheme === 'light-mode');
}

// Theme toggle click handler
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        body.classList.remove('dark-mode', 'light-mode');
        body.classList.add(isDark ? 'light-mode' : 'dark-mode');
        localStorage.setItem('theme', isDark ? 'light-mode' : 'dark-mode');
        
        if (icon) {
            icon.classList.toggle('fa-sun', !isDark);
            icon.classList.toggle('fa-moon', isDark);
        }
    });
}

// ======== Navigation Active Class and Smooth Scrolling for Bottom Nav ========
const sections = document.querySelectorAll('section');
const navIcons = document.querySelectorAll('.nav-icon');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150; // Adjust offset for fixed nav
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navIcons.forEach(icon => {
        icon.classList.remove('active');
        if (icon.getAttribute('data-section') === current) {
            icon.classList.add('active');
        }
    });
});

// Smooth scrolling for bottom nav icons
navIcons.forEach(icon => {
    icon.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-section');
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for fixed nav height
                behavior: 'smooth'
            });
        }
    });
});

// Custom cursor
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    cursorX = mouseX;
    cursorY = mouseY;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(updateCursor);
}

updateCursor();

// Add click animation
document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
});

// 3D tilt effect for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// 3D tilt effect for service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});