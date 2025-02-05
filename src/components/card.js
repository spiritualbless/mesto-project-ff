export function deleteCard(cardElement) {
    cardElement.remove();
}

export function createCard(name, link, handleImageClick, handleLikeClick, handleDeleteClick) {
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
    deleteButton.addEventListener('click', () => handleDeleteClick(cardElement));
    cardImage.addEventListener('click', () => handleImageClick(name, link));

    return cardElement;
}

  
  export function handleLikeButtonClick(evt) {
    const likeButton = evt.target;
    likeButton.classList.toggle('card__like-button_is-active'); 
  }
  
  
  
  
  
  