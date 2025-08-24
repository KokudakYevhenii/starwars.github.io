// Знаходимо елемент заголовка
const byline = document.getElementById('byline');

// Розбиваємо текст на символи
const bylineText = byline.textContent.trim();
const letters = [...bylineText]; // те саме що split(''), але зрозуміліше

// Очищаємо існуючий вміст
byline.textContent = '';

// Додаємо символи у вигляді span
letters.forEach(char => {
  if (char === ' ') {
    byline.appendChild(document.createTextNode(' ')); // пробіл без span
  } else {
    const span = document.createElement('span');
    span.textContent = char;
    byline.appendChild(span);
  }
});

