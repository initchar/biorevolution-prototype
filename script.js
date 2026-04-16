// BioRevolution Coalition - prototype interactions.
// Kept intentionally small; real animations (Odometer, GSAP DrawSVG,
// hero scroll-morph) arrive in phase 4.

(function () {
  const nav = document.getElementById('siteNav');
  const threshold = () => window.innerHeight * 0.8;

  function onScroll() {
    if (window.scrollY > threshold()) {
      nav.classList.add('is-solid');
    } else {
      nav.classList.remove('is-solid');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  // Only one case study open at a time (nicer for scanning on a long page).
  const cases = document.querySelectorAll('.case');
  cases.forEach(el => {
    el.addEventListener('toggle', () => {
      if (el.open) {
        cases.forEach(other => { if (other !== el) other.open = false; });
      }
    });
  });
})();
