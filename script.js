const navLinks = document.querySelectorAll('.nav-link')


for (let link of navLinks) {

    if(link.classList.contains("active-link")){
        link.classList.remove("active-link");
    }

    link.addEventListener('click', function() {
        let setClasses = !this.classList.contains('active-link');
        setClass(navLinks, 'active-link', 'remove');
        if (setClasses) {
            this.classList.add("active-link");
        } else{
            this.classList.remove("active-link");
        }
    })
}

function setClass(elem, className, fnName) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].classList[fnName](className);
    }
}





