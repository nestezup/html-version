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

// Toggle FAQ item open/close by index
function toggleFAQ(index) {
  var items = document.querySelectorAll('.faq-item');
  if (!items || !items.length) return;
  var item = items[index];
  if (!item) return;
  item.classList.toggle('open');
}

// Progressive enhancement: if URL has #curriculum, scroll after load
if (location.hash === '#curriculum') {
  window.addEventListener('load', function () {
    var el = document.getElementById('curriculum');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
}

// (정적 페이지용) DOM 변형 로직은 두지 않습니다.
