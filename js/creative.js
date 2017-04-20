(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

$(document).ready(function() {
$ = jQuery.noConflict();
var app = {};

app.ajax = null;

  var $toggleButton = $('.toggle-button');

  // Hamburger button
  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
  });

app.ui = {
  
    particle:false,
    particles:function(){

        if($('body').hasClass('white')){

            nb = 85;

        }else {
            nb = 95;
        }
        particlesJS('particles-js', {
            particles: {
                color_random: true,
                shape: 'circle', // "circle", "edge" or "triangle"
                opacity: {
                    opacity: 1,
                    anim: {
                        enable: true,
                        speed: 1.5,
                        opacity_min: 0,
                        sync: false
                    }
                },
                size: 3,
                size_random: true,
                nb: nb,
                line_linked: {
                    enable_auto: true,
                    distance: 150,
                    color: '#FFFFFF',
                    opacity: 1,
                    width: 0.75,
                    condensed_mode: {
                        enable: true,
                        rotateX: 700,
                        rotateY: 700
                    }
                },
                anim: {
                    enable: true,
                    speed: 0.75
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 450
                },
                detect_on: 'window', // "canvas" or "window"
                mode: 'grab', // "grab" of false
                line_linked: {
                    opacity: 0.5
                },
                events: {
                    onclick: {
                        enable: true,
                        mode: 'push', // "push" or "remove"
                        nb: 2
                    },
                    onresize: {
                        enable: true,
                        mode: 'bounce', // "out" or "bounce"
                        density_auto: false,
                        density_area: 1000 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                    }
                }
            }
        });
    }
};

app.ui.particles();
});


