const data = {
    peopleButton: document.querySelector('.js-people-btn'),
    filmsButton: document.querySelector('.js-films-btn'),
    starshipsButton: document.querySelector('.js-starships-btn'),
    planetsButton: document.querySelector('.js-planets-btn'),
    nav: document.querySelector('.nav'),
    navList: document.querySelector('.nav__list'),
    closeSectionButton: document.querySelector('.js-close-section'),
    loader: document.querySelector('.js-loader'),
    data: {},

    closeSectionActiveClass: 'close-section--active',
    sectionActiveClass: 'section--active',
    navActiveClass: 'nav--active',

    init: function() {
        this.filmsButtonEventListener();
        this.peopleButtonEventListener();
        this.starshipsButtonEventListener();
        this.planetsButtonEventListener();
        this.closeSectionEventListener();
    },

    filmsButtonEventListener: function() {
        this.filmsButton.addEventListener('click', this.loadFilms);
    },

    peopleButtonEventListener: function() {
        this.peopleButton.addEventListener('click', this.loadPeople);
    },

    starshipsButtonEventListener: function() {
        this.starshipsButton.addEventListener('click', this.loadStarships);
    },

    planetsButtonEventListener: function() {
        this.planetsButton.addEventListener('click', this.loadPlanets);
    },

    cleanContainerHtml: function() {
        const section = document.querySelector('.section');
        const sectionContent = document.querySelector('.section__content');
        sectionContent.innerHTML = '';
        section.classList.add(this.sectionActiveClass);
    },

    setTitle: function(title) {
        const titleEl = document.querySelector('.js-section-title');
        titleEl.textContent = title;
    },

    removeNavList: function() {
        // this.nav.classList.add('nav--animation');
        this.nav.classList.remove(this.navActiveClass);
        this.closeSectionButton.classList.add(this.closeSectionActiveClass);
    },

    closeSectionEventListener: function() {
        this.closeSectionButton.addEventListener('click', () => {
            const section = document.querySelector('.section');
            this.closeSectionButton.classList.remove(this.closeSectionActiveClass);
            section.classList.remove(this.sectionActiveClass);
            // data.setTitle('Do. Or do not. There is no try.');
            setTimeout(() => {
                this.nav.classList.add(this.navActiveClass);
                data.setTitle('Do. Or do not. There is no try.');
            }, 200);
        })
    },

    loadFilms: function() {
        data.removeNavList();
        data.cleanContainerHtml();
        data.setTitle('Films');
            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                url: 'https://swapi.dev/api/films/',
                dataType: 'json',
                beforeSend: function() {
                   $('.js-loader').show();
                },
                success: function(data) {
                   $('.js-loader').hide();
                    const items = data.results;
                    items.map((element) => {
                        const container = document.querySelector('.section__content');
                        const div = document.createElement('div');
                        div.setAttribute('class', 'item')
    
                        div.innerHTML = `
                            <span class="desc desc--uppercase">${element.title}</span>
                            <span class="desc desc--md">Director: ${element.director}</span>
                            <span class="desc desc--sm">Release date: ${element.release_date}</span>
                        `;
                        container.appendChild(div);
                    })
                    console.log('sucess');
                }
            });
    },

    loadPeople: function() {
        data.removeNavList();
        data.cleanContainerHtml();
        data.setTitle('People');
            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                url: 'https://swapi.dev/api/people/',
                dataType: 'json',
                beforeSend: function() {
                    $('.js-loader').show();
                 },
                success: function(data) {
                    $('.js-loader').hide();
                    const items = data.results;
                    items.map((element) => {
                        const container = document.querySelector('.section__content');
                        const div = document.createElement('div');
                        div.setAttribute('class', 'item')
    
                        div.innerHTML = `
                            <span class="desc desc--uppercase">${element.name}</span>
                            <span class="desc desc--md">Gender: ${element.gender}</span>
                            <span class="desc desc--sm">Birth year: ${element.birth_year}</span>
                        `;
                        container.appendChild(div);
                    })
                }
            });
    },

    loadStarships: function() {
        data.removeNavList();
        data.cleanContainerHtml();
        data.setTitle('Starships');
            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                url: 'https://swapi.dev/api/starships/',
                dataType: 'json',
                beforeSend: function() {
                    $('.js-loader').show();
                 },
                success: function(data) {
                    $('.js-loader').hide();
                    const items = data.results;
                    items.map((element) => {
                        const container = document.querySelector('.section__content');
                        const div = document.createElement('div');
                        div.setAttribute('class', 'item')
    
                        div.innerHTML = `
                            <span class="desc desc--uppercase">${element.name}</span>
                            <span class="desc desc--md">Model: ${element.model}</span>
                            <span class="desc desc--sm">Passengers: ${element.passengers}</span>
                            <span class="desc desc--xs">Manufacturer: ${element.manufacturer}</span>
                        `;
                        container.appendChild(div);
                    })
                }
            });
    },

    loadPlanets: function() {
        data.removeNavList();
        data.cleanContainerHtml();
        data.setTitle('Planets');
            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                url: 'https://swapi.dev/api/planets/',
                dataType: 'json',
                beforeSend: function() {
                    $('.js-loader').show();
                 },
                success: function(data) {
                    $('.js-loader').hide();
                    const items = data.results;
                    items.map((element) => {
                        const container = document.querySelector('.section__content');
                        const div = document.createElement('div');
                        div.setAttribute('class', 'item')
    
                        div.innerHTML = `
                            <span class="desc desc--uppercase">${element.name}</span>
                            <span class="desc desc--md">Climate: ${element.climate}</span>
                            <span class="desc desc--sm">Population: ${element.population}</span>
                            <span class="desc desc--xs">Terrain: ${element.terrain}</span>
                        `;
                        container.appendChild(div);
                    })
                }
            });
    }
}

export default data;