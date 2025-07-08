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