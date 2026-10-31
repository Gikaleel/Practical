document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const detail = document.getElementById(button.dataset.detail);
    const expanded = button.getAttribute('aria-expanded') === 'true';
    detail.hidden = expanded;
    button.setAttribute('aria-expanded', String(!expanded));
    button.textContent = expanded ? 'READ MORE' : 'READ LESS';
  });
});
document.querySelectorAll('.destination').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.place;
    button.blur();
    window.alert('Destination: ' + name);
  });
});
