'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalButton = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

showModalButton.forEach(button => {
  button.addEventListener('click', openModal);
});

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
