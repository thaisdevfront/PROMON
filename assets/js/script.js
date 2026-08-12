const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.metric-card, .esg-band, .about-copy, .section-heading').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = `
  .visible { opacity: 1 !important; transform: translateY(0) !important; }
  @media (max-width:700px) {
    .nav.is-open {
      display:flex; position:absolute; top:55px; right:0; left:0;
      flex-direction:column; align-items:flex-start; border-radius:0;
      padding:18px 8%; gap:14px; box-shadow:0 8px 18px rgba(0,0,0,.08);
    }
  }
`;
document.head.appendChild(style);
