// Smoothly scroll to a section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Toggle FAQ item open/close
function toggleFAQ(button) {
  const contentId = button.getAttribute('aria-controls');
  const content = document.getElementById(contentId);
  
  if (!content) return;
  
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  
  if (isOpen) {
    button.setAttribute('aria-expanded', 'false');
    content.style.display = 'none';
  } else {
    button.setAttribute('aria-expanded', 'true');
    content.style.display = 'block';
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scroll to all navbar links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      scrollToSection(sectionId);

      // If in mobile view, close the menu after clicking a link
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
      }
    });
  });

  // Add smooth scroll to all buttons with data-scroll-to attribute
  document.querySelectorAll('button[data-scroll-to]').forEach(button => {
    button.addEventListener('click', function () {
      const sectionId = this.getAttribute('data-scroll-to');
      scrollToSection(sectionId);
    });
  });

  // Initialize FAQ toggles
  const faqButtons = document.querySelectorAll('button[aria-controls]');
  faqButtons.forEach(button => {
    const content = document.getElementById(button.getAttribute('aria-controls'));
    if (content) {
      content.style.display = 'none'; // Initially hide all FAQ content
      button.setAttribute('aria-expanded', 'false');
    }
    button.addEventListener('click', () => toggleFAQ(button));
  });

  

  // Mobile menu button
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }
});