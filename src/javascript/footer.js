function insertFooter() {
  fetch('../../components/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);
}

/*
let data = '';
function insertBreakMenu(buttonId) {

  if (buttonId === 'project'){
    data = `<h1>Hello World1</h1>`
  } else if (buttonId === 'about') {
    data = `<h1>Hello World2</h1>`
  } else if (buttonId === 'blog') {
    data = `<h1>Hello World3</h1>`
  } else if (buttonId === 'contact') {
    data = `<h1>Hello World4</h1>`
  } else { 
    console.log("Failed, Incorrect buttonID!")
  }

  document.getElementById('breakout').innerHTML = data
}

// Toggles the visibility of the burger menu
let currentBreakOutState = false;
function toggleBreakOutMenu(buttonId){
  const burgerMenu = document.querySelector(".breakout-menu"); 
  const buttonRotate = document.getElementById(buttonId);
  const dropIcon = document.querySelectorAll(".drop-icon");  

  if (currentBreakOutState) {
    burgerMenu.classList.remove("active");
    dropIcon.forEach((icon) => {
      icon.classList.remove("rotate-img");
    });
  } else {
    burgerMenu.classList.add("active");
    buttonRotate.classList.add("rotate-img");
  }

  oldButtonId = buttonId;

  currentBreakOutState = !currentBreakOutState;
  
  insertBreakMenu(buttonId);
}

// Removes the burger menu when the screen is > 975px

window.addEventListener("resize", () => {
  const footerRight = document.querySelector(".footer-right");
  const footerLink = document.querySelector(".footer-icon-link");
  const socialIcon = document.querySelector(".social-icon");
  const socialRow = document.querySelectorAll(".social-row");

  if (window.innerWidth > 700) {
    if (footerRight) {
      footerRight.classList.add("large");
    }
    
    if (footerLink) {
      footerLink.classList.remove("small");
    }

    if (socialIcon) {
      socialIcon.classList.remove("small");
    }

    if(socialRow){
      socialRow.forEach((row) => {
          row.classList.remove("small");
      });
    }

  } else {
    footerRight.classList.remove("large");
    footerLink.classList.add("small");
    socialIcon.classList.add("small");
    socialRow.forEach((row) => {
      row.classList.add("small");
    });
  }

});
*/

// Loads the footer on the page
insertFooter()