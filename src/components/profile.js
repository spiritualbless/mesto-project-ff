import { openPopup, closePopup } from './modal.js';

export function setupProfileForm(profilePopup, profileTitle, profileDescription) {
    const formElement = profilePopup.querySelector('.popup__form');
    const nameInput = profilePopup.querySelector('.popup__input_type_name');
    const jobInput = profilePopup.querySelector('.popup__input_type_description');

    function openProfilePopup() {
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileDescription.textContent;
        openPopup(profilePopup);
    }

    function handleFormSubmit(evt) {
        evt.preventDefault();
        profileTitle.textContent = nameInput.value;
        profileDescription.textContent = jobInput.value;
        closePopup(profilePopup);
    }

    formElement.addEventListener('submit', handleFormSubmit);

    return openProfilePopup;
}
