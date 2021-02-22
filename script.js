'use strict'

//Selecting the elements
const modalForm = document.querySelector('.my-modal-form');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.my-close-modal')
const openModal = document.querySelector('.show-modal');

//Adding Event Listeners
openModal.addEventListener('click', openModalForm)

function openModalForm() {
    modalForm.classList.remove('hide-modal');
    overlay.classList.remove('hide-modal');
}

function hideModalForm() {
    modalForm.classList.add('hide-modal');
    overlay.classList.add('hide-modal');
}

btnCloseModal.addEventListener('click', hideModalForm)

overlay.addEventListener('click', hideModalForm)

document.addEventListener('keydown', (e) => {
    if(e.key === "Escape" && !modalForm.classList.contains('hidden')) {
            hideModalForm();  
    }
})
