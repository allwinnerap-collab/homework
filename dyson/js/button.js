const cards = document.querySelectorAll('.offer__wrapper');

cards.forEach((card) => {
    const buttonMinus = card.querySelector('.button-minus');
    const buttonPlus = card.querySelector('.button-plus');
    const quantityInput = card.querySelector('.quantity-input');

    let quantity = 1;

    buttonPlus.addEventListener('click', () => {
        quantity++;
        quantityInput.value = quantity;
        updateMinusButton();
    });

    buttonMinus.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
            updateMinusButton();
        }
    });

    quantityInput.addEventListener('change', () => {
        let value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) {
            value = 1;
        }
        quantity = value;
        quantityInput.value = quantity;
        updateMinusButton();
    });

    function updateMinusButton() {
        if (quantity <= 1) {
            buttonMinus.classList.add('inactive');
            buttonMinus.classList.remove('active');
        } else {
            buttonMinus.classList.add('active');
            buttonMinus.classList.remove('inactive');
        }
    }

    updateMinusButton();
});