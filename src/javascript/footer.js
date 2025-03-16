function insertFooter() {
  fetch('../../components/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);
}

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

  if (currentBreakOutState) {
    burgerMenu.classList.remove("active");
  } else {
    burgerMenu.classList.add("active");
  }

  currentBreakOutState = !currentBreakOutState;
  
  insertBreakMenu(buttonId);
}

// Loads the footer on the page
insertFooter()