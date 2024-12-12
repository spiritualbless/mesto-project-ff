function createCard(cardTemp){
    const template = document.querySelector('#card-template').content;
    const cardElement = template.cloneNode(true).querySelector('.card');

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = cardTemp.link;
    cardImage.alt = cardTemp.name;
    cardTitle.textContent = cardTemp.name;

    deleteButton.addEventListener('click', () => {
            cardElement.remove();
        });

    return cardElement;
}

function renderCards(cards){
    const cardsContainer = document.querySelector('.places__list');
    cards.forEach(function (cardTemp) {
            const cardElement = createCard(cardTemp);
            cardsContainer.appendChild(cardElement);
        });
}

const cardArr = initialCards;

renderCards(cardArr);