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


export const mountDemoPage = () => {
  const elements = [...document.querySelectorAll('.demo-page')];

  elements.forEach(demoPage);
};

export default demoPage;
