document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.header__burger-menu');
    const menu = document.querySelector('.header__menu');
    const body = document.body;

    if (!burgerBtn || !menu) return;

    const overlay = document.createElement('div');
    overlay.classList.add('header__overlay');
    document.body.appendChild(overlay);

    const openMenu = () => {
        menu.classList.add('header__menu--open');
        overlay.classList.add('header__overlay--active');
        body.classList.add('no-scroll');
        burgerBtn.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
        menu.classList.remove('header__menu--open');
        overlay.classList.remove('header__overlay--active');
        body.classList.remove('no-scroll');
        burgerBtn.setAttribute('aria-expanded', 'false');
    };

    const toggleMenu = () => {
        if (menu.classList.contains('header__menu--open')) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    burgerBtn.addEventListener('click', toggleMenu);

    overlay.addEventListener('click', closeMenu);

    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('header__menu--open')) {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1350 && menu.classList.contains('header__menu--open')) {
            closeMenu();
        }
    });
});