/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
   var slideIndex = 1;
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

document.addEventListener('DOMContentLoaded', function () {

    if (document.getElementById('mapa')) {
      var map = L.map('mapa').setView([-2.118449462866232, -79.90047040963124], 17);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([-2.118449462866232, -79.90047040963124]).addTo(map)
        .bindPopup(' Probar')
        .openPopup();
    }

    let info = document.querySelector('#info');
    info.addEventListener('click',()=>{
        introJs().start();
    })

    cargarGaleria();
    
});

function cargarGaleria () {
    let galeria= document.getElementsByClassName('slideshow-container')[0];
    let puntos=document.getElementById('puntos');

    fetch('json/imagenes.json')
        .then((resultado) => {
            return resultado.text();
        })
        .then((str) => {
            let json = JSON.parse(str)
            let pos=1;
            for (let dato of json) {
                let divImagen=document.createElement('div');
                divImagen.setAttribute('class','mySlides fade');
                let imagen=document.createElement('img');
                imagen.src=dato.land;
                let caption=document.createElement('div');
                caption.setAttribute('class','text');
                caption.textContent=dato.text;

                divImagen.appendChild(imagen);
                divImagen.appendChild(caption);
                galeria.appendChild(divImagen);

                let span=document.createElement('span');
                span.setAttribute('class','dot');
                span.addEventListener('click',()=>{
                    currentSlide(pos++);
                });
                puntos.appendChild(span);
            }
            let btnPrev= document.createElement('a');
            btnPrev.setAttribute('class','prev');
            btnPrev.addEventListener('click',()=>{
                plusSlides(-1);
            });
            btnPrev.innerHTML='&#10094;';
            let btnNext=document.createElement('a');
            btnNext.setAttribute('class','next');
            btnNext.addEventListener('click',()=>{
                plusSlides(1);
            });
            btnNext.innerHTML='&#10095;';

            galeria.appendChild(btnPrev);
            galeria.appendChild(btnNext);
        })
        .then(()=>{
            showSlides(slideIndex);
        })


    
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeDot";
}




var boton = document.querySelector("#boton");

boton.addEventListener("click", function() {
    let clase = "row align-items-stretch mb-4 final";

    if(boton.textContent == "Escribir"){
        boton.value = "bloque-2";
        boton.textContent = "Siguiente";
        var bloque1 = document.querySelector("#bloque-1");
        bloque1.className = clase;
        boton.className = "btn btn-primary btn-xl text-uppercase primero";
    } else {
        if (boton.value == "bloque-2") {
            boton.value = "bloque-3";
            var bloque2 = document.querySelector("#bloque-2");
            bloque2.className = clase;
        } else if (boton.value == "bloque-3") {
            boton.value = "bloque-4";
            var bloque2 = document.querySelector("#bloque-3");
            bloque2.className = clase;
        } else if (boton.value == "bloque-4") {
            boton.value = "bloque-5";
            var bloque2 = document.querySelector("#bloque-4");
            bloque2.className = clase;
            boton.className = "btn btn-primary btn-xl text-uppercase segundo";
        } else if (boton.value == "bloque-5") {
            boton.value = "bloque-6";
            var bloque2 = document.querySelector("#bloque-5");
            bloque2.className = clase;
        } else if (boton.value == "bloque-6") {
            var enviar = document.querySelector("#submit");
            enviar.className = "btn btn-primary btn-xl text-uppercase final";
            boton.style.display = "none";
            var bloque2 = document.querySelector("#bloque-6");
            bloque2.className = clase;
        }
    }
});