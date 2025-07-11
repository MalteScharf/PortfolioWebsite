function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}


// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section');

const observerOptions = {
  threshold: 0.15, // Trigger when 10% of section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Optional: run once
    }
  });
}, observerOptions);

// Apply observer to each section
sections.forEach(section => {
  observer.observe(section);
});
