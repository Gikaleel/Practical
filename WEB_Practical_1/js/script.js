// Пояснення, яке відкривається після натискання Learn more.
const descriptions = {
  seo: ['Search engine optimization', 'Оптимізація сайту для покращення його позицій у пошукових системах.'],
  ppc: ['Pay-per-click advertising', 'Реклама, за яку рекламодавець платить після переходу користувача за оголошенням.'],
  social: ['Social Media Marketing', 'Просування бренду, його товарів і послуг у соціальних мережах.'],
  email: ['Email Marketing', 'Комунікація з клієнтами за допомогою електронних листів.'],
  content: ['Content Creation', 'Створення текстів, графіки та відео для сайтів і соціальних мереж.'],
  analytics: ['Analytics and Tracking', 'Аналіз відвідуваності та дій користувачів для оцінювання результатів маркетингу.'],
};

const dialog = document.querySelector('#service-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogText = document.querySelector('#dialog-text');

document.querySelectorAll('[data-service]').forEach((button) => {
  button.addEventListener('click', () => {
    const [title, description] = descriptions[button.dataset.service];
    dialogTitle.textContent = title;
    dialogText.textContent = description;
    dialog.showModal();
  });
});

document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
