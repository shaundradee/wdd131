// coding for the footer
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});

// coding for the hamburger menu and submenu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const herbsToggle = document.getElementById('herbs-toggle');
const herbsItem = herbsToggle.parentElement;

menuToggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

herbsToggle.addEventListener('click', (e) => {
e.preventDefault(); // Prevent link jump
herbsItem.classList.toggle('open');
});

// coding for the herbs to load into html files
const herbs = [
    {id: "common", name: "Basil", use: "Culinary and calming", descrip: "A sweet, fragrant herb commonly used in cooking and known to help reduce stress.", image: "images/basil.jpg", alt: "basil herb bunch", width: "400", height: "250"},
    {id: "common", name: "Dill", use: "Flavoring and digestion", descrip: "A feathery herb often used in pickling and cooking, also supports digestion.", image: "images/dill.jpg", alt: "dill herb bunch", width: "400", height: "250"},
    {id: "common", name: "Sage", use: "Cleansing and respiratory support", descrip: "An earthy herb used for cooking and traditionally for clearing the air and supporting respiratory health.", image: "images/sage.jpg", alt: "sage clippings", width: "400", height: "250"},
    {id: "common", name: "German Chamomile", use: "Soothing and calming", descrip: "Tiny daisy-like flowers used in tea to promote relaxation and gentle sleep support.", image: "images/chamomile.jpg", alt: "chamomile blossoms", width: "400", height: "250"},
    {id: "wild", name: "Dandelion", use: "Detox and digestion", descrip: "A sunny wildflower often used to support liver health and aid digestion.", image: "images/dandelion.jpg", alt: "dandelion plant", width: "400", height: "250"},
    {id: "wild", name: "White Clover", use: "Edible and soil healer", descrip: "A low-growing plant with edible flowers and a reputation for enriching soil naturally. The young flower heads can also be eaten or used in teas.", image: "images/clover.jpg", alt: "white clover blossom", width: "400", height: "250"},
    {id: "wild", name: "Chickweed", use: "Cooling and skin-soothing", descrip: "A tender, wild herb known for cooling the skin and easing irritation when used topically.", image: "images/chickweed.jpg", alt: "chickweed", width: "400", height: "250"},
    {id: "wild", name: "Yarrow", use: "First aid and circulation", descrip: "A hardy plant traditionally used for wound care and promoting healthy circulation.", image: "images/yarrow.jpg", alt: "yarrow blossoms", width: "400", height: "250"}
];

const workshops = [
    {eventname: "Herb Drying", when: "June 30th", location: "Abby's Shop", image: "images/drying.jpg", alt: "dried herb bunches", width: "400", height: "250"},
    {eventname: "Herb Potting", when: "July 18", location: "The Miller Greenhouse", image: "images/potting.jpg", alt: "greenhouse with hanging pots", width: "400", height: "250"},
]

// alphabetize array herbs
herbs.sort((a, b) => {
    return a.name.localeCompare(b.name);
});


document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.id;

    if (page === "home") {
        buildSpotlight();
    }

    if (page === "herbs") {
        populateAllHerbs();
    }

    if (page === "wild") {
        wildHerbs();
    }

    if (page === "common") {
        buildCommonHerbs();
    }

    if (page === "events") {
        eventCards();
    }

});
        
function pickRandomHerb() {
    const herb = herbs[Math.floor(Math.random() * herbs.length)];

    // Image slide
    const img = document.querySelector(".slide-image img");
    img.src = herb.image;
    img.alt = herb.alt;
    img.width = herb.width;
    img.height = herb.height;

    // Text slide
    document.querySelector(".slide-text .use").textContent = herb.use;
    document.querySelector(".slide-text .description").textContent = herb.descrip;

    document.querySelector(".name").textContent = herb.name;
}

// for index.html spotlight
function buildSpotlight() {
    pickRandomHerb();

    // DOM is fully loaded – select slides
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function cycleSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("show", "hide");
            if (index === currentSlide) {
                slide.classList.add("show");
            } else {
                slide.classList.add("hide");
            }
        });
        currentSlide = (currentSlide + 1) % slides.length;
    }

    // start animation loop
    setInterval(cycleSlides, 10000);
    cycleSlides(); // show the first slide immediately
}



function populateAllHerbs() {
    const allHerbs = document.getElementsByClassName("all-herbs")[0];
    herbCards(herbs, allHerbs);

}

function wildHerbs() {
    const wild = herbs.filter(herb => herb.id === "wild");
    const allWild = document.getElementsByClassName("all-wild")[0];
    herbCards(wild, allWild);
}

function buildCommonHerbs() {
    const common = herbs.filter(herb => herb.id === "common");
    const allCommon = document.getElementsByClassName("all-common")[0];
    herbCards(common, allCommon);
}

function herbCards(arrayName, constName) {
        arrayName.forEach(herb => {
        const herbDiv = document.createElement("div");

        const h2 = document.createElement("h2");
        h2.textContent = herb.name;

        const fig = document.createElement("figure");
        const img = document.createElement("img");
        img.src = herb.image;
        img.alt = herb.alt;
        img.width = herb.width;
        img.height = herb.height;
        img.loading = "lazy";
        const figcap = document.createElement("figcaption");
        figcap.textContent = herb.use;

        const spec = document.createElement("p");
        spec.textContent = herb.descrip;

        fig.appendChild(img);
        fig.appendChild(figcap);

        herbDiv.appendChild(h2);
        herbDiv.appendChild(fig);
        herbDiv.appendChild(spec);

        constName.appendChild(herbDiv);

        herbDiv.classList.add("herb-card");
    })
}

function eventCards() {
    workshops.forEach(workshop => {
        const eventDiv = document.createElement("div");

        const h2 = document.createElement("h2");
        h2.textContent = workshop.eventname;

        const fig = document.createElement("figure");
        const img = document.createElement("img");
        img.src = workshop.image;
        img.alt = workshop.alt;
        img.width = workshop.width;
        img.height = workshop.height;
        img.loading = "lazy";
        const figcap = document.createElement("figcaption");
        figcap.textContent = workshop.location;

        const when = document.createElement("p");
        when.textContent = workshop.when;

        fig.appendChild(img);
        fig.appendChild(figcap);

        eventDiv.appendChild(h2);
        eventDiv.appendChild(fig);
        eventDiv.appendChild(when);

        const allEvents = document.getElementsByClassName("all-events")[0];
        allEvents.appendChild(eventDiv);

        eventDiv.classList.add("herb-card");

    })
}





