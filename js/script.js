/* Close the mobile menu after a link is tapped */
  document.querySelectorAll('#site-nav a').forEach(function(a){
    a.addEventListener('click', function(){ document.getElementById('nav-toggle').checked = false; });
  });
  /* Close an open graphic with the Esc key */
  document.addEventListener('keydown', function(e){
    if(e.key !== 'Escape') return;
    if(location.hash.indexOf('#gfx-') === 0){ location.hash = 'graphics'; }
    else if(location.hash === '#resume-view'){ location.hash = '!'; }
  });
