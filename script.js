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

gsap.from("h1",{
      opacity:0,
      duration:1,
      y:30,
      delay:1,
      // stagger:0.3,
      //if we want the stagger to go with reverse then we will use the negative property like(stagger : -1;)
      // stagger:-1,
})

gsap.to("#box3",{
      x :1200,
      duration:2,
      delay:1,
      rotate:360,
      // repeat:-1,
      // yoyo:true,
      // opacity:0,
})


//the use of the timeline is like when we work with different element in from same section where contain same element that is required to move one after one and thats's where we need to calculate the duration time to show the animation  in the webSite that's why we need timeline so that we do not need to calculate each one by each one , that's the reason why we need to use the timeline;
var tl = gsap.timeline();

tl.from("box2",{
      stagger:-1,
})