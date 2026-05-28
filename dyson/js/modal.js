const modal = document.getElementById('reviewModal');
const openBtn = document.querySelector('.reviews__write-btn');
const form = document.getElementById('reviewForm');

const openModal = () => {
    modal.removeAttribute('hidden');
    document.body.classList.add('modal-open');
};

const closeModal = () => {
    modal.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
};

if (openBtn && modal) {
    openBtn.addEventListener('click', openModal);

    modal.querySelectorAll('[data-close]').forEach(el => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
            closeModal();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        console.log('Отзыв отправлен:', Object.fromEntries(data));
        alert('Спасибо за ваш отзыв! 💖');
        form.reset();
        closeModal();
    });
}
