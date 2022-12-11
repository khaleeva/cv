const navLinks = document.querySelectorAll('.nav-link')

    navLinks.forEach((elem)=>{
        if(elem.classList.contains('active-link')){
            elem.classList.remove('active-link')
        } else {
            elem.addEventListener('click',()=>{
                elem.classList.add('active-link')
            })
        }


    })





