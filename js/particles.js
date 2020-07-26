// const particlesJSON = {
//   particles: {
//     number: {
//       value: 40,
//       density: {
//         enable: true,
//         value_area: 500,
//       },
//     },
//     color: {
//       value: "#ff9800",
//     },
//     shape: {
//       type: "polygon",
//       stroke: {
//         width: 2,
//         color: "#ff9800",
//       },
//       polygon: {
//         nb_sides: 6,
//       },
//       image: {
//         src: "img/github.svg",
//         width: 100,
//         height: 100,
//       },
//     },
//     opacity: {
//       value: 0.5,
//       random: true,
//     },
//     size: {
//       value: 10,
//       random: true,
//     },
//     line_linked: {
//       enable: false,
//       distance: 200,
//       color: "#ff5722",
//       opacity: 0.3,
//       width: 2,
//     },
//     move: {
//       enable: true,
//       speed: 5,
//       direction: "bottom",
//       random: true,
//       straight: true,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: true,
//         mode: ["grab", "bubble"],
//       },
//       onclick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 0.7,
//         },
//       },
//       bubble: {
//         distance: 600,
//         size: 12,
//         duration: 1,
//         opacity: 0.8,
//         speed: 2,
//       },
//       repulse: {
//         distance: 400,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 20,
//       },
//       remove: {
//         particles_nb: 10,
//       },
//     },
//   },
//   retina_detect: true,
// };

// particlesJS("particles-js", particlesJSON);

/* ---- particles.js config ---- */

// particlesJS("particles-js", {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//     color: {
//       value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
//     },
//     shape: {
//       type: ["circle"],
//       stroke: {
//         width: 0,
//         color: "#fff",
//       },
//       polygon: {
//         nb_sides: 5,
//       },
//       image: {
//         width: 100,
//         height: 100,
//       },
//     },
//     opacity: {
//       value: 1,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 8,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 10,
//         size_min: 10,
//         sync: false,
//       },
//     },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#808080",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 5,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: true,
//         mode: "grab",
//       },
//       onclick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 140,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
//   retina_detect: true,
// });

particlesJS("particles-js", {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 2000,
      },
    },

    color: {
      value: ["#FFFFFF", "#FFFFFF"],
    },

    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "",
      },

      polygon: {
        nb_sides: 3,
      },
    },

    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 0.1,
        opacity_min: 0.1,
        sync: true,
      },
    },

    size: {
      value: 7,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        size_min: 0.5,
        sync: false,
      },
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#FFFFFF",
      opacity: 0.4,
      width: 2,
    },

    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "in",
      bounce: true,
      attract: {
        enable: true,
        rotateX: 1200,
        rotateY: 1200,
      },
    },
  },

  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
        opacity: 0.4,
      },

      onclick: {
        enable: true,
        mode: "remove",
      },

      resize: true,
    },

    modes: {
      grab: {
        distance: 300,
        line_linked: {
          opacity: 0.1,
        },
      },

      bubble: {
        distance: 100,
        size: 10,
        duration: 2,
        opacity: 0.4,
        speed: 1,
      },

      repulse: {
        distance: 100,
        duration: 0.4,
      },

      push: {
        particles_nb: 5,
      },

      remove: {
        particles_nb: 2,
      },
    },
  },

  retina_detect: true,
});
