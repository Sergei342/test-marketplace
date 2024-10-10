
const demoPage = (element) => {
  if (!element) {
    return;
  }

  const h1 = document.querySelector('.demo-page__title');

  if (h1) {
    h1.textContent = 'demo-page';
  }
};

// JavaScript to handle checkbox selection and display selected filters
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    const selectedList = document.querySelector('.selected-list');
    selectedList.innerHTML = ''; // Clear the list before updating

    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(selected) {
      const listItem = document.createElement('li');
      listItem.textContent = selected.value;
      selectedList.appendChild(listItem);
    });
  });
});


// Инициализация ползунка Price Range
var priceSlider = document.getElementById('price-slider');
var priceValue = document.getElementById('price-value');

noUiSlider.create(priceSlider, {
  start: [234], // Начальное значение
  range: {
    'min': 0,
    'max': 1000
  }
});

// Обновление поля ввода при изменении ползунка
priceSlider.noUiSlider.on('update', function (values, handle) {
  priceValue.value = Math.round(values[handle]);
});

// Изменение положения ползунка при изменении значения в поле ввода
priceValue.addEventListener('change', function () {
  priceSlider.noUiSlider.set(this.value);
});

// Инициализация ползунка THC %
var priceSlider = document.getElementById('price-slider');
var priceValue = document.getElementById('price-value');

noUiSlider.create(priceSlider, {
  start: [234],
  range: {
    'min': 0,
    'max': 1000
  }
});

priceSlider.noUiSlider.on('update', function (values, handle) {
  priceValue.value = Math.round(values[handle]);
});

priceValue.addEventListener('change', function () {
  priceSlider.noUiSlider.set(this.value);
});

// Инициализация ползунка THC %
var thcSlider = document.getElementById('thc-slider');
var thcValue = document.getElementById('thc-value');

noUiSlider.create(thcSlider, {
  start: [20],
  range: {
    'min': 0,
    'max': 100
  }
});

thcSlider.noUiSlider.on('update', function (values, handle) {
  thcValue.value = Math.round(values[handle]);
});

thcValue.addEventListener('change', function () {
  thcSlider.noUiSlider.set(this.value);
});

// Инициализация ползунка CBD %
var cbdSlider = document.getElementById('cbd-slider');
var cbdValue = document.getElementById('cbd-value');

noUiSlider.create(cbdSlider, {
  start: [15],
  range: {
    'min': 0,
    'max': 100
  }
});

cbdSlider.noUiSlider.on('update', function (values, handle) {
  cbdValue.value = Math.round(values[handle]);
});

cbdValue.addEventListener('change', function () {
  cbdSlider.noUiSlider.set(this.value);
});


export const mountDemoPage = () => {
  const elements = [...document.querySelectorAll('.demo-page')];

  elements.forEach(demoPage);
};

export default demoPage;
