(function () {
  // Sticky-nav border once scrolled
  var nav = document.querySelector('.nav');
  var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var toggle = document.querySelector('.nav__toggle');
  var links = document.getElementById('nav-links');
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) { links.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // Theme tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"][data-theme]'));
  if (!tabs.length) return;

  function select(id, focus) {
    tabs.forEach(function (t) {
      var on = t.dataset.theme === id;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById('panel-' + t.dataset.theme).hidden = !on;
      if (on && focus) t.focus();
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(tab.dataset.theme); });
    tab.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      select(tabs[(i + d + tabs.length) % tabs.length].dataset.theme, true);
    });
  });

  // Theme chips in the experience section jump to and open that theme
  document.querySelectorAll('[data-theme-link]').forEach(function (a) {
    a.addEventListener('click', function () { select(a.dataset.themeLink); });
  });
})();
