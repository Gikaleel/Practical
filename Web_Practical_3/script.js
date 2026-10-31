// Simple interactions for the third practical work.
const subjectButtons = document.querySelectorAll('.subject-card');
const subjectFeedback = document.querySelector('#subject-feedback');

subjectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    subjectButtons.forEach((item) => {
      item.classList.remove('is-selected');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('is-selected');
    button.setAttribute('aria-pressed', 'true');
    subjectFeedback.textContent = `${button.dataset.subject} selected. Contact us for details about our lessons.`;
  });
  button.setAttribute('aria-pressed', 'false');
});

const form = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const studentName = document.querySelector('#contact-name').value.trim();
  // This is a demonstration form. There is no server or email integration.
  formMessage.textContent = `Thank you, ${studentName}! This is a demo form, so your message was not sent.`;
  form.reset();
});
