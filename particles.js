particlesJS("particles-js",
{
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#f0d9de"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#f0d9de"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": { //check if updated
        "src": "./images/flare-bubble.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.88927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 20,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.9,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "right",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


);
