document.addEventListener("DOMContentLoaded", function () {
    document.location.href = '#about'
});

const navLinks = document.querySelectorAll('.nav-link')

const result = [];
for (const node of navLinks.values()) {
    result.push(node)
}

function changeActiveClass(elem, className) {
    if (elem.classList.contains(className)) {
        elem.classList.remove(className);
    }
    let setClasses = !elem.classList.contains(className);
    setClass(elem, className, 'remove');
    if (setClasses) {
        elem.classList.add(className);
    } else {
        elem.classList.remove(className);
    }
}


window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    let sections = document.querySelectorAll('section')
    sections.forEach(el => {
            let top = el.offsetTop - 50;
            let bottom = el.offsetHeight + top;
            if (scrollTop > top && scrollTop < bottom) {
                let id = el.getAttribute('id');
                let currentLink = result.filter(i => i.hash.slice(1) === id)
                currentLink.map(i => {
                        if (i.classList.contains("active-link")) {
                            i.classList.remove("active-link");
                        }
                        let setClasses = !i.classList.contains('active-link');
                        setClass(navLinks, 'active-link', 'remove');
                        if (setClasses) {
                            i.classList.add("active-link");
                        } else {
                            i.classList.remove("active-link");
                        }
                    }
                )

            }
        }
    )
});


navLinks.forEach(link => link.addEventListener('click', function () {
    changeActiveClass(link, 'active-link')
}))


function setClass(elem, className, action) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].classList[action](className);
    }
}





