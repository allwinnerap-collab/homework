document.addEventListener('DOMContentLoaded', () => {

    const allPhotosButtons = document.querySelectorAll('.review__all-photos');

    allPhotosButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const photos = btn.closest('.review__content').querySelectorAll('.review__photos img[hidden]');
            
            if (photos.length === 0) {
                btn.setAttribute('hidden', '');
                return;
            }

            Array.from(photos).slice(0, 3).forEach(photo => {
                photo.removeAttribute('hidden');
            });

            const stillHidden = btn.closest('.review__content').querySelectorAll('.review__photos img[hidden]');
            if (stillHidden.length === 0) {
                btn.setAttribute('hidden', '');
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
            } else {
                hiddenReviews.forEach(review => {
                    review.setAttribute('hidden', '');
                });
                showMoreBtn.classList.remove('is-active');
            }
        });
    }
});