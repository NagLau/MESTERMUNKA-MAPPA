document.getElementById('registrationForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');
    if (password !== confirmPassword) {
        messageDiv.textContent = 'A jelszavak nem egyeznek!';
        messageDiv.style.color = 'red';
    } else {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        messageDiv.textContent = 'Sikeres regisztráció! Átirányítás a bejelentkezési oldalra...';
        messageDiv.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'bejelentkezes.html';
        }, 2000);
    }
});



document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const messageDiv = document.getElementById('message');
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    } else {
        messageDiv.textContent = 'Hibás felhasználónév vagy jelszó!';
        messageDiv.style.color = 'red';
    }
});



let currentIndex = 0;
const slides = document.querySelectorAll('.gallery img');
const totalSlides = slides.length;
function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateGalleryPosition();
}
function updateGalleryPosition() {
    const gallery = document.getElementById('gallery');
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
}
const translations = {
    hu: {
        mainTitle: "DriveUs - A szabadság, ami mindig úton van.",
        description: "Üdvözöljük a DriveUs autóbérlő weboldalán! Mi segítünk Önnek abban, hogy minden utazás egy felejthetetlen élmény legyen.",
        whyUs: "Miért válassza a DriveUs-t?",
        flexible: "Rugalmas bérlés: Rövid és hosszú távú autóbérlés egyaránt elérhető.",
        wideSelection: "Széles választék: A legújabb modellek és különféle típusok.",
        excellentCondition: "Kiváló állapotú autók: Minden járművet rendszeresen karbantartunk.",
        competitivePrices: "Kedvező árak: Versenyképes áron kínáljuk szolgáltatásainkat.",
        service: "Bármerre is indul, a DriveUs mindig melletted van.",
        tagline: "DriveUs - Kényelmes, megbízható autóbérlés, amit Önre szabtak!",
        languageSwitcher: "Switch to English",
        aboutLink: "RÓLUNK",
        carsLink: "AUTÓK",
        rentalsLink: "BÉRLÉSEIM",
        profileLink: "PROFILOM",
    },
    en: {
        mainTitle: "DriveUs - The freedom that's always on the road.",
        description: "Welcome to the DriveUs car rental website! We help you make every trip an unforgettable experience.",
        whyUs: "Why choose DriveUs?",
        flexible: "Flexible rental: Short and long-term rentals are available.",
        wideSelection: "Wide selection: The latest models and various types.",
        excellentCondition: "Excellent condition cars: Every vehicle is regularly maintained.",
        competitivePrices: "Competitive prices: We offer our services at competitive rates.",
        service: "Wherever you go, DriveUs is always by your side.",
        tagline: "DriveUs - Comfortable, reliable car rental tailored to you!",
        languageSwitcher: "Switch to Hungarian",
        aboutLink: "ABOUT US",
        carsLink: "CARS",
        rentalsLink: "RENTALS",
        profileLink: "PROFILE",
    },
};



let language = 'hu';
function switchLanguage() {
    language = language === 'hu' ? 'en' : 'hu';
    const texts = translations[language];
    document.getElementById('main-title').textContent = texts.mainTitle;
    document.getElementById('description').textContent = texts.description;
    document.getElementById('why-us').textContent = texts.whyUs;
    document.getElementById('flexible').textContent = texts.flexible;
    document.getElementById('wide-selection').textContent = texts.wideSelection;
    document.getElementById('excellent-condition').textContent = texts.excellentCondition;
    document.getElementById('competitive-prices').textContent = texts.competitivePrices;
    document.getElementById('service').textContent = texts.service;
    document.getElementById('tagline').textContent = texts.tagline;
    document.getElementById('nyelv').textContent = texts.languageSwitcher;
    document.getElementById('about-link').textContent = texts.aboutLink;
    document.getElementById('cars-link').textContent = texts.carsLink;
    document.getElementById('rentals-link').textContent = texts.rentalsLink;
    document.getElementById('profile-link').textContent = texts.profileLink;
};
