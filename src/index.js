import demoPage, { mountDemoPage } from './pages/demo-page';

function toggleDropdown(id) {
  const dropdown = document.getElementById(`dropdown-${id}`);
  dropdown.classList.toggle('show');
}

// Закрытие выпадающего списка при клике вне его
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  }
}

mountDemoPage();

export {
  demoPage,
};
