function insertHeader() {
  fetch('../../components/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);
}

let currentBurgerState = false;

function toggleBurgerMenu(){
  window.addEventListener('resize', () => {
    if (window.innerWidth > 975) {
      currentBurgerState = false;
      document.querySelector(".js-burger-menu").innerHTML = `
      <div class="burger-menu">
        <ul class="burger-links" >
          <li><a href="index.html">Projects</a></li>
          <li><a href="index.html">About</a></li>
          <li><a href="index.html">Blog</a></li>
          <li><a href="index.html">Contact</a></li>
        </ul>
      </div>`
    }
  });

  if (currentBurgerState === false){
    currentBurgerState = true;
    document.querySelector(".js-burger-menu").innerHTML = `
      <div class="burger-menu active">
          <ul class="burger-links" >
            <li><a href="index.html">Projects</a></li>
            <li><a href="index.html">About</a></li>
            <li><a href="index.html">Blog</a></li>
            <li><a href="index.html">Contact</a></li>
          </ul>
        </div>
    `
  } else{
    currentBurgerState = false;
    document.querySelector(".js-burger-menu").innerHTML = `
      <div class="burger-menu">
          <ul class="burger-links" >
            <li><a href="index.html">Projects</a></li>
            <li><a href="index.html">About</a></li>
            <li><a href="index.html">Blog</a></li>
            <li><a href="index.html">Contact</a></li>
          </ul>
        </div>
    `
  }
}

function loadPage() {
  insertHeader()
}

loadPage();

