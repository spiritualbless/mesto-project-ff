import { addLike, deleteLike } from "./api.js";

const template = document.querySelector("#card-template").content;
const cardTemplate = template.querySelector('.card');

export function createCard(item, userId, removeCard, likeCard, openPopupImage) { 
    
    const cardElement = cardTemplate.cloneNode(true),
    cardImage = cardElement.querySelector(".card__image"),
    cardTitle = cardElement.querySelector(".card__title"),
    deleteButton = cardElement.querySelector(".card__delete-button"),
    likeButton = cardElement.querySelector(".card__like-button"),
    cardLikeCount = cardElement.querySelector(".card__like-count");

  cardElement.id = item["_id"];

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  cardLikeCount.textContent = item.likes.length;

  const isLiked = item.likes.some((like) => like._id === userId);
  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }

  if (item.owner._id === userId) {
    deleteButton.addEventListener("click", (evt) => {
      removeCard(evt, item._id);
    });
  } else {
    deleteButton.remove();
  }

  likeButton.addEventListener("click", (evt) => {
    likeCard(evt, item._id);
  });

  cardImage.addEventListener("click", function () {
    openPopupImage(item);
  });

  return cardElement;
};

export function likeCard(evt, cardId) {
  const currentLikes = evt.target.parentNode.querySelector(".card__like-count");
  if (evt.target.classList.contains("card__like-button_is-active")) {
    deleteLike(cardId)
      .then((updatedCard) => {
        evt.target.classList.remove("card__like-button_is-active");
        currentLikes.textContent = updatedCard.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    addLike(cardId)
      .then((updatedCard) => {
        evt.target.classList.add("card__like-button_is-active");
        currentLikes.textContent = updatedCard.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
  
  
  
