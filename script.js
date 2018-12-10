// Navigation hidden or show.
function myFunction(display) {
  var display = display;

  if (display == 'show'){
    // Show navigation.
    var element = document.getElementById("navigation");
    element.classList.add("navShow");

    // Hidden toggle button
    var element = document.getElementById("toggle-btn");
    element.classList.add("toggle-btn-hidden");
  } else if (display == 'hidden'){
    // Remove class = navigation is hidden
    var element = document.getElementById("navigation");
    element.classList.remove("navShow");

    // Remove toggle button class = button is not hidden
    var element = document.getElementById("toggle-btn");
    element.classList.remove("toggle-btn-hidden");
  }
}
