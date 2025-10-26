// показать адрес и время
document.getElementById('showInfo').addEventListener('click', () => {
  const info = document.getElementById('infoBlock');
  info.style.display = 'block';
});

// создание сердечек
const createHeart = () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = 'ты котик ❤️';

  // ограничиваем появление в пределах экрана
  heart.style.left = Math.random() * 90 + 'vw';
  heart.style.top = Math.random() * 90 + 'vh';
  heart.style.fontSize = Math.random() * 30 + 10 + 'px';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
};

setInterval(createHeart, 700);
