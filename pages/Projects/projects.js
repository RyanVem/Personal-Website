document.querySelectorAll('.slideshow').forEach(slideshow => {
  const slides = slideshow.querySelectorAll('.project-slide');
  const dots = slideshow.querySelectorAll('.dot');
  let currentSlide = 0;

  function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove('show');
    slides[currentSlide].classList.add('hide');
    dots[currentSlide].classList.remove('active');

    currentSlide = slideIndex;

    slides[currentSlide].classList.remove('hide');
    slides[currentSlide].classList.add('show');
    dots[currentSlide].classList.add('active');
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'));
      goToSlide(slideIndex);
    });
  });

  dots[currentSlide].classList.add('active');
});