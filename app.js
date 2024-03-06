
// secrol section active list
let sections = document.querySelectorAll('');
let navLinks = document.querySelectorAll('header nav a');

window.scroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navLinks');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('&cross;');
    navbar.classList.toggle('active');
};




