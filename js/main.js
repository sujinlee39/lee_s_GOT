(() => {
  console.log('video stuff fired');

// add to the String prototype to cap the first letter
// review this first thing next week!
String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); };

//variables at the top
  const sigils = document.querySelectorAll('.sigilContainer'),
        lightbox = document.querySelector('.lightbox'),
        closeLightbox = document.querySelector('.close-lightbox'),
        vidPlayer = document.querySelector('video'),
        playPause = document.querySelector('.play-pause'),
        ffWd = document.querySelector('.forward'),
        rWnd = document.querySelector('.rewind'),
        imageBanner = document.querySelector('#houseImages');

//methods / functions in the middle
function loadMovie() {
  //debugger;
  // 1. turn on the lightbox
  lightbox.classList.add('show-lightbox');

  // 2. grab the right video based on the class name -> the split yields the name
  var house = this.className.split(' ')[1].capIt();

  // 3. Put the path together and make the video load and vidPlayer
  vidPlayer.src = `video/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`;

  vidPlayer.load();
  vidPlayer.play();

  animateBanners(this.dataset.offset);
}

function animateBanners(offset) {
  console.log(600 * offset); // this should give us the value that we need!

// animate the banners across the source
// 600 is the width of each image -> the sum / product is how much it needs to move
  imageBanner.style.right = (offset * 600) + "px";
}

function closeLBox() {
  lightbox.classList.remove('show-lightbox');
  vidPlayer.pause();
  vidPlayer.currentTime = 0;
}

function togglePlay() {
  //flip this accoring to the video state => of playing, pause it. If it's pasued, play it. And change the icon's class to show the correct state (play / pause data-icon attribute)
  //debugger;
  var theSVG = this.firstElementChild;

  if (vidPlayer.paused) {
    vidPlayer.play();
    theSVG.dataset.icon = "pause-circle";
  } else {
    vidPlayer.pause();
    theSVG.dataset.icon = "play-circle";
  }
}

function ffWdVid() {
  debugger;
  //look at adjust playback rate => MDN using video
}

function rWindVid() {
  debugger;
  //look at adjust playback rate => MDN using video
}

//events at the bottom
sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));
closeLightbox.addEventListener('click', closeLBox);

vidPlayer.addEventListener('ended', closeLBox);
playPause.addEventListener('click', togglePlay, false);
ffWd.addEventListener('click', ffWdVid);
rWnd.addEventListener('click', rWindVid);
})();
