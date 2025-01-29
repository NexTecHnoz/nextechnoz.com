const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('menu');
    const toggleMenu = () => {
        mobileMenu.classlist.toggle('hidden');
        mobileMenu.classlist.toggle('grid');
    }
    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);