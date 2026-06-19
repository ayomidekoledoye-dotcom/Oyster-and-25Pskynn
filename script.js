// Lightweight scroll reveal and print-to-PDF support for GitHub Pages.
const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => observer.observe(item));

document.querySelector('[data-print]')?.addEventListener('click', () => {
  window.print();
});
