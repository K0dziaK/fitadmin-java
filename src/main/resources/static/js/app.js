// ===== FitAdmin - app.js =====

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar-toggle');
  const links = document.querySelector('.navbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Star rating
  initStarRatings();

  // Charts (if Chart.js loaded)
  if (typeof Chart !== 'undefined') {
    initCharts();
  }

  // Attendance checkboxes
  initAttendance();

  // Discount code
  initDiscountCode();

  // Animate on scroll
  initScrollAnimations();

  // Modal
  initModals();
});

// ===== STAR RATINGS =====
function initStarRatings() {
  document.querySelectorAll('.stars').forEach(container => {
    const stars = container.querySelectorAll('i');
    const input = container.closest('form')?.querySelector('input[name="rating"]');

    stars.forEach((star, idx) => {
      star.addEventListener('click', () => {
        stars.forEach((s, i) => s.classList.toggle('active', i <= idx));
        if (input) input.value = idx + 1;
      });
      star.addEventListener('mouseenter', () => {
        stars.forEach((s, i) => s.classList.toggle('active', i <= idx));
      });
    });

    container.addEventListener('mouseleave', () => {
      const val = input ? parseInt(input.value) || 0 : 0;
      stars.forEach((s, i) => s.classList.toggle('active', i < val));
    });
  });
}

// ===== CHARTS =====
function initCharts() {
  // Class popularity chart
  const popCtx = document.getElementById('popularityChart');
  if (popCtx) {
    new Chart(popCtx, {
      type: 'bar',
      data: {
        labels: popCtx.dataset.labels ? JSON.parse(popCtx.dataset.labels) : ['Yoga', 'CrossFit', 'Spinning', 'Pilates', 'Boxing', 'Zumba'],
        datasets: [{
          label: 'Liczba rezerwacji',
          data: popCtx.dataset.values ? JSON.parse(popCtx.dataset.values) : [45, 62, 38, 29, 51, 33],
          backgroundColor: 'rgba(163, 230, 53, 0.6)',
          borderColor: '#a3e635',
          borderWidth: 1,
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: '#9ca3af' } } },
        scales: {
          x: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } }
        }
      }
    });
  }

  // New clients chart
  const clientCtx = document.getElementById('clientsChart');
  if (clientCtx) {
    new Chart(clientCtx, {
      type: 'line',
      data: {
        labels: clientCtx.dataset.labels ? JSON.parse(clientCtx.dataset.labels) : ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze'],
        datasets: [{
          label: 'Nowi klienci',
          data: clientCtx.dataset.values ? JSON.parse(clientCtx.dataset.values) : [12, 19, 15, 25, 22, 30],
          borderColor: '#38bdf8',
          backgroundColor: 'rgba(56, 189, 248, 0.1)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#38bdf8',
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: '#9ca3af' } } },
        scales: {
          x: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } }
        }
      }
    });
  }
}

// ===== ATTENDANCE =====
function initAttendance() {
  document.querySelectorAll('.attendance-check').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('checked');
      const icon = btn.querySelector('i');
      if (icon) icon.style.display = btn.classList.contains('checked') ? 'block' : 'none';
      // The hidden input for form submission
      const input = btn.previousElementSibling;
      if (input && input.type === 'hidden') {
        input.value = btn.classList.contains('checked') ? 'true' : 'false';
      }
    });
  });
}

// ===== DISCOUNT CODE =====
function initDiscountCode() {
  const applyBtn = document.getElementById('applyDiscount');
  if (!applyBtn) return;

  applyBtn.addEventListener('click', () => {
    const code = document.getElementById('discountCode')?.value;
    const result = document.getElementById('discountResult');
    if (!code || !result) return;

    // This is placeholder logic - backend will handle actual validation
    result.textContent = 'Sprawdzanie kodu...';
    result.className = 'discount-result text-blue';

    // Simulate - in real app this would be an AJAX call to backend
    setTimeout(() => {
      result.textContent = 'Kod rabatowy zostanie zweryfikowany po przesłaniu formularza.';
      result.className = 'discount-result text-muted';
    }, 500);
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ===== MODALS =====
function initModals() {
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById(trigger.dataset.modal);
      if (modal) modal.classList.add('open');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-overlay')?.classList.remove('open');
    });
  });
}
