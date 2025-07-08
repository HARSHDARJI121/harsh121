function goBack() {
  if (document.referrer) {
    window.history.back();
  } else {
    window.location.href = '/';
  }
  document.querySelector('.hamburger').classList.remove('active');
  document.querySelector('.mobile-menu').classList.remove('active');
  document.body.style.overflow = '';
}

function downloadResume() {
  document.getElementById("downloadLink").click();
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.style.overflow = '';
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
});

// Animated Navbar: Hide on scroll down, show on scroll up
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 80) {
    header.classList.add('hide-navbar');
  } else {
    header.classList.remove('hide-navbar');
  }
  lastScrollY = window.scrollY;
});

// Scrollspy: Highlight nav links based on section in view
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav .right a');

function activateNavLink() {
  let scrollPos = window.scrollY + 120; // adjust offset as needed
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === section.id) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', activateNavLink);

// Scroll-triggered reveal animations
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Reveal animation for skills cells
const skillCells = document.querySelectorAll('.skills-section .cell');
function revealSkillsOnScroll() {
  skillCells.forEach(cell => {
    const rect = cell.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      cell.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSkillsOnScroll);
window.addEventListener('load', revealSkillsOnScroll);

// Sticky shadow on scroll for navbar
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});