// Variable Declearation
const copyright = document.querySelector('.date');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const form = document.querySelector('.my-contact--form');
const alertMessage = document.querySelector('.alert');

// navtoggle
const linksContainer = document.querySelector('.nav');
const links = document.querySelector('.nav__list');
navToggle.addEventListener('click', ()=>{
const linksContainerHeight = linksContainer.getBoundingClientRect().height;
const linksHeight = links.getBoundingClientRect().height;
if(linksHeight > linksContainerHeight){
    linksContainer.style.height = `${linksHeight}px`;
} else {
    linksContainer.style.height = 0;
}
});

//scroll-links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        const navHeight = nav.getBoundingClientRect().height;
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop;
        window.scrollTo({
            left:0,
            top: position - navHeight
        });
        linksContainer.style.height = 0;
    });
});

form.addEventListener('submit', (e)=>{
e.preventDefault();
const input1 = document.querySelector('.input-list');
const input2 = document.querySelector('.input-list1');
const message = document.querySelector('.message');
let formValue1 = input1.value;
let formValue2 = input2.value;
let messageValue = message.value;

if(formValue1 === "" || formValue2 === "" || messageValue === ""){
    displayAlert('Text required', "danger");
} else {
    let data = [{
        "name": formValue1,
        "email": formValue2,
        "message": messageValue
    }];
    
    localStorage.setItem('myData', JSON.stringify(data));
    displayAlert('Submitted Successfully', "success");
}
    input1.value = "";
    input2.value = "";
    message.value = "";
});

// Display alert 

function displayAlert(text, action) {
    alertMessage.textContent = text;
    alertMessage.classList.add(`alert-${action}`);

    // Remove alert
    setTimeout(function () {
    alertMessage.textContent = "";
    alertMessage.classList.remove(`alert-${action}`);
    }, 1000);
}

// Copyright date
const currentYear = new Date().getFullYear();
copyright.textContent = currentYear;

// Scroll Animation
const scrollAnim = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    reset: true
});

// Landing page
scrollAnim.reveal(".intro", {})
scrollAnim.reveal(".section__title--intro", { delay: 500 });
scrollAnim.reveal(".paragraph", { delay: 500 });
scrollAnim.reveal(".intro__img", { delay: 500 });
scrollAnim.reveal(".btn", { delay: 500 });

// About section
scrollAnim.reveal('.about-me', {});
scrollAnim.reveal('.section__title--anim', { delay: 500 });
scrollAnim.reveal('.section__title--content', { delay: 500});

// Work section
scrollAnim.reveal(".my-work", {});
scrollAnim.reveal('.section__title--work--anim', { delay: 500 });
scrollAnim.reveal('.section__title--work--head--anim', { delay: 500 });
scrollAnim.reveal('.portfolio', { delay: 600 });

// Contact section
scrollAnim.reveal(".my-contact", {});
scrollAnim.reveal(". section__title--contact-anim", { delay: 500 });
scrollAnim.reveal(".my-contact--form", { delay: 500 });

// Footer section
scrollAnim.reveal(".footer", {});
scrollAnim.reveal(".social-list", { delay: 400 });
scrollAnim.reveal(".address", { delay: 400 });
scrollAnim.reveal(".social-list-copyright", { delay: 400 });


