export const initialCards = [
    {
      name: "Стокгольм",
      link: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Амстердам",
      link: "https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Вена",
      link: "https://images.unsplash.com/photo-1728631385877-bf4439e85ef8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Иннсбрук",
      link: "https://images.unsplash.com/photo-1638729727103-d399c85ceed9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Гальштатт",
      link: "https://images.unsplash.com/photo-1512862244754-9a53c913e1c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Рим",
      link: "https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

export function createCard(name, link, handleImageClick, handleLikeClick) {
  const template = document.querySelector('#card-template').content;
  const cardElement = template.cloneNode(true).querySelector('.card');

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  likeButton.addEventListener('click', handleLikeClick);

  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });

  cardImage.addEventListener('click', () => handleImageClick(name, link));

  return cardElement;
}



export function handleLikeButtonClick(evt) {
  const likeButton = evt.target;
  likeButton.classList.toggle('card__like-button_is-active'); 
}


const cardsContainer = document.querySelector('.places__list');

function renderCards(cards) {
    cards.forEach(function (cardTemp) {
        const cardElement = createCard(cardTemp.name, cardTemp.link, handleImageClick, handleLikeButtonClick);

        cardsContainer.appendChild(cardElement);
    });
}

import { openPopup } from './modal.js';

export function handleImageClick(name, link) {
    const popup = document.querySelector('.popup_type_image');
    const popupImage = popup.querySelector('.popup__image');
    const popupCaption = popup.querySelector('.popup__caption');

    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;

    openPopup(popup);
}


renderCards(initialCards);

