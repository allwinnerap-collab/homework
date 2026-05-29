document.addEventListener('DOMContentLoaded', () => {

    // === Кнопка "Показать ещё" (теги) ===
    const showMoreBtn = document.querySelector('.show__more');
    const showList = document.querySelector('.show');

    if (showMoreBtn && showList) {
        showMoreBtn.addEventListener('click', () => {
            const isHidden = showList.hasAttribute('hidden');

            if (isHidden) {
                showList.removeAttribute('hidden');
                showMoreBtn.setAttribute('aria-expanded', 'true');
            } else {
                showList.setAttribute('hidden', '');
                showMoreBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // === Активные теги ===
    const tagButtons = document.querySelectorAll('.show-dyson');
    tagButtons.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('is-active');
        });
    });

    // === Сортировка ===
    const sortToggle = document.querySelector('.sort__toggle');
    const sortMenu = document.querySelector('.sort__menu');
    const sortCurrent = document.querySelector('.sort__current');
    const sortOptions = document.querySelectorAll('.sort__option');
    const offersContainer = document.querySelector('.offers-container');

    if (sortToggle && sortMenu) {
        sortToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = sortMenu.hasAttribute('hidden');

            if (isHidden) {
                sortMenu.removeAttribute('hidden');
                sortToggle.setAttribute('aria-expanded', 'true');
            } else {
                sortMenu.setAttribute('hidden', '');
                sortToggle.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.sort')) {
                sortMenu.setAttribute('hidden', '');
                sortToggle.setAttribute('aria-expanded', 'false');
            }
        });

        sortOptions.forEach(option => {
            option.addEventListener('click', () => {
                sortOptions.forEach(o => o.classList.remove('is-active'));
                option.classList.add('is-active');
                sortCurrent.textContent = option.textContent;
                sortMenu.setAttribute('hidden', '');
                sortToggle.setAttribute('aria-expanded', 'false');
                shuffleCards();
            });
        });
    }

    function shuffleCards() {
        if (!offersContainer) return;
        const cards = Array.from(offersContainer.children);
        cards
            .sort(() => Math.random() - 0.5)
            .forEach(card => offersContainer.appendChild(card));
    }

    // === Счётчик количества (+/-/ручной ввод) ===
    const quantitySelectors = document.querySelectorAll('.quantity-selector');

    quantitySelectors.forEach(selector => {
        const minusBtn = selector.querySelector('.button-minus');
        const plusBtn = selector.querySelector('.button-plus');
        const input = selector.querySelector('.quantity-input');

        const updateMinusState = () => {
            if (parseInt(input.value) <= 1) {
                minusBtn.classList.add('inactive');
                minusBtn.classList.remove('active');
            } else {
                minusBtn.classList.add('active');
                minusBtn.classList.remove('inactive');
            }
        };

        const normalizeValue = () => {
            let value = parseInt(input.value);
            if (isNaN(value) || value < 1) {
                value = 1;
            }
            input.value = value;
            updateMinusState();
        };

        updateMinusState();

        minusBtn.addEventListener('click', () => {
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
            }
            updateMinusState();
        });

        plusBtn.addEventListener('click', () => {
            let value = parseInt(input.value) || 0;
            input.value = value + 1;
            updateMinusState();
        });

        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\d]/g, '');
            updateMinusState();
        });

        input.addEventListener('blur', () => {
            normalizeValue();
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                input.blur();
            }
        });
    });

    // === Корзинка: счётчик товаров ===
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

    // === Кнопки "В корзину" ===
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