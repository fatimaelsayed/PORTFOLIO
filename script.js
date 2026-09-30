document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".fill");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const percent = fill.getAttribute("data-percent");
        fill.style.width = percent + "%";
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });
  fills.forEach(fill => observer.observe(fill));

  const animateElements = document.querySelectorAll(".about-grid, .level-container");
  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  animateElements.forEach(el => {
    el.classList.add("pre-fade");
    scrollObserver.observe(el);
  });
});
window.addEventListener('load', function() {
   document.getElementById('preloader').style.display = 'none';
});