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
                color: '#FFFFFF',
                color_random: false,
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
                size: 2,
                size_random: true,
                nb: nb,
                line_linked: {
                    enable_auto: true,
                    distance: 150,
                    color: '#000000',
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

