
    // ===== Mobile Menu Toggle =====
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });

    const navButtons = document.getElementById('navButtons');
    const menuButton = document.getElementById('menuButton');

    menuButton.addEventListener('click', () => {
      navButtons.classList.toggle('activer');
    });

    // ===== Utility Bills Indicator =====
    const indicator = document.querySelector('.indicator');

    function setActive(card) {
      document.querySelectorAll('.bill-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Move indicator
      indicator.style.top = card.offsetTop + 'px';
      indicator.style.height = card.offsetHeight + 'px';
    }

    // Set initial active state on page load
    window.onload = () => {
      const active = document.querySelector('.bill-card.active');
      indicator.style.top = active.offsetTop + 'px';
      indicator.style.height = active.offsetHeight + 'px';
    };
