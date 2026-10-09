(function () {
  var t = document.getElementById('mob-toggle');
  var d = document.getElementById('mob-drawer');
  var o = document.getElementById('mob-overlay');
  var c = document.getElementById('drawer-close');
  function openDrawer() {
    d.removeAttribute('hidden');
    o.classList.add('visible');
    t.setAttribute('aria-expanded', 'true');
    t.setAttribute('aria-label', 'Close navigation menu');
    document.documentElement.style.overflow = 'hidden';
  }
  function closeDrawer() {
    d.setAttribute('hidden', '');
    o.classList.remove('visible');
    t.setAttribute('aria-expanded', 'false');
    t.setAttribute('aria-label', 'Open navigation menu');
    document.documentElement.style.overflow = '';
  }
  if (t && d && o) {
    t.addEventListener('click', function () {
      if (t.getAttribute('aria-expanded') === 'true') { closeDrawer(); } else { openDrawer(); }
    });
    if (c) { c.addEventListener('click', closeDrawer); }
    o.addEventListener('click', closeDrawer);
    d.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeDrawer); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeDrawer(); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 768) { closeDrawer(); } });
  }
  document.querySelectorAll('.faq-q').forEach(function (b) {
    b.addEventListener('click', function () {
      var item = b.parentNode;
      var isOpen = item.classList.toggle('open');
      b.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
})();
