// Mobile navigation
const menuButton = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const open = menuLinks.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

menuLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuLinks.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

// Clicking on a city updates the featured picture and city title.
const cityHeading = document.getElementById('city-heading');
const cityPicture = document.getElementById('city-feature-picture');
const cityCards = document.querySelectorAll('.location-card');

cityCards.forEach(card => {
  card.addEventListener('click', () => {
    cityHeading.textContent = card.dataset.city;
    cityPicture.src = card.dataset.picture;
    cityPicture.alt = `Property photography for ${card.dataset.city}`;
    cityCards.forEach(item => item.removeAttribute('aria-pressed'));
    card.setAttribute('aria-pressed', 'true');
    document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// These forms work for demonstration purposes, without a server.
document.querySelectorAll('[data-demo-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const feedback = form.parentElement.querySelector('.form-feedback');
    feedback.textContent = 'Thank you! This is a demo form, so no data was sent.';
    form.reset();
  });
});

// Clicking on a gallery photo opens a larger view.
const dialog = document.querySelector('.photo-dialog');
const dialogImage = dialog.querySelector('img');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    dialogImage.src = item.dataset.galleryImage;
    dialogImage.alt = item.dataset.galleryAlt;
    dialog.showModal();
  });
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
