const navOpenButton = document.getElementById('nav-open');
const navCloseButton = document.getElementById('nav-close');
const navContent = document.getElementById('navbarSupportedContent');
const navLink1 = document.getElementById('nav-link1');
const navLink2 = document.getElementById('nav-link2');
const navLink3 = document.getElementById('nav-link3');
const navLink4 = document.getElementById('nav-link4');
const navLink5 = document.getElementById('nav-link5');
const navLink6 = document.getElementById('nav-link6');

function clickNavLink() {
    navOpenButton.style.display = 'block';
    navCloseButton.style.display = 'none';
    navContent.style.display = 'none';
}

navLink1.onclick = clickNavLink;
navLink2.onclick = clickNavLink;
navLink3.onclick = clickNavLink;
navLink4.onclick = clickNavLink;
navLink5.onclick = clickNavLink;
navLink6.onclick = clickNavLink;

function clickNavbutton() {
    navOpenButton.style.display = 'none';
    navCloseButton.style.display = 'block';
    navContent.style.display = 'block';
}

navOpenButton.onclick = clickNavbutton;

function clickClosebutton() {
    navOpenButton.style.display = 'block';
    navCloseButton.style.display = 'none';
    navContent.style.display = 'none';
}

navCloseButton.onclick = clickClosebutton;
