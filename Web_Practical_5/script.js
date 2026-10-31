// Simple page interactions: menu and product information window.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  });
});

const dialog = document.querySelector('#product-dialog');
const dialogTitle = document.querySelector('#dialog-title');

document.querySelectorAll('.product-more').forEach(button => {
  button.addEventListener('click', () => {
    dialogTitle.textContent = button.dataset.product;
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-contact').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
