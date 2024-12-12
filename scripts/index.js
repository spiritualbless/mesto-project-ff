// @todo: Темплейт карточки

function createCard(card){
    const template = document.querySelector('#card-template').content;
    const card = template.cloneNode(true);

    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const deleteButton = card.querySelector('.card__delete-button');

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;

    deleteButton.addEventListener('click', deleteCard(card));

    return card;
}

// @todo: DOM узлы



// @todo: Функция создания карточки

const cardsContainer = document.querySelector('.places__list');
const cardsArr = initialCards;



// @todo: Функция удаления карточки

function deleteCard(card){
    card.remove();
}

// @todo: Вывести карточки на страницу

