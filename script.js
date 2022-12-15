
const navLinks = document.querySelectorAll('.nav-link')
const burgerNavLinks = document.querySelectorAll('.burger__menu-nav-link')
const sections = document.querySelectorAll('section')
const burger = document.querySelector('.burger__menu')
const burgerMenu = document.querySelector('.burger__menu-nav')
const contentHeight = document.documentElement.clientHeight

burger.addEventListener('click', function () {
    burger.classList.toggle('openMenu')
    burgerMenu.classList.toggle('active-menu')
    burgerMenu.style.height = contentHeight + 'px'
})

const result = [];

for (const node of navLinks.values()) {
    result.push(node)
}

for (const node of burgerNavLinks.values()) {
    result.push(node)
}


function changeActiveClass(classes, elem, className) {
    if (elem.classList.contains(className)) {
        elem.classList.remove(className);
    }
    let setClasses = !elem.classList.contains(className);
    setClass(classes, className, 'remove');
    if (setClasses) {
        elem.classList.add(className);
    } else {
        elem.classList.remove(className);
    }
}

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset
    sections.forEach(el => {
            let id = el.getAttribute('id');
            let top = el.offsetTop - 100;
            let bottom = el.offsetHeight + top;
            let currentLink = result.filter(i => i.hash.slice(1) === id)
            if (scroll > top && scroll < bottom) {
                currentLink.map(i => changeActiveClass(navLinks, i, 'active-link'))
                currentLink.map(i => changeActiveClass(burgerNavLinks, i, 'active-link'))
            }
        }
    )
});

navLinks.forEach(link => link.addEventListener('click', function () {
    changeActiveClass(navLinks, link, 'active-link')
}))

burgerNavLinks.forEach(link => link.addEventListener('click', function () {
    changeActiveClass(burgerNavLinks, link, 'active-link')
}))

function setClass(elem, className, action) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].classList[action](className);
    }
}







