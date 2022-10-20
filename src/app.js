const app = {
    menuButton: document.querySelector('.hamburger'),
    nav: document.querySelector('.nav'),
    navButtons: document.querySelectorAll('.nav__btn'),

    init: function() {
        this.menuToggleEvent();
        this.closeNavOnClick();
    },

    menuToggleEvent: function() {
        this.menuButton.addEventListener('click', () => {
            this.menuButton.classList.toggle('is-active');
            this.nav.classList.toggle('nav--active');
        })
    },

    closeNavOnClick: function() {
        this.navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.nav.classList.remove('nav--active');
                this.menuButton.classList.remove('is-active');
            })
        })
    }
}

export default app;