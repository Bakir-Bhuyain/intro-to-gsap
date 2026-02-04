var initialValue = "M 10 100 Q 500 100 990 100";
var finalValue = "M 10 100 Q 500 100 990 100";

var string = document.querySelector("#string");
string.addEventListener("mousemove", function (dets) {
  initialValue = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: initialValue },
    duration: 0.2,
    ease: "power3.out",
  });
});
string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalValue },
    duration: 1.4,
    ease: "elastic.out(1,0.1)",
  });
});

/* ---------------------Advance Way-------------------------- */




// var string = document.querySelector("#string");
// var path = document.querySelector("svg path"); // Bar bar selector khujle performance kharap hoy, tai ebarei niye nilam

// // Initial path
// var finalPath = "M 10 100 Q 500 100 990 100";

// string.addEventListener("mousemove", function (event) {
//   // getBoundingClientRect() diye string div-er position ber kora hoy
//   // Tate mouse er exact position div-er bhetore pawa jay
//   let rect = string.getBoundingClientRect();
//   let x = event.clientX - rect.left;
//   let y = event.clientY - rect.top;

//   let newPath = `M 10 100 Q ${x} ${y} 990 100`;

//   gsap.to(path, {
//     attr: { d: newPath },
//     duration: 0.3,
//     ease: "power3.out",
//   });
// });

// string.addEventListener("mouseleave", function () {
//   gsap.to(path, {
//     attr: { d: finalPath },
//     duration: 1.5,
//     ease: "elastic.out(1, 0.3)", // Elastic effect ta ekhane darun lage
//   });
// });