
const navLinks = document.querySelectorAll('.nav-link')
const asideNavLinks = document.querySelectorAll('.arrow__menu-nav-link')
const sections = document.querySelectorAll('section')
const arrow = document.querySelector('.arrow__menu')
const asideMenu = document.querySelector('.arrow__menu-nav')
const contentHeight = document.documentElement.clientHeight


arrow.addEventListener('click', function () {
    arrow.classList.toggle('openMenu')
    asideMenu.classList.toggle('active-menu')
    asideMenu.style.height = contentHeight + 'px'
})

const result = [];

for (const node of navLinks.values()) {
    result.push(node)
}

for (const node of asideNavLinks.values()) {
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

function checkPositionScrollToAddActiveClass (scroll) {
    sections.forEach(el => {
            let id = el.getAttribute('id');
            let top = el.offsetTop - 100;
            let bottom = el.offsetHeight + top;
            let currentLink = result.filter(i => i.hash.slice(1) === id)
            if (scroll > top && scroll < bottom) {
                currentLink.map(i => changeActiveClass(navLinks, i, 'active-link'))
                currentLink.map(i => changeActiveClass(asideNavLinks, i, 'active-link'))
            }
        }
    )
}


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset
    if(!arrow.classList.contains('openMenu')) {
        arrow.style.visibility = 'hidden'
        setTimeout(() => {
            arrow.style.visibility = 'visible'
        }, 1000)
    }

    checkPositionScrollToAddActiveClass(scroll)
});

navLinks.forEach(link => link.addEventListener('click', function () {
    changeActiveClass(navLinks, link, 'active-link')
}))

asideNavLinks.forEach(link => link.addEventListener('click', function () {
    changeActiveClass(asideNavLinks, link, 'active-link')
}))

function setClass(elem, className, action) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].classList[action](className);
    }
}







