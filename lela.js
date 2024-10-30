document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    var lid = document.querySelector('.lid');
    var card = document.querySelector('.card');

    container.addEventListener('click', function () {
        lid.style.animation = 'open 2s forwards';
        card.style.animation = 'slide 0.2s 0.5s forwards';
    });

    container.addEventListener('touchstart', function () {
        // Добавьте аналогичный код, если вы хотите запустить анимацию при касании на мобильных устройствах
        lid.style.animation = 'open 2s forwards';
        card.style.animation = 'slide 0.2s 0.5s forwards';
    });
});
<d1>hello world</d1>
// Пример анимации при клике на элементе

const element = document.querySelector('.animate-me');

// Функция запуска анимации
function startAnimation(event) {
  // Ваш код анимации здесь
  console.log('Анимация началась!');
}

// Добавляем событие для настольных устройств
element.addEventListener('mousedown', startAnimation);

// Добавляем событие для сенсорных устройств
element.addEventListener('touchstart', function(event) {
  // Предотвращаем срабатывание дополнительного события мыши
  event.preventDefault();
  startAnimation(event);
});
