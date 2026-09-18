// Reemplazar únicamente por el WhatsApp confirmado del negocio, en formato internacional.
// Mantener el placeholder hasta tener un número real; no activar con números de ejemplo.
const WHATSAPP_NUMBER = '54911XXXXXXXX';
const isWhatsAppConfigured = /^[1-9]\d{7,14}$/.test(WHATSAPP_NUMBER);
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.hidden = false;
function closeMenu(returnFocus = false) {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
  if (returnFocus) toggle.focus();
}
closeMenu();
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});
window.matchMedia('(min-width: 801px)').addEventListener('change', () => closeMenu());
const form = document.querySelector('#quote-form');
const model = document.querySelector('#modelo');
const locality = document.querySelector('#localidad');
const message = document.querySelector('#mensaje');
const sendButton = document.querySelector('#send-button');
const copyButton = document.querySelector('#copy-button');
const status = document.querySelector('#form-status');
const modelNames = {'60-sin': 'el canasto de 60 cm sin tapa', '60-con': 'el canasto de 60 cm con tapa', '100-sin': 'el canasto de 100 cm sin tapa', '100-con': 'el canasto de 100 cm con tapa'};
function updateMessage() {
  const intro = modelNames[model.value] ? `Hola, me interesa ${modelNames[model.value]}.` : 'Hola, necesito asesoramiento para elegir un canasto de basura.';
  const place = locality.value.trim() ? ` Mi localidad es ${locality.value.trim()}.` : '';
  message.value = `${intro}${place} Quisiera consultar precio vigente, entrega e instalación.`;
  status.textContent = '';
}
model.addEventListener('change', updateMessage);
locality.addEventListener('input', updateMessage);
document.querySelectorAll('[data-model]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    model.value = link.dataset.model;
    updateMessage();
    document.querySelector('#contacto').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    locality.focus({preventScroll: true});
  });
});
if (isWhatsAppConfigured) {
  sendButton.disabled = false;
  sendButton.textContent = 'Continuar en WhatsApp ↗';
  document.querySelector('#contact-notice').hidden = true;
  document.querySelector('#message-help').textContent = 'Se abrirá WhatsApp con este mensaje. Vos decidís cuándo enviarlo.';
}
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(message.value);
    status.textContent = 'Consulta copiada. Todavía no se envió ningún mensaje.';
  } catch {
    message.focus();
    message.select();
    status.textContent = 'Seleccionamos el mensaje. Usá la opción Copiar de tu dispositivo.';
  }
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!isWhatsAppConfigured) {
    status.textContent = 'El WhatsApp del negocio todavía no está disponible. Podés copiar tu consulta.';
    return;
  }
  updateMessage();
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.value)}`, '_blank', 'noopener,noreferrer');
  status.textContent = 'Continuá en WhatsApp para revisar y enviar tu consulta.';
});
updateMessage();
