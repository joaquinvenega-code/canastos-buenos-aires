// Reemplazar por el número real del negocio en formato internacional, sin + ni espacios.
// Ejemplo Argentina: 54911XXXXXXXX
const WHATSAPP_NUMBER = "54911XXXXXXXX";

const waButtons = document.querySelectorAll('[data-whatsapp]');
waButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (WHATSAPP_NUMBER.includes('X')) {
      event.preventDefault();
      alert('Falta cargar el número real de WhatsApp del negocio.');
      return;
    }
    const message = button.dataset.message || 'Hola, quiero consultar por un canasto de basura.';
    button.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
  });
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
