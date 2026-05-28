document.addEventListener('DOMContentLoaded', () => {

    const allPhotosButtons = document.querySelectorAll('.review__all-photos');

    document.querySelectorAll('.review__photos img').forEach(img => {
        if (img.hasAttribute('hidden')) {
            img.dataset.initialHidden = 'true';
        }
    });

    allPhotosButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const photosContainer = btn.closest('.review__content').querySelector('.review__photos');
            const allPhotos = photosContainer.querySelectorAll('img');
            const isExpanded = btn.classList.toggle('is-expanded');

            if (isExpanded) {
                allPhotos.forEach(img => img.removeAttribute('hidden'));
                btn.textContent = 'Скрыть';
            } else {
                allPhotos.forEach(img => {
                    if (img.dataset.initialHidden === 'true') {
                        img.setAttribute('hidden', '');
                    }
                });
                btn.textContent = 'Смотреть ещё фото';
            }
        });
    });

    const showMoreBtn = document.querySelector('.reviews__show-more');
    const reviewsList = document.querySelector('.reviews__list');

    if (showMoreBtn && reviewsList) {
        const hiddenReviews = reviewsList.querySelectorAll('.review[hidden]');
        let isExpanded = false;

        showMoreBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;

            if (isExpanded) {
                hiddenReviews.forEach(review => {
                    review.removeAttribute('hidden');
                });
                showMoreBtn.classList.add('is-active');
                showMoreBtn.querySelector('span').textContent = 'Скрыть';
            } else {
                hiddenReviews.forEach(review => {
                    review.setAttribute('hidden', '');
                });
                showMoreBtn.classList.remove('is-active');
                showMoreBtn.querySelector('span').textContent = 'Показать ещё';
            }
        });
    }
});