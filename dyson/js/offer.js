document.addEventListener('DOMContentLoaded', () => {

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

    const tagButtons = document.querySelectorAll('.show-dyson');
    tagButtons.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('is-active');
        });
    });

    
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

        updateMinusState();

        minusBtn.addEventListener('click', () => {
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
                updateMinusState();
            }
        });

        plusBtn.addEventListener('click', () => {
            input.value = parseInt(input.value) + 1;
            updateMinusState();
        });
    });
});
