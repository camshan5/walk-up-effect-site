//
// user.js
// Use this to write your custom JS
//
// Get the position on the page of the SVG
let bodyLocation = document.body.getBoundingClientRect()
console.log(bodyLocation.y)

let svgLocation = document
  .getElementById("graph-20-circle")
  .getBoundingClientRect()

console.log(
  `svgLocation = top/ y: ${svgLocation.y}; bottom: ${svgLocation.bottom}`
)

// Scroll offset that triggers animation start.
// In this case it is the bottom of the SVG.
let offsetToTriggerAnimation = svgLocation.y + svgLocation.height
console.log(`offsetToTriggerAnimation: ${offsetToTriggerAnimation}`)

// Function to handle the scroll event.
// Add an event handler to the document for the "onscroll" event
function scrollAnimTriggerCheck(evt) {
  let viewBottom = window.scrollY + window.innerHeight
  console.log(
    `viewBottom: ${viewBottom}; scrollY: ${window.scrollY}; innerHeight: ${window.innerHeight}`
  )

  if (viewBottom > offsetToTriggerAnimation) {
    let circleSelector = document.getElementById("graph-20-circle")
    // Start the CSS animation by setting the animation-play-state to "running"
    circleSelector.style.animationPlayState = "running"
    console.log(
      `animationPlayState: ${circleSelector.style.animationPlayState}`
    )

    // Remove the event handler so it doesn't trigger again
    document.removeEventListener("scroll", scrollAnimTriggerCheck)
  }
}

// Add an event handler to the document for the "onscroll" event
document.addEventListener("scroll", scrollAnimTriggerCheck)
