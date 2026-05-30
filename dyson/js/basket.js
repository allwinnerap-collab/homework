document.addEventListener('DOMContentLoaded', () => {

    const basketCount = document.querySelector('.header__basket-count');
    let totalItems = 0;

    const updateBasketCount = (delta) => {
        totalItems += delta;
        if (totalItems < 0) totalItems = 0;

        if (basketCount) {
            basketCount.textContent = totalItems;

            if (totalItems > 0) {
                basketCount.removeAttribute('hidden');
                basketCount.style.animation = 'none';
                void basketCount.offsetWidth;
                basketCount.style.animation = '';
            } else {
                basketCount.setAttribute('hidden', '');
            }
        }
    };

    document.querySelectorAll('.offer__wrapper').forEach(card => {
        const input = card.querySelector('.quantity-input');
        const addBtn = card.querySelector('.border__into-basket button');
        const addBtnText = card.querySelector('.into-basket');

        if (!addBtn) return;

        addBtn.addEventListener('click', () => {
            const qty = parseInt(input.value) || 1;
            updateBasketCount(qty);

            addBtnText.textContent = '✓ Добавлено';
            setTimeout(() => {
                addBtnText.textContent = 'В корзину';
            }, 1500);
        });
    });
});