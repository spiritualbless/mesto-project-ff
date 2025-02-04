import './pages/index.css';
import './components/cards.js';
import { initialCards } from './components/cards.js'; 

//  темлейт карточки, работа с DOM узлами :}

function createCard(cardTemp, deleteCard){
    const template = document.querySelector('#card-template').content;
    const cardElement = template.cloneNode(true).querySelector('.card');

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = cardTemp.link;
    cardImage.alt = cardTemp.name;
    cardTitle.textContent = cardTemp.name;

    deleteButton.addEventListener('click', () => {
            deleteCard(cardElement);
    });

    return cardElement;
}

// функция для создания карточки :O

const cardsContainer = document.querySelector('.places__list');

function renderCards(cards){
    cards.forEach(function (cardTemp) {
            const cardElement = createCard(cardTemp, deleteCard);

            cardsContainer.appendChild(cardElement);
    });
}

// функция для удаления карточки ;)

function deleteCard(cardElement){
    cardElement.remove();
}

// вынос карточек на страницу :x 

renderCards(initialCards);