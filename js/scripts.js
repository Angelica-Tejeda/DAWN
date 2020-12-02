/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
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
});

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