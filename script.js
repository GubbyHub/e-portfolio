document.querySelectorAll('.btn').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var dest = btn.getAttribute('href');
    if (dest.startsWith('#')) {
      var target = document.querySelector(dest);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = dest;
    }
  });
});
