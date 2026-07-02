const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-navigation');

function closeMenu() {
  if (!navToggle || !nav) return;
  navToggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });
}
