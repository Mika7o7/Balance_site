document.addEventListener("DOMContentLoaded", function () {
  var crslList = document.querySelector('.ant-carousel-list');
  var crslWidth = crslList.children[0].offsetWidth;
  var totalItems = crslList.children.length;
  var currentIndex = 0;

  // Прокрутка вправо
  function scrollRight() {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      crslList.style.transform = 'translateX(-' + (currentIndex * crslWidth) + 'px)';
    } else {
      crslList.style.transition = 'none'; // Без анимации
      currentIndex = 0;
      crslList.style.transform = 'translateX(0px)';
      setTimeout(function () {
        crslList.style.transition = 'transform 0.5s ease';
      }, 50);
    }
  }

  // Прокрутка влево
  function scrollLeft() {
    if (currentIndex > 0) {
      currentIndex--;
      crslList.style.transform = 'translateX(-' + (currentIndex * crslWidth) + 'px)';
    } else {
      crslList.style.transition = 'none'; // Без анимации
      currentIndex = totalItems - 1;
      crslList.style.transform = 'translateX(-' + (currentIndex * crslWidth) + 'px)';
      setTimeout(function () {
        crslList.style.transition = 'transform 0.5s ease';
      }, 50);
    }
  }

  // Добавление событий для стрелок
  document.querySelector('.ant-carousel-arrow-left').addEventListener('click', scrollLeft);
  document.querySelector('.ant-carousel-arrow-right').addEventListener('click', scrollRight);

  // Авто-прокрутка (каждые 3 секунды)
  setInterval(scrollRight, 3000);  // Прокрутка вправо каждые 3 секунды
});