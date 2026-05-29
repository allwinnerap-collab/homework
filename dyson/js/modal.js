document.addEventListener('DOMContentLoaded', () => {

    const reviewModal = document.getElementById('reviewModal');
    const writeReviewBtn = document.querySelector('.reviews__write-btn');
    const reviewForm = document.getElementById('reviewForm');

    if (!writeReviewBtn || !reviewModal) return;

    writeReviewBtn.addEventListener('click', () => {
        reviewModal.removeAttribute('hidden');
        document.body.classList.add('modal-open');
    });

    reviewModal.querySelectorAll('[data-close]').forEach(el => {
        el.addEventListener('click', () => {
            reviewModal.setAttribute('hidden', '');
            document.body.classList.remove('modal-open');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !reviewModal.hasAttribute('hidden')) {
            reviewModal.setAttribute('hidden', '');
            document.body.classList.remove('modal-open');
        }
    });

    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(reviewForm);
            console.log('Отзыв отправлен:', Object.fromEntries(data));
            alert('Спасибо за ваш отзыв! 💖');
            reviewForm.reset();
            reviewModal.setAttribute('hidden', '');
            document.body.classList.remove('modal-open');
        });
    }
});