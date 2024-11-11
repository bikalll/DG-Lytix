const allAtags = document.getElementsByTagName("a"); 
const allH2tags = document.getElementsByTagName("h2"); 
const allPtags = document.getElementsByTagName("p"); 
const wrapper= document.getElementById("site-wrapper");
const phonenavbar= document.getElementById("navbar-mobile")
const circles = document.querySelectorAll(".circle");
document.addEventListener("DOMContentLoaded", (event) => {
setTimeout(()=>{
 circles.forEach((e)=>{
e.style.display="block"
 })
  wrapper.style.display="block"
  spinloader.style.display="none"
},2000)
})
const coords = { x: 0, y: 0 };

const colors = [
  "#5F16EBff"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}


animateCircles();
 // Select all <a> elements

// Convert HTMLCollection to an array to use forEach
Array.from(allAtags).forEach((ee) => {
  // "hover" is not a valid event in JavaScript; use "mouseover" or "mouseenter"
  ee.addEventListener("mouseenter", (mainTarget) => {
    // Assuming "circles" is defined and is an array of elements
    circles.forEach((eeee) => {
      eeee.style.backgroundColor = "transparent";  // Set background color to transparent
      firstCircle.style.border="1px solid black"
    });
  });
  ee.addEventListener("mouseleave", (mainTarget) => {
    // Assuming "circles" is defined and is an array of elements
    circles.forEach((eeee) => {
      eeee.style.backgroundColor = "#5F16EBff";
firstCircle.style.border="none"
        // Set background color to transparent
    });
  });
});
Array.from(allH2tags).forEach((ee) => {
  // "hover" is not a valid event in JavaScript; use "mouseover" or "mouseenter"
  ee.addEventListener("mouseenter", (mainTarget) => {
    // Assuming "circles" is defined and is an array of elements
    circles.forEach((eeee) => {
      eeee.style.backgroundColor = "transparent";  // Set background color to transparent
      firstCircle.style.border="1px solid black"
    });
  });
  ee.addEventListener("mouseleave", (mainTarget) => {
    // Assuming "circles" is defined and is an array of elements
    circles.forEach((eeee) => {
      eeee.style.backgroundColor = "#5F16EBff";
firstCircle.style.border="none"
        // Set background color to transparent
    });
  });
});
Array.from(allPtags).forEach((ee) => {
  // "hover" is not a valid event in JavaScript; use "mouseover" or "mouseenter"
  ee.addEventListener("mouseenter", (mainTarget) => {
    // Assuming "circles" is defined and is an array of elements
    circles.forEach((eeee) => {
      eeee.style.backgroundColor = "transparent";  // Set background color to transparent
      firstCircle.style.border="1px solid black"
    });
  });
  ee.addEventListener("mouseleave", (mainTarget) => {
    // Assuming "circles" is defined and is an array of elements
    circles.forEach((eeee) => {
      eeee.style.backgroundColor = "#5F16EBff";
firstCircle.style.border="none"
        // Set background color to transparent
    });
  });
});
