function insertFooter() {
  fetch('/components/Footer/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);
}

// Loads the footer on the page
insertFooter()