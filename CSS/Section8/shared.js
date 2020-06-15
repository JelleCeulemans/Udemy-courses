const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const noModalButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// for (let i = 0; i < selectPlanButtons.length; i++) {
//     selectPlanButtons[i].addEventListener('click', function() {
//         modal.style.display = 'block';
//         backdrop.style.display = 'block';
//     });
// }

selectPlanButtons.forEach((planButton) => {
  planButton.addEventListener('click', () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open'; // overwrite the all the classes
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
});

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  closeModal();
});

if (noModalButton) {
    noModalButton.addEventListener('click', closeModal);
}


function closeModal() {
  if (modal) {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
