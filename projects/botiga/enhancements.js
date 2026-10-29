/* Minimal accessible mobile menu; original design preserved. */
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-btn');
  const nav = document.querySelector('#primary-navigation');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      button.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
});
