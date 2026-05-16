(function () {
  var bar = document.getElementById('progress');
  if (bar) {
    function onScroll() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? (window.scrollY / h) * 100 : 0;
      bar.style.width = p + '%';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var btn = document.getElementById('forever-btn');
  var cta = document.getElementById('final-cta');
  var msg = document.getElementById('final-msg');
  if (btn && cta && msg) {
    btn.addEventListener('click', function () {
      cta.style.display = 'none';
      msg.classList.add('visible');
      msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
})();
