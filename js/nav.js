// Active nav link highlighting
(function () {
  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname.replace(/\/$/, '') || '/index.html';
  links.forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '');
    if (current.endsWith(href) || (href === 'index.html' && (current === '' || current.endsWith('/')))) {
      link.classList.add('active');
    }
  });
})();
