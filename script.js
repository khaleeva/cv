document.addEventListener("DOMContentLoaded", function () {
    document.location.href='#about'
});

const navLinks = document.querySelectorAll('.nav-link')

for (let link of navLinks) {


    link.addEventListener('click', function() {

        if(link.classList.contains("active-link")){
            link.classList.remove("active-link");
        }

        let setClasses = !this.classList.contains('active-link');
        setClass(navLinks, 'active-link', 'remove');
        if (setClasses) {
            this.classList.add("active-link");
        } else{
            this.classList.remove("active-link");
        }
    })
}

function setClass(elem, className, action) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].classList[action](className);
    }
}





