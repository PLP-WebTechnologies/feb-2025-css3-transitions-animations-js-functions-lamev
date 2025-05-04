// Immediately apply saved mode on load
window.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
      document.body.classList.add('dark');
    }
  });
  
  // Toggle dark mode and persist
  const toggleBtn = document.getElementById('toggleModeBtn');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
  });
  
  // Animate the box element when button clicked
  const animateBtn = document.getElementById('animateBtn');
  animateBtn.addEventListener('click', () => {
    const box = document.getElementById('box');
    // add animation class
    box.classList.add('animate');
    // remove after transition ends to allow replay
    box.addEventListener('transitionend', function handler() {
      box.classList.remove('animate');
      box.removeEventListener('transitionend', handler);
    });
  });s