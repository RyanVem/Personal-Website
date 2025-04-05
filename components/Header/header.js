function insertHeader() {
  fetch('/components/Header/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);
}

// Toggles the visibility of the burger menu
let currentBurgerState = false;
function toggleBurgerMenu(){
  const burgerMenu = document.querySelector(".burger-menu"); 

  if (currentBurgerState) {
    burgerMenu.classList.remove("active");
  } else {
    burgerMenu.classList.add("active");
  }

  currentBurgerState = !currentBurgerState;
}

// Removes the burger menu when the screen is > 975px
window.addEventListener("resize", () => {
  if (window.innerWidth > 975) {
    const burgerMenu = document.querySelector(".burger-menu");
    if (burgerMenu) burgerMenu.classList.remove("active");
    currentBurgerState = false;
  }
});

// Loads the header on the page
insertHeader()

