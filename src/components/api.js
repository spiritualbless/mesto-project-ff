const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-31",
    headers: {
        authorization: "905aae91-3524-44c5-8f0d-3b19e61f7cbd",
        "Content-Type": "application/json",
    },
};

const getResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  };
  
  export const getInitialUser = () => {
    return fetch(config.baseUrl + "/users/me", {
      headers: config.headers,
    }).then((res) => getResponse(res));
  };
  
  export const updateUser = (user) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: user.name,
        about: user.about,
      }),
    }).then((res) => getResponse(res));
};
  
export const updateUserAvatar = (link) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({ avatar: link }), 
    }).then((res) => getResponse(res));
};
  
  export const getInitialCards = () => {
    return fetch(config.baseUrl + "/cards", {
      headers: config.headers,
    }).then((res) => getResponse(res));
  };
  
  export const addCard = (card) => {
    return fetch(config.baseUrl + "/cards", {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      }),
    }).then((res) => getResponse(res));
  };
  
  export const deleteCard = (cardId) => {
    return fetch(config.baseUrl + `/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then((res) => getResponse(res));
  };
  
  export const addLike = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: config.headers,
    }).then((res) => getResponse(res));
};

export const deleteLike = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: config.headers,
    }).then((res) => getResponse(res));
};
  
