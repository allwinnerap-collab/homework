document.addEventListener('DOMContentLoaded', () => {
    const detailsList = document.querySelectorAll('.faq__details');

    detailsList.forEach(details => {
        const summary = details.querySelector('summary');

        summary.addEventListener('click', (e) => {
            e.preventDefault();

            if (details.hasAttribute('open')) {
                details.removeAttribute('open');
            } else {
                detailsList.forEach(other => {
                    if (other !== details) {
                        other.removeAttribute('open');
                    }
                });
                details.setAttribute('open', '');
            }
        });
    });
});