// Handle mobile navigation menu toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler) {
  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
  });
}

// Handle subscription form submissions
const subscriptionForms = document.querySelectorAll('form');

subscriptionForms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');

    if (emailInput && emailInput.value) {
      // Here you would typically send this to your backend
      alert('Thank you for subscribing!');
      emailInput.value = '';
    }
  });
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');

  const imageOptions = {
    threshold: 0.5
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src; // This will trigger the image load
        observer.unobserve(img);
      }
    });
  }, imageOptions);

  images.forEach(img => imageObserver.observe(img));
});