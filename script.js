const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const setActiveNavigation = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.site-nav a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const isHome = (currentPage === '' || currentPage === 'index.html') && (href === 'index.html' || href === '#top');
    const isAbout = currentPage === 'about.html' && href === 'about.html';

    const isActive = isHome || isAbout;

    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const formatNumber = (value, decimals = 0) => {
  if (decimals > 0) {
    return Number(value).toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  return Number(value).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
};

const animateMetric = (element) => {
  const target = Number(element.dataset.target || 0);
  const suffix = element.dataset.suffix || '';
  const decimals = suffix === 'kWh' || suffix === 'kg' || suffix === 'km' ? 2 : 0;

  if (reducedMotionQuery.matches) {
    const formatted = suffix === 'km'
      ? formatNumber(target, 2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : formatNumber(target, decimals);

    element.textContent = `${formatted}${suffix}`;
    return;
  }

  const duration = 1200;
  const startTime = performance.now();

  const update = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;

    let formatted;

    if (suffix === 'km') {
      formatted = formatNumber(current, 2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (suffix === 'kWh' || suffix === 'kg') {
      formatted = formatNumber(current, 2);
    } else {
      formatted = formatNumber(current, 0);
    }

    element.textContent = `${formatted}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

const metricObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      animateMetric(entry.target);
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.35,
  }
);

setActiveNavigation();

document.querySelectorAll('.impact-metric').forEach((metric) => {
  if (reducedMotionQuery.matches) {
    animateMetric(metric);
    return;
  }

  metricObserver.observe(metric);
});
