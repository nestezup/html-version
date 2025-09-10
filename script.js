// Smoothly scroll to the curriculum section
function scrollToCurriculum() {
  var el = document.getElementById('curriculum');
  if (!el) return;
  try {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (e) {
    // Fallback for very old browsers
    var top = 0;
    var node = el;
    while (node) { top += node.offsetTop || 0; node = node.offsetParent; }
    window.scrollTo(0, top);
  }
}

// Toggle FAQ item open/close
function toggleFAQ(button) {
  // Find the content div that corresponds to this button
  var contentId = button.getAttribute('aria-controls');
  var content = document.getElementById(contentId);
  
  if (!content) return;
  
  var isOpen = button.getAttribute('aria-expanded') === 'true';
  
  // Toggle the state
  if (isOpen) {
    // Close
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('data-state', 'closed');
    content.setAttribute('data-state', 'closed');
    content.style.display = 'none';
    content.setAttribute('hidden', '');
  } else {
    // Open
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('data-state', 'open');
    content.setAttribute('data-state', 'open');
    content.style.display = 'block';
    content.removeAttribute('hidden');
  }
}

// Progressive enhancement: if URL has #curriculum, scroll after load
if (location.hash === '#curriculum') {
  window.addEventListener('load', function () {
    var el = document.getElementById('curriculum');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
}

// Initialize FAQ toggles when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Add click event listeners to all FAQ buttons
  var faqButtons = document.querySelectorAll('[data-radix-collection-item]');
  
  faqButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      toggleFAQ(this);
    });
  });
});
