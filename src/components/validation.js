export const enableValidation = (settings) => {
    const forms = document.querySelectorAll(settings.formSelector);
    forms.forEach((form) => {
        form.addEventListener("submit", (event) => event.preventDefault());
        attachInputListeners(form, settings);
    });
};

const displayError = (form, input, message, settings) => {
    const errorField = form.querySelector(`.${input.id}-error`);
    input.classList.add(settings.inputErrorClass);
    errorField.textContent = message;
    errorField.classList.add(settings.errorClass);
};

const clearError = (form, input, settings) => {
    const errorField = form.querySelector(`.${input.id}-error`);
    input.classList.remove(settings.inputErrorClass);
    errorField.textContent = "";
    errorField.classList.remove(settings.errorClass);
};

const validateInput = (form, input, settings) => {
    if (input.validity.patternMismatch) {
        input.setCustomValidity(input.dataset.errorMessage);
    } else {
        input.setCustomValidity("");
    }

    if (!input.validity.valid) {
        displayError(form, input, input.validationMessage, settings);
    } else {
        clearError(form, input, settings);
    }
};

const attachInputListeners = (form, settings) => {
    const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
    const submitBtn = form.querySelector(settings.submitButtonSelector);
    
    updateSubmitButtonState(inputs, submitBtn, settings);
    
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            validateInput(form, input, settings);
            updateSubmitButtonState(inputs, submitBtn, settings);
        });
    });
};

const hasInvalidInput = (inputs) => Array.from(inputs).some((input) => !input.validity.valid);

const updateSubmitButtonState = (inputs, button, settings) => {
    if (hasInvalidInput(inputs)) {
        button.classList.add(settings.inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(settings.inactiveButtonClass);
        button.disabled = false;
    }
};

export const clearValidation = (form, settings) => {
    const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
    const submitBtn = form.querySelector(settings.submitButtonSelector);
    
    updateSubmitButtonState(inputs, submitBtn, settings);
    
    inputs.forEach((input) => {
        clearError(form, input, settings);
        input.setCustomValidity("");
    });
};
