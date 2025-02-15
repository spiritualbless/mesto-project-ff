(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-31",headers:{authorization:"905aae91-3524-44c5-8f0d-3b19e61f7cbd","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function n(e,t,n,r,o){var a=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),c=a.querySelector(".card__image"),u=a.querySelector(".card__title"),i=a.querySelector(".card__delete-button"),l=a.querySelector(".card__like-button"),s=a.querySelector(".card__like-count");return a.id=e._id,c.src=e.link,c.alt=e.name,u.textContent=e.name,s.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&l.classList.add("card__like-button_is-active"),e.owner._id===t?i.addEventListener("click",(function(t){n(t,e._id)})):i.remove(),l.addEventListener("click",(function(t){r(t,e._id)})),c.addEventListener("click",(function(){o(e)})),a}function r(n,r){var o=n.target.parentNode.querySelector(".card__like-count");n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))}(r).then((function(e){n.target.classList.remove("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))}(r).then((function(e){n.target.classList.add("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){console.log(e)}))}function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function c(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&a(t)}}var u=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},i=function(e,t,n){!function(e){return Array.from(e).some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)},l=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);i(n,r,t),n.forEach((function(n){u(e,n,t),n.setCustomValidity("")}))};function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d,p,f=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup_type_new-card"),_=document.querySelector(".popup_type_avatar"),y=document.querySelector(".popup_type_confirm"),v=document.querySelector(".popup__image"),h=document.querySelector(".popup__caption"),b=document.querySelector(".popup_type_image"),S=document.querySelector(".profile__edit-button"),q=document.querySelector(".profile__add-button"),k=document.querySelector(".places__list"),E=document.querySelector(".profile__image"),L=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),C=y.querySelector(".confirm_accept__button"),A=Array.from(document.querySelectorAll(".popup")),x=document.forms["edit-profile"],U=document.forms["edit-avatar"],w=document.forms["new-place"],I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function T(e){v.src=e.link,v.alt=e.name,h.textContent=e.name,o(b)}Promise.all([fetch(e.baseUrl+"/users/me",{headers:e.headers}).then((function(e){return t(e)})),fetch(e.baseUrl+"/cards",{headers:e.headers}).then((function(e){return t(e)}))]).then((function(e){var t,o,a=(o=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,u=[],i=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(t,o)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],u=a[1];d=c._id,L.textContent=c.name,g.textContent=c.about,E.style.backgroundImage="url(".concat(c.avatar,")"),u.forEach((function(e){var t=n(e,d,j,r,T);k.append(t)}))})).catch(console.error),p=I,document.querySelectorAll(p.formSelector).forEach((function(e){e.addEventListener("submit",(function(e){return e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);i(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?u(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),i(n,r,t)}))}))}(e,p)})),x.addEventListener("submit",(function(n){var r;n.preventDefault(),B(!0,x.querySelector(".popup__button")),(r={name:x.name.value,about:x.description.value},fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r.name,about:r.about})}).then((function(e){return t(e)}))).then((function(e){L.textContent=e.name,g.textContent=e.about,a(f)})).catch(console.error).finally((function(){return B(!1,x.querySelector(".popup__button"))}))})),S.addEventListener("click",(function(){x.elements.name.value=L.textContent,x.elements.description.value=g.textContent,l(x,I),o(f)})),U.addEventListener("submit",(function(n){var r;n.preventDefault(),B(!0,U.querySelector(".popup__button")),(r=U.link.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){E.style.backgroundImage="url(".concat(e.avatar,")"),a(_)})).catch(console.error).finally((function(){return B(!1,U.querySelector(".popup__button"))}))})),E.addEventListener("click",(function(){U.reset(),l(U,I),o(_)})),w.addEventListener("submit",(function(o){var c;o.preventDefault(),B(!0,m.querySelector(".popup__button")),(c={name:w.elements.name.value,link:w.elements.link.value},fetch(e.baseUrl+"/cards",{method:"POST",headers:e.headers,body:JSON.stringify({name:c.name,link:c.link})}).then((function(e){return t(e)}))).then((function(e){var t=n(e,d,j,r,T);k.prepend(t),a(m)})).catch(console.error).finally((function(){return B(!1,w.querySelector(".popup__button"))}))})),q.addEventListener("click",(function(){w.reset(),l(w,I),o(m)}));var j=function(e,t){o(y),y.dataset.cardId=t};C.addEventListener("click",(function(){var n;(n=y.dataset.cardId,fetch(e.baseUrl+"/cards/".concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(){document.getElementById(y.dataset.cardId).remove(),y.dataset.cardId="",a(y)})).catch(console.error)})),A.forEach((function(e){e.classList.add("popup_is-animated"),e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&a(e)}))}));var B=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"}})();