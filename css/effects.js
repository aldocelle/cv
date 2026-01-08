const colors = ['#6f42c1', '#0d6efd', '#198754', '#dc3545'];

const elements = document.querySelectorAll('.color-change');

elements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.color = randomColor;
  });

  el.addEventListener('mouseleave', () => {
    el.style.color = '';
  });
});
