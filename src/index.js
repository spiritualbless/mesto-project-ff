import './pages/index.css';
import './components/cards.js';
import './components/modal.js';
import './components/profile.js';

import { createCard, handleLikeButtonClick } from './components/cards.js';
import { openPopup, closePopup, closePopupOnOverlay } from './components/modal.js';
import { setupProfileForm } from './components/profile.js';

const editProfilePopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const cardsContainer = document.querySelector('.places__list');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const openProfilePopup = setupProfileForm(editProfilePopup, profileTitle, profileDescription);
editButton.addEventListener('click', openProfilePopup);

document.querySelectorAll('.popup__close').forEach(button => {
    button.addEventListener('click', (evt) => {
        closePopup(evt.target.closest('.popup'));
    });
});
document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', closePopupOnOverlay);
});

function handleImageClick(name, link) {
    const popup = document.querySelector('.popup_type_image');
    const popupImage = popup.querySelector('.popup__image');
    const popupCaption = popup.querySelector('.popup__caption');

    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;

    openPopup(popup);
}

const newCardForm = newCardPopup.querySelector('.popup__form');
const cardNameInput = newCardPopup.querySelector('.popup__input_type_card-name');
const cardLinkInput = newCardPopup.querySelector('.popup__input_type_url');

newCardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const name = cardNameInput.value;
    const link = cardLinkInput.value;

    const newCard = createCard(name, link, handleImageClick, handleLikeButtonClick);
    cardsContainer.prepend(newCard);

    newCardForm.reset();
    closePopup(newCardPopup);
});

addButton.addEventListener('click', () => openPopup(newCardPopup));