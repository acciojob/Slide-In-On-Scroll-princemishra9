const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {

  // loop over every image 
  // figure out where it needs to be shown
  // at least 50% of its height
  
  sliderImages.forEach(sliderImage => {
    //half way through images
     const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // half way in the images
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    
    const isNoScrolledPast = window.scrollY < imageBottom;
    
    if(isHalfShown && isNoScrolledPast) {
          sliderImage.classList.add('active');
       } else {
          sliderImage.classList.remove('active');
       }
  })
  
  
}

window.addEventListener('scroll', debounce(checkSlide));
