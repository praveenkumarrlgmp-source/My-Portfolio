// Navbar background while scrolling

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.style.background="rgba(11,11,29,.75)";
        header.style.backdropFilter="blur(20px)";

    }

    else{

        header.style.background="transparent";

    }

});
// Show Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

// Scroll to Top

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// Automatic Slider

setInterval(() => {

    changeSlide(1);

}, 4000);
// =========================
// ABOUT IMAGE SLIDER
// =========================

let slideIndex = 1;

showSlides(slideIndex);


// Next / Previous

function changeSlide(n) {

    showSlides(slideIndex += n);

}


// Select specific slide

function currentSlide(n) {

    showSlides(slideIndex = n);

}


// Display slides

function showSlides(n) {

    let slides = document.querySelectorAll(".slide");

    let dots = document.querySelectorAll(".dot");


    if (n > slides.length) {

        slideIndex = 1;

    }


    if (n < 1) {

        slideIndex = slides.length;

    }


    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[slideIndex - 1].classList.add("active");

    dots[slideIndex - 1].classList.add("active");

}