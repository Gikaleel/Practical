// Simple client-side interactions for the practical work.
const infoDialog = document.getElementById('info-dialog');
const dialogContent = document.getElementById('dialog-content');
const closeDialogButton = document.querySelector('.close-dialog');
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

const panelText = {
  work: {
    title: 'Selected Work',
    description: 'Explore a selection of digital design and web experiences. This is a demonstration section for the practical assignment.'
  },
  expertise: {
    title: 'Our Expertise',
    description: 'Creative direction, website design, branding and digital experiences brought together in one place.'
  },
  stories: {
    title: 'Short Stories',
    description: 'A space for short stories about ideas, creativity and the people behind the work.'
  },
  goods: {
    title: 'Goods',
    description: 'A collection of creative goods and merchandise. This section demonstrates a navigation interaction.'
  },
  about: {
    title: 'Forefathers Group',
    description: "We're Forefathers Group, an agency of fortuitous gentlemen carving a path through the digital landscape with knowledge and determination."
  }
};

function openPanel(name) {
  if (name === 'project') {
    dialogContent.innerHTML = `
      <h2 id="dialog-title">Start a Project</h2>
      <p>Tell us about your idea.</p>
      <form class="project-form" id="project-form">
        <label>Your name<input type="text" name="name" required minlength="2" autocomplete="name"></label>
        <label>Email address<input type="email" name="email" required autocomplete="email"></label>
        <label>Project details<textarea name="details" required minlength="10"></textarea></label>
        <button type="submit">Submit</button>
        <p class="form-message" role="status" aria-live="polite"></p>
      </form>`;

    document.getElementById('project-form').addEventListener('submit', event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      form.querySelector('.form-message').textContent = 'Demo form: your information was checked locally and was not sent to a server.';
      form.reset();
    });
  } else {
    const panel = panelText[name];
    if (!panel) return;
    dialogContent.innerHTML = `<h2 id="dialog-title">${panel.title}</h2><p>${panel.description}</p>`;
  }
  infoDialog.showModal();
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
}

document.querySelectorAll('[data-panel]').forEach(button => {
  button.addEventListener('click', () => openPanel(button.dataset.panel));
});
closeDialogButton.addEventListener('click', () => infoDialog.close());
infoDialog.addEventListener('click', event => {
  if (event.target === infoDialog) infoDialog.close();
});
menuToggle.addEventListener('click', () => {
  mobileNav.hidden = !mobileNav.hidden;
  menuToggle.setAttribute('aria-expanded', String(!mobileNav.hidden));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    mobileNav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});
