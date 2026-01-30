gsap.to("#box1", {
    x: 1000,      // Starts 1000px to the right
//     opacity: 0,   // Starts invisible
    duration: 2,  // Takes 2 seconds
    delay: 1,     // Waits 1 second
    rotate: 360,
    backgroundColor : "pink",
    borderRadius: "50%",
//     scale :2
//     ease: "power2.out"  // Makes the movement smooth (starts fast, slows down at end)
});
gsap.from("#box2",{
      x:1000,
      // opacity:0,
      duration:2,
      delay :1
})

// This tells the box to start at x:1000 and move back to its original spot (CSS)