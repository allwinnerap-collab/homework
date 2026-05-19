const newsShowMoreBtn = document.querySelector('.news__show-more');
const newsList = document.querySelector('.news__list');

if (newsShowMoreBtn && newsList) {
    const hiddenNews = newsList.querySelectorAll('.news__item[hidden]');
    let isNewsExpanded = false;

    newsShowMoreBtn.addEventListener('click', () => {
        isNewsExpanded = !isNewsExpanded;

        if (isNewsExpanded) {
            hiddenNews.forEach(item => item.removeAttribute('hidden'));
            newsShowMoreBtn.classList.add('is-active');
        } else {
            hiddenNews.forEach(item => item.setAttribute('hidden', ''));
            newsShowMoreBtn.classList.remove('is-active');
        }
    });
}