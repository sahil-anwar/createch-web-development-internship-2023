/* Small progressive enhancements; preserves existing sliders and navigation. */
(() => {
  'use strict';
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.rel = 'noopener noreferrer';
  });
  document.querySelectorAll('video').forEach(video => {
    video.preload = video.hasAttribute('autoplay') ? 'metadata' : 'none';
    video.playsInline = true;
  });
  const nav = document.getElementById('navbarNavDropdown');
  if (nav) {
    nav.addEventListener('hidden.bs.collapse', () => {
      const burger = document.getElementById('burger');
      if (burger) burger.checked = false;
    });
  }
})();
