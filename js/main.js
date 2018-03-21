(() => {
  console.log('video stuff fired');

// add to the String prototype to cap the first letter
// review this first thing next week!
String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); };

//variables at the top
  const sigils = document.querySelectorAll('.sigilContainer'),
        lightbox = document.querySelector('.lightbox'),
        closeLightbox = document.querySelector('.close-lightbox'),
        vidPlayer = document.querySelector('video');

//methods / functions in the middle
function loadMovie() {
  //debugger;
  // 1. turn on the lightbox
  lightbox.classList.add('show-lightbox');

  // 2. grab the right video based on the class name -> the split yields the name
  var house = this.className.split(' ')[1].capIt();

  vidPlayer.play();
}

function closeLBox() {
  lightbox.classList.remove('show-lightbox');
  vidPlayer.pause();
  vidPlayer.currentTime = 0;
}

//events at the bottom
sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));
closeLightbox.addEventListener('click', closeLBox);
})();
