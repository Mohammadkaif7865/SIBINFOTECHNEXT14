window.addEventListener('scroll', function() {
  var stricky = document.querySelector('.stricky');
  if (stricky) {
      var strickyScrollPos = 100;
      if (window.scrollY > strickyScrollPos) {
          stricky.classList.add('stricky-fixed');
          // document.querySelector('.scroll-to-top').style.display = 'block';
      } else {
          stricky.classList.remove('stricky-fixed');
          // document.querySelector('.scroll-to-top').style.display = 'none';
      }
  }
});