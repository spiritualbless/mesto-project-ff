import './pages/index.css';

import { createCard, likeCard } from './components/card.js';
import { openPopup, closePopup } from './components/modal.js';
import { enableValidation, clearValidation } from './components/validation.js';
import { getInitialUser, updateUser, updateUserAvatar, getInitialCards, addCard, deleteCard } from "./components/api.js";

// DOM элементы
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupChangeAvatar = document.querySelector(".popup_type_avatar");
const popupDeletionConfirm = document.querySelector(".popup_type_confirm");
const imageInPopup = document.querySelector('.popup__image');
const captionInPopup = document.querySelector(".popup__caption");
const popupImageContainer = document.querySelector(".popup_type_image");

const btnEditProfile = document.querySelector('.profile__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');
const cardsList = document.querySelector('.places__list');
const btnEditAvatar = document.querySelector(".profile__image");
const userName = document.querySelector(".profile__title");
const userDescription = document.querySelector(".profile__description");

const btnConfirmDeletion = popupDeletionConfirm.querySelector(".confirm_accept__button");

const allPopups = Array.from(document.querySelectorAll('.popup'));

const formEditProfile = document.forms["edit-profile"];
const formEditAvatar = document.forms["edit-avatar"];
const formAddCard = document.forms["new-place"];

const btnPopup = formEditProfile.querySelector(".popup__button");
const btnAvatarPopup = formEditAvatar.querySelector(".popup__button");
const btnNewCard = popupNewCard.querySelector(".popup__button");
const btnFormAddCard = formAddCard.querySelector(".popup__button");

const validationSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};

let currentUserId;

Promise.all([getInitialUser(), getInitialCards()])
    .then(([userData, initialCards]) => {
        currentUserId = userData._id;
        userName.textContent = userData.name;
        userDescription.textContent = userData.about;
        btnEditAvatar.style.backgroundImage = `url(${userData.avatar})`;
        initialCards.forEach((card) => {
            const cardElement = createCard(card, currentUserId, promptCardDeletion, likeCard, displayImagePopup);
            cardsList.append(cardElement);
        });
    })
    .catch(console.error);

// Инициализация валидации
enableValidation(validationSettings);

const submitProfileForm = (evt) => {
    evt.preventDefault();
    toggleLoadingState(true, btnPopup);
    updateUser({
        name: formEditProfile.name.value,
        about: formEditProfile.description.value,
    })
        .then((userData) => {
            userName.textContent = userData.name;
            userDescription.textContent = userData.about;
            closePopup(popupEditProfile);
        })
        .catch(console.error)
        .finally(() => toggleLoadingState(false, btnPopup));
};

formEditProfile.addEventListener("submit", submitProfileForm);

btnEditProfile.addEventListener("click", () => {
    formEditProfile.elements.name.value = userName.textContent;
    formEditProfile.elements.description.value = userDescription.textContent;
    clearValidation(formEditProfile, validationSettings);
    openPopup(popupEditProfile);
});

const submitAvatarForm = (evt) => {
    evt.preventDefault();
    toggleLoadingState(true, btnAvatarPopup);
    updateUserAvatar(formEditAvatar.link.value)
        .then((userData) => {
            btnEditAvatar.style.backgroundImage = `url(${userData.avatar})`;
            closePopup(popupChangeAvatar);
        })
        .catch(console.error)
        .finally(() => toggleLoadingState(false, btnAvatarPopup));
};
formEditAvatar.addEventListener("submit", submitAvatarForm);

btnEditAvatar.addEventListener("click", () => {
    formEditAvatar.reset();
    clearValidation(formEditAvatar, validationSettings);
    openPopup(popupChangeAvatar);
});

const submitNewCardForm = (evt) => {
    evt.preventDefault();
    toggleLoadingState(true, btnNewCard);
    const name = formAddCard.elements.name.value;
    const link = formAddCard.elements.link.value;
    addCard({ name, link })
        .then((card) => {
            const newCardElement = createCard(card, currentUserId, promptCardDeletion, likeCard, displayImagePopup);
            cardsList.prepend(newCardElement);
            closePopup(popupNewCard);
        })
        .catch(console.error)
        .finally(() => toggleLoadingState(false, btnFormAddCard));
};

formAddCard.addEventListener("submit", submitNewCardForm);

btnAddCard.addEventListener("click", () => {
    formAddCard.reset();
    clearValidation(formAddCard, validationSettings);
    openPopup(popupNewCard);
});

function displayImagePopup(item) {
    imageInPopup.src = item.link;
    imageInPopup.alt = item.name;
    captionInPopup.textContent = item.name;
    openPopup(popupImageContainer);
}

const promptCardDeletion = (evt, cardId) => {
    openPopup(popupDeletionConfirm);
    popupDeletionConfirm.dataset.cardId = cardId;
};

const confirmCardDeletion = () => {
    deleteCard(popupDeletionConfirm.dataset.cardId)
        .then(() => {
            document.getElementById(popupDeletionConfirm.dataset.cardId).remove();
            popupDeletionConfirm.dataset.cardId = "";
            closePopup(popupDeletionConfirm);
        })
        .catch(console.error);
};
btnConfirmDeletion.addEventListener("click", confirmCardDeletion);

allPopups.forEach((popup) => {
    popup.classList.add("popup_is-animated");
    popup.addEventListener("mousedown", (evt) => {
        if (evt.target.classList.contains("popup_is-opened") || evt.target.classList.contains("popup__close")) {
            closePopup(popup);
        }
    });
});

const toggleLoadingState = (isLoading, button) => {
    button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};
